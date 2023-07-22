import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/24/outline'

interface Hero {
  children: JSX.Element
  backdropPath: string
  title: string
  overview: string
  status: string
  date: string
}

const Hero: React.FC<Hero> = ({ children, backdropPath, title, overview, status, date }) => {
  return (
    <section className='group w-full h-[450px] md:h-[625px] lg:h-[725px] relative mb-28'>
      {backdropPath &&
        <Image
          src={`https://image.tmdb.org/t/p/original${backdropPath}`}
          alt={title}
          className='object-cover opacity-60 sm:opacity-100 sm:group-hover:opacity-10 transition-opacity'
          fill
          sizes='100vw'
          quality={100}
        />
      }
      <div className={`w-full absolute z-10 text-center md:text-left bottom-5 md:bottom-20 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-14 max-w-[85%] md:max-w-[75%] lg:max-w-screen-md ${backdropPath ? 'sm:opacity-0 sm:group-hover:opacity-100 transition-opacity' : ''}`}>
        <div className='flex items-center justify-center md:justify-start gap-8 mb-3'>
          <h1 className='text-secondary text-xl md:text-2xl lg:text-3xl font-semibold'>
            {title}
          </h1>
          <HeartIcon className='w-10 h-10 md:w-14 md:h-14 text-accent fill-accent cursor-pointer' />
        </div>
        <h4 className='text-secondary text-sm md:text-md lg:text-lg mb-3'>
          {overview}
        </h4>
        <h6 className='mb-3 text-sm'>{status} : {date}</h6>
        {children}
      </div>
    </section>
  )
}

export default Hero