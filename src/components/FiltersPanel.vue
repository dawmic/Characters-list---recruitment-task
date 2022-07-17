<script setup>
import { ref, computed } from "vue";
const props = defineProps(["showFilterPanel"]);
const emit = defineEmits(["filterCharacters", "toggleView"]);
const filters = ref([]);
const status = ref(0),
  gender = ref(0),
  species = ref(0);
const query = computed(() => filters.value.join("&"));

function filterData(...args) {
  filters.value = [];
  console.log(args);
  for (let arg of args) {
    if (arg != "0") filters.value.push(arg);
  }
  emit("filterCharacters", query);
}
function toggleView() {
  emit("toggleView");
}
</script>
<template>
  <nav class="filters-container" :class="{ showPanel: props.showFilterPanel }">
    <h2 class="filters-container__header">FILTERS</h2>
    <fieldset class="filters-container__fieldset">
      <legend class="filters-container__fieldset--legend">Status</legend>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="all-status"
          name="status"
          v-model="status"
          value="0"
          checked
        />
        <label class="input-container__label" for="all-status">All</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="alive"
          name="status"
          v-model="status"
          value="status=alive"
        />
        <label class="input-container__label" for="alive">Alive</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="dead"
          name="status"
          v-model="status"
          value="status=dead"
        />
        <label class="input-container__label" for="dead">Dead</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="unknown-status"
          name="status"
          v-model="status"
          value="status=unknown"
        />
        <label class="input-container__label" for="unknown-status"
          >Unknown</label
        >
      </div>
    </fieldset>
    <fieldset class="filters-container__fieldset">
      <legend class="filters-container__fieldset--legend">Gender</legend>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="all"
          name="gender"
          v-model="gender"
          value="0"
          checked
        />
        <label class="input-container__label" for="all">All</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="female"
          name="gender"
          v-model="gender"
          value="gender=female"
        />
        <label class="input-container__label" for="female">Female</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="male"
          name="gender"
          v-model="gender"
          value="gender=male"
        />
        <label class="input-container__label" for="male">Male</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="genderless"
          name="gender"
          v-model="gender"
          value="gender=genderless"
        />
        <label class="input-container__label" for="genderless"
          >Genderless</label
        >
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="unknown-gender"
          name="gender"
          v-model="gender"
          value="gender=unknown"
        />
        <label class="input-container__label" for="unknown-gender"
          >Unknown</label
        >
      </div>
    </fieldset>
    <fieldset class="filters-container__fieldset">
      <legend class="filters-container__fieldset--legend">Species</legend>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="all-species"
          name="species"
          v-model="species"
          value="0"
        />
        <label class="input-container__label" for="all-species">All</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="human"
          name="species"
          v-model="species"
          value="species=human"
        />
        <label class="input-container__label" for="human">Human</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="alien"
          name="species"
          v-model="species"
          value="species=alien"
        />
        <label class="input-container__label" for="alien">Alien</label>
      </div>
    </fieldset>
    <button
      class="filters-container__button"
      @click="filterData(status, gender, species), toggleView()"
    >
      APPLY
    </button>
  </nav>
</template>
<style lang="scss" scoped>
.filters-container {
  width: 100%;
  z-index: 2;
  padding-right: 3rem;
  color: $dark-gray;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  font-family: "Roboto Condensed", sans-serif;
padding-left: 2rem;
margin-top: 2rem;
  overflow: hidden;
  overflow-y: scroll;
  height: 0;
  position: sticky;
  top: 6rem;
  left: 0;
  background: #ffffff;
  @include media-lg {
    min-width: 25rem;
    max-width: 30rem;
    height: 90vh;
    top: 9rem;
    align-items: center;
    border-right: 2px solid $dark-gray;
    padding: 0;
  }
  .filters-container__fieldset {
    border: none;
    .filters-container__fieldset--legend {
      font-size: 1.8rem;
    }
    .input-container {
      margin: 0.5rem;
      min-width: 15rem;
      display: flex;
      .input-container__label {
        margin-left: 1rem;
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 0.5em;
      }
      .input-container__radio {
        -webkit-appearance: none;
        appearance: none;
        font: inherit;
        color: orange;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid $dark-gray;
        border-radius: 50%;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
        &::before {
          content: "";
          width: 0.65em;
          height: 0.65em;
          border-radius: 50%;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em $morty-orange;
        }
        &:checked::before {
          transform: scale(1);
        }
        &:focus {
          outline: max(2px, 0.15em) $morty-orange;
          outline-offset: max(2px, 0.15em);
        }
      }
    }
  }
  .filters-container__button {
    outline: none;
    border: none;
    font-family: inherit;
    width: 100%;
    max-width: 20rem;
    height: 4.5rem;
    margin: 2rem 0 2rem 0.7rem;
    background: $morty-orange;
    color: $dark-gray;
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: 1.5px;
    border-radius: 2rem;
    transition: opacity 0.3s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
      rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;

    &:hover {
      opacity: 0.8;
    }
  }
}
.showPanel {
  height: 90vh;
}
</style>
