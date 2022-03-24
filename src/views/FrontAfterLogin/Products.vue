<template>
  <div>
    <v-container>
      <v-row>
        <v-card
          v-for="item in products"
          :key="item.id"
          class="mx-auto my-12"
          max-width="374"
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

            <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

            <div>
              <h4>Description</h4>
              {{ item.description }}
            </div>
            <div>Amount:{{ item.amount }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="buyProduct(item)">
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import http from "@/Services/FrontendService";
export default {
  data() {
    return {
      products: {},
    };
  },
  methods: {
    buyProduct(item) {
      let product = {
        id: item.id,
        image: item.image,
        name: item.name,
        amount: item.amount,
        price: item.price,
        category: item.category,
        description: item.description,
        total: item.price,
        qty: 1,
      };
      this.$store.dispatch("itemFromProduct", product);
    },
  },
  mounted() {
    http
      .get("productRead")
      .then((response) => {
        this.products = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};
</script>

<style>
</style>