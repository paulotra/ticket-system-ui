<template>
  <svg version="1.1" id="Layer_1" :width="width" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 84.5 86.1" style="enable-background:new 0 0 84.5 86.1;" xml:space="preserve">
    <polygon :fill="fill" points="21.8,20.7 85,11.2 64,0 0,9.4 0,32.1 21.8,43.8 21.7,75.4 41.8,86.1 41.9,41 21.8,43.8 "/>
    <polygon :fill="fill" points="84.5,35.1 84.5,58.8 64.3,61.6 64.4,37.9 "/>
  </svg>
</template>

<script>
export default {
  props: {
    fill: String,
    width: Number
  }
}
</script>
