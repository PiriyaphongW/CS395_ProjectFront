<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">image</th>
              <th class="text-left">category</th>
              <th class="text-left">price</th>
              <th class="text-left">description</th>
              <th class="text-left">amount</th>

              <th class="text-left">Total</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>{{ item.name }}</td>
              <td><img :src="item.image" width="50px" /></td>
              <td>{{ item.category }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.descrition }}</td>
              <td>
                <v-icon @click="minus(item)">remove</v-icon> {{ item.qty }}
                <v-icon @click="add(item)"> add</v-icon>
              </td>
              <td>{{ item.total }}</td>
              <td><v-btn @click="del(item)">Delete</v-btn></td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col>
        <v-card class="pad">
          <v-card-text><h2> TotalPrice: {{ total }} THB. </h2></v-card-text>
          <v-btn color="success" @click="buyOrder">Ok</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.cart = this.$store.getters.itemInCart;
  },
  computed: {
    total() {
      var sum = 0;
      this.cart.forEach((item) => {
        sum += parseFloat(item.total);
      });
      return sum;
    },
  },
  methods: {
    minus(item) {
      item.qty -= 1;

      if (item.qty < 1) {
        item.qty = 1;
      }
      item.total = item.qty * item.price;
    },
    add(item) {
      item.qty += 1;
      item.total = item.qty * item.price;
    },
    del(item) {
      var i = this.cart.indexOf(item);
      this.cart.splice(i, 1);
    },
    buyOrder() {
      if (this.total > 0) {
        alert("OrderSuccess");
        window.location.href = "/frontend/products";
      }
    },
  },
};
</script>

<style>
.pad {
  text-align: center;
  margin-top: 20px;
  width: 300px;
}
</style>