<script setup>
import { RouterLink, RouterView } from "vue-router";
import Character from "./components/Character.vue";
import { ref, onMounted, computed, onUpdated } from "vue";
import axios from "axios";
import Filters from "./components/Filters.vue";
import router from "./router";
const list = ref("");
const queryString = ref("");
function getCharactersList(query) {
  axios
    .get(`https://rickandmortyapi.com/api/character/?${query}`)
    .then((res) => {
      // console.log(res.data.results);
      list.value = res.data.results;
    })
    .catch((err) => console.log(`Something wrong ${err}`));
}

onMounted(() => {
  getCharactersList();
});
const charactersList = computed(() => list.value);

function getFilteredChractersList(query) {
  getCharactersList(query);
  window.scrollTo(0, 0);
}
</script>

<template>
  <Filters @filterCharacters="getFilteredChractersList($event)" />
  <RouterView :charactersList="charactersList" />
</template>

<style lang="scss">
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Raleway&family=Roboto+Condensed:wght@700&display=swap");

html {
  font-size: 62.5%;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
#app {
  max-width: 160rem;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  color: $text-color;
  display: flex;
  flex-direction: row;
}

</style>
