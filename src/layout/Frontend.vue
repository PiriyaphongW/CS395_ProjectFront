<template>
  <div>
    <Header />
    
      <router-view  />
   
    <!-- <Footer class="footer" /> -->
  </div>
</template>

<script>
import Header from "../components/frontend/Header.vue";
// import Footer from "../components/frontend/Footer.vue";
export default {
  components: { Header },
};
</script>

<style>
.footer {
  
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
 
  
}

</style>