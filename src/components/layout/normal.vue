<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column pa-0 pt-5">
        <v-row class="align-self-center title mt-5">SangWoo &#38; MinJi</v-row>
        <v-row id="impact" class="align-self-center display-1 mt-5" :class="{'mobile-font':isMobile()}">Wedding Invitation</v-row>
        <v-row class="align-self-center subtitle-1 mt-9" style="font-weight:bold">2022.06.18 SAT PM 01:00</v-row>
        <v-row class="align-self-center subtitle-1 mt-2">그레이스 K 부산</v-row>
        <v-row id="button_group" group class="mt-10 align-self-center px-2 d-flex flex-row">
          <v-btn
          :x-large="!isMobile()"
          color="grey lighten-2"
          class="rounded rounded-r-0 title gray--text text--darken-3 subtitle-1"
          @click="toggleSubmit"
          :class="{'light-blue lighten-5 blue--text':submitFlag, 'px-5 py-5':isMobile()}">
          참석 등록
          </v-btn>
          <v-btn
          :x-large="!isMobile()"
          color="grey lighten-2"
          class="rounded-0 title gray--text text--darken-3 subtitle-1"
          @click="togglePhotos"
          :class="{'light-blue lighten-5 blue--text':photoFlag, 'px-5 py-5':isMobile()}">
          사진보기
          </v-btn>
          <v-btn
          color="grey lighten-2"
          :x-large="!isMobile()"
          class="rounded rounded-l-0 title gray--text text--darken-3 subtitle-1"
          @click="dialogFlag=true"
          :class="{'px-5 py-5':isMobile()}">
          식장위치
          </v-btn>
        </v-row>
        <v-row class="align-self-center my-5 subtitle-1 grey--text lighten-3" v-show="!(submitFlag || photoFlag)">
          참석 미등록시 식사가 어려울 수 있습니다.
        </v-row>
        <v-row v-show="submitFlag">
          <layout-attendance class="mt-5" @submitClose="submitClose" :isMobile="isMobile()"/>
        </v-row>
        <v-row v-if="photoFlag">
          <layout-photos class="mt-5" @closePhotos="closePhotos" style="width:100%"/>
        </v-row>
        <v-dialog v-model="dialogFlag" width="fit-content">
          <v-card class="rounded-lg" width="fit-content">
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

        <v-row class="mt-1" v-show="!(submitFlag || photoFlag)">
          <v-img class="align-self-center" src="@/assets/comp_main.webp"/>
        </v-row>
        <layout-information
          v-show="!(submitFlag || photoFlag)"
          class="mt-10"
          :isMobile="isMobile()">
        </layout-information>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutAttendance from '@/components/layout/attendance.vue'
import LayoutPhotos from '@/components/layout/photos.vue'
import LayoutInformation from '@/components/layout/information.vue'

@Component({
  components: {
    LayoutAttendance, LayoutPhotos, LayoutInformation
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
  #impact {
    font-family: Impact !important;
    color: #783f04 ;
  }
  .mobile-font {
    font-size: 2.6rem !important ;
  }
</style>
