'use client'

import TrailersLoading from './loading'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { TrailerData } from '@/types/movieTrailers'
import { AxiosResponse } from 'axios'

const Trailers: React.FC<{ movieId: string }> = ({ movieId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`trailers_${movieId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<TrailerData> = await axiosGet(`/movie/${movieId}/videos`)
      const { results } = data
      return results
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <TrailersLoading />
  }

  if (!error && data) {
    return (
      <section className='section-container'>
        <h3 className='text-xl mb-5'>{data.length} Videos</h3>
        <div className='grid gap-y-8 gap-x-6 justify-between' style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(20rem,1fr))' }}>
          {data?.map(trailer => (
            <div className='aspect-video w-full' key={trailer.id}>
              <iframe src={`https://www.youtube.com/embed/${trailer.key}?rel=0autohide=1&showinfo=0`} width='100%' height='100%' frameBorder='0' allowFullScreen></iframe>
              <h5 className='text-secondary text-md mt-2 truncate'>{trailer.name}</h5>
              <h6 className='text-zambezi text-sm'>{trailer.type}</h6>
              <p className='text-zambezi text-xs'>Published at : {trailer.published_at.split('T')[0]}</p>
            </div>
          ))}
        </div>

      </section>
    )
  }

  return null
}

export default Trailers