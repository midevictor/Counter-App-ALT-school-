<template>
  <div class="app">
    <Navbar />
    <!-- <ToggleSwitch /> -->
    <router-view />
  </div>
</template>

<script>
//imported NavBar component
import Navbar from './components/NavBar.vue'
//imported toggleSwitchComponent
// import ToggleSwitch from "./components/ToggleSwitch.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    // ToggleSwitch,
  }
};
</script>

<style>
  .app{
    width: 100vw;
    max-width: 100%;
    height: 100vh;
  }
</style>