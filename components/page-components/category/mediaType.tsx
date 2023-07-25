import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import { useRouter } from 'next/navigation'

const MediaType: React.FC<{ genreId: string, mediaType: string }> = ({ genreId, mediaType }) => {

  const mediaTypes = ['movies', 'series']
  const router: AppRouterInstance = useRouter()

  return (
    <div className='flex justify-center gap-x-5 mb-14'>
      {mediaTypes.map((type: string, index) => (
        <div key={index}>
          <input
            className='sr-only'
            id={type}
            type='radio'
            value={type}
            name='media-type'
            defaultChecked={mediaType === type}
          />
          <label
            className={`text-secondary py-2 px-4 border border-secondary rounded-sm cursor-pointer ${mediaType === type ? 'bg-accent' : ''}`}
            htmlFor={type}
            onClick={() => router.push(`/category/${genreId}?media-type=${type}&page=1`)}
          >
            <span className='text-xs font-semibold uppercase'>{type}</span>
          </label>
        </div>
      ))}
    </div>
  )
}

export default MediaType