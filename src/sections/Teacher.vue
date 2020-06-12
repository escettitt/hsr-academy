<template>
  <div class="section_teacher__wrapper">
    <div class="section_teacher__container">
      <div class="page__text-title">
        <span class="color-black">Преподы</span>
        <br />
        <span class="color-violet">></span>
      </div>
    </div>
    <div class="section_teacher__content">
      <div class="teacher_body__wrapper">
        <div class="teacher_body">
          <div class="teacher_title"><slot name="name"></slot></div>
          <p class="teacher_text">
            Опыт работы:
            <span class="teacher_text_medium"
              ><slot name="experience"></slot
            ></span>
          </p>
          <p class="teacher_text">
            Специальность:
            <span class="teacher_text_medium"><slot name="spec"></slot></span>
          </p>
          <p href="/" class="ln-url">
            <span class="ln-icon"></span> Мой Linkedin
          </p>
          <router-link to="/" class="button-more color-white mobile-none"
            >Больше преподов</router-link
          >
        </div>
      </div>
      <div class="teacher_image__wrapper"></div>
    </div>
  </div>
</template>
