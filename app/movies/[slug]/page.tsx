import MoviesWithSlug from '@/components/page-components/movies/slugs'

const MoviesSlugPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <MoviesWithSlug slug={params.slug} />
  )
}

export default MoviesSlugPage