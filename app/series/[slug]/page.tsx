import SeriesWithSlugContainer from '@/components/page-components/series/slugs'

const SeriesWithSlug: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <SeriesWithSlugContainer slug={params.slug} />
  )
}

export default SeriesWithSlug