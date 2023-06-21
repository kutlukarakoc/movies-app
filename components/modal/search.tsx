import Image from 'next/image'
import searchImg from '@/public/assets/search.png'

const SearchModal: React.FC = () => {
  return (
    <form className='relative w-11/12 mx-auto h-12'>
      <input type='text' placeholder='search' className='w-full h-full px-4 rounded-lg border border-secondary text-secondary bg-primary text-sm outline-none' />
      <button type='submit' className='border-none outline-none'>
        <Image src={searchImg} alt='movies' className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5' />
      </button>
    </form>
  )
}

export default SearchModal