import { useSearchParams } from 'next/navigation'

export const getPage = () => {
  const searchParams = useSearchParams()

  let page = searchParams.get('page') || '1'
  page = +page < 1 ? '1' : page

  return page
}