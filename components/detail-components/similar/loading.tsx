const SimilarsLoading: React.FC = () => {
  return (
    <section className='section-container animate-pulse'>
      <div className='flex justify-between items-center mb-4'>
        <div className='w-40 h-7 rounded-md bg-zambezi'></div>
        <h4 className='text-xl text-secondary rounded-md bg-zambezi'></h4>
        <div className='w-16 h-4 rounded-md bg-zambezi'></div>
      </div>
      <div className="overflow-hidden flex gap-5">
        {Array.from({ length: 5 }).map((_, index: number) => (
          <span key={index} className='flex-shrink-0 w-[240px] h-[400px] rounded-md bg-zambezi'></span>
        ))}
      </div>
    </section>
  )
}

export default SimilarsLoading