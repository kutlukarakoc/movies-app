import CategoryContainer from '@/components/page-components/category'

const Category = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <CategoryContainer genreId={params.id} />
    </>
  )
}

export default Category