import Hero from '@/components/home-components/hero'
import Brands from '@/components/home-components/brands'
import UpcomingMovies from '@/components/home-components/upcomings/movies'

export default function Home() {
  return (
    <main className='h-full text-secondary'>
      <Hero />
      <Brands />
      <UpcomingMovies />
    </main>
  )
}
