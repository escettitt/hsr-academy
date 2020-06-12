<template>
  <div class="page robo">
    <main-section class>
      <template v-slot:bg>
        <div class="robo__bg"></div>
      </template>
      <template v-slot:title>
        <span class="color-white">Курс</span>
        <br />
        <span class="color-white">робототехники</span>
        <br />
      </template>
      <template v-slot:subtitle>
        <div
          class="color-white"
        >Уникальная программа направлена на изучения базовых знаний по информатике, программированию, схемотехнике и конструированию</div>
      </template>
      <template v-slot:link>
        <router-link to="/study" class="button-more color-white">Записаться</router-link>
      </template>
    </main-section>
    <course-section>
      <template
        v-slot:description
      >Робототехника – это современное, набирающее популярность и востребованность направление в IT-сфере. Стоит отметить, что эта она является одной из ключевых и перспективных в нынешнее время. Обучение роботостроительству достаточно интересное и занимательное занятие для детей и взрослых. А самое главное - курсы робототехники для взрослых людей открывают множество возможностей, которые дают возможность достичь успеха и реализовать себя.</template>
      <template v-slot:course>Курс Робототехника</template>
      <template v-slot:days>Суббота и Воскресенье</template>
      <template v-slot:timetable>C 9:00 до 18:00</template>
      <template v-slot:time>108 уч.ч. (3 месяца)</template>
      <template v-slot:price>1399 BYN</template>
      <template v-slot:credit>513 BYN/месяц</template>
      <template v-slot:whom>
        <li class="card_course__text">
          <span class="about__dash"></span>Для учителей технологии и педагогов дополнительного образования
        </li>
        <li class="card_course__text">
          <span class="about__dash"></span>Для школьников, студентов, родителей и всех, кто хочет познакомиться с основами робототехники
        </li>
      </template>

      <template v-slot:program>
        <spoiler v-for="i in data" :key="i">{{i}}. Lorem ipsum dolor sit amet</spoiler>
      </template>
    </course-section>
    <info-section :header="true">
      <template v-slot:header>Что вы получите</template>
      <InfoElement v-for="i in data" :key="i">
        <template v-slot:title>Сертификат</template>
        <template v-slot:text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </template>
      </InfoElement>
    </info-section>
    <teachers-section>
      <template v-slot:name>Виктор Резнов</template>
      <template v-slot:experience>7 лет</template>
      <template v-slot:spec>Робототехника</template>
    </teachers-section>
    <slot></slot>
  </div>
</template>
<script>
import MainSection from "../sections/Main";
import CourseSection from "../sections/Course";
import Spoiler from "../components/Spoiler";
import InfoSection from "../sections/Info";
import InfoElement from "../components/InfoElement";
import TeachersSection from "../sections/Teacher";

export default {
  components: {
    Spoiler,
    MainSection,
    CourseSection,
    InfoSection,
    InfoElement,
    TeachersSection
  },
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>
