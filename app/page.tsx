import Hero from '@/components/home-components/hero'

export default function Home() {
  console.log(process.env)
  return (
    <main className='h-full text-secondary'>
      <Hero />
    </main>
  )
}
