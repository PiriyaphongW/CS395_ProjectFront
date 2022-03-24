<template >
  <div class="myform">
    <form class="background">
      <v-card class="mx-auto" max-width="600" outlined>
        <v-container>
          <h1>Register</h1>
          <v-row>
            <v-col>
              <v-text-field
                v-model="firstName"
                label="FirstName"
                required
              ></v-text-field
            ></v-col>
            <v-col
              ><v-text-field v-model="lastName" label="LastName"></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="password"
                label="Password"
                :value="myPass"
                :append-icon="value ? 'visibility' : 'visibility_off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
              ></v-text-field
            ></v-col>
            <v-col
              ><v-text-field
                v-model="confirmPassword"
                label="ConfirmPassword"
                :value="myPass"
                :append-icon="value ? 'visibility' : 'visibility_off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-text-field
                v-model="phoneNumber"
                label="PhoneNumber"
                required
              ></v-text-field
            ></v-col>
            <v-col
              ><input type="radio" value="Male" v-model="gender" />
              <label>Male</label>
              <br />
              <input type="radio" value="Female" v-model="gender" />
              <label>Female</label></v-col
            >
          </v-row>
          <v-btn class="mr-4" color="primary" @click="submit"> submit </v-btn>
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
      value: String,
    };
  },
  methods: {
    submit() {
      http
        .post("register", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          phoneNumber: this.phoneNumber,
          gender: this.gender,
        })
        .then((response) => {
          console.log(response.data);
          window.location.href = "/SignIn";
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style>
.myform{
  margin-top: 40px;
}
</style>