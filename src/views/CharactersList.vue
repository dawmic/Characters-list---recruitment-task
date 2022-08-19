<script setup>
import Character from "@/components/Character.vue";
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import Loader from "../components/Loader.vue";
import router from "../router";
import Paginate from "../components/Paginate.vue";
const charactersList = ref("");
const listInfo = ref("");
const loading = ref(true);
const props = defineProps(["query"]);
function getCharactersList(query) {
  axios
    .get(`https://rickandmortyapi.com/api/character/?${query}`)
    .then((res) => {
      charactersList.value = res.data.results;
      listInfo.value = res.data.info;
      loading.value = false;
      window.scrollTo(0, 0);
    
    })
    .catch((err) => {
      router.push({
        name: "error",
      });
    });
}
onMounted(() => {
  setTimeout(() => {
    getCharactersList();
  }, 2000);
});

watch(props, (val) => {
  console.log("watcher dziala");
  console.log(val.query);

  getCharactersList(val.query);
});
function changePage(page) {
  getCharactersList(page);
}
</script>

<template>
  <main class="main">
    <Character v-for="item in charactersList" :item="item" />
    <Loader v-if="loading" />
    <Paginate  v-if="!loading" :infoList="listInfo" @changePage="changePage" />
  </main>
</template>
<style lang="scss">
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  min-height: calc(100vh - 8rem);
  @include media-lg {
    margin-left: 2rem;
    width: 100%;
  }
}
.error-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  .error-container__paragraph {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 4rem;
    color: #a50202;
  }
}
</style>
