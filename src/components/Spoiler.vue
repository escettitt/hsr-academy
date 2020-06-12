<template>
  <div class="spoiler" v-bind:class="{ active: isActive }">
    <div class="spoiler__head" v-on:click="isActive = !isActive">
      <slot></slot>
      <i></i>
    </div>

    <div class="spoiler__body" v-if="isActive">
      <ul>
        <li>Приемы выделения сложных областей изображения</li>
        <li>Приемы выделения сложных областей изображения</li>
        <li>Приемы выделения сложных областей изображения</li>
        <li>Приемы выделения сложных областей изображения</li>
        <li>Приемы выделения сложных областей изображения</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      isActive: false
    };
  }
};
</script>
