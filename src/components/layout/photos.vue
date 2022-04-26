<template>
  <v-app>
    <v-main>
      <swiper class="swiper" :options="swiperOption" @reachEnd="swipe('end')">
        <swiper-slide
          v-for="n in 24"
          :key="n"
          :class="['slide-' + n]">
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-white mt-0" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white mt-0" slot="button-next"></div>
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
    // effect: 'fade',
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
::v-deep .v-application--wrap {
    /* min-height: unset; */
    min-height: fit-content;
}
.swiper-slide {
  background-position: center;
  background-size: contain;
  width: 100%;
  min-height: 60vh;
}
.swiper-slide.slide-1 {
  background-image: url('../../assets/옷_1.webp');
}
.swiper-slide.slide-2 {
  background-image: url('../../assets/옷_2.webp');
}
.swiper-slide.slide-3 {
  background-image: url('../../assets/페스티벌_1.webp');
}
.swiper-slide.slide-4 {
  background-image: url('../../assets/페스티벌_2.webp');
}
.swiper-slide.slide-5 {
  background-image: url('../../assets/페스티벌_3.webp');
}
.swiper-slide.slide-6 {
  background-image: url('../../assets/페스티벌_4.webp');
}
.swiper-slide.slide-7 {
  background-image: url('../../assets/숲_1.webp');
}
.swiper-slide.slide-8 {
  background-image: url('../../assets/숲_2.webp');
}
.swiper-slide.slide-9 {
  background-image: url('../../assets/숲_3.webp');
}
.swiper-slide.slide-10 {
  background-image: url('../../assets/숲_4.webp');
}
.swiper-slide.slide-11 {
  background-image: url('../../assets/서부_1.webp');
}
.swiper-slide.slide-12 {
  background-image: url('../../assets/서부_2.webp');
}
.swiper-slide.slide-13 {
  background-image: url('../../assets/서부_3.webp');
}
.swiper-slide.slide-14 {
  background-image: url('../../assets/서부_4.webp');
}
.swiper-slide.slide-15 {
  background-image: url('../../assets/서부_5.webp');
}
.swiper-slide.slide-16 {
  background-image: url('../../assets/서부_6.webp');
}
.swiper-slide.slide-17 {
  background-image: url('../../assets/서부_7.webp');
}
.swiper-slide.slide-18 {
  background-image: url('../../assets/서부_8.webp');
}
.swiper-slide.slide-19 {
  background-image: url('../../assets/서부_9.webp');
}
.swiper-slide.slide-20 {
  background-image: url('../../assets/서부_10.webp');
}
.swiper-slide.slide-21 {
  background-image: url('../../assets/바다_1.webp');
}
.swiper-slide.slide-22 {
  background-image: url('../../assets/바다_2.webp');
}
.swiper-slide.slide-23 {
  background-image: url('../../assets/바다_3.webp');
}
.swiper-slide.slide-24 {
  background-image: url('../../assets/바다_4.webp');
}
.swiper-button-white {
  opacity: 0;
  height: 100%;
  width: 25%;
  top: 0%;
}
</style>
