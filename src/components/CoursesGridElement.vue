<template>
  <router-link to="/robo" class="element__course">
    <div class="element__course_header">
      <div class="element__course__gradient"></div>
      <div class="element__course_header_text">{{ number }}</div>
    </div>
    <div class="element__course_body">
      <div class="element__course_icon"><img :src="value.img" alt=""></div>
      <div class="element__course_text">{{ value.name }}</div>
    </div>
    <!-- <div class="bar__gradient bar__gradient_course"></div> -->
  </router-link>
</template>
<script>
export default {
  props: ["value"],
  computed: {
    number(){
      var a;
      if((this.value.id / 10) < 1){
        a = '0' + this.value.id % 10;
      }
      else{
        a = this.value.id
      }
      return a;
    }
  }
};
</script>
