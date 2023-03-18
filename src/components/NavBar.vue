<template>
  <nav>
    <div class="icon">
    <i class="fa-sharp fa-solid fa-dice-d10"></i>
    <div class="logo">Counter Game</div>
    </div>
    <div class="nav-links">
      <router-link to="/" >Home</router-link>
      <router-link to="/counter">Counter</router-link>
    </div>
    <ToggleSwitch/>
  </nav>
</template>

<script>
import ToggleSwitch from "./ToggleSwitch.vue";
export default {
  name: 'NavBar'
  ,components: {
    ToggleSwitch,
  }
}
</script>

<style scoped>
nav {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(5, 2, 62);
  color: #fff;
  width: 100%;
  padding: 14px;
  margin: 0 auto;
  box-shadow: 2px 2px 4px rgb(20, 11, 208);;
}
.icon{
  display: flex;
}

.logo {
  /* font-size: 1.5rem; */
  font-family: primaryFont;
  font-weight: 700;
  letter-spacing: 2px;
  margin-left: 15px;
  font-size: 1.125rem/* 18px */;
  line-height: 1.75rem/* 28px */;
}
.fa-sharp fa-solid fa-dice-d10{
  font-size: 5rem;
  color: #fff;
}

.nav-links {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
}

.nav-links a {
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;
  font-family: primaryFont;
  font-weight: bolder;
}
.nav-links a:hover{
  color: rgb(72, 57, 229);
  text-decoration: underline;
}

</style>

