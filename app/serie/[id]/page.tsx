import Hero from '@/components/page-components/serie/hero'
import Seasons from '@/components/page-components/serie/seasons'

const Serie = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <Hero serieId={params.id} />
      <Seasons serieId={params.id} />
    </>
  )
}

export default Serie