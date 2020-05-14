<template>
    <VueScrollProgressBar height= />
</template>

<script>
import { VueScrollProgressBar } from '@guillaumebriday/vue-scroll-progress-bar'

export default {
    components: { 
        VueScrollProgressBar,
    }
}
</script>
<style scoped>
.progress-bar-container--container {
  position: fixed;
  width: 100%;
  bottom: 0px;
  left: 0;
  z-index: 999;
}
</style>