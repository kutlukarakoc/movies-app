import SearchModal from '../modal/search'
import Image from 'next/image'
import search from '@/public/assets/search.png'
import { useSwal } from '@/hooks/useSwal'

const Right: React.FC = () => {

  const { showSwal, closeSwal } = useSwal()

  const handleSwal = () => {
    showSwal(<SearchModal />)
  }

  return (
    <div className='h-full flex items-center gap-4 order-3'>
      <button type='button' className='w-5 h-5 outline-none border-none sm:w-6 sm:h-6'>
        <Image src={search} alt='movies-app' className='h-full max-w-full block' onClick={handleSwal} />
      </button>
      <div className='w-7 h-7 sm:w-8 sm:h-8 bg-zambezi rounded-full cursor-pointer'></div>
    </div>
  )
}

export default Right