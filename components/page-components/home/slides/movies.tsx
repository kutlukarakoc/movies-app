'use client'

import Card from '@/components/movie-serie-card'
import SlideLoading from './loading'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { Movie } from '@/types/movie'

interface MovieSlide {
  path: string
  reqKey: string
  title: string
  referralPath: string
}

const MovieSlide: React.FC<MovieSlide> = ({ path, reqKey, title, referralPath }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [reqKey],
    queryFn: async () => {
      const { data } = await axiosGet(path)
      const results: Movie[] = data.results
      return results
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <SlideLoading />
  }

  if (!error && data && data.length) {
    return (
      <section className='container mx-auto px-4 sm:px-0 mb-10'>
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
          {data.slice(0, 10).map((movie: Movie) => {
            if (movie.poster_path) {
              return (
                <SwiperSlide key={movie.id} style={{ width: '250px', height: '425px' }}>
                  <Card
                    key={movie.id}
                    url={`/movie/${movie.id}`}
                    imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title={movie.title}
                    averageVote={movie.vote_average}
                  />
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