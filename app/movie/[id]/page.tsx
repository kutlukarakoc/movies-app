import Hero from '@/components/page-components/movie/hero'
import Trailers from '@/components/page-components/movie/trailers'
import Cast from '@/components/detail-components/cast'
import Reviews from '@/components/detail-components/reviews'
import Similars from '@/components/detail-components/similar'

const Movie = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <Hero movieId={params.id} />
      <Trailers movieId={params.id} />
      <Cast id={params.id} reqUrl={`/movie/${params.id}/credits`} />
      <Reviews id={params.id} reqUrl={`/movie/${params.id}/reviews`} />
      <Similars title='Movies' id={params.id} reqUrl={`/movie/${params.id}/similar`} />
    </>
  )
}

export default Movie;