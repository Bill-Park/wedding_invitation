<template>
    <v-app>
        <v-main>
            <v-container>
                normal
                메인사진
            </v-container>
            <v-btn @click="openSubmit">참석 등록</v-btn>
            <v-btn @click="openSubmit">사진보기</v-btn>
            <v-btn @click="openSubmit">약도보기</v-btn>
            <layout-attendance
            v-show="submitFlag"
            @submitClose="submitClose"/>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutAttendance from '@/components/layout/attendance.vue'

@Component({
  components: {
    LayoutAttendance
  }
})
export default class LayoutNormal extends Vue {
    submitFlag = false

    openSubmit (): void {
      this.submitFlag = true
    }

    submitClose (): void {
      this.submitFlag = false
    }
}
</script>

<style scoped>

</style>
