const HeroLoading: React.FC = () => {
  return (
    <div className='group w-full h-[450px] md:h-[625px] lg:h-[725px] relative mb-28 bg-nero animate-pulse'>
      <div className='w-full absolute z-10 flex flex-col items-center sm:items-start bottom-5 md:bottom-36 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-14 max-w-[85%] md:max-w-[75%] lg:max-w-screen-md'>
        <div className='w-52 h-10 mb-3 rounded-md bg-zambezi'></div>
        <div className='w-11/12 sm:w-2/3 h-24 mb-3 rounded-md bg-zambezi'></div>
        <div className='mb-6 w-20 h-3 rounded-md bg-zambezi'></div>
        <div className='flex items-center gap-4'>
          <div className='bg-zambezi w-24 h-8 rounded-md'></div>
          <div className='bg-zambezi w-24 h-8 rounded-md'></div>
          <div className='bg-zambezi w-24 h-8 rounded-md'></div>
        </div>
      </div>
    </div>
  )
}

export default HeroLoading