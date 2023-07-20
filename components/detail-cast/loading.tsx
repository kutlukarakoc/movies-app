const CastLoading: React.FC = () => {
  return (
    <section className='section-container animate-pulse'>
      <div className='w-28 h-10 mb-5 rounded-md bg-zambezi'></div>
      <div className='flex justify-between items-center mb-4'>
        {Array.from({ length: 7 }).map((_, index: number) => (
          <div key={index} className='w-40 h-52 flex flex-col items-center'>
            <div className='w-36 h-36 rounded-full bg-zambezi'></div>
            <div className='mt-2 w-24 h-3 rounded-md mx-auto bg-zambezi'></div>
            <div className='mt-1.5 w-36 h-2 rounded-md bg-zambezi'></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CastLoading