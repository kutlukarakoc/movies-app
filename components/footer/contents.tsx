import Link from 'next/link'
import { memo } from 'react'
import { contents } from '@/public/constants/footer/contents'

const Contents: React.FC = () => {
   return (
      <div className='flex flex-wrap gap-9 sm:gap-24 pb-4 sm:pb-0'>
         {contents.map((item, index) => (
            <div key={index} className='flex flex-col gap-2'>
               {item.links.map((link, index) => (
                  <Link key={index} href={link.path} className='text-sm'>{link.title}</Link>
               ))}
            </div>
         ))}
      </div>
   )
}

export default memo(Contents)