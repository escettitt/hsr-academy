<template>
    <div class="starts__wrapper"  id="courses">
        <div class="page__text-title">Успей записаться <br> <span class="color-violet">></span></div>
        <course-card-small></course-card-small>
        <course-card-small></course-card-small>
        <course-card-small></course-card-small>
        <course-card-small></course-card-small>
        <div class="bar__gradient bar__gradient_page"></div>
    </div>
</template>
<script>
import CourseCardSmall from '../components/CardCoursesSmall'
export default {
    components: {CourseCardSmall}
}
</script>