import axios from 'axios'

const httpClient = axios.create({baseURL:'https://handsome-nourishment-production.up.railway.app/'})

export default httpClient;