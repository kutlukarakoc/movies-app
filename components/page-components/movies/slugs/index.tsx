'use client'

import MoviesWithSlugLoading from './loading'
import Pagination from './pagination'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { Movie } from '@/types/movie'
import { AxiosResponse } from 'axios'

type MovieData = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const MoviesWithSlug: React.FC<{ slug: string }> = ({ slug }) => {

  const searchParams = useSearchParams()

  let page = searchParams.get('page') || '1'
  page = +page < 1 ? '1' : page

  const { isLoading, error, data } = useQuery({
    queryKey: [`all${slug}Movies_page${page}`],
    queryFn: async () => {
      const { data }: AxiosResponse<MovieData> = await axiosGet(`/movie/${slug}`, page)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <MoviesWithSlugLoading />
  }

  return (
    <section className='section-container mt-14'>
      <h1 className='capitalize text-xl md:text-2xl mb-10 text-center md:text-left'>{slug} Movies</h1>
      <h5 className='text-sm md:text-md text-center md:text-end mb-2'>Showing
        <span className='ml-1'>
          {+page === 1 ? page : page + 1} - {+page * 20}
          <span className='text-xs mx-1'>of</span>
          {data?.total_results}
        </span>
      </h5>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center md:place-items-stretch gap-y-14 gap-x-10'>
        {data?.results.map((movie: Movie) => (
          <div key={movie.id} className='w-full max-w-[275px]'>
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={288}
                height={375}
                className='rounded-sm h-full max-h-[375px]'
                unoptimized
              />
            </Link>
            <div className='flex justify-between items-end -mb-1'>
              <h5 className='text-sm md:text-md text-secondary mt-1 truncate'>{movie.title}</h5>
              <div className='flex items-center gap-1'>
                <p className='bg-accent text-xxs font-bold h-5 w-11 grid place-items-center text-center'>TMDB</p>
                <p className='text-xs text-secondary'>{movie.vote_average.toFixed(1)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} totalPages={data?.total_pages} />
    </section>
  );
};

export default MoviesWithSlug;