const GridCards: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center md:place-items-stretch gap-y-14 gap-x-10'>
      {children}
    </div>
  )
}

export default GridCards