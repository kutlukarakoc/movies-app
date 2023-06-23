import MobileBrands from './mobile'
import { brands } from '@/public/constants/home/brands'
import Image from 'next/image'

const Brands: React.FC = () => {
  return (
    <section className='container mx-auto px-4 sm:px-0 mb-10'>
      <div className='w-full hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center place-items-center'>
        {brands.map(brand => (
          <Image key={brand.alt} src={brand.image} alt={brand.alt} style={{ width: brand.width }} />
        ))}
      </div>
      <MobileBrands />
    </section>
  )
}

export default Brands