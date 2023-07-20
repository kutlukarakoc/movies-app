import Hero from '@/components/page-components/serie/hero'
import Seasons from '@/components/page-components/serie/seasons'
import Cast from '@/components/detail-cast'

const Serie = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <Hero serieId={params.id} />
      <Seasons serieId={params.id} />
      <Cast id={params.id} reqUrl={`/tv/${params.id}/aggregate_credits`} />
    </>
  )
}

export default Serie