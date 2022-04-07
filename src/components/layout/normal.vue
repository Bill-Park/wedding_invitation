<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column">
        <v-img src="@/assets/main.jpg" height="50%"> </v-img>
        <v-row group class="mt-4 align-self-center">
          <v-btn outlined x-large class="rounded rounded-r-0 title" @click="openSubmit">참석 등록</v-btn>
          <v-btn outlined x-large class="rounded-0 title" @click="openPhotos">사진보기</v-btn>
          <v-btn outlined x-large class="rounded rounded-l-0 title" @click="openSubmit">약도보기</v-btn>
        </v-row>
        <v-row class="align-self-center red--text lighten-1" v-show="!submitFlag">
          참석 등록을 하지않은 경우 식사가 어려울 수 있으니 꼭 등록해주시기
          바랍니다.
        </v-row>
        <layout-attendance class="mt-5" v-show="submitFlag" @submitClose="submitClose" />
        <layout-photos v-if="photoFlag" @photoClose="photoCLose"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutAttendance from '@/components/layout/attendance.vue'
import LayoutPhotos from '@/components/layout/photos.vue'

@Component({
  components: {
    LayoutAttendance, LayoutPhotos
  }
})
export default class LayoutNormal extends Vue {
    submitFlag = false
    photoFlag = false

    openSubmit (): void {
      this.submitFlag = true
    }

    submitClose (): void {
      this.submitFlag = false
    }

    openPhotos (): void{
      this.photoFlag = true
    }

    closePhotos (): void{
      this.photoFlag = false
    }
}
</script>

<style scoped>

</style>
