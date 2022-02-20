import axios  from "axios";

let token = ''
if(localStorage.getItem('user')){
    let userStorage = localStorage.getItem('user')
    let userStorageJSON = JSON.parse(userStorage)
    token = userStorageJSON['token']
}else{
    token = ''
}

const FrontendService = axios.create({
    baseURL: "http://electric-store.local/api/",
    withCredentials: true,
    header:{
        "content-type" : "application/json" ,
        "Accept"       : "application/json",
        "Authorization" : `Bearer ${$token}`
    },
});

export default FrontendService;