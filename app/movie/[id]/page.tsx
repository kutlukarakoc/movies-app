'use client'

import Hero from '@/components/page-components/movie/hero'
import Trailers from '@/components/page-components/movie/trailers'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { SearchMovieById } from '@/types/searchMovieById'
import { AxiosResponse } from 'axios'
import React from 'react'

const Movie = ({ params }: { params: { id: string } }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`movie_${params.id}`],
    queryFn: async () => {
      const { data }: AxiosResponse<SearchMovieById> = await axiosGet(`/movie/${params.id}`)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (!error && data) {
    return (
      <>
        <Hero data={data} loading={isLoading} error={error as Error} />
        <Trailers movieId={params.id} />
      </>
    )
  }
}

export default Movie;