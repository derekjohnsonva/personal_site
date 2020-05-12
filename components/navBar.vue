<template>
    <header class="header">
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
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
            </div>
            <!-- End container -->
        </nav>
    </header>
</template>
<script>
export default {
  name: "nav-bar",
  components: {
  }
};
</script>
<style>
.navbar-collapse .navbar .nav, .navbar .nav > li {
    float:none;
    display:inline-block;
    vertical-align: top;
}
</style>