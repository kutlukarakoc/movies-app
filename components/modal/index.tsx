'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MutableRefObject } from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'


type Modal = {
  children: JSX.Element
  showCloseButton: boolean
}

const Modal: React.FC<Modal> = ({ children, showCloseButton = true }) => {

  const router: AppRouterInstance = useRouter()

  const modalRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent): void => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      router.back()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div
      className='backdrop-blur-sm bg-overlay opacity-90 fixed z-40 inset-0 overflow-y-auto flex items-center justify-center rounded-md'
      role="dialog"
      aria-modal="true"
    >
      <div className='w-full relative max-w-sm md:max-w-md lg:max-w-lg' ref={modalRef}>
        {showCloseButton &&
          <button type='button' onClick={() => router.back()}>
            <XMarkIcon className='absolute z-50 top-0 right-0 w-6 h-6 text-secondary' />
          </button>
        }
        {children}
      </div>
    </div>
  )
}

export default Modal