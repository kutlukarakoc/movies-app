'use client'

import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'

const Hero: React.FC = () => {

  const { isLoading, error, data, isSuccess, status, } = useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: () => axiosGet('https://api.themoviedb.org/3/movie/top_rated'),
    refetchOnWindowFocus: false,

  })

  if (isLoading) return <div>LOADING...</div>

  if (error) return <div>ERRRORRRR</div>



  if (data) {
    const { results } = data.data
    const random = Math.floor(Math.random() * 21)
    return (
      <div className='w-full h-full max-h-[850px] relative'>
        <img src={`https://image.tmdb.org/t/p/original${results[random].backdrop_path}`} alt={results[random].title} className='w-full h-full block' />
        <div className='absolute z-10 bottom-48 left-14 max-w-[650px]'>
          <h2 className='text-3xl text-white font-semibold mb-3'>{results[random].title}</h2>
          <h3 className='text-2xl text-white mb-3 flex items-center gap-2'>
            <div className='bg-accent w-8 h-8 text-xs leading-3 flex justify-center items-center text-center'>Top<br/>20</div>
            Number {random} in the world today
          </h3>
          <h4 className='text-2xl text-white mb-6'>{results[random].overview}</h4>
          <div className='flex gap-4'>
            <button type='button' className='bg-secondary text-primary text-xl w-44 h-16 text-center'>Play</button>
            <button type='button' className='bg-secondary text-primary text-xl w-44 h-16 text-center'>More İnformation</button>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default Hero