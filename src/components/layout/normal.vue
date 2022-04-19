<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column pa-0 pt-5">
        <v-img class="align-self-center" src="@/assets/comp_main.webp" height="50%"/>
        <v-row id="button_group" group class="mt-4 align-self-center px-2 d-flex flex-row">
          <v-btn
          outlined
          :x-large="!isMobile()"
          class="rounded rounded-r-0 title"
          @click="toggleSubmit"
          :class="{'light-blue lighten-5 blue--text':submitFlag, 'px-2 py-5':isMobile()}">
          참석 등록
          </v-btn>
          <v-btn
          outlined
          :x-large="!isMobile()"
          class="rounded-0 title"
          @click="togglePhotos"
          :class="{'light-blue lighten-5 blue--text':photoFlag, 'px-2 py-5':isMobile()}">
          사진보기
          </v-btn>
          <v-btn
          outlined
          :x-large="!isMobile()"
          class="rounded rounded-l-0 title"
          @click="dialogFlag=true"
          :class="{'px-2 py-5':isMobile()}">
          식장위치
          </v-btn>
        </v-row>
        <v-row class="align-self-center red--text lighten-1 mt-5" v-show="!(submitFlag || photoFlag)">
          참석 등록을 하지않은 경우 식사가 어려울 수 있으니 꼭 등록해주시기
          바랍니다.
        </v-row>
        <layout-attendance class="mt-5" v-show="submitFlag" @submitClose="submitClose" :isMobile="isMobile()"/>
        <layout-photos class="mt-5" v-if="photoFlag" @closePhotos="closePhotos"/>
        <v-dialog v-model="dialogFlag" width="fit-content">
          <v-card class="rounded-lg" width="fit-content">
              <!-- <v-img
                class="rounded-xl"
                src="@/assets/comp_kakao_map_icon.webp"
                @click="openMap('kakao')"
                width="50%">
              </v-img>
              <v-img
                class="rounded-xl"
                src="@/assets/comp_naver_map_icon.webp"
                @click="openMap('naver')"
                width="50%">
              </v-img> -->

              <v-btn
                color="green lighten-1"
                x-large
                text
                outlined
                @click="openMap('naver')"
              >
                네이버 지도
              </v-btn>
              <v-btn
                color="yellow darken-2"
                x-large
                text
                outlined
                @click="openMap('kakao')"
              >
                카카오 맵
              </v-btn>
          </v-card>
        </v-dialog>
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
    dialogFlag = false

    toggleSubmit (): void {
      this.submitFlag = !this.submitFlag
      if (this.submitFlag) { // submitFlag 켜지면 photoFlag 끄기
        this.photoFlag = false
      }
    }

    openSubmit (): void {
      this.submitFlag = true
    }

    submitClose (): void {
      this.submitFlag = false
    }

    togglePhotos (): void{
      this.photoFlag = !this.photoFlag
      if (this.photoFlag) { // photoFlag 켜지면 submitFlag 끄기
        this.submitFlag = false
      }
    }

    openPhotos (): void{
      this.photoFlag = true
    }

    closePhotos (): void{
      this.photoFlag = false
    }

    openMap (appName:string): void{
      this.dialogFlag = false
      let url = ''
      if (appName === 'naver') {
        url = 'http://naver.me/585jte2U'
      } else {
        url = 'http://kko.to/yN6xjj1Y5'
      }
      window.open(url, '_blank')
    }

    isMobile ():boolean {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
}
</script>

<style scoped>
  .container {
    width:90%
  }
  #button_group {
    /* width:100% */
  }
</style>
