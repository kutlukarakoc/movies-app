import MoviesWithSlugContainer from '@/components/page-components/movies/slugs'

const MoviesWithSlug: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <MoviesWithSlugContainer slug={params.slug} />
  )
}

export default MoviesWithSlug