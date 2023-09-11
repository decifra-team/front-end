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

export const getAsk = async() => { 
    const response = server.get(`/asks`);
    response.then(function(resolve){
        // console.log("🚀 ~ fxile: index.ts:20 ~ response.then ~ resolve.data:", resolve.data)
        return resolve.data
    }).catch(e => {
        console.log('IH' ,e)
        return e;
    })
    return response;
}