'use client'

import MoviesRelatedGenre from './movies'
import SeriesRelatedGenre from './series'
import MediaType from './mediaType'
import { useSearchParams } from 'next/navigation'

const CategoryContainer: React.FC<{ genreId: string }> = ({ genreId }) => {

  const searchParams: any = useSearchParams()!

  const mediaType: string = searchParams.get('media-type')

  return (
    <section className='section-container mt-14'>
      <MediaType genreId={genreId} mediaType={mediaType} />
      {
        mediaType === 'movies'
          ? <MoviesRelatedGenre genreId={genreId} />
          : <SeriesRelatedGenre genreId={genreId} />
      }
    </section>
  )
}

export default CategoryContainer