import Hero from '@/components/home-components/hero'
import Brands from '@/components/home-components/brands'
import MovieSlide from '@/components/home-components/slides/movie'
import TvSeriesSlide from '@/components/home-components/slides/tvSeries'
import WhyChoose from '@/components/home-components/why-choose'

export default function Home() {
  return (
    <main className='h-full text-secondary'>
      <Hero />
      <Brands />
      <MovieSlide url='https://api.themoviedb.org/3/movie/upcoming' reqKey='upcomingMovies' title='Upcoming Movies' />
      <MovieSlide url='https://api.themoviedb.org/3/movie/popular' reqKey='popularMovies' title='Popular Movies' />
      <TvSeriesSlide url='https://api.themoviedb.org/3/tv/on_the_air' reqKey='upcomingTvSeries' title='Upcoming Tv Series' className='mb-10' />
      <TvSeriesSlide url='https://api.themoviedb.org/3/tv/top_rated' reqKey='topRatedTvSeries' title='Top Rated Tv Series' className='mb-24' />
      <WhyChoose />
      <div className='mt-44'>test</div>
    </main>
  )
}
