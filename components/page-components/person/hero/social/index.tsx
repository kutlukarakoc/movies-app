import SocialsLoading from './loading';
import SocialCard from './socialCards';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { axiosGet } from '@/public/utils/fetch';
import { AxiosResponse } from 'axios';
import { PersonSocials } from '@/types/personSocials';

const Socials: React.FC<{ personId: string }> = ({ personId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`person_socials_${personId}`],
    queryFn: async () => {
      const { data }: AxiosResponse<PersonSocials> = await axiosGet(`/person/${personId}/external_ids`);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <SocialsLoading />
  }

  if (!error && data && data) {
    return (
      <div className='mt-10 flex flex-col justify-center items-start gap-y-1'>
        {data.instagram_id && <SocialCard icon={AiOutlineInstagram} tag={data.instagram_id} urlBase='https://www.instagram.com/' />}
        {data.twitter_id && <SocialCard icon={AiOutlineTwitter} tag={data.twitter_id} urlBase='https://www.twitter.com/' />}
        {data.facebook_id && <SocialCard icon={AiOutlineFacebook} tag={data.facebook_id} urlBase='https://www.facebook.com/' />}
        {data.youtube_id && <SocialCard icon={AiOutlineYoutube} tag={data.youtube_id} urlBase='https://www.youtube.com/' />}
      </div>
    );
  }

  return null;
};

export default Socials;
