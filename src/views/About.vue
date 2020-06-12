<template>
  <div class="page main">
    <main-section>
      <template v-slot:title>
        <span class="color-violet">HSR</span>
        <br />
        <span class="color-black">ACADEMY</span>
      </template>
    </main-section>
    <about-section></about-section>
    <info-section >
      <InfoElement v-for="i in data" :key="i">
        <template v-slot:header>170+</template>
        <template v-slot:title>Обучающих курсов</template>
        <template v-slot:text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </template>
      </InfoElement>
    </info-section>
    <teachers-section></teachers-section>
    <slot></slot>
  </div>
</template>
<script>
import MainSection from "../sections/Main";
import InfoSection from "../sections/Info";
import InfoElement from "../components/InfoElement";
import TeachersSection from "../sections/Teachers";
import AboutSection from "../sections/AboutUs";
export default {
  components: {
    MainSection,
    InfoSection,
    InfoElement,
    TeachersSection,
    AboutSection
  },
  data() {
    return {
      data: [1, 2, 3, 4]
    };
  }
};
</script>
