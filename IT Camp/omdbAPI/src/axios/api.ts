import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '7df19c1283mshf3ab1f54ed25ca4p12301bjsn5d973c253b3a',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
  },
}

export const getTopMovies = async () => {
  try {
    const response = await axios.request(options)
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
// export const test = () => {}
