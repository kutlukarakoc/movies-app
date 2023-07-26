import AllMoviesSeriesContainer from "@/components/page-components/all-movies-series"

const Movies: React.FC = () => {
  return (
    <AllMoviesSeriesContainer title='movie' reqUrl='/movie/top_rated' />
  )
}

export default Movies