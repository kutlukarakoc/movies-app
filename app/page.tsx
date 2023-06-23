import Hero from '@/components/home-components/hero'
import Brands from '@/components/home-components/brands'
import NewMovies from '@/components/home-components/new-movies'

export default function Home() {
  return (
    <main className='h-full text-secondary'>
      <Hero />
      <Brands />
      <NewMovies />
    </main>
  )
}
