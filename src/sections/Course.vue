<template>
  <div class="course__wrapper">
    <div class="page__text-title desktop-uppercase">
      Описание курса
      <br />
      <span class="color-violet">></span>
    </div>
    <div class="course__description">
      <slot name="description"></slot>
    </div>
    <div class="card_course__wrapper" v-if="width >=1021">
      <div class="card_course__header">
        <div class="card_course__row">
          <span class="card_course__title">
            <slot name="course"></slot>
          </span>
          <div class="button button_primary">Записаться</div>
        </div>
        <div class="card_course__row mt-2">
          <div class="card_course__text color-violet">
            <span class="fire fire_violet"></span>Старт 10.03.2020
          </div>
          <div class="card_course__text color-gray">Осталось 7 мест из 20</div>
        </div>
      </div>
      <div class="card_course__subtitle card_course__border">Форма обучения</div>
      <div class="card_course__price">
        <div class="card_course__column">
          <div class="card_course__text">
            <slot name="days"></slot>
          </div>
          <div class="card_course__text">
            <slot name="timetable"></slot>
          </div>
          <div class="card_course__text color-gray_light">
            <slot name="time"></slot>
          </div>
        </div>
        <div class="card_course__column">
          <div class="card_course__title">
            <slot name="price"></slot>
          </div>
          <div class="card_course__text color-gray_light">Рассрочка три выплаты</div>
          <div class="card_course__text color-gray_light">
            <slot name="credit"></slot>
          </div>
        </div>
      </div>
      <div class="card_course__about">
        <div class="card_course__subtitle">Для кого этот курс</div>
        <ul class="about_list">
          <slot name="whom"></slot>
        </ul>
      </div>
      <div class="card_course__program">
        <div class="card_course__subtitle">Программа курса</div>
        <ul class="card_course__program__body">
          <slot name="program"></slot>
        </ul>
      </div>
    </div>
    <div class="card_course__wrapper" v-if="width<1021">
      <span class="card_course__title">
        <slot name="course"></slot>
      </span>
      <div class="card_course__text color-violet pb-4">
        <span class="fire fire_violet"></span>Старт 10.03.2020
      </div>
      <div class="card_course__column">
        <div class="card_course__title">
          <slot name="price"></slot>
        </div>
        <div class="card_course__text color-gray_light">Рассрочка три выплаты</div>
        <div class="card_course__text color-gray_light">
          <slot name="credit"></slot>
        </div>
      </div>
      <div class="button button_primary mb-1">Записаться</div>

      <div class="card_course__text color-gray mb-4">Осталось 7 мест из 20</div>
      <div class="card_course__subtitle card_course__border">Форма обучения</div>
      <div class="card_course__column card_course__border pb-2">
        <div class="card_course__text">
          <slot name="days"></slot>
        </div>
        <div class="card_course__text">
          <slot name="timetable"></slot>
        </div>
        <div class="card_course__text color-gray_light">
          <slot name="time"></slot>
        </div>
      </div>
      <div class="card_course__about">
        <div class="card_course__subtitle">Для кого этот курс</div>
        <ul class="about_list">
          <slot name="whom"></slot>
        </ul>
      </div>
      <div class="card_course__program">
        <div class="card_course__subtitle">Программа курса</div>
        <ul class="card_course__program__body">
          <slot name="program"></slot>
        </ul>
      </div>
    </div>
    <div class="bar__gradient bar__gradient_courses"></div>
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
