const ActedLoading: React.FC = () => {
  return (
    <section className='section-container animate-pulse'>
      <div className='w-40 h-7 rounded-md mb-4 bg-zambezi'></div>
      <div className='overflow-hidden flex gap-5'>
        {Array.from({ length: 7 }).map((_, index: number) => (
          <div key={index} className='w-[240px] h-[450px]'>
            <div className='flex-shrink-0 w-[240px] h-[400px] rounded-md bg-zambezi'></div>
            <div className='w-36 h-5 rounded-md bg-zambezi my-1'></div>
            <div className='w-28 h-4 rounded-md bg-zambezi'></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ActedLoading