<script setup>
import { computed } from "vue";
const props = defineProps(["infoList"]);
const emit = defineEmits(["changePage"]);

function changePageList(page) {
  emit("changePage", page.substring(43));
}
const disabledPrev = computed(()=>  props.infoList.prev == null)
</script>
<template>
  <div class="pagination">
    <button @click="changePageList(infoList.prev)" :disabled="disabledPrev">Prev</button>
    <button @click="changePageList(infoList.next)">Next</button>
  </div>
</template>
<style lang="scss" scoped>
.pagination {
    align-self: flex-end;
  display: flex;
  flex-wrap: wrap;
  color: black;
  height: 5rem;
  width: 100%;
  .pagination__number {
    height: 5rem;
    width: 5rem;
    margin: 0.5rem;
    border: 5px solid black;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
