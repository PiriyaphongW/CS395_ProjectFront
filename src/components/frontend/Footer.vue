<template>
  <div>
    <v-footer dark padless flat tile class="indigo lighten-1 white--text text-center">
      
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Piriyaphong Wiripanya <br>
          ID: 6204101337
        </v-card-text>

        <v-divider></v-divider>
        <hr>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style>
.white--text{
    padding: 0px;

} 

</style>