const TrailersLoading: React.FC = () => {
  return (
    <section className='section-container animate-pulse'>
      <div className='w-40 h-7 mb-5 rounded-md bg-zambezi'>Videos</div>
      <div className="overflow-hidden flex gap-5">
        <span className='flex-shrink-0 w-[410px] h-[250px] rounded-md bg-zambezi'></span>
        <span className='flex-shrink-0 w-[410px] h-[250px] rounded-md bg-zambezi'></span>
        <span className='flex-shrink-0 w-[410px] h-[250px] rounded-md bg-zambezi'></span>
        <span className='flex-shrink-0 w-[410px] h-[250px] rounded-md bg-zambezi'></span>
      </div>
    </section>
  )
}

export default TrailersLoading