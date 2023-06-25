import Image from 'next/image'
import { heroMockup } from '@/public/constants/home/mockup'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='w-full h-full max-h-[450px] md:max-h-[625px] lg:max-h-[725px] relative mb-28'>
      <Image src={heroMockup.backdropImage} alt={heroMockup.title} className='w-full h-full block object-cover' fill quality={100} />
      <div className='w-full absolute z-10 text-center md:text-left bottom-5 md:bottom-20 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-14 max-w-[85%] md:max-w-[75%] lg:max-w-screen-md'>
        <h1 className='text-secondary text-xl md:text-2xl lg:text-3xl font-semibold mb-3'>
          {heroMockup.title}
        </h1>
        <h4 className='text-secondary text-sm md:text-lg mb-3 flex justify-center md:justify-start items-center gap-2'>
          <p className='bg-accent w-8 h-8 text-xs leading-3 flex justify-center items-center text-center'>Top<br />20</p>
          Number {heroMockup.number} in the world today
        </h4>
        <h4 className='text-secondary text-sm md:text-md lg:text-lg mb-6 line-clamp-4 md:line-clamp-5'>
          {heroMockup.overview}
        </h4>
        <Link href='/' className='bg-accent text-secondary flex items-center justify-center text-sm md:text-lg w-36 md:w-44 h-10 md:h-14 rounded-md hover:bg-accent-light'>
          More İnformation
        </Link>
      </div>
    </section>
  )
}

export default Hero