import Hero from '@/components/page-components/movie/hero'
import Trailers from '@/components/page-components/movie/trailers'
import Cast from '@/components/page-components/movie/cast'
import React from 'react'

const Movie = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <Hero movieId={params.id} />
      <Trailers movieId={params.id} />
      <Cast movieId={params.id} />
    </>
  )
}

export default Movie;