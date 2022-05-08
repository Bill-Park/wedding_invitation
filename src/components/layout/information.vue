<template>
    <v-main>
      <v-container class="d-flex flex-column mb-10">
        <v-row id="expression" class="align-self-center title">
        인생에서 가장 위대한 일은<br/>
        누군가를 사랑하고 사랑받는 일이라고 합니다.<br/>
        이 자리를 빌어 더 크게 도약하고자 합니다.<br/>
        여러분의 축복으로 더 큰 사랑을 만들어주세요
        </v-row>

        <v-row class="align-self-center title mt-5"
          >저희 드디어 결혼합니다.</v-row
        >
        <v-row align-content="center" class="px-0 mt-4">
          <v-col cols="6" class="px-0">
            <v-btn @click="sangWooCall" class="justify-center pa-2" color="grey lighten-2">
              신랑에게 연락하기
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" class="px-0">
            <v-btn @click="minJiCall" class="justify-center pa-2" color="grey lighten-2">
              신부에게 연락하기
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-10">
          <v-col cols="6" class="align-self-center align-center">
            <v-row class="justify-center subtitle-1 mb-0">
            신랑측 혼주
            </v-row>
            <v-row class="justify-center align-center mt-1">
              <span class="subtitle-2">아버지</span>
              <span class="ml-2 title">{{name.sangwoo_father}}</span>
            </v-row>
            <v-row class="justify-center align-center">
              <span class="subtitle-2">어머니</span>
              <span class="ml-2 title">{{name.sangwoo_mother}}</span>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row class="justify-center subtitle-1 mb-0">
            신부측 혼주
            </v-row>
            <v-row class="justify-center align-center mt-1">
              <span class="subtitle-2">아버지</span>
              <span class="ml-2 title">{{name.minji_father}}</span>
            </v-row>
            <v-row class="justify-center align-center">
              <span class="subtitle-2">어머니</span>
              <span class="ml-2 title">{{name.minji_mother}}</span>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="justify-center title mt-11">
          신랑 &#38; 신부에게 마음 전하기
        </v-row>
        <v-row class="justify-center subtitle-2 mb-1">
          축복의 의미로 축의금을 전달해보세요.
        </v-row>
        <v-row class="justify-center">
          <v-dialog
            v-model="dialogSangwoo"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                width="90%"
                color="grey lighten-2"
                class="subtitle-1"
                v-bind="attrs"
                v-on="on"
              >
                신랑측 계좌번호
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                신랑 계좌
              </v-card-title>
              <v-card-text>
                <v-row class="align-center">
                  <v-col cols=7 class="pa-0">
                      <v-card-text class="pa-0">
                        <div>
                          우리은행 (예금주: 박상우)
                        </div>
                        <div>
                          {{bankAccount.sangwoo}}
                        </div>
                      </v-card-text>
                  </v-col>
                  <v-col cols=3>
                    <v-btn
                      v-clipboard:copy="bankAccount.sangwoo"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError">
                      복사하기
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-title>
                혼주 계좌
              </v-card-title>
              <v-card-text>
                <v-row class="align-center">
                  <v-col cols=7 class="pa-0">
                      <v-card-text class="pa-0">
                        <div>
                          우리은행 (예금주:  {{name.sangwoo_father}})
                        </div>
                        <div>
                          {{bankAccount.sangwoo_father}}
                        </div>
                      </v-card-text>
                  </v-col>
                  <v-col cols=3>
                    <v-btn
                      v-clipboard:copy="bankAccount.sangwoo_father"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError">
                      복사하기
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  width="100%"
                  color="primary"
                  text
                  @click="dialogSangwoo = false"
                >
                  닫기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

        <v-row class="justify-center mt-4">
          <v-dialog
            v-model="dialogMinji"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                width="90%"
                color="grey lighten-2"
                class="subtitle-1"
                v-bind="attrs"
                v-on="on"
              >
                신부측 계좌번호
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                신부 계좌
              </v-card-title>
              <v-card-text>
                <v-row class="align-center">
                  <v-col cols=7 class="pa-0">
                      <v-card-text class="pa-0">
                        <div>
                          국민은행 (예금주: 황민지)
                        </div>
                        <div>
                          {{bankAccount.minji}}
                        </div>
                      </v-card-text>
                  </v-col>
                  <v-col cols=3>
                    <v-btn
                      v-clipboard:copy="bankAccount.minji"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError">
                      복사하기
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-title>
                혼주 계좌
              </v-card-title>
              <v-card-text>
                <v-row class="align-center">
                  <v-col cols=7 class="pa-0">
                      <v-card-text class="pa-0">
                        <div>
                          농협 (예금주: {{name.minji_father}})
                        </div>
                        <div>
                          {{bankAccount.minji_father}}
                        </div>
                      </v-card-text>
                  </v-col>
                  <v-col cols=3>
                    <v-btn
                      v-clipboard:copy="bankAccount.minji_father"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError">
                      복사하기
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-title>
                혼주 계좌
              </v-card-title>
              <v-card-text>
                <v-row class="align-center">
                  <v-col cols=7 class="pa-0">
                      <v-card-text class="pa-0">
                        <div>
                          국민은행 (예금주: {{name.minji_mother}})
                        </div>
                        <div>
                          {{bankAccount.minji_mother}}
                        </div>
                      </v-card-text>
                  </v-col>
                  <v-col cols=3>
                    <v-btn
                      v-clipboard:copy="bankAccount.minji_mother"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError">
                      복사하기
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  width="100%"
                  color="primary"
                  text
                  @click="dialogMinji = false"
                >
                  닫기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
    </v-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    isMobile: {
      type: Boolean
    }
  }
})
export default class LayoutInformation extends Vue {
  bankAccount = {
    sangwoo: process.env.VUE_APP_SANGWOO_BANK,
    sangwoo_father: process.env.VUE_APP_SANGWOO_FATHER_BANK,
    minji: process.env.VUE_APP_MINJI_BANK,
    minji_father: process.env.VUE_APP_MINJI_FATHER_BANK,
    minji_mother: process.env.VUE_APP_MINJI_MOTHER_BANK
  }

  name = {
    sangwoo_father: process.env.VUE_APP_SANGWOO_FATHER,
    sangwoo_mother: process.env.VUE_APP_SANGWOO_MOTHER,
    minji_father: process.env.VUE_APP_MINJI_FATHER,
    minji_mother: process.env.VUE_APP_MINJI_MOTHER
  }

  dialogSangwoo = false
  dialogMinji = false
  onCopy (): void {
    alert('복사되었습니다.')
  }

  onError (): void {
    alert('복사에 실패하였습니다.')
  }

  sangWooCall (): void {
    window.location.href = `tel:${process.env.VUE_APP_SANGWOO_PHONE}`
  }

  minJiCall (): void {
    window.location.href = `tel:${process.env.VUE_APP_MINJI_PHONE}`
  }
}
</script>

<style scoped>
.v-subheader {
  font-size: 1.2rem;
}
#expression {
  font-family: "nanum_gang", "malgun" !important;
  font-weight: 600;
}

</style>
