import { whyChoose } from '@/public/constants/home/whyChoose'

const WhyChoose: React.FC = () => {
  return (
    <section className='section-container'>
      <h3 className='text-xl text-secondary mb-8 text-center'>Why Choose?</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-between gap-7'>
        {whyChoose.map((item, index) => {
          const IconComponent = item.icon
          return (
            <div key={index} className='text-center flex flex-col items-center'>
              <div className='w-14 h-14 flex justify-center items-center border border-accent rounded-full mb-4'>
                <IconComponent className='w-8 h-8 text-accent' />
              </div>
              <h5 className='text-md text-secondary mb-3'>{item.title}</h5>
              <p className='text-xs text-secondary'>{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WhyChoose