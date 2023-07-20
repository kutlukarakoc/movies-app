const SeasonsLoading: React.FC = () => {
  return (
    <section className='section-container animate-pulse'>
      <div className='w-40 h-10 mb-4 rounded-md bg-zambezi'></div>
      <div className="overflow-hidden flex gap-5">
        {Array.from({ length: 5 }).map((_, index: number) => (
          <span key={index} className='flex-shrink-0 w-[240px] h-[400px] rounded-md bg-zambezi'></span>
        ))}
      </div>
    </section>
  )
}

export default SeasonsLoading