import { Dispatch, SetStateAction } from 'react'

const SearchType: React.FC<{ searchType: string, setSearchType: Dispatch<SetStateAction<string>> }> = ({ searchType, setSearchType }) => {

  const searchTypes = ['movie', 'serie']

  return (
    <div className='flex justify-center gap-x-5 mt-4'>
      {searchTypes.map((type: string, index) => (
        <div key={index}>
          <input
            className='sr-only peer'
            id={type}
            type='radio'
            value={type}
            name='search-type'
            checked={searchType === type}
            onChange={event => setSearchType(event.target.value)}
          />
          <label className='text-secondary py-2 px-4 border border-secondary rounded-sm cursor-pointer peer-checked:bg-accent' htmlFor={type}>
            <span className='text-xs font-semibold uppercase'>{type}</span>
          </label>
        </div>
      ))}
    </div>
  )
}

export default SearchType