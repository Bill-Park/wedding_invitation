<template>
  <v-app>
    <v-main>
      웨딩사진 보기
      <v-container class="d-flex flex-column justify-center">
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LayoutPhotos extends Vue {
  closePhoto ():void { // close photo page
    this.$emit('photoClose')
  }
}

</script>

<style scoped>

</style>
