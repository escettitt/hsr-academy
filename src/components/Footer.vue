<template>
  <div class="footer">
    <div class="footer__wrapper" v-if="width>=1021"></div>
    <div class="footer__container">
      <div class="footer__row">
        <div class="footer__column footer__border_right">
          <div
            class="footer__subtitle border_horizontal"
          >Образовательный центр программирования и высоких технологий HSR</div>
          <p class="footer__text semi-transparent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="footer__column">
          <div class="footer__title">// Заинтересованы? Запишитесь на курс сейчас!</div>
          <div class="bar__gradient bar__gradient_footer"></div>
          <router-link to="/study" class="button button_outline-white mt-6 footer__center mb-5">Присоединится</router-link>
        </div>
      </div>
      <div class="footer__row mb-5">
        <div class="footer__column footer__border_right order-2">
          <ul class="footer__nav">
            <li>
              <router-link to="/">Главная</router-link>
            </li>
            <li>
              <router-link to="/about">О нас</router-link>
            </li>
            <li>
              <router-link to="/study">Обучение</router-link>
            </li>
            <li>
              <router-link to="/news">Новости</router-link>
            </li>
            <li>
              <router-link to="start">Ближайшие старты</router-link>
            </li>
            <li>
              <router-link to="/hire">Трудоустройство</router-link>
            </li>
            <!-- <li>
              <a href="#">Онлайн обучение</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li> -->
          </ul>
        </div>
        <div class="footer__column order-1">
          <div class="footer__text footer__text__big mt-1">E-mail // sales@hardsoftrobotics.com</div>
          <div class="footer__text footer__text__big mt-1">Phone // +79107670600</div>
        </div>
              <div class="footer__copyright order-3" v-if="width <1020">Copyright 2020 HSR Academy</div>
      </div>
    </div>
    <div class="footer__copyright" v-if="width >=1021">Copyright 2020 HSR Academy</div>
  </div>
</template>
<script>
export default {
  computed: {
    width() {
      return window.innerWidth;
    }
  }
};
</script>
