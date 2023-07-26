'use client'

import GridCards from '@/components/grid-cards'
import GridCardsLoading from '@/components/grid-cards/loading'
import Card from '@/components/movie-serie-card'
import Pagination from '@/components/pagination'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { Movie } from '@/types/movie'
import { AxiosResponse } from 'axios'
import { getPage } from '@/public/utils/page'

interface MovieData {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const MoviesWithSlugContainer: React.FC<{ slug: string }> = ({ slug }) => {

  const page: string = getPage()

  const { isLoading, error, data } = useQuery({
    queryKey: [`all${slug}Movies_page${page}`],
    queryFn: async () => {
      const { data }: AxiosResponse<MovieData> = await axiosGet(`/movie/${slug}`, page)
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
        <h1 className='capitalize text-xl md:text-2xl mb-10 text-center md:text-left'>{slug} Movies</h1>
        <h5 className='text-sm md:text-md text-center md:text-start mb-2'>Showing
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

  return (
    <section className='section-container mt-14'>
      <h2 className='text-center text-2xl'>Something went wrong. Please try again later.</h2>
    </section>
  )
}

export default MoviesWithSlugContainer