<template>
  <div>
    <HeaderProduct />
    <router-view />
    <!-- <Footer class="footer" /> -->
  </div>
</template>

<script>
import HeaderProduct from "@/components/frontend/HeaderProduct.vue";
// import Footer from "../../components/frontend/Footer.vue";
export default {
  components: {
    HeaderProduct,
    
  },
};
</script>

<style>
.footer {
    position: absolute;
    height: 100vh;
    bottom: 0;
  
}
</style>