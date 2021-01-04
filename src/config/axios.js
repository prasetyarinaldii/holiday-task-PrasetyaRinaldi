import axios from 'axios'

const instance = axios.create({
  baseURL: "https://funcy-todo.herokuapp.com"
})

export default instance