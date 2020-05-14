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
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Contact</a>
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