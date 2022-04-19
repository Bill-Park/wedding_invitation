<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column">
        <v-row class="pb-0 mb-0" align="center">
          <v-col cols=4>
            <v-subheader class="black--text justify-center pl-0">
              성&nbsp;&nbsp;&nbsp;&nbsp;함
            </v-subheader>
          </v-col>
          <v-col>
            <v-text-field label="이름을 적어주세요" v-model="name" dense outlined clearable hide-details="true">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="justify-center pb-0" align="center">
          <v-col cols=4 class="align-center justify-center">
            <v-subheader class="black--text justify-center pl-0">
              추가인원
            </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="numbers"
              label="7세 미만"
              v-model="withChildNum"
            />
          </v-col>
          <v-col>
            <v-select :items="numbers" label="그 외" v-model="withPeopleNum" />
          </v-col>
        </v-row>
        <v-row class="justify-center pt-0 mt-0">
          <v-spacer cols=4 v-if="!isMobile"></v-spacer>
          <v-col class="ma-0 pa-0" :cols="isMobile ? '12' : '8'">
            가족은 대표로 1분만 등록해주세요
          </v-col>
        </v-row>
        <v-row cols=4 class="justify-center" align="center">
          <v-col>
            <v-subheader class="black--text justify-center pl-0">
              식사여부
            </v-subheader>
          </v-col>
          <v-col cols="8">
            <v-btn-toggle v-model="meal" tile color="blue accent-3" group>
              <v-btn value="eat" outlined plain class="mx-0">잘먹겠습니다</v-btn>
              <v-btn value="not" outlined plain class="mx-0">다음 기회에</v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row class="justify-center" align="center">
          <v-col cols=4>
            <v-subheader class="black--text justify-center pl-0">
              주차유무
            </v-subheader>
          </v-col>
          <v-col cols=8>
            <v-btn-toggle v-model="move" tile color="blue accent-3" group>
              <v-btn value="yes" outlined plain width="33%">주차 필요</v-btn>
              <v-btn value="with" outlined plain width="33%">얻어타요</v-btn>
              <v-btn value="no" outlined plain width="33%">필요 없음</v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row group class="align-self-center">
          <v-btn @click="save">저장하기</v-btn>
          <v-btn @click="closeSubmit">닫기</v-btn>
        </v-row>
        <v-subheader class="subtitle-2 text-center align-self-center mt-3">
          수정이 필요하신 분은 연락주시기 바랍니다.
        </v-subheader>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { getDatabase } from 'firebase/database'
import {
  ref as rtRef,
  set
} from 'firebase/database'
import { rtdb } from '@/boot/firebase'

@Component({
  props: {
    isMobile: {
      type: Boolean
    }
  }
})
export default class LayoutAttendance extends Vue {
  numbers = [0, 1, 2, 3] // with people num list
  name = ''
  withPeopleNum = 0
  withChildNum = 0
  meal = ''
  move = ''
  closeSubmit ():void { // close submit page
    this.$emit('submitClose')
  }

  async save ():Promise<void> {
    const now = new Date()
    console.log(this.name, this.withPeopleNum, this.meal, this.move)
    try {
      await set(rtRef(rtdb, 'attendance/' + now.getTime()), {
        name: this.name,
        withPeopleNum: this.withPeopleNum,
        withChildNum: this.withChildNum,
        meal: this.meal,
        move: this.move,
        updateDt: now.toLocaleString()
      })
      alert('등록이 완료되었습니다.')
    } catch {
      alert('등록에 실패했습니다.')
    }
  }
}

</script>

<style scoped>
  .v-subheader {
    font-size: 1.2rem;
  }

</style>
