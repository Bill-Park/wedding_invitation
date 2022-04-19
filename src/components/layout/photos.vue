<template>
  <v-app>
    <v-main>
      웨딩사진 보기
      <swiper class="swiper" :options="swiperOption" @reachEnd="swipe('end')">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

@Component({
  components: {
    swiper, swiperSlide
  }
})
export default class LayoutPhotos extends Vue {
  move = []
  drag = false
  touch = false
  swiperOption = {
    effect: 'flip',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  closePhotos ():void { // close photo page
    this.$emit('closePhotos')
  }

  swipe (direction:string) :void{
    console.log(direction)
  }
}

</script>

<style scoped>
.swiper-slide {
  background-position: center;
  background-size: contain;
  width: 100%;
  min-height: 50vh;
}
.swiper-slide.slide-1 {
  background-image: url('../../assets/바다 (2).jpg');
}
.swiper-slide.slide-2 {
  background-image: url('../../assets/바다 (3).jpg');
}
.swiper-slide.slide-3 {
  background-image: url('../../assets/바다 (5).jpg');
}
.swiper-slide.slide-4 {
  background-image: url('../../assets/바다 (6).jpg');
}
.swiper-slide.slide-5 {
  background-image: url('../../assets/바다 (2).jpg');
}
</style>
