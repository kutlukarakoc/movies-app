import MoviesWithSlugContainer from '@/components/page-components/movies/slugs'

const MoviesSlugPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <MoviesWithSlugContainer slug={params.slug} />
  )
}

export default MoviesSlugPage