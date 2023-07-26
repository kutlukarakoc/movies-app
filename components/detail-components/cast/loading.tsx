const CastLoading: React.FC = () => {
  return (
    <section className='section-container animate-pulse'>
      <div className='w-28 h-10 mb-5 rounded-md bg-zambezi'></div>
      <div className="overflow-hidden flex gap-5">
        {Array.from({ length: 5 }).map((_, index: number) => (
          <span key={index} className='flex-shrink-0 w-56 h-72 rounded-md bg-zambezi'></span>
        ))}
      </div>
    </section>
  )
}

export default CastLoading