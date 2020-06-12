<template>
        <div class="section__wrapper">
      <div class="page__text-title ml-3">
        <span class="color-black">ОБУЧЕНИЕ</span><br /><span
          class="color-violet"
          >></span
        >
      </div>
      <courses-grid></courses-grid>
      <div class="bar__gradient bar__gradient_page"></div>
    </div>
</template>
<script>
import CoursesGrid from '../components/CoursesGrid'
export default {
    
    components:{CoursesGrid}
}
</script>