import request from '@/utils/request'

/* 用户登录 */
export function myLogin (params) {
    return request({
      //method: 'post',
      url: 'http://localhost:8088/login',
      data: params    //post用data,get用params
    })
  }