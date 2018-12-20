import axios from 'axios'

//Connection with server
export default () => {
    return axios.create({
        baseURL: 'http://192.168.43.131:8081/'
    })
}
