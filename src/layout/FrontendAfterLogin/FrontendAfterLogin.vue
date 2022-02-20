<template>
  <div>
      <HeaderProduct />
      <router-view/>
      
  </div>
</template>

<script>
import HeaderProduct from '@/components/frontend/HeaderProduct.vue'
export default {
    components:{
        HeaderProduct
    }

}
</script>

<style>

</style>