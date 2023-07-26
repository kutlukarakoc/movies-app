import AllMoviesSeriesContainer from "@/components/page-components/all-movies-series"

const Movies: React.FC = () => {
  return (
    <AllMoviesSeriesContainer title='serie' reqUrl='/tv/popular' />
  )
}

export default Movies