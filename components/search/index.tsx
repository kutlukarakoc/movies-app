'use client'

import Modal from '../modal'
import SearchType from './searchType'
import Image from 'next/image'
import searchImg from '@/public/assets/search.png'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MutableRefObject } from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

const SearchModal: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchType, setSearchType] = useState<string>('movie')

  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null)

  const router: AppRouterInstance = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const trimmedSearchQuery = searchQuery.trim()
    if (trimmedSearchQuery) {
      router.push(`/search-results?search=${trimmedSearchQuery}&type=${searchType}`)
    }
  }

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  return (
    <Modal showCloseButton={false}>
      <form className='relative w-full max-w-sm mx-auto h-12 px-4 sm:px-0' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='search'
          className='w-full h-full px-4 rounded-sm border border-secondary text-secondary bg-primary text-sm outline-none'
          value={searchQuery}
          onChange={event => setSearchQuery(event?.target.value)}
          ref={inputRef}
        />
        <button type='submit' className='border-none outline-none'>
          <Image src={searchImg} alt='movies' className='absolute right-8 sm:right-4 top-1/2 -translate-y-1/2 w-5 h-5' />
        </button>

        <SearchType searchType={searchType} setSearchType={setSearchType} />
      </form>
    </Modal>
  )
}

export default SearchModal