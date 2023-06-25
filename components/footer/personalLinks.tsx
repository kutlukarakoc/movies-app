import { memo } from 'react'
import { personalLinks } from '@/public/constants/footer/personalLinks'

const PersonalLinks: React.FC = () => {
   return (
      <div className='flex gap-4 order-1 sm:order-2'>
         {personalLinks.map((item, index) => {
            const Icon = item.icon
            return (
               <a key={index} href={item.link} target='_blank' rel='noreferrer'>
                  <Icon size={24} />
               </a>
            )
         })}
      </div>
   )
}

export default memo(PersonalLinks)