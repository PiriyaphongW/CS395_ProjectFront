import axios  from "axios";

const Auth = axios.create({
    baseURL: "http://electric-store.local/api/",
    withCredentials: true,
    header:{
        "content-type" : "application/json" ,
        "Accept"       : "application/json",
    },
});

export default Auth;