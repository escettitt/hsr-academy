<template>
  <div class="section_students__wrapper">
    <div class="page__text-title desktop-uppercase">
      <span class="color-black">Отзывы</span>
      <br />
      <span class="color-violet">выпускников</span>
    </div>
    <div class="students__slider">
      <VueSlickCarousel v-bind="settings">
        <div class="students__rewiew">
          <div class="students__rewiew_header">
            <div class="students__rewiew_image"></div>
            <div class="students__rewiew_header_text">
              <div class="students__rewiew_title">Ксения Випускникова</div>
              <div class="students__rewiew_subtitle">Курс «Функциональное тестирование ПО»</div>
            </div>
          </div>
          <div class="students__rewiew_text">
            <span class="quote">“</span>Lorem Ipsum является стандартной "рыбой" для
            текстов на латинице с начала XVI века. В то время некий безымянный
            печатник создал большую коллекцию размеров и форм шрифтов, используя
            Lorem Ipsum для распечатки образцов!
          </div>
        </div>
        <div class="students__rewiew">
          <div class="students__rewiew_header">
            <div class="students__rewiew_image"></div>
            <div class="students__rewiew_header_text">
              <div class="students__rewiew_title">Ксения Випускникова</div>
              <div class="students__rewiew_subtitle">Курс «Функциональное тестирование ПО»</div>
            </div>
          </div>
          <div class="students__rewiew_text">
            <span class="quote">“</span>Lorem Ipsum является стандартной "рыбой" для
            текстов на латинице с начала XVI века. В то время некий безымянный
            печатник создал большую коллекцию размеров и форм шрифтов, используя
            Lorem Ipsum для распечатки образцов!
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <!-- <router-link to="/" class="button-students color-black font-light students__button_none">Смотреть все отзывы</router-link> -->
  </div>
</template>




<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "SliderReview",
  components: { VueSlickCarousel },
  methods: {
    // showNext() {
    //   this.$refs.c1.carousel.next();
    // }
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToSCroll: 1
      }
    };
  }
};
</script>
