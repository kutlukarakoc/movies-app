import MovieContainer from '@/components/page-components/movie'

const Movie = ({ params }: { params: { id: string } }) => {
  return (
    <MovieContainer movieId={params.id} />
  )
}

export default Movie