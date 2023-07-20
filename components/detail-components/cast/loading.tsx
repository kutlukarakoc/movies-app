const CastLoading: React.FC = () => {
  return (
    <section className='section-container animate-pulse'>
      <div className='w-28 h-10 mb-5 rounded-md bg-zambezi'></div>
      <div className='flex justify-between items-center mb-4'>
        {Array.from({ length: 5 }).map((_, index: number) => (
          <div key={index} className='w-56 h-72 rounded-md bg-zambezi'></div>
        ))}
      </div>
    </section>
  )
}

export default CastLoading