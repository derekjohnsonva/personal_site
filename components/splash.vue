<template>
  <div class='root'>
    <div class="row top">
        <!-- <div class="centered card">
          <div class="card-body">
            <h1>Derek Johnson</h1>
          </div>
        </div> -->
        <div class="centered">
          <div>
            <h1 class="display-1">Derek Johnson</h1>
          </div>
        </div>
    </div>
    <div class="row text-center">
      <div class="col">
        <nuxt-link to="/About_me" class="display-4 text-white text-center">Bio</nuxt-link>
      </div>
      <div class="col">
        <nuxt-link to="/" class="display-4 text-white text-center">Projects</nuxt-link>
      </div>
      <div class="col">
        <nuxt-link to="/" class="display-4 text-white text-center">Resume</nuxt-link>
      </div>
      <div class="col">
        <nuxt-link to="/" class="display-4 text-white text-center">Contact</nuxt-link>
      </div>
    </div>
    <div class="row my-5">
      <div class="col links">
        <a href="https://github.com/derekjohnsonva">
          <i class="fab fa-github fa-2x mx-4"></i>
        </a>
        <a href="https://www.linkedin.com/in/derek-johnson-88464116a/">
          <i class="fab fa-linkedin fa-2x mx-4"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.top{
  height: 60vh;
}

.root{
  /* fill background */
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/skyCrop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.links{
  text-align: center;
  height: 10vh;
  z-index: 100;
}


img.bb {
    /* Fill background */
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    z-index: -1;
    position: absolute;
}

.section {
    min-height: 100%;
    position: fixed;
}
.section > div {
    color: white;
    /* centers this div */ 
    left: 50%;
    top: 50;
  }
.centered {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: fit-content;
}
</style>