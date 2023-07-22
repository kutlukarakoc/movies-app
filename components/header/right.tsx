'use client'

import SearchModal from '../modal/search'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, usePathname } from 'next/navigation'
import search from '@/public/assets/search.png'

const Right: React.FC = () => {

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const showModal = searchParams.get('search-modal')

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params
  }

  return (
    <>
      <div className='h-full flex items-center gap-4 order-3'>
        <Link href={pathname + '?' + createQueryString('search-modal', 'true')} className='w-[1.4rem] h-[1.4rem] outline-none border-none'>
          <Image src={search} alt='movies-app' className='h-full max-w-full block' />
        </Link>
        <div className='w-7 h-7 sm:w-8 sm:h-8 bg-zambezi rounded-full cursor-pointer'></div>
      </div>

      {showModal && <SearchModal />}
    </>
  )
}

export default Right