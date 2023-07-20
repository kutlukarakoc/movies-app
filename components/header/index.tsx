'use client'

import Logo from './logo'
import Pages from './pages'
import Right from './right'
import Mobile from './mobile'

const Header: React.FC = () => {

  return (
    <header className='px-6 h-20 flex items-center'>
      <nav className='w-full h-full flex justify-between items-center'>
        <Logo />
        <Pages />
        <Right />
        <Mobile />
      </nav>
    </header>
  )
}

export default Header