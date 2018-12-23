import axios from 'axios'
import config from '@/config'

//Connection with server
export default () => {
  return axios.create({
    baseURL: config.ServerURL
  })
}
