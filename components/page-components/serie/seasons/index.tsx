'use client'

import GridCards from '@/components/grid-cards'
import SeasonCard from './seasonCard'
import SeasonsLoading from './loading'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { SerieDetails, Season } from '@/types/serieDetails'
import { AxiosResponse } from 'axios'

const Seasons: React.FC<{ serieId: string }> = ({ serieId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`serieSeasons_${serieId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<SerieDetails> = await axiosGet(`/tv/${serieId}`)
      const seasons: Season[] = data.seasons
      return seasons
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <SeasonsLoading />
  }


  console.log('dataaa',data)
  if (!error && data && data.length) {
    return (
      <section className='section-container mt-14'>
        <h3 className='text-xl text-center md:text-left mb-5'>{data?.length} Seasons</h3>
        <GridCards>
          {data?.map((season: Season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </GridCards>
      </section>
    )
  }

  return null
}

export default Seasons