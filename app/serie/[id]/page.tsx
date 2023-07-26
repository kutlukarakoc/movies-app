import SerieContainer from '@/components/page-components/serie'

const Serie = ({ params }: { params: { id: string } }) => {
  return (
    <SerieContainer serieId={params.id} />
  )
}

export default Serie