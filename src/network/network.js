import axios from 'axios'


export function request(options){
   
      const instance=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
       })
    
      return  instance(options)
      } 

 export  function newnet(options){
    const instance=axios.create({
        baseURL:'http://106.54.54.237:8000/api/v1',
        timeout:5000
       })
       return instance(options)
  }