<template>
  <div>
    <v-btn color="success" @click="addproduct">AddProduct</v-btn>
    <v-row>
      <!--Table-->
      <v-col>
        <v-simple-table>
          <thead class="theadco">
            <tr>
              <th class="text-left">Number</th>
              <th class="text-left">Name</th>
              <th class="text-left">image</th>
              <th class="text-left">category</th>
              <th class="text-left">price</th>
              <th class="text-left">description</th>
              <th class="text-left">amount</th>

              <th class="text-left">Create_At</th>
              <th class="text-left">Update_At</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="item.id">
              <th>{{ index + 1 }}</th>
              <td>{{ item.name }}</td>
              <td><img :src="item.image" width="50px" /></td>
              <td>{{ item.category }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.created_at }}</td>
              <td>{{ item.updated_at }}</td>
              <td>
                <v-btn class="my-4" color="yellow" @click="edit(item.id)"
                  >Edit</v-btn
                >
                <v-btn color="error" @click="del(item.id)">Del </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row justify="center">
      <!--DialogNewProduct-->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">ProductDetail</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Name"
                    v-model="name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Category"
                    v-model="category"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Amount"
                    v-model="amount"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Price"
                    v-model="price"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Description*"
                    v-model="description"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Image"
                    v-model="image"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6"> </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <div>
      <!--DialogEdit-->
      <v-row justify="center">
        <v-dialog v-model="dialogEdit" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">ProductDetail</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Name"
                      v-model="nameedit"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Category"
                      v-model="categoryedit"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Amount"
                      v-model="amountedit"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Price"
                      v-model="priceedit"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Description*"
                      v-model="descriptionedit"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-img :src="imageedit" width="200px" height="200px"> </v-img>
                  <v-col cols="12">
                    <v-text-field
                      label="Image"
                      v-model="imageedit"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6"> </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogEdit = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="saveedit(idedit)">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>

<script>
import http from "@/Services/FrontendService";
export default {
  data() {
    return {
      products: {},
      dialog: false,
      dialogEdit: false,

      name: "",
      image: "",
      description: "",
      category: "",
      price: "",
      amount: "",

      nameedit: "",
      imageedit: "",
      descriptionedit: "",
      categoryedit: "",
      priceedit: "",
      amountedit: "",
    };
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
  methods: {
    del(id) {
      http.delete(`productDelete/${id}`).then(() => {
        window.location.href = "/Backend/Admin";
      });
    },
    addproduct() {
      this.dialog = true;
    },
    save() {
      this.dialog = false;
      let newProduct = {
        name: this.name,
        image: this.image,
        category: this.category,
        description: this.description,
        amount: this.amount,
        price: this.price,
      };

      http.post("productCreate", newProduct).then(() => {
        window.location.href = "/Backend/Admin";
      });
    },
    edit(id) {
      this.dialogEdit = true;
      http.get(`productReadID/${id}`).then((response) => {
        this.idedit = response.data.id;
        this.nameedit = response.data.name;
        this.imageedit = response.data.image;
        this.descriptionedit = response.data.description;
        this.categoryedit = response.data.category;
        this.priceedit = response.data.price;
        this.amountedit = response.data.amount;
      });

      console.log(id);
    },
    saveedit(id) {
      let updatededit = {
        name: this.nameedit,
        image: this.imageedit,
        category: this.categoryedit,
        description: this.descriptionedit,
        amount: this.amountedit,
        price: this.priceedit,
      };
      http.put(`productUpdate/${id}`, updatededit).then(() => {
        window.location.href = "/Backend/Admin";
      });
    },
  },
};
</script>

<style>

</style>