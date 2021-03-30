import axios from 'axios'

const KEY = 'AIzaSyAxLi15YA - Ki8SU78F6hMcXiVLXy3j44sA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'videos',
    maxResult: 5,
    key: KEY
  }
})
