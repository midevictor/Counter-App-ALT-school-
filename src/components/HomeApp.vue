<template>
  <div class="container">
    <main class='not-found'>
      <h1 class='heading-main'>How It Works</h1>
      <p class='home_par'>Counter App with VueJS that performs Increment, decrement, Reset and set Value functions.
      </p>
      <div class="button_wrap">
        <button type='button' class='btn'><router-link to="/counter">Counter</router-link> </button>
        <button type='button' class='btn'><a href='https://www.github.com/midevictor'>GitHub</a> </button>
      </div>
      <!-- <span class='span'>
        <p class='home__msg'>Ehiz Dev</p>
      </span> -->
    </main>
    <div class="image-wrap"> 
      <img :src="imageSrc" alt="My Image">
    </div>
  </div>
</template>

<script>
import myImage from "@/assets/World.png";
export default {
  name: 'HomeApp',
  data() {
    return {
      imageSrc: myImage, // Assign the image to a variable
    };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} 
.container {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin: 0 auto;
  width: 100%;
  height: 100%;
  animation: fadeIn 1s ease-in-out;
  padding: 3rem;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); */
}
.image-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 2px;
  
}
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  width: 98%;
  margin: 0 auto;
  animation: fadeIn 1.5s ease-in-out;
  height: 100%;
  overflow: none;
}
h1.heading-main{
  font-size: 4rem;
  font-weight: 700;
  font-family: primaryFont;
  letter-spacing: -0.025em;
  color: rgb(17, 24, 39 ,1);
}
.home_par{
  font-family: terFont;
  font-size: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: rgb(17, 24, 39 ,1);
  /* margin-bottom: 4rem; */
  color: rgb(107,114 ,128,1)
}
.button_wrap{
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  gap: 1rem;
}
.btn{
  width: 100px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: rgb(17, 24, 39 ,1);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: primaryFont;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.btn a{
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  font-family: primaryFont;
  color: #fff;
  padding: 1rem;
}
@media screen {
  
}
</style>
