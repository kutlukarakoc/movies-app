'use client'

import SlideLoading from './loading'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'

type MovieData = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface MovieSlide {
  path: string
  reqKey: string
  title: string
}

const MovieSlide: React.FC<MovieSlide> = ({ path, reqKey, title }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [reqKey],
    queryFn: async () => {
      const { data } = await axiosGet(path)
      const { results } = data
      return results
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <SlideLoading />
  }

  if (data && !error) {
    return (
      <section className='container mx-auto px-4 sm:px-0 mb-10'>
        <div className='flex justify-between items-center mb-3'>
          <h3 className='text-xl text-secondary'>{title}</h3>
          <Link href='/' className='text-sm text-accent hover:text-accent-light'>See More</Link>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className={`${reqKey} h-[425px]`}
        >
          {data.slice(0, 10).map((movie: MovieData) => {
            if (movie.poster_path) {
              return (
                <SwiperSlide key={movie.id} style={{ width: '250px', height: '425px' }}>
                  <div>
                    <Link href={`/movie/${movie.id}`}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={250}
                        height={375}
                        className='rounded-sm'
                        unoptimized
                      />
                    </Link>
                    <div className='flex justify-between items-end -mb-1'>
                      <h5 className='text-md text-secondary mt-1 truncate'>{movie.title}</h5>
                      <div className='flex items-center gap-1'>
                        <p className='bg-accent text-xxs font-bold h-5 w-11 grid place-items-center text-center'>TMDB</p>
                        <p className='text-xs text-secondary'>{movie.vote_average.toFixed(1)}</p>
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

export default MovieSlide