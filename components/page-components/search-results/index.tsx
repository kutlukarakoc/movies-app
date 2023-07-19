'use client'

import GridCards from '@/components/grid-cards'
import Card from '@/components/movie-serie-card'
import ResultsLoading from './loading'
import Pagination from '@/components/pagination'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { useSearchParams } from 'next/navigation'
import { getPage } from '@/public/utils/page'
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

  const page = getPage()
  const searchQuery = searchParams.get('search')

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
      <GridCards>
        {data?.results.map((movie: Movie) => (
          <Card
            key={movie.id}
            url={`/movie/${movie.id}`}
            imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            averageVote={movie.vote_average}
          />
        ))}
      </GridCards>
      <Pagination page={page} totalPages={data?.total_pages} />
    </section>
  )
}

export default SearchResults