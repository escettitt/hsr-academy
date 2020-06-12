<template>
  <div class="page main">
    <main-section>
      <template v-slot:title>
        <span class="color-violet">Регистрация</span>
        <br />
        <span class="color-black">на курс</span>
        <br />
      </template>
      <template v-slot:subtitle>
        <div class="color-black">
          80% студентов из HSR Academy уже
          <br />получили работу в IT компаниях
        </div>
      </template>
      <template v-slot:link>
        <router-link to="/" class="button-more color-black">Смотреть все курсы</router-link>
      </template>
      <template v-slot:component>
        <Registration></Registration>
      </template>
            <template v-slot:img>
              <img class="main__image registration" src="../assets/img/regimg.png" alt="">
      </template>
    </main-section>
    <study-section></study-section>
    <info-section >
      <InfoElement v-for="i in data" :key="i">
        <template v-slot:header>170+</template>
        <template v-slot:title>Обучающих курсов</template>
        <template v-slot:text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </template>
      </InfoElement>
    </info-section>
    <SliderNews></SliderNews>
    <slot></slot>
  </div>
</template>
<script>
import MainSection from "../sections/Main";
import InfoSection from "../sections/Info";
import InfoElement from "../components/InfoElement";
import SliderNews from '../components/SliderNews'
import StudySection from "../sections/Study";

import Registration from "../components/Registration";
export default {
  components: {
    MainSection,
    InfoSection,
    InfoElement,
    SliderNews,
    StudySection,
    Registration
  },
  data() {
    return {
      data: [1, 2, 3, 4]
    };
  }
};
</script>
