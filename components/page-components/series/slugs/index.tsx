'use client'

import GridCards from '@/components/grid-cards'
import GridCardsLoading from '@/components/grid-cards/loading'
import Card from '@/components/movie-serie-card'
import Pagination from '@/components/pagination'
import { getPage } from '@/public/utils/page'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { Serie } from '@/types/serie'
import { AxiosResponse } from 'axios'

type SerieData = {
  page: number
  results: Serie[]
  total_pages: number
  total_results: number
}

const SeriesWithSlug: React.FC<{ slug: string }> = ({ slug }) => {

  const page = getPage()

  const { isLoading, error, data } = useQuery({
    queryKey: [`all${slug}Series_page${page}`],
    queryFn: async () => {
      const { data }: AxiosResponse<SerieData> = await axiosGet(`/tv/${slug}`, page)
      return data
    },
    refetchOnWindowFocus: false
  })

  let title = slug.split('_').join(' ')
  if (title.includes('air')) {
    title = 'Upcoming'
  }

  if (isLoading) {
    return <GridCardsLoading />
  }

  if (!error && data && data.results.length) {
    return (
      <section className='section-container mt-14'>
        <h1 className='capitalize text-xl md:text-2xl mb-10 text-center md:text-left'>{title} TV Series</h1>
        <h5 className='text-sm md:text-md text-center md:text-end mb-2'>Showing
          <span className='ml-1'>
            {+page === 1 ? page : page + 1} - {+page * 20}
            <span className='text-xs mx-1'>of</span>
            {data?.total_results}
          </span>
        </h5>
        <GridCards>
          {data?.results.map((serie: Serie) => (
            <Card
              key={serie.id}
              url={`/serie/${serie.id}`}
              imgSrc={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              title={serie.name}
              averageVote={serie.vote_average}
            />
          ))}
        </GridCards>
        <Pagination page={page} totalPages={data?.total_pages} />
      </section>
    )
  }

  return (
    <section className='section-container mt-14'>
      <h2 className='text-center text-2xl'>Something went wrong. Please try again later.</h2>
    </section>
  )
}

export default SeriesWithSlug