<template>
  <div class="main__block" @mousemove="parallax">
    <div class="main__wrapper" :class="{'main__centered': centered == true}">
      <slot name="bg"></slot>
      <div class="main__body" :class="{'main__text-center': centered == true}">
      <div class="page__text-title">
        <slot name="title" class="page__text-title"></slot>
        <span class="color-violet" v-if="centered != true">></span>
      </div>
      <div class="page__text-subtitle mb-3">
        <slot name="subtitle"></slot>
      </div>
      <slot name="link"></slot>
      <slot name="component"></slot>
      </div>
      <slot name="img"></slot>
      <div class="bar__gradient bar__gradient_page"></div>
    </div>
    <div class="main__parallax" ref="parrallaxBlock">
      <img class="main__circles" src="../assets/img/main/little-circles.png" alt="">
    </div>
  </div>
</template>

<script>
  
  import TweenLite from 'gsap';

  export default {
    props: ['centered'],
    data() {
      return {
        parallaxBlock: null,
        height: window.innerHeight,
        width: window.innerWidth,
        resistanse: -10
      }
    },
    methods: {
      parallax(e) {
        TweenLite.to(this.parallaxBlock, 2, {
          x: -(e.clientX - this.width / 2) / this.resistanse,
          y: -(e.clientY - this.height / 2) / this.resistanse
        })
      }
    },
    mounted() {
      this.parallaxBlock = this.$refs.parrallaxBlock
    }
  }

</script>