import axios from 'axios'
const apiURL = import.meta.env.VITE_API_URL
//http://localhost:8080/

const httpClient = axios.create({baseURL:'http://localhost:8080/'})

export default httpClient;