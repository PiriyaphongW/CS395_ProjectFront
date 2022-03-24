<template>
  <div class="login">
    <div>
      <v-card class="mx-auto" max-width="344" outlined>
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
              :value="myPass"
              :append-icon="value ? 'visibility' : 'visibility_off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
            ></v-text-field>
            <a class="register" href="/SignUp">Create Accout?</a>
            <v-btn color="success " class="ml" @click="submit"> submit </v-btn>
          </form>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import http from "../Services/Auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      value: String,
    };
  },
  methods: {
    submit() {
      http
        .post("login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        })
        .then(() => {
          if (localStorage.getItem("user")) {
            if (localStorage.getItem("user")) {
              let userStorage = localStorage.getItem("user");
              let userStorageJSON = JSON.parse(userStorage);
              let user = userStorageJSON["user"];

              if (user.role == 1) {
                // หาก role = 1 (Admin) ให้ส่งไปที่หน้า
                window.location.href = "/Backend/Admin";
              } else {
                // Login ผ่าน ให้ส่งไปที่หน้า Product
                window.location.href = "/frontend/products";
              }
            }
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style>
v-btn {
  justify-content: flex-end;
}
.register {
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
}
.login {
  margin-top: 30px;
}
</style>