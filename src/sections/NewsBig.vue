<template>
  <div class="news__wrapper" id="news">
    <div class="page__text-title">
      Новости
      <span class="color-violet">></span>
    </div>
    <div class="news_row">
      <div class="news_dropdown_container">
        <input
          type="button"
          class="news__button"
          :value="dropdownValue"
          @click="showDropdown()"
        />
        <div class="news_dropdown">
          <div class="news_dropdown_item" @click="setDropdownVal('Все новости')">
            Все новости
          </div>
          <div
            class="news_dropdown_item"
            @click="setDropdownVal('Робототехника')"
          >
            Робототехника
          </div>
        </div>
      </div>
            <div class="news_dropdown_container">
        <input
          type="button"
          class="news__button"
          :value="dropdownValue2"
          @click="showDropdown2()"
        />
        <div class="news_dropdown">
          <div class="news_dropdown_item" @click="setDropdownVal2('За все время')">
            За все время
          </div>
          <div
            class="news_dropdown_item"
            @click="setDropdownVal2('Сегодня')"
          >
            Сегодня
          </div>
        </div>
      </div>
      <!-- <div class="news__button">За все время</div> -->
    </div>
    <news-card></news-card>
    <news-card></news-card>
    <news-card></news-card>
    <news-card></news-card>
    <div class="bar__gradient bar__gradient_page"></div>
  </div>
</template>
<script>
import NewsCard from "../components/CardNews";
export default {
  components: { NewsCard },
  data() {
    return {
      dropdownValue: "Все новости",
      dropdownValue2: "За все время"
    };
  },
  methods: {
    showDropdown() {
      document
        .getElementsByClassName("news_dropdown")[0]
        .classList.toggle("show");
    },
        showDropdown2() {
      document
        .getElementsByClassName("news_dropdown")[1]
        .classList.toggle("show");
    },
    setDropdownVal2(value) {
      this.dropdownValue2 = value;
      // document
      //   .getElementsByClassName(
      //     "registration_field__input__dropdown_content"
      //   )[0]
      //   .classList.remove("show");
    },
    clickListner(e) {
      if (!e.target.matches(".news__button")) {
        var myDropdown = document.getElementsByClassName("news_dropdown")[0];
        var myDropdown2 = document.getElementsByClassName("news_dropdown")[1];
        if (myDropdown.classList.contains("show")) {
          myDropdown.classList.remove("show");
        }
                if (myDropdown2.classList.contains("show")) {
          myDropdown2.classList.remove("show");
        }
      }
    }
  },
  mounted() {
    // Attach event listener to the root vue element
    window.addEventListener("click", this.clickListner);
    // Or if you want to affect everything
    // document.addEventListener('click', this.onClick)
  },
  beforeDestroy: function() {
    window.removeEventListener("click", this.clickListner);
    // document.removeEventListener('click', this.onClick)
  }
};
</script>
