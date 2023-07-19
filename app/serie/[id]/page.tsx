import Hero from '@/components/page-components/serie/hero'

const Serie = ({ params }: { params: { id: string } }) => {

  return (
    <>
    <Hero serieId={params.id} />
      {/* 
      <Trailers movieId={params.id} />
      <Cast movieId={params.id} />
      <Reviews movieId={params.id} />
      <Similars movieId={params.id} /> */}
    </>
  )
}

export default Serie