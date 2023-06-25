import axios from 'axios'

export const axiosGet = (path: string, page: number = 1, method: string = 'GET') => {

  const options = {
    method,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
    params: { language: 'en-US', page },
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_REQ_AUTHORIZATION
    }
  };

  return axios.request(options)
}