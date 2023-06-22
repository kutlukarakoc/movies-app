import axios from 'axios'

export const axiosGet = async (url: string, page: number = 1, method: string = 'GET') => {

  const options = {
    method,
    url,
    params: { language: 'en-US', page },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjk3NTAzODAwOWI2YTIxNGMwNGJlNjgzMzE4Y2UwMiIsInN1YiI6IjY0OTFlNjY0MmY4ZDA5MDExZDI1ZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J9N-IqZe4Mtii8HiTTGgAoQotdIRw9NLl2sk0i5jiJw'
    }
  };

  return await axios.request(options)
}