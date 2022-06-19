<script setup>
const props = defineProps(["item"]);
const character = props.item;
</script>
<template>
  <div class="character">
    <div class="character__boxImage">
      <img
        class="character__boxImage--image"
        :src="props.item.image"
        :alt="character.name"
      />
    </div>
    <div class="character__boxInfo">
      <h2 class="character__boxInfo--name">
        {{ character.name }}
      </h2>
      <p class="character__boxInfo--info" v-if="character.status == 'Alive'">
        <span class="alive"></span>{{ character.status }} -
        {{ character.species }}
      </p>
      <p class="character__boxInfo--info" v-if="character.status == 'Dead'">
        <span class="dead"></span>{{ character.status }} -
        {{ character.species }}
      </p>
      <p class="character__boxInfo--info" v-if="character.status == 'unknown'">
        <span class="unknown"></span>{{ character.status }} -
        {{ character.species }}
      </p>
      <p class="character__boxInfo--info">
        <span class="location">Last known location: </span>
        {{ character.location.name }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.character {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: initial;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
  overflow: hidden;
  background-color: #3c3e44;
  margin: 1.5rem;
  @include media-md{
    flex-direction: row;
    width: 60rem;
    height: 22rem;
  }
  &:hover {
    .character__boxImage--image {
      transform: scale(1.1);
    }
  }
  .character__boxImage {
    height: 65%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    overflow: hidden;
    @include media-md{
      height: 100%;
      width: 40%;
      border-top-right-radius: 0;
    }
    .character__boxImage--image {
      height: 100%;
      width: 100%;
      transition: all 0.3s ease-in-out;
    }
  }
  .character__boxInfo {
    margin: 1.5rem .5rem .5rem 1.5rem;
    .character__boxInfo--name {
      font-size: calc(2rem + 0.5vw);
      font-weight: 700;
      letter-spacing: 1px;
    }
    .character__boxInfo--info {
      font-size: calc(1.3rem + 0.5vw);
      font-weight: 500;
      margin-bottom: 0.8rem;
      .alive,
      .dead,
      .unknown {
        display: inline-block;
        height: 0.7rem;
        width: 0.7rem;
        margin-right: 0.5rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      .alive {
        background-color: #55cc44;
      }
      .dead {
        background-color: #d63d2e;
      }
      .unknown {
        background-color: #151617;
      }
      .location {
        color: #9e9e9e;
        display: block;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
