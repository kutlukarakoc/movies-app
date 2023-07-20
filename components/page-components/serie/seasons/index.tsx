'use client'

import SeasonCard from './seasonCard'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { SerieDetails, Season } from '@/types/serieDetails'
import { AxiosResponse } from 'axios'

const Seasons: React.FC<{ serieId: string }> = ({ serieId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`serieqw_${serieId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<SerieDetails> = await axiosGet(`/tv/${serieId}`)
      const seasons: Season[] = data.seasons
      return seasons
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <div>loading...</div>
  }


  console.log('dataaa',data)
  if (!error && data && data.length) {
    return (
      <section className='section-container mt-14'>
        <h3 className='text-xl text-center sm:text-left mb-5'>{data?.length} Seasons</h3>
        <div className='grid gap-y-8 gap-x-6 justify-items-center md:justify-items-stretch' style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(20rem,1fr))' }}>
          {data?.map((season: Season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </div>
      </section>
    )
  }

  return null
}

export default Seasons