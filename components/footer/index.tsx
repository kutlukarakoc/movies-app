import Contents from './contents'
import PersonalLinks from './personalLinks'
import Image from 'next/image'
import logo from '@/public/assets/brands/netflix.png'

const Footer: React.FC = () => {
   return (
      <footer className='text-secondary min-h-72 flex flex-col justify-evenly gap-4 sm:gap-10 py-4'>
         <div className='flex flex-col sm:flex-row gap-4 justify-around items-center px-2 pt-6 pb-2'>
            <div className='w-28 h-28 sm:w-36 sm:h-36 flex items-center'>
               <Image src={logo} alt='movies app' className='w-full block' />
            </div>
            <Contents />
         </div>
         <div className='flex flex-col sm:flex-row justify-between items-center gap-4 px-8'>
            <p className='text-xs order-2 sm:order-1'>© 2023 Movies App, Inc. All rights reserved.</p>
            <PersonalLinks />
         </div>
      </footer>
   )
}

export default Footer