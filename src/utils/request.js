import Vue from 'vue'
 
const Fly = require("flyio/dist/npm/wx")
const fly = new Fly()
fly.config.baseURL = 'https://api.apiopen.top/'
Vue.prototype.$http = fly
 




export function request(url,type=1,params={}){
    if(type==1){
        return fly.get(url,params);
    }else if(type==2){
        return fly.post(url,params);
    }
}

// export default fly