<template>
  <div>
    <v-app-bar dense elevation="5">
      <v-spacer></v-spacer>
      <v-btn depressed color="error" @click="logout"> Logout </v-btn> 
     
    </v-app-bar>
  
  </div>
</template>

<script>
import http from "../../Services/FrontendService"
export default {
    methods: {
        logout(){
            http.post("logout").then(()=>{
                localStorage.removeItem("user");
                window.location.href= "/"
            }).catch((error)=>{
                alert(JSON.stringify(error.response.data));
                console.log(error.response.data)
            })
        }
    },
};
</script>

<style>
</style>