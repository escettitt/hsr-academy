<template>
  <div class="courses_grid" id="courses">
    <courses-grid-element v-for="i in value" :key="i.id" :value="i"></courses-grid-element>
  </div>
</template>
<script>
import CoursesGridElement from "../components/CoursesGridElement";
export default {
  components: { CoursesGridElement },
  data() {
    return {
      value: [
        {
          id: "1",
          name: "Онлайн обучение",
          img: require("../assets/img/element_education.svg")
        },
        {
          id: "2",
          name: "Подготовительные курсы",
          img: require("../assets/img/gridIcons/prepCourses.svg")
        },
        {
          id: "3",
          name: "Программирование",
          img: require("../assets/img/gridIcons/programming.svg")
        },
        {
          id: "4",
          name: "Наука о данных",
          img: require("../assets/img/gridIcons/dataScience.svg")
        },
        {
          id: "5",
          name: "Тестирование ПО",
          img: require("../assets/img/gridIcons/testing.svg")
        },
        {
          id: "6",
          name: "Гуманитарные дисциплины в IT",
          img: require("../assets/img/gridIcons/lang.svg")
        },
        {
          id: "7",
          name: "Управление проектами и стартапами",
          img: require("../assets/img/gridIcons/managment.svg")
        },
        {
          id: "8",
          name: "Бизнес-анализ",
          img: require("../assets/img/gridIcons/business.svg")
        },
        {
          id: "9",
          name: "Дизайн",
          img: require("../assets/img/gridIcons/design.svg")
        },
        {
          id: "10",
          name: "Системное и сетевое администрирование",
          img: require('../assets/img/gridIcons/sysAdm.svg')
        },
        {
          id: "11",
          name: "Маркетинг и продажи",
          img: require('../assets/img/gridIcons/marketing.svg')
        },
        {
          id: "12",
          name: "Анлийский язык",
          img: require('../assets/img/gridIcons/english.svg')
        },
        {
          id: "13",
          name: "IT Практикум",
          img: require('../assets/img/gridIcons/itPrakt.svg')
        },
        {
          id: "14",
          name: "Soft skills",
          img: require('../assets/img/gridIcons/softSkills.svg')
        },
        {
          id: "15",
          name: "Тренинги EPAM",
          img: require('../assets/img/gridIcons/trenings.svg')
        },
        {
          id: "16",
          name: "Ближайшие старты",
          img: require('../assets/img/gridIcons/starts.svg')
        }
      ]
    };
  }
};
</script>
