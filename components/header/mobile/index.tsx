'use client'
import Menu from './menu'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const Mobile = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [transform, setTransform] = useState<string>('-translate-x-[400px]')

  useEffect(() => {
    showMenu ? setTransform('translate-x-0') : setTransform('-translate-x-[400px]')

    return () => setTransform('translate-x-0')
  }, [showMenu])

  return (
    <>
      <Bars3Icon className='w-7 h-7 text-secondary sm:hidden' onClick={() => setShowMenu(true)} />
      <Menu transform={transform} setShowMenu={setShowMenu} />
    </>
  )
}

export default Mobile