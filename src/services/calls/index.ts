import { server } from "../api";

export const getToken = async (user:any, value:any) => {
    
     
    const response = server.post(`/login?Username=${user}&Password=${value}`)
    response.then(function(resolve){
        return resolve.data
    }).catch(e => {
        console.log('IH' ,e)
        return e;
    })
    return response;
}