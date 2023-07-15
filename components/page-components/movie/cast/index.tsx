'use client'

import CastLoading from './loading'
import Image from 'next/image'
import Link from 'next/link'
import { SlUserFemale } from 'react-icons/sl'
import { UserIcon } from '@heroicons/react/24/outline'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { AxiosResponse } from 'axios'
import { CastProps, Credits } from '@/types/castAndCrew'
import 'swiper/css'

const Cast: React.FC<{ movieId: string }> = ({ movieId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`castAndCrew_${movieId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<Credits> = await axiosGet(`/movie/${movieId}/credits`)
      const cast: CastProps[] = data.cast
      const slicedCast: CastProps[] = cast.length > 25 ? cast.slice(0, 25) : cast
      return slicedCast
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <CastLoading />
  }

  if (!error && data) {
    return (
      <section className='section-container'>
        <h3 className='text-xl mb-5'>Cast</h3>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          className={`castAndCrew_${movieId}`}
          style={{ marginLeft: '-8px' }}
        >
          {data.map((person: CastProps) => (
            <SwiperSlide key={person.id} style={{ width: '160px', height: '208px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link href={`/person/${person.cast_id}`} className='block relative w-36 h-36'>
                {person.profile_path ?
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                    alt={person.name}
                    fill
                    className='rounded-full object-cover bg-zambezi'
                    unoptimized
                  /> :
                  <div className='w-36 h-36 flex rounded-full justify-center items-center bg-zambezi'>
                    {person.gender === 1 ? <SlUserFemale size={44} /> : <UserIcon className='w-12 h-12' />}
                  </div>
                }
              </Link>
              <h6 className='text-sm mt-2 text-center'>{person.name}</h6>
              <p className='text-zambezi text-xs text-center'>{person.character}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    )
  }
  return null
}

export default Cast