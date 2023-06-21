import Logo from '../logo'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { SetStateAction } from 'react'

interface IMenu {
  transform: string
  setShowMenu: (value: SetStateAction<boolean>) => void
}

const Menu: React.FC<IMenu> = ({ transform, setShowMenu }) => {
  return (
    <div className={`absolute left-0 top-0 w-8/12 max-w-sm py-6 bg-primary text-secondary text-sm font-medium shadow-accentshd rounded-b-lg transition-transform sm:hidden ${transform}`}>
      <div className='flex flex-col justify-center items-start gap-5 flex-1 h-full py-16 px-10'>
        <Link href='/'>Home</Link>
        <Link href='/'>Movies</Link>
        <Link href='/'>New And Populer</Link>
        <Link href='/'>My List</Link>
      </div>
      <div className='w-full flex justify-center'>
        <Logo />
      </div>
      <XMarkIcon className='w-5 h-5 text-secondary absolute top-3 right-2 cursor-pointer' onClick={() => setShowMenu(false)} />
    </div>
  )
}

export default Menu