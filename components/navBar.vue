<template>
    <header class="header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">DJ</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/" class="nav-link">Bio</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/" class="nav-link">Projects</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/" class="nav-link">Resume</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/" class="nav-link">Contact</nuxt-link>
                        </li>
                    </ul>
                </div>
                <VueScrollProgressBar backgroundColor='rgb(153,183,196)' height='.5rem' />
            </div>
            <!-- End container -->
        </nav>
    </header>
</template>

<script>
import { VueScrollProgressBar } from '@guillaumebriday/vue-scroll-progress-bar'

export default {
  name: "nav-bar",
  components: {
      VueScrollProgressBar,
  }
};
</script>
<style>
.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
}
.navbar-collapse .navbar .nav, .navbar .nav > li {
    float:none;
    display:inline-block;
    vertical-align: top;
}
.navbar{
    z-index:0;
}
</style>