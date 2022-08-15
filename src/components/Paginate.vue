<script setup>
import { computed } from "vue";
const props = defineProps(["infoList"]);
const emit = defineEmits(["changePage"]);

function changePageList(page) {
  emit("changePage", page.substring(43));
}
const disabledPrev = computed(() => props.infoList.prev == null);
const disabledNext = computed(() => props.infoList.next == null);
const currentPage = computed(() =>
  props.infoList.next ? props.infoList.next.match(/\d/g).join("") - 1 : 1
);
</script>
<template>
  <div class="pagination">
    <button @click="changePageList()">
      <span class="prev-arrow"></span>
      <span class="prev-arrow less-arrow-margin"></span>
    </button>
    <button
      class="prev-btn"
      @click="changePageList(infoList.prev)"
      :disabled="disabledPrev"
    >
      <span class="prev-arrow"></span>
    </button>
    <div class="page-info">
      <p class="page-info__paragraph">page</p>
      <p class="page-info__paragraph">{{ currentPage }}</p>
      <p class="page-info__paragraph">of {{ infoList.pages }}</p>
    </div>
    <button @click="changePageList(infoList.next)" :disabled="disabledNext">
      <span class="next-arrow"></span>
    </button>
    <button @click="changePageList()">
      <span class="next-arrow"></span>
      <span class="next-arrow less-arrow-margin"></span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.pagination {
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
  height: 7.5rem;
  width: 100%;
  margin: 4rem 0;
  .page-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .page-info__paragraph {
      color: $dark-gray;
      font-size: 1.2rem;
      &:nth-child(2) {
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
  }
  button {
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
    &:disabled {
      opacity: 0.3;
    }
    &:focus {
      span {
        outline: 3px dotted $morty-orange;
        outline-offset: 0.5rem;
      }
    }
    span {
      display: inline-block;
      height: 1.6rem;
      width: 1.6rem;
      border-top: 3px solid $dark-gray;
      border-left: 3px solid $dark-gray;
    }
  }
  .prev-arrow {
    transform: rotate(-45deg);
  }
  .next-arrow {
    transform: rotate(135deg);
  }
  .less-arrow-margin {
    margin-left: -0.8rem;
  }
}
</style>
