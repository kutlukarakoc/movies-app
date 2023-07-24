
const Loading: React.FC = () => {
  return (
    <section className='section-container mt-14 animate-pulse'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-x-32 mb-14'>
        <div className='w-[325px] h-[487px] md:w-[384px] md:h-[576px] rounded-md bg-zambezi'></div>
        <div>
          <div className='w-72 h-10 sm:w-80 sm:h-16 mb-8 mt-14 md:mt-0 md:mb-14 rounded-md bg-zambezi'></div>
          <div className='w-36 h-5 sm:w-40 sm:h-6 rounded-md mb-2 bg-zambezi'></div>
          <div className='w-32 h-5 sm:w-36 sm:h-6 rounded-md mb-2 bg-zambezi'></div>
          <div className='w-72 h-5 sm:w-80 sm:h-6 rounded-md mb-2 bg-zambezi'></div>
          <div className='mt-10 flex flex-col justify-center items-start gap-y-2 animate-pulse'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='w-32 h-5 rounded-md bg-zambezi'></div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 items-center'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className='w-11/12 h-5 rounded-md bg-zambezi'></div>
        ))}
      </div>
    </section>
  )
}

export default Loading