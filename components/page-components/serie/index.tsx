import Hero from '@/components/page-components/serie/hero'
import Seasons from '@/components/page-components/serie/seasons'
import Cast from '@/components/detail-components/cast'
import Similars from '@/components/detail-components/similar'
import Reviews from '@/components/detail-components/reviews'

const SerieContainer: React.FC<{ serieId: string }> = ({ serieId }) => {
  return (
    <>
      <Hero serieId={serieId} />
      <Seasons serieId={serieId} />
      <Cast id={serieId} reqUrl={`/tv/${serieId}/aggregate_credits`} />
      <Reviews id={serieId} reqUrl={`/tv/${serieId}/reviews`} />
      <Similars title='Series' id={serieId} reqUrl={`/tv/${serieId}/similar`} />
    </>
  )
}

export default SerieContainer