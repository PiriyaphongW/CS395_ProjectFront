<template>
  <div>
      <Header />
      <v-container class="">
          <router-view/>
      </v-container>    
  </div>

</template>

<script>
import Header from '../components/frontend/Header.vue'
export default {
  components: { Header },

}
</script>

<style>

</style>