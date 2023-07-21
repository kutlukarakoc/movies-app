import Hero from '@/components/page-components/serie/hero'
import Seasons from '@/components/page-components/serie/seasons'
import Cast from '@/components/detail-components/cast'
import Similars from '@/components/detail-components/similar'
import Reviews from '@/components/detail-components/reviews'

const Serie = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <Hero serieId={params.id} />
      <Seasons serieId={params.id} />
      <Cast id={params.id} reqUrl={`/tv/${params.id}/aggregate_credits`} />
      <Reviews id={params.id} reqUrl={`/tv/${params.id}/reviews`} />
      <Similars title='Series' id={params.id} reqUrl={`/tv/${params.id}/similar`} />
    </>
  )
}

export default Serie