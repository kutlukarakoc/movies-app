import AllMoviesSeries from '@/components/all-movies-series'

const Movies: React.FC = () => {
  return (
    <AllMoviesSeries title='movie' reqUrl='/movie/top_rated' />
  )
}

export default Movies