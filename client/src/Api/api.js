import axios from 'axios'

//Connection with server
export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081/'
    })
}
