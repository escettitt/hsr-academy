<template>
  <div class="info__wrapper" @mousemove="parallax">
    <div class="info__container">
      <div class="info__header desktop-uppercase" v-if="header">
        <span class="color-white"><slot name="header"></slot></span>
      </div>
      <div class="info__content">
        <slot></slot>
      </div>
    </div>
    <div class="bar__gradient bar__gradient_page"></div>
    <div class="info__parallax" ref="parrallaxBlock">
      <img class="info__circles" src="../assets/img/info/circles.png" alt="">
    </div>
  </div>
</template>
<script>

  import TweenLite from 'gsap';

  export default {
    props:['header'],
    data() {
      return {
        parallaxBlock: null,
        height: null,
        width: null,
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
      this.height = this.parallaxBlock.clientHeight
      this.width = this.parallaxBlock.clientWidth
    }
  }

</script>