<template>
  <div class="hire" id="hire">
    <div class="hire__wrapper">
      <div class="hire_gradient">
      <div class="page__text-title">
        Наша цель - ваше
        <br />трудоустройство
        <br />>
      </div>
      <div class="hire__stages">
        <div class="hire__stages_element">
          <div class="hire__stages_circle">
            <img src="../assets/img/stages/search.svg" class="hire__stages_circle__image" />
          </div>
          <div class="hire__stages__body">
            <div class="hire__stages__body_header">1. Мы оказываем помощь в составлении резюме</div>
            <div
              class="hire__stages__body_text"
            >Вы узнаете насколько ваше резюме привлекательно для работодателя и получите необходимые рекомендации</div>
          </div>
        </div>
        <div class="hire__stages_element">
          <div class="hire__stages_circle">
            <img src="../assets/img/stages/linkedin.svg" class="hire__stages_circle__image" />
          </div>
          <div class="hire__stages__body">
            <div class="hire__stages__body_header">2. Помогаем составить профиль на Linkedin</div>
            <div
              class="hire__stages__body_text"
            >Получите полную инструкцию по заполнению и ведению профиля</div>
          </div>
        </div>
        <div class="hire__stages_element">
          <div class="hire__stages_circle">
            <img src="../assets/img/stages/letter.svg" class="hire__stages_circle__image" />
          </div>
          <div class="hire__stages__body">
            <div class="hire__stages__body_header">3. Рекомендуем в IT компании</div>
            <div
              class="hire__stages__body_text"
            >Вы будете рекомендованы на открытые позиции в IT компании как Junior-специалист</div>
          </div>
        </div>
        <div class="hire__stages_element">
          <div class="hire__stages_circle">
            <img src="../assets/img/stages/hire.svg" class="hire__stages_circle__image" />
          </div>
          <div class="hire__stages__body">
            <div class="hire__stages__body_header">4. Готовим к собеседованию</div>
            <div
              class="hire__stages__body_text"
            >Получите ответ на любой вопрос в процессе поиска работы</div>
          </div>
        </div>
      </div>
      </div>
      <div class="hire__notebook">
        <div class="hire__notebook__body">
          <div class="hire__notebook__text">
            <span class="bold">HSR Academy</span> предлагает студентам, нацеленным на результат, работу в наших компаниях. Благодаря“Программе трудоустройства”, после прохождения всех ступеней обучения у выпускника есть возможность получить должность в топовой IT-компании
            <span
              class="bold"
            >HardSoft Robotics!</span> Так же после обучения вы получаете:
          </div>
          <ul class="hire__notebook__list">
            <li>Необходимые рекомендации для трудоустройства</li>
            <li>Подготовка к собеседованиям</li>
            <li>Помощь с оформлением CV и CL</li>
            <li>Уникальные вакансии от компаний-партнеров</li>
          </ul>
        </div>
      </div>
      <div class="hire__title">
        <div class="page__text-title">Наши Партнеры</div>
        <div class="page__text-description">Около 200 крутых IT компаний, где работают наши студенты</div>
        <div class="hire__partners_circle" v-if="width >= 1021"></div>
      </div>
      <Partners></Partners>
    <div class="bar__gradient bar__gradient_page"></div>      
    </div>

  </div>
</template>
<script>
import Partners from "../components/Partners";
export default {
  components: { Partners },
    computed: {
    width() {
      console.log(window.innerWidth)
      return window.innerWidth;
    }
  }
};
</script>