'use client'

import Link from 'next/link'
import Image from 'next/image'
import ActedLoading from './loading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { axiosGet } from '@/public/utils/fetch'
import { PersonActedMovies, PersonActedMoviesCast } from '@/types/personActedMovies'

const ActedMovies: React.FC<{ personId: string }> = ({ personId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`acted_movies_${personId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<PersonActedMovies> = await axiosGet(`/person/${personId}/movie_credits`)
      const actedMedia: PersonActedMoviesCast[] = data.cast
      return actedMedia;
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <ActedLoading />
  }

  if (!error && data && data.length) {
    return (
      <section className='container mx-auto px-4 sm:px-0 mb-10'>
        <div className='flex justify-between items-center mb-3'>
          <h3 className='text-xl text-secondary'>Acted Movies ({data.length})</h3>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className='acted-movies h-[425px]'
        >
          {data.map((movie: PersonActedMoviesCast) => {
            if (movie.poster_path) {
              return (
                <SwiperSlide key={movie.id} style={{ width: '250px', height: '425px' }}>
                  <div className='w-full max-w-[250px]'>
                    <Link key={movie.id} href={`/movie/${movie.id}`}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={250}
                        height={370}
                        className='rounded-sm h-[370px]'
                        unoptimized
                      />
                    </Link>
                    <h5 className='text-sm md:text-md mt-1 truncate'>{movie.title}</h5>
                    <h6 className='text-sm'>{movie.character}</h6>
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

export default ActedMovies