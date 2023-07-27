'use client'

import SignIn from '../auth/sign-in'
import SignUp from '../auth/sign-up'
import SearchModal from '../search'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, usePathname } from 'next/navigation'
import search from '@/public/assets/search.png'
import { ReadonlyURLSearchParams } from 'next/navigation'
import AuthModal from '../auth'

const Right: React.FC = () => {

  const pathname: string = usePathname()
  const searchParams: ReadonlyURLSearchParams = useSearchParams()

  const showModal: string | null = searchParams.get('search-modal')
  const authModal: string | null = searchParams.get('auth-modal')

  const createQueryString = (name: string, value: string): URLSearchParams => {
    const params: URLSearchParams = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params
  }

  return (
    <>
      <div className='h-full flex items-center gap-4 order-3'>
        <Link href={pathname + '?' + createQueryString('search-modal', 'true')} className='w-[1.4rem] h-[1.4rem] outline-none border-none'>
          <Image src={search} alt='movies-app' className='h-full max-w-full block' />
        </Link>

        <Link href={pathname + '?' + createQueryString('auth-modal', 'true')} className='text-secondary bg-accent text-sm rounded-sm py-1 px-5 hover:bg-accent-light'>
          Sign in
        </Link>
      </div>

      {showModal && <SearchModal />}
      {authModal  && <AuthModal />}
    </>
  )
}

export default Right