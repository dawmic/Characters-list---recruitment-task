<script setup>
const props = defineProps(["isHide"]);
const emit = defineEmits(["toggleView"]);

function toggleView() {
  emit("toggleView");
}
</script>
<template>
  <header class="header-container">
  <router-link to="/">  <img
      class="header-container__logo"
      src="../assets/morty.svg"
      alt="ricky and morty logo"
    /></router-link>
    <img
      @click="toggleView"
      class="header-container__hamburger"
      src="../assets/hamburger-menu.svg"
      alt="filters open"
    />
  </header>
</template>
<style lang="scss" scoped>
.header-container {
  height: 6rem;
  background: #ffffff;
  border-bottom: 2px solid $dark-gray;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .header-container__logo,
  .header-container__hamburger {
    height: 4rem;
    width: 4rem;
    margin-top: 1rem;
  }
  .header-container__logo{
    margin-left: 2rem;
  }

  .header-container__hamburger {
    margin-right: 2rem;
   
    @include media-lg {
      display: none;
    }
    
  }
}
</style>
