<template>
  <div>
    <HeaderAdmin/>
    <v-container >
      <router-view />
    </v-container>
    
  </div>
</template>

<script>
import HeaderAdmin from "../components/frontend/HeaderAdmin.vue"
export default {
  components: { HeaderAdmin},
};
</script>

<style>

</style>