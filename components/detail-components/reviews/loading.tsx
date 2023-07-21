const ReviewsLoading: React.FC = () => {
  return (
    <section className='section-container animation-pulse'>
      <div className='w-32 h-10 mb-5 m-auto rounded-md bg-zambezi'></div>
      <article className='flex flex-col items-center justify-center gap-y-6'>
        {Array.from({ length: 4 }).map((_, index: number) => (
          <div key={index} className='flex items-start justify-center gap-8'>
            <div className='w-16 h-16 rounded-full bg-zambezi'></div>
            <div className='p-3 w-[550px] min-h-[120px] rounded-md bg-zambezi'></div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default ReviewsLoading