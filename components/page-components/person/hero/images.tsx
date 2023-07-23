
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/public/utils/fetch'
import { AxiosResponse } from 'axios'
import { PersonImages, Profile } from '@/types/personImages'


const Images: React.FC<{ personId: string, name: string }> = ({ personId, name }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`person_images_${personId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<PersonImages> = await axiosGet(`/person/${personId}/images`)
      const images: Profile[] = data.profiles
      return images
    },
    refetchOnWindowFocus: false
  })

  return (
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='personImages w-[325px] h-[487px] md:w-[384px] md:h-[576px]'
    >
      {data?.map((image: Profile) => (
        <SwiperSlide key={image.file_path}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
            width={384}
            height={576}
            alt={name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Images