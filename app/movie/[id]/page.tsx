import Hero from '@/components/page-components/movie/hero'
import Trailers from '@/components/page-components/movie/trailers'
import Cast from '@/components/page-components/movie/cast'
import Reviews from '@/components/page-components/movie/reviews'

const Movie = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <Hero movieId={params.id} />
      <Trailers movieId={params.id} />
      <Cast movieId={params.id} />
      <Reviews movieId={params.id} />
    </>
  )
}

export default Movie;