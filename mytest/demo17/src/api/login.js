import request from '@/utils/request' //引入封装好的 axios 请求
 


export function employee() { //接口
  return request({ //使用封装好的 axios 进行网络请求
    url: 'http://localhost:8088/employee',
    method: 'get'
  })
}

export function employeedelete(employeeid) { //接口
  return request({ //使用封装好的 axios 进行网络请求
    url: 'http://localhost:8088/employee/delete/employeeid',
    method: 'post',
    data:{
      employeeid
    }
  })
}