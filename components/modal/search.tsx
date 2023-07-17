'use client'

import Modal from '.'
import Image from 'next/image'
import searchImg from '@/public/assets/search.png'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchModal: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState<string>('')

  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedSearchQuery = searchQuery.trim()
    if (trimmedSearchQuery) {
      router.push(`/search-results?search=${trimmedSearchQuery}`)
    }
  }

  return (
    <Modal showCloseButton={false}>
      <form className='relative w-full max-w-sm mx-auto h-12' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='search'
          className='w-full h-full px-4 rounded-lg border border-secondary text-secondary bg-primary text-sm outline-none'
          value={searchQuery}
          onChange={event => setSearchQuery(event?.target.value)}
        />
        <button type='submit' className='border-none outline-none'>
          <Image src={searchImg} alt='movies' className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5' />
        </button>
      </form>
    </Modal>
  )
}

export default SearchModal