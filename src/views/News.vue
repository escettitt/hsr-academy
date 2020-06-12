<template>
  <div class="page main">
    <main-section>
      <template v-slot:title>
        <span class="color-violet">Новости</span>
        <br />
        <span class="color-black">HSR ACADEMY</span>
        <br />
      </template>
      <template v-slot:subtitle>
        <div class="color-black">
          Узнавайте о новых акциях и событиях
          <br />в раделе новостей
        </div>
      </template>
      <template v-slot:link>
        <a href="#news" class="button-more color-black">Узнать больше</a>
      </template>
            <template v-slot:img>
              <img class="main__image registration" src="../assets/img/newsbg.png" alt="">
      </template>
    </main-section>
    <news-big-section></news-big-section>
    <info-section>
      <InfoElement v-for="i in data" :key="i">
        <template v-slot:header>170+</template>
        <template v-slot:title>Обучающих курсов</template>
        <template v-slot:text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </template>
      </InfoElement>
    </info-section>
    <slot></slot>
  </div>
</template>
<script>
import MainSection from "../sections/Main";
import InfoSection from "../sections/Info";
import InfoElement from "../components/InfoElement";
import NewsBigSection from "../sections/NewsBig";
export default {
  components: { MainSection, InfoSection, InfoElement, NewsBigSection },
  data() {
    return {
      data: [1, 2, 3, 4]
    };
  }
};
</script>
