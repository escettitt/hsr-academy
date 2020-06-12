<template>
  <div class="header">
    <router-link to="/" class="header__logo"></router-link>
    <div class="header_burger" @click="showNav()"></div>
    <div class="navbar">
      <ul class="nav" v-if="show1">
        <li class="dropdown header-link" v-if="width >= 1021">
          <header-popup></header-popup
          ><router-link to="#">Обучение</router-link>
        </li>
        <li
          class="dropdown header-link"
          v-if="width < 1021"
          @click="hideNav('show2')"
        >
          <router-link to="#">Обучение</router-link
          ><span class="dropdown"></span>
        </li>
        <li class="fire__hover header-link" @click="showNav()">
          <router-link to="/start"
            ><span class="fire"></span> Ближайшие старты</router-link
          >
        </li>
        <li class="header-link" @click="showNav()">
          <router-link to="/about">О нас</router-link>
        </li>
        <li class="header-link" @click="showNav()">
          <router-link to="/hire">Трудоустройство</router-link>
        </li>
        <li class="header-link" @click="showNav()">
          <router-link to="/news">Новости</router-link>
        </li>
      </ul>
      <ul class="nav" v-if="show2">
        <li class="dropdown header-link" @click="hideNav('show1')">
          <router-link to="#">Назад</router-link><span class="dropdown"></span>
        </li>
        <li
          to="#"
          class="header-link"
          v-for="i in value"
          :key="i.id"
          @click="hideNav('show3', i.id)"
        >
          <span class="header_popup_icon"> <img :src="i.img" alt /> </span
          >{{ i.type }}<span class="dropdown"></span
        ></li>
      </ul>
      <ul class="nav" v-if="show3">
        <li class="dropdown header-link" @click="hideNav('show2')">
          <router-link to="#">Назад</router-link><span class="dropdown"></span>
        </li>
        <li
          class="header-link"
          v-for="j in selected"
          :key="j.id"
        >
          <router-link to="#">{{ j.name }}</router-link>
        </li>
      </ul>
      <router-link to="/study" class="button button_primary header_button-none"
        >Присоединиться</router-link
      >
    </div>
  </div>
</template>
<script>
import HeaderPopup from "../components/HeaderPopup";
export default {
  components: { HeaderPopup },
  data() {
    return {
      active: false,
      show1: true,
      show2: false,
      show3: false,
      value: [
        {
          id: 0,
          type: "Веб",
          active: false,
          img: require("../assets/img/web.svg"),
          elements: [{ name: "Дизайн" }]
        },
        {
          id: 1,
          type: "Методологии",
          active: false,
          img: require("../assets/img/methods.svg"),
          elements: [{ name: "Управление проектами" }]
        },
        {
          id: 2,
          type: "Автоматизированные системы",
          active: false,
          img: require("../assets/img/systems.svg"),
          elements: [{ name: "Робототехника" }]
        },
        {
          id: 3,
          type: "Мобильная разработка",
          active: false,
          img: require("../assets/img/mobile.svg"),
          elements: [{ name: "Разработка игр" }]
        },
        {
          id: 4,
          type: "Онлайн обучение",
          active: false,
          img: require("../assets/img/online_study.svg"),
          elements: [
            { name: "Веб-дизайн" },
            { name: "Управление проектами" },
            { name: "Робототехника" }
          ],
          selected: 4
        }
        //         {
        //   id: 6,
        //   type: "Онлайн обучение",
        //   active: false,
        //   img: require("../assets/img/online_study.svg"),
        //   elements: [
        //     { name: "Веб-дизайн" },
        //     { name: "Управление проектами" },
        //     { name: "Робототехника" }
        //   ]
        // },        {
        //   id: 7,
        //   type: "Онлайн обучение",
        //   active: false,
        //   img: require("../assets/img/online_study.svg"),
        //   elements: [
        //     { name: "Веб-дизайн" },
        //     { name: "Управление проектами" },
        //     { name: "Робототехника" }
        //   ]
        // }
      ]
    };
  },
  computed: {
    width() {
      return window.innerWidth;
    }
  },
  methods: {
    hideNav(show, val) {
      if (show == "show1") {
        this.show1 = true;
        this.show2 = false;
        this.show3 = false;
      }
      if (show == "show2") {
        this.show1 = false;
        this.show2 = true;
        this.show3 = false;
      }
      if (show == "show3") {
        this.selected = this.value[val].elements;
        this.show1 = false;
        this.show2 = false;
        this.show3 = true;
      }
    },
    showNav() {
      if (this.active == false) {
        document
          .getElementsByClassName("navbar")[0]
          .classList.toggle("navbar-active");
        this.active != this.active;
      } else {
        document
          .getElementsByClassName("navbar")[0]
          .classList.remove("navbar-active");
        this.active != this.active;
      }
    }
  }
};
</script>
