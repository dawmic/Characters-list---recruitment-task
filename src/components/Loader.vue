<template>
  <div class="loader"></div>
</template>
<style lang="scss" scoped>
.loader {
  margin: auto;
  width: 120px;
  height: 20px;
  border-radius: 20px;
  background: radial-gradient(farthest-side, orange 94%, #0000) left/20px 20px
    no-repeat lightblue;
  animation: w2 1s infinite linear;
}
@keyframes w2 {
  50% {
    background-position: right;
  }
}
</style>
