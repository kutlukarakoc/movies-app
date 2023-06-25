import Link from 'next/link'

const Pages: React.FC = () => {
  return (
    <div className='h-full flex-1 items-center hidden sm:flex sm:order-2'>
    <div className='flex items-center gap-5 text-secondary text-sm font-medium'>
      <Link href='/'>Home</Link>
      <Link href='/movies'>Movies</Link>
      <Link href='/'>Series</Link>
      <Link href='/'>My List</Link>
    </div>
  </div>
  )
}

export default Pages