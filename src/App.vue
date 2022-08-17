<script setup>
import { RouterLink, RouterView } from "vue-router";
import Character from "./components/Character.vue";
import { ref, onMounted, computed, onUpdated } from "vue";
import axios from "axios";
import router from "./router";
import FiltersPanel from "./components/FiltersPanel.vue";
import Header from "./components/Header.vue";
const list = ref("");
const listInfo = ref("");
const queryString = ref("");
const showFilterPanel = ref(false);

function toggleFilterView() {
  showFilterPanel.value = !showFilterPanel.value;
}
function getQuery(q) {
  queryString.value = q;
}
</script>

<template>
  <Header @toggleView="toggleFilterView" />
  <FiltersPanel
    :showFilterPanel="showFilterPanel"
    @toggleView="toggleFilterView"
    @emitQuery="getQuery"
  />
  <Transition>
    <RouterView :query="queryString" />
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
  font-weight: normal;
  color: $text-color;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  @include media-lg {
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
