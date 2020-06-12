<template>
  <div class="section_news__wrapper">
    <div class v-if="width >= 1021">
      <div class="page__text-title container">
        <span class="color-black">НОВОСТИ</span>
        <br />
        <span class="color-violet">></span>
      </div>
      <div class="section_news__wrap">
        <div class="section_news__slider">
          <div class="slider_text__wrapper">
            <slick :options="settings" id="c1">
              <div class="slider_text">
                <div class="h1">
                  // Открыта регистрация на третий Soft skills meetup
                </div>
                <p class="font-light">
                  = Встреча пройдет 22 декабря на базе HSR Academy. Количество
                  мест ограничено!
                </p>
                <router-link
                  to="/"
                  class="page__button-more color-white font-light"
                  >Подробнее</router-link
                >
              </div>

              <div class="slider_text">
                <div class="h1">
                  // Открыта регистрация на третий Soft skills meetup
                </div>
                <p class="font-light">
                  = Встреча пройдет 22 декабря на базе HSR Academy. Количество
                  мест ограничено!
                </p>
                <router-link
                  to="/"
                  class="page__button-more color-white font-light"
                  >Подробнее</router-link
                >
              </div>
            </slick>
          </div>

          <div class="slider_image__wrapper">
            <div class="slider_image__inner">
              <slick :options="settings" id="c2" ref="slick">
                <div class="slider-news__img">
                  <img src="@/assets/img/chel.png" alt />
                </div>

                <div class="slider-news__img">
                  <img src="@/assets/img/chel.png" alt />
                </div>
              </slick>
            </div>
          </div>
        </div>
        <div class="slider_image__navigate">
          <div class="slider_image__navigate_previous" id="slick-prev"></div>
          <div class="slider_image__navigate_next" id="slick-next"></div>
        </div>
      </div>
    </div>
    <div class v-if="width < 1021">
      <div class="page__text-title">
        <span class="color-black">НОВОСТИ</span>
        <br />
        <span class="color-violet">></span>
      </div>
      <div class="section_news__wrap">
        <div class="section_news__overflow">
          <div class="section_news__element" v-for="i in data" :key="i">
            <div class="section_news__image">
              <img src="../assets/img/chel.png" alt="" />
            </div>
            <div class="card_news__body">
              <div class="card_news__title">
                // Лучшие IT курсы в HSR Academy! Победа в конкурсе “Выбор года”
              </div>
              <div class="card_news__text">
                = Победитель в каждой номинации определяется по результатам
                комплексной оценки и проверки итогов аудиторской компании.
              </div>
              <router-link to="/" class="button-more color-black"
                >Подробнее</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  name: "SliderNews",
  components: { Slick },
  data() {
    return {
      data: [1, 2, 3, 4]
    };
  },
  computed: {
    width() {
      return window.innerWidth;
    },
    settings() {
      return {
        arrows: false,
        slidesToScroll: 1,
        asNavFor: "#c2",
        slidesToShow: 1
      };
    },
    settings2() {
      return {
        arrows: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        asNavFor: "#c1",
        slidesToSCroll: 1
      };
    }
  }
};
</script>
