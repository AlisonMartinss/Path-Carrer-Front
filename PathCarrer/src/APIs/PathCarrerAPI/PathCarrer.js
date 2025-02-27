import axios from 'axios'

const httpClient = axios.create({baseURL:'http://localhost:8080/CRUD'})

export default httpClient;