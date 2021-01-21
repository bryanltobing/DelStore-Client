import axios from 'axios'

export default axios.create({
  baseURL: 'https://delstore.herokuapp.com/auth',
})
