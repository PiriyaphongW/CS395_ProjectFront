<template>
  <div>
    <v-app-bar dense elevation="5">
      <router-link to="/" class="Store mx-5"  style="text-decoration: none;  color: inherit"
        ><h2>Electric Store</h2> </router-link
      >
      <router-link to="/About" style="text-decoration: none; color: inherit"
        ><h3>AboutUs</h3> </router-link
      >

      
      
      <v-spacer></v-spacer>

      <router-link to="/SignIn" style="text-decoration: none; color: inherit">
        <i class="gg-profile"></i>
      </router-link>
    
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
#Store{
  margin-right: 20px;
}
.gg-profile{
  
}
</style>