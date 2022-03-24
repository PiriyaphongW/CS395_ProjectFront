<template>
  <div>
    <v-app-bar dense elevation="5">
      <router-link to="/frontend/products" style="text-decoration: none; color: inherit;" > <h2>Products</h2> </router-link>
      <v-spacer></v-spacer>
      <router-link to="/frontend/cart" style="text-decoration: none; color: inherit;" > <v-btn depressed color="primary"> Cart </v-btn> </router-link>
      
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