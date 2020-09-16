import request from '../utils/request'

export function jobfindall(){
    return request({
        url: 'http://localhost:8003/sys/job/findall',
        method: 'get'
    })
}

export function jobfindbyid(job_id){
    return request({
        url: 'http://localhost:8003/sys/job/findbyid/'+job_id,
        method: 'get'
    })
}