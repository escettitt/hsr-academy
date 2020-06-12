<template>
  <div class="about-us">
    <div class="about-us__wrapper">
      <div class="page__text-title color-white">
        МЫ ДАЕМ СИЛЬНЫЙ СТАРТ
        <br />>
      </div>
      <div class="about-us__body">
        <div class="about-us__element">
          <div class="about-us__element_pic order-2">
            <img src="../assets/img/moon.svg" alt />
          </div>
          <div class="about-us__element__body order-1">
            <div class="about-us__element_text">
              <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
              <p>Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
            </div>
          </div>
        </div>
        <div class="about-us__element">
          <div class="about-us__element__body">
            <div class="about-us__element_text-name">ИМЯ ОСНОВАТЕЛЯ</div>
            <div class="about-us__element_text-subname">Основатель академии HSR</div>
            <div class="about-us__element_pic about-us__order-1" v-if="width < 1021">
              <img src="../assets/img/founder.png" alt />
            </div>
            <div class="about-us__element_text element_text__left">
              <p>
                Академия HSR - образовательный центр, который ставит главной целью помочь вам построить классную карьеру в IT. В основе программы наших курсов лежат реальные требования IT-рынка.
                Наши методисты и преподаватели постоянно работают над её улучшением и обновлением, чтобы выпускники HSR Академии могли достойно показать себя перед работодателем.
              </p>
              <p>Наше отличие - мы предоставляем возможность трудойстройства по окончанию курсов.</p>Мы готовим профессионалов, которых нельзя заменить искусственным интеллектом!
            </div>
          </div>
          <div class="about-us__element_pic" v-if="width >=1021">
            <img src="../assets/img/founder.png" alt />
          </div>
        </div>
      </div>
      <div class="about-us__circle">
        <div class="about-us__circle_text">
          <div class="about-us__circle-title">
            Для нас главное -
            ваш результат!
          </div>
          <div
            class="about-us__circle-description"
          >Все, что от вас требуется, это желание и упорство, все остальное мы берем на себя!</div>
          <router-link to="/" class="button-more color-white">Смотреть курсы</router-link>
        </div>
      </div>
      <div class="bar__gradient bar__gradient_page"></div>
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