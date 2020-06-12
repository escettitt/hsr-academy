<template>
  <div class="page main">
    <main-section :centered='true' class="main__hire_bg">
      <template v-slot:title>
        <span class="color-violet">Программа</span>
        <br />
        <span class="color-black">трудоустройства</span>
        <br />
      </template>
      <template v-slot:subtitle>
        <div class="color-black">Обучаем и помогаем начать карьеру в IT</div>
      </template>
      <template v-slot:link>
        <a href="#hire" class="button-more color-black">Подробнее</a>
      </template>
    </main-section>
    <hire-section></hire-section>
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
import HireSection from "../sections/Hire";
import InfoSection from "../sections/Info";
import InfoElement from "../components/InfoElement";
import SliderNews from '../components/SliderNews'
export default {
  components: {
    MainSection,
    HireSection,
    InfoSection,
    InfoElement,
    SliderNews
  },
  data() {
    return {
      data: [1, 2, 3, 4]
    };
  }
};
</script>
