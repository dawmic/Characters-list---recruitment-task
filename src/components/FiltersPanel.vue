<script setup>
</script>
<template>
  <nav class="filters-container">
    <h2 class="filters-container__header">FILTERS</h2>
    <fieldset class="filters-container__fieldset">
      <legend class="filters-container__fieldset--legend">Status</legend>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="all"
          name="status"
          v-model="status"
          value="0"
          checked
        />
        <label class="input-container__label" for="all">All</label>
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
        <label for="dead">Dead</label>
      </div>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="unknown"
          name="status"
          v-model="status"
          value="status=unknown"
        />
        <label class="input-container__label" for="unknown">Unknown</label>
      </div>
    </fieldset>
    <fieldset class="filters-container__fieldset">
      <legend class="filters-container__fieldset--legend">Gender</legend>
      <div class="input-container">
        <input type="radio" id="all" name="gender" v-model="gender" value="0" checked />
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
        <label class="input-container__label" for="genderless">Genderless</label>
      </div>
       <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="unknown"
          name="gender"
          v-model="gender"
          value="gender=unknown"
        />
        <label class="input-container__label" for="unknown">Unknown</label>
      </div>
    </fieldset>
    <fieldset class="filters-container__fieldset">
      <legend class="filters-container__fieldset--legend">Species</legend>
      <div class="input-container">
        <input
          class="input-container__radio"
          type="radio"
          id="all"
          name="species"
          v-model="species"
          value="0"
        />
        <label class="input-container__label" for="all">All</label>
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
    <button @click="filterData(status, gender, species)">Apply</button>
  </nav>
</template>
<style lang="scss" scoped>

</style>
