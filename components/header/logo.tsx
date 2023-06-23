import Image from 'next/image'
import netflix from '@/public/assets/brands/netflix.png'

const Logo: React.FC = () => {
  return (
    <figure className='w-28 h-7 mr-0 sm:mr-12 order-2 sm:order-1'>
      <Image src={netflix} alt='movies-app' className='w-full h-full max-w-full block' />
    </figure>
  )
}

export default Logo