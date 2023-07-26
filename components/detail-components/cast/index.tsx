'use client'

import CastLoading from './loading'
import Link from 'next/link'
import { SlUserFemale } from 'react-icons/sl'
import { UserIcon } from '@heroicons/react/24/outline'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { AxiosResponse } from 'axios'
import { CastProps, Credits } from '@/types/castAndCrew'
import 'swiper/css'

const Cast: React.FC<{ id: string, reqUrl: string }> = ({ id, reqUrl }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`castAndCrew_${id}`],
    queryFn: async () => {
      const { data }: AxiosResponse<Credits> = await axiosGet(reqUrl)
      const cast: CastProps[] = data.cast
      const slicedCast: CastProps[] = cast.length > 25 ? cast.slice(0, 25) : cast
      return slicedCast
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <CastLoading />
  }

  if (!error && data && data.length) {
    return (
      <section className='section-container'>
        <h3 className='text-xl mb-5'>Cast</h3>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          className={`castAndCrew_${id}`}
        >
          {data.map((person: CastProps) => (
            <SwiperSlide key={person.id} style={{ width: '224px', height: '288px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link href={`/person/${person.id}`} className='group block relative w-56 h-72'>
                {person.profile_path ?
                  <div className='bg-no-repeat bg-center w-full h-full bg-full group-hover:bg-left-center group-hover:bg-400 group-hover:grayscale group-hover:brightness-75 rounded-sm' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${person.profile_path})`, transition: '.2s all ease-out' }}>
                  </div>
                  :
                  <div className='w-full h-full flex rounded-sm justify-center items-center bg-zambezi'>
                    {person.gender === 1 ? <SlUserFemale size={44} /> : <UserIcon className='w-12 h-12' />}
                  </div>
                }
                <div className='opacity-100 lg:opacity-0 lg:group-hover:opacity-100 absolute z-10 top-3/4 lg:top-1/2 -translate-y-1/2 left-1'>
                  <h5 className='text-white text-md mb-2 font-semibold'>{person.name}</h5>
                  <h6 className='text-white text-sm font-semibold'>{person.roles ? person.roles[0].character : person.character}</h6>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    )
  }
  return null
}

export default Cast