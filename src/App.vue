<template>
  <div id="app">
    <router-view
      name="header"
      :class="{'header__black': isBlack(), 'header__white': !isBlack()}"
    ></router-view>
    <router-view>
      <router-view name="review"></router-view>
    </router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      black: ["Main", "Starts", "Study", 'About', 'Hire', 'News'],
      white: ["Robo"]
    };
  },
  methods: {
    isBlack() {
      var a = false
      for (var i of this.black) {
        if (i == this.$router.currentRoute.name) {
          return true;
        }
      }
      if(a == false){
        return false
      }
      else{
        return true
      }
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
