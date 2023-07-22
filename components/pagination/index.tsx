'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

const Pagination: React.FC<{ page: string, totalPages: number | undefined }> = ({ page, totalPages }) => {

  const router: AppRouterInstance = useRouter()
  const pathname: string = usePathname()
  const searchParams: any = useSearchParams()!

  const createQueryString = (name: string, value: string): string => {
    const params: URLSearchParams = new URLSearchParams(searchParams)
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