<script setup>
const props = defineProps(["item"]);
const character = props.item;
</script>
<template>
  <div class="character">
    <div class="character__boxImage">
      <img class="character__boxImage--image" :src="props.item.image" :alt="character.name" />
    </div>

    <h2 class="character__name">
      {{ character.name }}
    </h2>
    <p class="character__info">
      {{ character.species }}
    </p>
  </div>
</template>
<style scoped lang="scss">
.character {
  border: 2px solid white;
  height: 22rem;
  width: 18rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
  overflow: hidden;
  &:hover {
    .character__boxImage--image {
      transform: scale(1.1);
    }
  }
  .character__boxImage {
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    overflow: hidden;
    .character__boxImage--image{
       transition: all .3s ease-in-out;
    }
  }
  .character__name {
    font-size: 1.2rem;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    margin: 0.5rem 0 0 1rem;
  }
  .character__info {
    font-size: 1rem;

    font-family: Arial, Helvetica, sans-serif;
    margin: 0 0 0 1rem;
  }
}
</style>
