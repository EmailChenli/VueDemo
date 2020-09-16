//npm install --save安装提示
//import axios from 'axios'
import request from '@/utils/request'

// export function getIdcsList() {
//  return axios.get('/api/user/')
// }
// export function getPaginationList(user) {
//  return axios.get(`/api/user/?page=${user}`)
// }


/* 用户登录 */
export function myLogin (params) {
  return request({
    //method: 'post',
    url: 'http://localhost:8088/login',
    data: params    //post用data,get用params
  })
}

// export function getUserList(user) {
//  return request({
//   url: '/login/login',
//   method: 'post',
//   user
//  })
// }