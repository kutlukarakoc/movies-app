import Link from 'next/link'
import { Genre } from '@/types/genres'

const Genres: React.FC<{ genres: Genre[] }> = ({ genres }) => {
  return (
    <div className='flex justify-center md:justify-start items-center gap-4 mb-3'>
      {genres.map((genre: Genre) => (
        <Link
          key={genre.id}
          href={`/category/${genre.id}`}
          className='bg-accent text-xxs md:text-md w-36 h-10 md:h-12 flex justify-center items-center text-center rounded-sm cursor-pointer hover:bg-accent-light'>
          {genre.name}
        </Link>
      ))}
    </div>
  )
}

export default Genres