<template>
  <div class="teachers__wrapper">
    <div class="page__text-title color-black">
      Преподы
      <br />
      <span class="color-violet">></span>
    </div>
    <div
      class="page__text-description"
    >Наши преподаватели — не только эксперты в своей сфере, но и профессиональные педагоги. Их цель — сделать образование таким, каким оно должны быть: осознанным, интересным и результативным.</div>
    <div class="teachers__body">
      <div class="teachers__element" v-for="i in data" :key="i">
        <div class="teachers__element_img">
          <img src="../assets/img/prepod.png" />
        </div>
        <div class="teachers__element_body">
          <div class="teachers__element_name">Алексей Рудь</div>
          <div class="teachers__element_text">
            <span class="teachers__element_text-bold">Опыт работы: </span>7 лет
          </div>
          <div class="teachers__element_text">
            <span class="teachers__element_text-bold">Специальность: </span><router-link to="/robo">Робототехника</router-link>
          </div>
          <router-link to="/" class="ln-url color-black">
            <span class="ln-icon-violet"></span> Мой Linkedin
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            data: [1,2,3,4]
        }
    }
};
</script>