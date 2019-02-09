import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-dcb51.firebaseio.com/'
})

export default instance