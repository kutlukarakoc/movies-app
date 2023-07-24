

const SocialsLoading: React.FC = () => {
  return (
    <div className='mt-10 flex flex-col justify-center items-start gap-y-2 animate-pulse'>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className='w-32 h-5 rounded-md bg-zambezi'></div>
      ))}
    </div>
  )
}

export default SocialsLoading