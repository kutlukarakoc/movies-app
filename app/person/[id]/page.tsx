import PersonContainer from "@/components/page-components/person"

const Person = ({ params }: { params: { id: string } }) => {
  return (
    <PersonContainer personId={params.id} />
  )
}

export default Person