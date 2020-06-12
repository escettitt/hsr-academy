<template>
  <div class="card_course__small__wrapper">
    <div class="card_course__small__body" v-if="width >=1021">
      <div class="card_course__small__col">
        <div class="card_course__small__text-big">Курс Робототехника</div>
        <div class="card_course__small__text-small color-gray_light">Осталось 1 место из 16</div>
      </div>
      <div class="card_course__small__col">
        <div class="card_course__small__text-big medium">Сб и Вс (9.00-18.00)</div>
        <div class="card_course__small__text-small color-gray_light">108 уч.ч. (3 месяца)</div>
      </div>
      <div class="card_course__small__col">
        <div class="card_course__small__text-big">1399 BYN</div>
        <div class="card_course__small__text-small color-violet">
          <span class="fire fire_violet"></span>Старт 05.03.2020
        </div>
      </div>
      <div class="card_course__small__col">
        <router-link to="/study" class="button button_primary">Записаться</router-link>
      </div>
    </div>
    <div class="card_course__small__body" v-if="width <1021">
      <div class="card_course__small__text-big pb-1">Курс Робототехника</div>
      <div class="card_course__small__text-small color-violet pb-5">
        <span class="fire fire_violet"></span>Старт 05.03.2020
      </div>
      <div class="card_course__small__text-big pb-3">1399 BYN</div>
      <div class="card_course__small__text-small medium">Сб и Вс (9.00-18.00)</div>
      <div class="card_course__small__text-small color-gray_light pb-5">108 уч.ч. (3 месяца)</div>

      <router-link to="/study" class="button button_primary">Записаться</router-link>
      <div class="card_course__small__text-small color-gray_light">Осталось 1 место из 16</div>
    </div>
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