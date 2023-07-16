const MoviesWithSlugLoading: React.FC = () => {
  return (
    <section className='section-container mt-14 animate-pulse'>
      <div className='w-64 h-10 mb-5 ml-auto mr-auto md:ml-0 rounded-md bg-zambezi'></div>
      <div className='w-44 h-4 rounded-md ml-auto mr-auto md:mr-0 md:ml-auto mb-2 bg-zambezi'></div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center md:place-items-stretch gap-y-14 gap-x-10'>
        {Array.from({ length: 10 }).map((_, index: number) => (
          <div key={index} className='w-full max-w-[275px]'>
            <div className='w-full h-[375px] rounded-sm bg-zambezi'></div>
            <div className='flex justify-between items-end -mb-1'>
              <div className='w-32 h-4 mt-1 rounded-md bg-zambezi'></div>
              <div className='w-16 h-4 rounded-md bg-zambezi'></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoviesWithSlugLoading