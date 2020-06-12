<template>
  <div class="page main">
    <main-section>
      <template v-slot:title>
        <span class="color-violet">HSR</span>
        <br />
        <span class="color-black">ACADEMY </span>
      </template>
      <template v-slot:subtitle>
        <div class="color-black">
          Образовательный центр
          <br />программирования и высоких технологий
        </div>
      </template>
      <template v-slot:link>
        <router-link to="/about" class="button-more color-black">Узнать больше</router-link>
      </template>
      <template v-slot:img>
              <img class="main__image" src="../assets/img/main/circles.png" alt="">
      </template>
    </main-section>
    <study-section></study-section>
    <info-section>
      <InfoElement v-for="i in data" :key="i.id">
        <template v-slot:header>{{i.header}}</template>
        <template v-slot:title>{{i.title}}</template>
        <template v-slot:text>
          {{i.text}}
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
import StudySection from "../sections/Study";
import InfoElement from "../components/InfoElement";
import SliderNews from "../components/SliderNews";
export default {
  components: {
    MainSection,
    InfoSection,
    StudySection,
    InfoElement,
    SliderNews
  },
  data() {
    return {
      data: [
        {
          id: 1,
          header: "170+",
          title: "Обучающих курсов",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        },
        {
          id: 2,
          header: "80%",
          title: "Трудоустройства",
          text:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
          id: 3,
          header: "500+",
          title: "Партнеров работодателей",
          text:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          id: 4,
          header: "100+",
          title: "Лучших преподавателей",
          text:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ]
    };
  }
};
</script>
