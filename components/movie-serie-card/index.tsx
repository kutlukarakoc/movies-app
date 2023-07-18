import Link from 'next/link'
import Image from 'next/image'

type Card = {
  url: string
  imgSrc: string
  title: string
  averageVote: number
}

const Card: React.FC<Card> = ({ url, imgSrc, title, averageVote }) => {
  return (
    <div className='w-full max-w-[250px]'>
      <Link href={url}>
        <Image
          src={imgSrc}
          alt={title}
          width={250}
          height={370}
          className='rounded-sm h-[370px]'
          unoptimized
        />
      </Link>
      <div className='flex justify-between items-end -mb-1'>
        <h5 className='text-sm md:text-md text-secondary mt-1 truncate'>{title}</h5>
        <div className='flex items-center gap-1'>
          <p className='bg-accent text-xxs font-bold h-5 w-11 grid place-items-center text-center'>TMDB</p>
          <p className='text-xs text-secondary'>{averageVote.toFixed(1)}</p>
        </div>
      </div>
    </div>
  )
}

export default Card