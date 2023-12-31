'use client'

import Menu from './menu'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Mobile: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [transform, setTransform] = useState<string>('-translate-x-[650px]')

  const pathname: string = usePathname()

  useEffect(() => {
    showMenu ? setTransform('translate-x-0') : setTransform('-translate-x-[650px]')

    return () => setTransform('translate-x-0')
  }, [showMenu])

  useEffect(() => {
    setShowMenu(false)

    return () => setShowMenu(false)
  }, [pathname])

  return (
    <>
      <Bars3Icon className='w-7 h-7 text-secondary sm:hidden' onClick={() => setShowMenu(true)} />
      <Menu transform={transform} setShowMenu={setShowMenu} />
    </>
  )
}

export default Mobile