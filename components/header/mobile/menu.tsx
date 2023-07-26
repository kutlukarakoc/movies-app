import Logo from '../logo'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { SetStateAction } from 'react'

interface Menu {
  transform: string
  setShowMenu: (value: SetStateAction<boolean>) => void
}

const Menu: React.FC<Menu> = ({ transform, setShowMenu }) => {
  return (
    <div className={`absolute z-50 left-0 top-0 w-full h-full py-20 bg-primary text-secondary text-sm font-medium shadow-accentshd transition-transform sm:hidden ${transform}`}>
      <div className='flex flex-col justify-center items-start gap-5 flex-1 h-full py-16 px-10'>
        <Link href='/'>Home</Link>
        <Link href='/movies'>Movies</Link>
        <Link href='/series'>Series</Link>
        <Link href='/mylist'>My List</Link>
      </div>
      <div className='w-full flex justify-center'>
        <Logo />
      </div>
      <XMarkIcon className='w-7 h-7 text-secondary absolute top-4 right-4 cursor-pointer' onClick={() => setShowMenu(false)} />
    </div>
  )
}

export default Menu