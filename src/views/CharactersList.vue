<script setup>
import Character from "@/components/Character.vue";

const props = defineProps(["charactersList"]);
</script>

<template>
  <main class="main">
    <Character v-for="item in props.charactersList" :item="item" />
  </main>
</template>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
