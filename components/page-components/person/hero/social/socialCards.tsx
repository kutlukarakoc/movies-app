import Link from 'next/link'
import { IconType } from 'react-icons'

const SocialCard: React.FC<{ icon: IconType, tag: string, urlBase: string }> = ({ icon, tag, urlBase }) => {
  const IconComponent = icon
  return (
    <Link href={urlBase + tag} target='_blank' className='cursor-pointer flex justify-start items-center gap-x-2'>
      <IconComponent size={24} />
      <h5 className='text-md'>{tag}</h5>
    </Link>
  )
}

export default SocialCard