'use client'

import Card from '@/components/movie-serie-card'
import SlideLoading from './loading'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { Serie } from '@/types/serie'

interface SeriesSlide {
  path: string
  reqKey: string
  title: string
  className: string
  referralPath: string
}

const SeriesSlide: React.FC<SeriesSlide> = ({ path, reqKey, title, className, referralPath }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [reqKey],
    queryFn: async () => {
      const { data } = await axiosGet(path)
      const results: Serie[] = data.results
      return results
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <SlideLoading />
  }

  if (data && !error) {
    return (
      <section className={`container mx-auto px-4 sm:px-0 ${className}`}>
        <div className='flex justify-between items-center mb-3'>
          <h3 className='text-xl text-secondary'>{title}</h3>
          <Link href={referralPath + '?page=1'} className='text-sm text-accent hover:text-accent-light'>See More</Link>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className={`${reqKey} h-[425px]`}
        >
          {data.slice(0, 10).map((serie: Serie) => {
            if (serie.poster_path) {
              return (
                <SwiperSlide key={serie.id} style={{ width: '250px', height: '425px' }}>
                  <div className='w-full max-w-[250px]'>
                    <Card
                      url={`/serie/${serie.id}`}
                      imgSrc={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                      alt={serie.name}
                    />
                    <div className='flex justify-between items-end -mb-1'>
                      <h5 className='text-md text-secondary mt-1 truncate'>{serie.name}</h5>
                      <div className='flex items-center gap-1'>
                        <p className='bg-accent text-xxs font-bold h-5 w-11 grid place-items-center text-center'>TMDB</p>
                        <p className='text-xs text-secondary'>{serie.vote_average.toFixed(1)}</p>
                      </div>
                    </div>
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

export default SeriesSlide