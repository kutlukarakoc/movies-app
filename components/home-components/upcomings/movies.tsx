'use client'

import UpcomingMoviesLoading from './loading'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'

interface UpcomingMovies {
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

const UpcomingMovies: React.FC = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['upcomingMovies'],
    queryFn: async () => {
      const { data } = await axiosGet('https://api.themoviedb.org/3/movie/upcoming')
      const { results } = data
      return results
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <UpcomingMoviesLoading />
  }

  if (error) {
    return <div>Error :(</div>
  }

  if (data) {
    return (
      <section className='section-container'>
        <div className='flex justify-between items-center mb-2'>
          <h4 className='text-xl text-secondary'>Upcoming Movies</h4>
          <Link href='/' className='text-sm text-accent hover:text-accent-light'>See More</Link>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className='upcomingMoviesSlider h-[425px]'
        >
          {data.slice(0, 10).map((movie: UpcomingMovies) => (
            <SwiperSlide key={movie.id} style={{width:'250px',height:'425px'}}>
              <div>
                <Link href='/'>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={250}
                    height={350}
                    className='rounded-sm'
                  />
                </Link>
                <div className='flex justify-between items-end -mb-1'>
                  <h5 className='text-md text-secondary mt-1 truncate'>{movie.title}</h5>
                  <div className='flex items-center gap-1'>
                    <p className='bg-accent text-xxs font-bold h-5 w-11 grid place-items-center text-center'>TMDB</p>
                    <p className='text-xs text-secondary'>{movie.vote_average.toFixed(1)}</p>
                  </div>
                </div>
                <span className='text-xxs text-zambezi -mt-2'>Released at : {movie.release_date}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    )
  }
  return null
}

export default UpcomingMovies