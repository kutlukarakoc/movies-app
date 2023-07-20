import Image from 'next/image'
import { Season } from '@/types/serieDetails'


const SeasonCard: React.FC<{ season: Season }> = ({ season }) => {
  return (
    <div className='w-[280px] h-[480px] rounded-sm relative group'>
      <Image
        src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
        alt={season.name}
        className={`h-[430px] w-full ${season.overview && 'group-hover:brightness-50 group-hover:grayscale transition-all'}`}
        unoptimized
        width={280}
        height={430}
        quality={100}
      />
      {season.overview && (
        <h6 className='text-sm text-center w-72 px-3 absolute z-10 opacity-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:opacity-100 transition-all line-clamp-[14]'>
          {season.overview}
        </h6>
      )}
      <h6 className='text-sm'>{season.episode_count} Episodes</h6>
      <h6 className='text-sm'>Air Date: {season.air_date}</h6>
    </div>
  )
}

export default SeasonCard