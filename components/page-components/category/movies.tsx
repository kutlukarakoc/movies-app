'use client'

import Pagination from '@/components/pagination'
import GridCards from '@/components/grid-cards'
import GridCardsLoading from '@/components/grid-cards/loading'
import Card from '@/components/movie-serie-card'
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

const MoviesRelatedGenre: React.FC<{ genreId: string }> = ({ genreId }) => {

  const page: string = getPage()

  const { isLoading, error, data } = useQuery({
    queryKey: [`all_${genreId}_movies_page_${page}`],
    queryFn: async () => {
      const { data }: AxiosResponse<MovieData> = await axiosGet(`/discover/movie?with_genres=${genreId}`, page)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <GridCardsLoading />
  }

  if (!error && data && data.results.length) {
    return (
      <>
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
      </>
    )
  }

  return (
    <section className='section-container mt-14'>
      <h2 className='text-center text-2xl'>There are no movies in this category.</h2>
    </section>
  )
}

export default MoviesRelatedGenre