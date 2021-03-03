<template>
  <div id="app">
    <header class="container">
      <ul class="nav">
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </header>
    <main class="container">
      <transition name="slide-fade">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./assets/scss/_index.scss";
</style>
