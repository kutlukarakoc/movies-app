import axios from 'axios'

export const axiosGet = async (url: string, page: number = 1, method: string = 'GET') => {

  const options = {
    method,
    url,
    params: { language: 'en-US', page },
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_REQ_AUTHORIZATION
    }
  };

  return axios.request(options)
}