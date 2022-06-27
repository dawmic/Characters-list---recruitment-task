<script setup>
import { RouterLink, RouterView } from "vue-router";
import Character from "./components/Character.vue";
import { ref, onMounted, computed, onUpdated } from "vue";
import axios from "axios";
import router from "./router";
import Paginate from "./components/Paginate.vue";
import FiltersPanel from "./components/FiltersPanel.vue";
import Header from "./components/Header.vue";
const list = ref("");
const listInfo = ref("");
const queryString = ref("");
const showFilterPanel = ref(false);
function getCharactersList(query) {
  axios
    .get(`https://rickandmortyapi.com/api/character/?${query}`)
    .then((res) => {
      list.value = res.data.results;
      listInfo.value = res.data.info;
    })
    .catch((err) => console.log(`Something wrong ${err}`));
}

onMounted(() => {
  getCharactersList();
});
const charactersList = computed(() => list.value);

function getFilteredCharactersList(query) {
  getCharactersList(query.value);
  window.scrollTo(0, 0);
  router.push({
    name: "FilteredCharactersList",
    params: { query: query.value },
  });
}

function toggleFilterView() {
  showFilterPanel.value = !showFilterPanel.value;
  console.log(showFilterPanel.value);
}
</script>

<template>
  <Header @toggleView="toggleFilterView" />
  <FiltersPanel
    @filterCharacters="getFilteredCharactersList($event)"
    :showFilterPanel="showFilterPanel"
    @toggleView="toggleFilterView"
  />
  <Transition>
    <RouterView :charactersList="charactersList" />
  </Transition>
</template>

<style lang="scss">
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Raleway&family=Roboto+Condensed:wght@700&display=swap");

html {
  font-size: 62.5%;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  max-width: 190rem;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  color: $text-color;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  @include media-md {
    flex-direction: row;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
