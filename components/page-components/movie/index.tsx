import Hero from '@/components/page-components/movie/hero'
import Trailers from '@/components/page-components/movie/trailers'
import Cast from '@/components/detail-components/cast'
import Reviews from '@/components/detail-components/reviews'
import Similars from '@/components/detail-components/similar'

const MovieContainer: React.FC<{ movieId: string }> = ({ movieId }) => {

  return (
    <>
      <Hero movieId={movieId} />
      <Trailers movieId={movieId} />
      <Cast id={movieId} reqUrl={`/movie/${movieId}/credits`} />
      <Reviews id={movieId} reqUrl={`/movie/${movieId}/reviews`} />
      <Similars title='Movies' id={movieId} reqUrl={`/movie/${movieId}/similar`} />
    </>
  )
}

export default MovieContainer