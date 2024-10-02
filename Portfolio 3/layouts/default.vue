<template>
  <div id="gradient-bg">
    <slot/>
  </div>
</template>

<style>
#gradient-bg {
  background: linear-gradient(-45deg,  #673ab7, #23a6d5, #23d5ab);
}
</style>