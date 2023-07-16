import SeriesWithSlug from '@/components/page-components/series/slugs'

const SeriesSlugPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <SeriesWithSlug slug={params.slug} />
  )
}

export default SeriesSlugPage