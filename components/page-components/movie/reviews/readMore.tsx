'use client'

import { useState } from 'react'
import parse from 'html-react-parser'

const ReadMore: React.FC<{ children: string }> = ({ children }) => {

  const [isClamped, setIsClamped] = useState<boolean>(true)

  const isClampNeeded: boolean = children.length > 140 ? true : false

  return (
    <div>
      <p className={`text-xs ${isClampNeeded && isClamped ? 'line-clamp-2' : 'line-clamp-none'} `}>
        {parse(children)}
      </p>
      {isClampNeeded &&
        <button type='button' className='text-xxs underline float-right mt-1' onClick={() => setIsClamped(prev => !prev)}>
          {isClamped ? 'See More' : 'See Less'}
        </button>
      }
    </div>
  )
}

export default ReadMore