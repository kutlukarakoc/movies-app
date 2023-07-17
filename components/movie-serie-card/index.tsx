import Link from 'next/link'
import Image from 'next/image'

type Card = {
  url: string
  imgSrc: string
  alt: string
}

const Card: React.FC<Card> = ({ url, imgSrc, alt }) => {
  return (
    <Link href={url}>
      <Image
        src={imgSrc}
        alt={alt}
        width={250}
        height={375}
        className='rounded-sm'
        unoptimized
      />
    </Link>
  )
}

export default Card