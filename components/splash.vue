<template>
  <div class='root'>
    <img class='background' ref='background' src='../assets/images/tree-1.jpg'/>
    <div class='section section-1' ref='first'>
      <div class="fade-out" data-aos>
        <h1> Derek Johnson. </h1>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>

img.background, img.foreground {
    /* Fill background */
    min-height: 100%;
    min-width: 1024px;
    
    /* Scale proportionately */
    width: 100%;
    height: auto;
}

img.background {
    /* Positioning */
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

.section {
    min-height: 100vh;
    position: relative;
}
.section > div {
    position: fixed;
    color: white;
    /* centers this div */ 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .section-1 {
    margin-bottom: 500px; /* determines the gap between our two sections */
    font-size: 4em;
  }

  .section-2 {
    opacity: 0; /* defaults to 0 because it's not visible */
  }

  .section-2 div {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
    text-align: center;
    padding: 50px;
    max-width: 300px;
  }

  .section-2 h2 {
    font-size: 2em;
    margin-bottom: 40px;
  }

  .section-2 p {
    line-height: 150%;
  }
</style>