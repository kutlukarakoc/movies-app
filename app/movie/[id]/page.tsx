import Hero from '@/components/page-components/movie/hero'
import Trailers from '@/components/page-components/movie/trailers'
import Cast from '@/components/detail-cast'
import Reviews from '@/components/page-components/movie/reviews'
import Similars from '@/components/page-components/movie/similar'

const Movie = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <Hero movieId={params.id} />
      <Trailers movieId={params.id} />
      <Cast id={params.id} reqUrl={`/movie/${params.id}/credits`} />
      <Reviews movieId={params.id} />
      <Similars movieId={params.id} />
    </>
  )
}

export default Movie;