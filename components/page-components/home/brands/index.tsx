import MobileBrands from './mobile'
import { brands } from '@/public/constants/home/brands'
import Image from 'next/image'

const Brands: React.FC = () => {
  return (
    <section className='section-container'>
      <div className='w-full hidden sm:flex flex-wrap justify-between items-center'>
        {brands.map(brand => (
          <Image key={brand.alt} src={brand.image} alt={brand.alt} style={{ width: brand.width }} />
        ))}
      </div>
      <MobileBrands />
    </section>
  )
}

export default Brands