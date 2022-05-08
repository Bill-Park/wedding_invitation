<template>
  <layout-normal/>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutNormal from '@/components/layout/normal.vue'
import LayoutAuth from '@/components/layout/auth.vue'

@Component({
  components: {
    LayoutNormal, LayoutAuth
  }
})
export default class App extends Vue {
  submitFlag = false
}
</script>

<style lang="scss">
.v-application {
    font-family: 'malgun', sans-serif !important;
  }
@font-face {
  font-family:"malgun";
  src: url('assets/fonts/malgun.ttf') format('truetype');
  font-weight:300;
}
@font-face {
  font-family:"nanum_gang";
  src: url('assets/fonts/nanum_gang.ttf') format('truetype');
  font-weight:300;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #434343;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
