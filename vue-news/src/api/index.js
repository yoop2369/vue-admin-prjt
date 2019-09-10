import axios from 'axios'
import { async } from 'q'

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`)
  //return axios.get(config.baseUrl + 'news/1.json')
}

function fetchList(url) {
  return axios.get(`${config.baseUrl}${url}`)
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchItemInfo(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`)
}
async function fetchLists(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`)
    return response;
    //return await axios.get(`${config.baseUrl}${pageName}/1.json`)
  } catch (error) {
    console.log(error)
  }
}

export{
  fetchNewsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
  fetchLists
}