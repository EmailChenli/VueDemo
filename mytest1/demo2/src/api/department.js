import request from '../utils/request'

export function department(){
    return request({
        url: 'http://localhost:8888/sys/department/findall',
        method: 'get'
    })
}


// export default{
//     departmentfindbyid(department_id){
//         return request({
//             url: 'http://localhost:8888/sys/department/findbyid/'+department_id,
//             method: 'get'
//         });
//     }
// } 
