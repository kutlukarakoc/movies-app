'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const Pagination: React.FC<{ page: string, totalPages: number | undefined }> = ({ page, totalPages }) => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams: any = useSearchParams()!

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)

    return params.toString()
  }

  return (
    <div className='mt-14 flex justify-center items-center gap-x-5'>
      <button
        className='text-lg md:text-xl text-accent hover:text-accent-light'
        onClick={() => router.push(pathname + '?' + createQueryString('page', (+page - 1).toString()))}
      >
        &#8592;
      </button>
      <p>
        Page
        <span className='ml-1'>
          {page}
          <span className='text-sm mx-1'>of</span>
          {totalPages}
        </span>
      </p>
      <button
        className='text-lg md:text-xl text-accent hover:text-accent-light'
        onClick={() => router.push(pathname + '?' + createQueryString('page', (+page + 1).toString()))}
      >
        &#8594;
      </button>
    </div>
  )
}

export default Pagination