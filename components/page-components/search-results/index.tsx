'use client'

import GridCards from '@/components/grid-cards'
import GridCardsLoading from '@/components/grid-cards/loading'
import Card from '@/components/movie-serie-card'
import Pagination from '@/components/pagination'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { useSearchParams } from 'next/navigation'
import { getPage } from '@/public/utils/page'
import { Movie } from '@/types/movie'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { AxiosResponse } from 'axios'

interface MovieData {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const SearchResultsContainer: React.FC = () => {

  const searchParams: ReadonlyURLSearchParams = useSearchParams()

  const page: string = getPage()
  const searchQuery: string | null = searchParams.get('search')

  let searchType: string | null = searchParams.get('type')

  const { isLoading, error, data } = useQuery({
    queryKey: [`search_${searchType}_${searchQuery}`],
    queryFn: async () => {
      // /search/tv
      const { data }: AxiosResponse<MovieData> = await axiosGet(`/search/${searchType === 'serie' ? 'tv' : searchType}?query=${searchQuery}`, page)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <GridCardsLoading />
  }

  if (!error && data && data.results.length) {
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
              url={`/${searchType}/${movie.id}`}
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

  return (
    <section className='section-container mt-14'>
      <h2 className='text-center text-2xl'>No results found of '{searchQuery}'</h2>
    </section>
  )
}

export default SearchResultsContainer