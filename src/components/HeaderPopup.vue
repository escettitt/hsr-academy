<template>
  <div class="header_popup__wrapper">
    <div class="header_popup__element" v-for="i in value" :key="i.id">
      <div class="header_popup__type" :class="{'header_popup__type_active': i.active}">
        <span class="header_popup_icon">
          <img :src="i.img" alt />
        </span>
        {{i.type}}
        <span class="header_popup__arrow-next"></span>
      </div>
      <ul class="header_popup__list">
        <li
          class="header_popup__type_element"
          v-for="j in i.elements"
          :key="j.name"
          @mouseenter="element_active(i.id)"
          @mouseleave="element_inactive(i.id)"
        >{{j.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [
        {
          id: 1,
          type: "Веб",
          active: false,
          img: require("../assets/img/web.svg"),
          elements: [{ name: "Дизайн" }]
        },
        {
          id: 2,
          type: "Методологии",
          active: false,
          img: require("../assets/img/methods.svg"),
          elements: [{ name: "Управление проектами" }]
        },
        {
          id: 3,
          type: "Автоматизированные системы",
          active: false,
          img: require("../assets/img/systems.svg"),
          elements: [{ name: "Робототехника" }]
        },
        {
          id: 4,
          type: "Мобильная разработка",
          active: false,
          img: require("../assets/img/mobile.svg"),
          elements: [{ name: "Разработка игр" }]
        },
        {
          id: 5,
          type: "Онлайн обучение",
          active: false,
          img: require("../assets/img/online_study.svg"),
          elements: [
            { name: "Веб-дизайн" },
            { name: "Управление проектами" },
            { name: "Робототехника" }
          ]
        },
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
  methods: {
    element_active(id) {
      this.value.find(x => x.id === id).active = true;
    },
    element_inactive(id) {
      this.value.find(x => x.id === id).active = false;
    }
  }
};
</script>