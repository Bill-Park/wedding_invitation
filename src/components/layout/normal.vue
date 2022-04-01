<template>
    <v-app>
        <v-main>
            <v-container>
                normal
            </v-container>
            <v-btn @click="openSubmit">열기</v-btn>
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
