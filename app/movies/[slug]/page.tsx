import MoviesWithSlug from '@/components/page-components/movies/slugs'

const PopularPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <MoviesWithSlug slug={params.slug} />
  )
}

export default PopularPage