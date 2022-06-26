<script setup>
const props = defineProps(['isHide']);
const emit = defineEmits(['toggleView']);

function toggleView(){
    emit('toggleView');
}
</script>
<template>
  
  <header class="header-container">
  <img class="header-container__logo" src="../assets/morty.png" alt="">
  <img @click="toggleView" class="header-container__hamburger" src="../assets/hamburger-menu.svg" alt="filters open">
  </header>
</template>
<style  lang="scss" scoped>
.header-container{
    height: 6rem;
    background: #FFFFFF;
    border-bottom: 2px solid $dark-gray;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .header-container__logo{
      
    }

    .header-container__hamburger{
        height: 4rem;
        width: 4rem;
        margin-top: 1rem;
        margin-right: 2rem;
        @include media-md{
            display: none;
        }
    }
}

</style>