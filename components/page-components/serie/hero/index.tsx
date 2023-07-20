'use client'

import Hero from '@/components/detail-components/hero'
import HeroLoading from '@/components/detail-components/hero/loading'
import Genres from '@/components/detail-components/genres'
import { SerieDetails } from '@/types/serieDetails'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { AxiosResponse } from 'axios'

const SerieHero: React.FC<{ serieId: string }> = ({ serieId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`serie_${serieId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<SerieDetails> = await axiosGet(`/tv/${serieId}`)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <HeroLoading />
  }

  if (!error && data) {
    return (
      <Hero
        backdropPath={data.backdrop_path}
        title={data.name}
        overview={data.overview}
        status={data.status}
        date={data.last_air_date}
      >
        <Genres genres={data.genres} />
      </Hero>
    )
  }

  return null
}

export default SerieHero