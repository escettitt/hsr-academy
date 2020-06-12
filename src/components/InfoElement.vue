<template>
  <div class="info__item">
    <div class="info__item_header">
      <slot name="header"></slot>
    </div>
    <div class="info__item_title">
      <slot name="title"></slot>
    </div>
    <p class="info__item_text">
      <slot name="text"></slot>
    </p>
  </div>
</template>