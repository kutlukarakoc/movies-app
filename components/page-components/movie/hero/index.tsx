'use client'

import Genres from '@/components/detail-genres'
import Hero from '@/components/detail-hero'
import HeroLoading from '@/components/detail-hero/loading'
import { SearchMovieById } from '@/types/searchMovieById'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { AxiosResponse } from 'axios'

const MovieHero: React.FC<{ movieId: string }> = ({ movieId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`movie_${movieId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<SearchMovieById> = await axiosGet(`/movie/${movieId}`)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <HeroLoading />
  }

  if (!error && data) {
    return (
      <Hero
        backdropPath={data.backdrop_path}
        title={data.title}
        overview={data.overview}
        status={data.status}
        date={data.release_date}
      >
        <Genres genres={data.genres} />
      </Hero>
    )
  }

  return null
}

export default MovieHero