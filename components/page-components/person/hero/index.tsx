'use client'

import Loading from './loading'
import Images from './images'
import { calculateAge } from '@/public/utils/calculateAge'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { AxiosResponse } from 'axios'
import { PersonDetails } from '@/types/personDetails'

const PersonHero: React.FC<{ personId: string }> = ({ personId }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`person_${personId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<PersonDetails> = await axiosGet(`/person/${personId}`)
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <Loading />
  }

  if (!error && data) {
    return (
      <section className='section-container mt-14'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-x-32'>
          <div className='w-[325px] h-[487px] md:w-[384px] md:h-[576px]'>
            <Images name={data.name} personId={personId} />
          </div>
          <div>
            <h2 className='text-xl sm:text-2xl text-center md:text-left mb-8 mt-14 md:mt-0 md:mb-14'>{data?.name}</h2>
            <h5 className='text-sm sm:text-md'>Birthday: {data.birthday}</h5>
            {!data.deathday
              ? <h5 className='text-sm sm:text-md'>Age: {calculateAge(data.birthday)}</h5>
              : <h5 className='text-sm sm:text-md'>Deathday: {data.deathday}</h5>
            }
            <h5 className='text-sm sm:text-md'>Place of Birth: {data.place_of_birth}</h5>
          </div>
        </div>
        <h6 className='text-sm indent-4 mt-14'>{data.biography}</h6>
      </section>
    )
  }

  return (
    <section className='section-container mt-14'>
      <h2 className='text-center text-2xl'>Something went wrong. Please try again later.</h2>
    </section>
  )
}

export default PersonHero