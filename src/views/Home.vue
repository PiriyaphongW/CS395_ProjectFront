<template>
  <div class="bcolor">
    <section>
      <!--slide-->
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-row class="fill-height" align="center" justify="center">
            <div > <p>Wellcome</p> </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </section>
    <section class="producth">
      <!--Product-->
      <v-row>
        <v-card
          v-for="item in producthome"
          :key="item.id"
          class="mx-auto my-12"
          max-width="250"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img height="250" :src="item.image"></v-img>

          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">{{item.price}} $ • {{item.category}}</div>

            <div>
              <h4>Description</h4>
              {{ item.description }}
            </div>
            <div>Amount:{{ item.amount }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <router-link to="/SignIn" style="text-decoration: none">
              <v-btn color="deep-purple lighten-2" text> Buy </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-row>
    </section>
  </div>
</template>

<script>
import http from "../Services/FrontendService";
export default {
  data() {
    return {
      producthome: [],
      items: [
        {
          src: "https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },

        {
          src: "https://images.unsplash.com/photo-1577976655502-85300c5ca2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        },
      ],
    };
  },
  created() {
    http.get("productReadGuest").then((response) => {
      this.producthome = response.data;
    });
  },
};
</script>

<style>

.fill-height {
  font-size: 130px;
  color: rgb(73, 184, 100);
  font-family: "Oswald", sans-serif;
}
.producth {
  width: 70%;
  margin: auto;
}
.bcolor{
  background-color: #e1dad2;
}
</style>