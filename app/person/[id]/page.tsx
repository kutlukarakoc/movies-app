import PersonHero from '@/components/page-components/person/hero'

const Person = ({ params }: { params: { id: string } }) => {
  return (
    <PersonHero personId={params.id} />
  )
}

export default Person