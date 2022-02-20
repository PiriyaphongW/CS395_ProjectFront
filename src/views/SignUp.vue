<template>
  <div>
    <form>
      <v-card class="mx-auto" max-width="400" outlined>
        <v-container>
          <h1>Register</h1>
          <v-text-field
            v-model="firstName"
            label="FirstName"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            label="LastName"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            label="ConfirmPassword"
          ></v-text-field>
          <v-text-field
            v-model="phoneNumber"
            label="PhoneNumber"
            required
          ></v-text-field>
          <v-text-field
            v-model="gender"
            label="Gender"
          ></v-text-field>

          <v-btn class="mr-4" @click="submit"> submit </v-btn>
        </v-container>
      </v-card>
    </form>
  </div>
</template>

<script>
import http from "../Services/Auth";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      gender: "",
    };
  },
  methods: {
    submit() {
      http.post("register", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword,
        phoneNumber: this.phoneNumber,
        gender: this.gender,
      }).then(response =>{
         console.log(response.data)
         window.location.href = "/SignIn"
        
      }).catch(error => {
        console.log(error.response.data)
      })
    },
  },
};
</script>

<style>
</style>