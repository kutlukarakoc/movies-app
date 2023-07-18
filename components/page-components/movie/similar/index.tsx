'use client'

import Card from '@/components/movie-serie-card'
import SimilarsLoading from './loading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { Movie } from '@/types/movie'

const Similars: React.FC<{ movieId: string }> = ({ movieId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`similarTo/${movieId}`],
    queryFn: async () => {
      const { data } = await axiosGet(`/movie/${movieId}/similar`)
      const results: Movie[] = data.results
      return results
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <SimilarsLoading />
  }

  if (data && !error) {
    return (
      <section className='container mx-auto px-4 sm:px-0 mb-10'>
        <h3 className='text-xl mb-5 text-secondary'>Similar Movies</h3>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className={`similarTo${movieId} h-[425px]`}
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

export default Similars