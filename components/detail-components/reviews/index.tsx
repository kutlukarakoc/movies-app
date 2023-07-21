'use client'

import ReviewsLoading from './loading'
import Image from 'next/image'
import ReadMore from './readMore'
import { UserIcon } from '@heroicons/react/24/outline'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { AxiosResponse } from 'axios'
import { Reviews, Result } from '@/types/revies'
import { useState } from 'react'

const Reviews: React.FC<{ id: string, reqUrl: string }> = ({ id, reqUrl }) => {

  const [reviewsSlice, setReviewsSlice] = useState<number>(5)

  const { isLoading, error, data } = useQuery({
    queryKey: [`reviews_${id}`],
    queryFn: async () => {
      const { data }: AxiosResponse<Reviews> = await axiosGet(reqUrl)
      const results: Result[] = data.results
      return results
    }
  })

  if (isLoading) {
    return <ReviewsLoading />
  }

  if (!error && data && data.length) {
    return (
      <section className='section-container'>
        <h3 className='text-xl text-center mb-5'>Reviews</h3>
        <article className='flex flex-col items-center justify-center gap-y-6'>
          {data?.slice(0, reviewsSlice).map((review: Result) => {
            const avatar: string | undefined = review.author_details.avatar_path
            return (
              <div key={review.id} className='flex items-start justify-center gap-8'>
                <div className='w-16 h-16 rounded-full relative bg-zambezi'>
                  {
                    !avatar || avatar.includes('gravatar')
                      ? <div className='w-full h-full flex items-center justify-center'><UserIcon className='w-10 h-10 rounded-full' /></div>
                      : <Image alt='movies-app' fill unoptimized src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`} className='rounded-full' />
                  }
                </div>
                <div className='bg-nero p-3 w-[550px] min-h-[120px] rounded-md'>
                  <div className='flex items-center justify-between gap-4 mb-4'>
                    <p className='text-xs'>@{review.author}</p>
                    <span className='text-xxs'>{review.created_at.split('T')[0]}</span>
                  </div>
                  <ReadMore>{review.content}</ReadMore>
                </div>
              </div>
            )
          })}
          {data.length > reviewsSlice &&
            <button type='button' className='border-none border-0 outline-none underline text-xs' onClick={() => setReviewsSlice(prev => prev + 5)}>
              See More Reviews
            </button>
          }
        </article>
      </section>
    )
  }

  return null
}

export default Reviews