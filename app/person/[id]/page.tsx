import PersonHero from '@/components/page-components/person/hero'
import ActedMovies from '@/components/page-components/person/acted/actedMovies'
import ActedSeries from '@/components/page-components/person/acted/actedSeries'

const Person = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <PersonHero personId={params.id} />
      <ActedMovies personId={params.id} />
      <ActedSeries personId={params.id} />
    </>
  )
}

export default Person