<template>
  <div>
    <v-card  
        class="mx-auto"
        max-width="344"
        outlined >
        <v-container>
          <h1>Login</h1>
            <form>
                <v-text-field
                v-model="email"
                label="E-mail"
                required
                ></v-text-field>
                <v-text-field
                v-model="password"
                label="Password"
                required
                ></v-text-field>
                <v-btn class="mr-4" @click="submit"> submit </v-btn>
            </form>
        </v-container>
    </v-card>
  </div>

</template>

<script>
import http from "../Services/Auth";
export default {
  data() {
    return {
      email:"",
      password:"",
    }
  },
  methods: {
    submit(){
      http.post("login",{
        email:this.email,
        password:this.password
      }).then(response =>{
        console.log(response.data)
        localStorage.setItem('user',JSON.stringify(response.data))
        window.location.href = "/frontend/products"
      }).catch(error =>{
        console.log(error.response.data)
      });
    }
  },

};
</script>

<style>
</style>