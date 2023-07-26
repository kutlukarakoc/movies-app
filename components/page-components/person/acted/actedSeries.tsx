'use client'

import Link from 'next/link'
import Image from 'next/image'
import ActedLoading from './loading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { axiosGet } from '@/public/utils/fetch'
import { PersonActedSeries, PersonActedSeriesCast } from '@/types/personActedSeries'

const ActedSeries: React.FC<{ personId: string }> = ({ personId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`acted_series_${personId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<PersonActedSeries> = await axiosGet(`/person/${personId}/tv_credits`)
      const actedMedia: PersonActedSeriesCast[] = data.cast
      return actedMedia;
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <ActedLoading />
  }

  console.log('data',data)

  if (!error && data && data.length) {
    return (
      <section className='container mx-auto px-4 sm:px-0 mb-10'>
        <div className='flex justify-between items-center mb-3'>
          <h3 className='text-xl text-secondary'>Acted Series ({data.length})</h3>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className='acted-movies h-[425px]'
        >
          {data.map((serie: PersonActedSeriesCast) => {
            if (serie.poster_path && serie.character !== '' && !serie.character.toLowerCase().includes('self')) {
              return (
                <SwiperSlide key={serie.id} style={{ width: '250px', height: '425px' }}>
                  <div className='w-full max-w-[250px]'>
                    <Link key={serie.id} href={`/serie/${serie.id}`}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                        alt={serie.name}
                        width={250}
                        height={370}
                        className='rounded-sm h-[370px]'
                        unoptimized
                      />
                    </Link>
                    <h5 className='text-sm md:text-md mt-1 truncate'>{serie.name}</h5>
                    <h6 className='text-sm'>{serie.character}</h6>
                  </div>
                </SwiperSlide>
              )
            }
          })}
        </Swiper>
      </section>
    )
  }
  return null
}

export default ActedSeries