import PersonHero from '@/components/page-components/person/hero'
import ActedMovies from '@/components/page-components/person/acted/actedMovies'
import ActedSeries from '@/components/page-components/person/acted/actedSeries'


const PersonContainer: React.FC<{ personId: string }> = ({ personId }) => {
  return (
    <>
      <PersonHero personId={personId} />
      <ActedMovies personId={personId} />
      <ActedSeries personId={personId} />
    </>
  )
}

export default PersonContainer