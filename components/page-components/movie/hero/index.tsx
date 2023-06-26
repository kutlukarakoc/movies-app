'use client'

import HeroLoading from './loading'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon } from '@heroicons/react/24/outline'
import { SearchMovieById } from '@/types/searchMovieById'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { AxiosResponse } from 'axios'

const Hero: React.FC<{ movieId: string }> = ({ movieId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`movie_${movieId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<SearchMovieById> = await axiosGet(`/movie/${movieId}`)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <HeroLoading />
  }

  if (!error && data) {
    return (
      <section className='group w-full h-[450px] md:h-[625px] lg:h-[725px] relative mb-28'>
        <Image
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
          className='object-cover opacity-60 sm:opacity-100 sm:group-hover:opacity-10 transition-opacity'
          fill
          sizes='100vw'
          quality={100}
        />
        <div className='w-full absolute z-10 text-center md:text-left bottom-5 md:bottom-20 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-14 max-w-[85%] md:max-w-[75%] lg:max-w-screen-md sm:opacity-0 sm:group-hover:opacity-100 transition-opacity'>
          <div className='flex items-center justify-center md:justify-start gap-8  mb-3'>
            <h1 className='text-secondary text-xl md:text-2xl lg:text-3xl font-semibold'>
              {data.title}
            </h1>
            <HeartIcon className='w-10 h-10 md:w-14 md:h-14 text-accent fill-accent cursor-pointer' />
          </div>
          <h4 className='text-secondary text-sm md:text-md lg:text-lg mb-3'>
            {data.overview}
          </h4>
          <h6 className='mb-3 text-sm'>{data.status} : {data.release_date}</h6>
          <div className='flex items-center gap-4 mb-3'>
            <Link href='/'>Genre1</Link>
          </div>
        </div>
      </section>
    )
  }

  return null
}

export default Hero