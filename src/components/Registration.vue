<template>
  <div class="registration__wrapper">
    <div class="registration__header">Регистрация</div>
    <div class="registration__body">
      <div class="registration_field">
        <div class="registration_field__label">Выберете курс</div>
        <input
          type="button"
          class="registration_field__input__dropdown"
          :value="dropdownValue"
          @click="showDropdown()"
        />
        <div class="registration_field__input__dropdown_content">
          <div
            class="registration_field__input__dropdown_item"
            @click="setDropdownVal(i)"
            v-for="i in data"
            :key="i"
          >{{i}}</div>
        </div>
      </div>
      <div class="registration_field">
        <div class="registration_field__label" :class="{'registration_field__label__error': $v.email.$error}">E-mail</div>
        <input type="text" placeholder="email@email.com" v-model.trim="$v.email.$model" class="registration_field__input" :class="{'registration_field__input__error': $v.email.$error}"/>
                <span class="registration_field_error" v-if="$v.email.$error">Введите E-mail</span>
      </div>
      <div class="registration_field">
        <div class="registration_field__label" :class="{'registration_field__label__error': $v.number.$error}">Телефон</div>
        <input type="text" placeholder="+375 (29) 999-99-99" v-model.trim="$v.number.$model" class="registration_field__input" :class="{'registration_field__input__error': $v.number.$error}" />
        <span class="registration_field_error" v-if="$v.number.$error">Введите телефон</span>
      </div>
    </div>
    <div class="registration__agreement">
      Регистрируясь, я соглашаюсь с
      <a href="#">Условиями использования</a> и
      <a href="#">Политикой конфиденциальности</a> HSR Academy
    </div>
    <div class="button button_registration">Отправить заявку</div>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate'
export default {
  mixins: [validationMixin],
  data() {
    return {
      data: [
        "Программирование",
        "Наука о данных",
        "Робототехника",
        "Веб-дизайн",
        "Тестирование ПО",
        "Гуманитарные дисциплины в IT",
        "Бизнес-анализ",
        "Английский язык",
        "Soft Skills",
        "Маркетинг и продажи"
      ],
      dropdownValue: "Программирование",
      email: '',
      number: ''
    };
  },
  validations:{
    email: {
      required,
      minLength: minLength(10)
    },
    number: {
      required,
minLength: minLength(8)
    }
  },
  methods: {
    showDropdown() {
      document
        .getElementsByClassName(
          "registration_field__input__dropdown_content"
        )[0]
        .classList.toggle("show");
    },
    setDropdownVal(value) {
      this.dropdownValue = value;
      // document
      //   .getElementsByClassName(
      //     "registration_field__input__dropdown_content"
      //   )[0]
      //   .classList.remove("show");
    },
    clickListner(e){
      if (!e.target.matches(".registration_field__input__dropdown")) {
        var myDropdown = document.getElementsByClassName(
          "registration_field__input__dropdown_content"
        )[0];
        if (myDropdown.classList.contains("show")) {
          myDropdown.classList.remove("show");
        }
      }
    }
  },
  mounted() {
    // Attach event listener to the root vue element
    window.addEventListener('click', this.clickListner)
    // Or if you want to affect everything
    // document.addEventListener('click', this.onClick)
  },
  beforeDestroy: function () {
    window.removeEventListener('click', this.clickListner)
    // document.removeEventListener('click', this.onClick)
  },
};
</script>