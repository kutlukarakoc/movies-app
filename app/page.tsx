import Hero from '@/components/page-components/home/hero'
import Brands from '@/components/page-components/home/brands'
import MovieSlide from '@/components/page-components/home/slides/movies'
import SeriesSlide from '@/components/page-components/home/slides/series'
import WhyChoose from '@/components/page-components/home/why-choose'

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <MovieSlide path='/movie/upcoming' reqKey='upcomingMovies' title='Upcoming Movies' referralPath='/movies/upcoming' />
      <MovieSlide path='/movie/popular' reqKey='popularMovies' title='Popular Movies' referralPath='/movies/popular' />
      <SeriesSlide path='/tv/on_the_air' reqKey='upcomingTvSeries' title='Upcoming Tv Series' className='mb-10' />
      <SeriesSlide path='/tv/top_rated' reqKey='topRatedTvSeries' title='Top Rated Tv Series' className='mb-24' />
      <WhyChoose />
    </>
  )
}
