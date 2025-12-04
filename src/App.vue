<script setup>
import Header from './Components/Header.vue';
import Footer from './Components/Footer.vue';
</script>

<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  height: 100%;
  background-color: #E6D0D4;
}

main {
  min-height: calc(100vh - 270px); /* чтобы футер не прилипал к середине */
}

</style>