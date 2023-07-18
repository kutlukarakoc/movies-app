'use client'

import Card from '@/components/movie-serie-card'
import ResultsLoading from './loading'
import Pagination from './pagination'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { useSearchParams } from 'next/navigation'
import { Movie } from '@/types/movie'
import { AxiosResponse } from 'axios'

type MovieData = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const SearchResults: React.FC = () => {

  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')

  let page = searchParams.get('page') || '1'
  page = +page < 1 ? '1' : page

  const { isLoading, error, data } = useQuery({
    queryKey: [`search_${searchQuery}`],
    queryFn: async () => {
      const { data }: AxiosResponse<MovieData> = await axiosGet(`/search/movie?query=${searchQuery}`, page)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <ResultsLoading />
  }

  return (
    <section className='section-container mt-14'>
      <h1 className='capitalize text-xl md:text-2xl mb-10 text-center md:text-left'>Showing Results of '{searchQuery}'</h1>
      <h5 className='text-sm md:text-md text-center md:text-left mb-2'>Showing
        <span className='ml-1'>
          {+page === 1 ? page : page + 1} - {+page * 20}
          <span className='text-xs mx-1'>of</span>
          {data?.total_results}
        </span>
      </h5>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center md:place-items-stretch gap-y-14 gap-x-10'>
        {data?.results.map((movie: Movie) => (
          <Card
            key={movie.id}
            url={`/movie/${movie.id}`}
            imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            averageVote={movie.vote_average}
          />
        ))}
      </div>
      <Pagination page={page} totalPages={data?.total_pages} />
    </section>
  )
}

export default SearchResults