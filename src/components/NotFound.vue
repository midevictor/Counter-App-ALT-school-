<template>
  <main class='not-found'>
    <div class='image_wrapper'>
      <img src='@/assets/404.svg' />
    </div>
    <h1 class=" head">Oops !</h1>
    <h1 class='heading-main'>404 Not Found</h1>
    <p class='error__msg'>Sorry, the page you requested could not be found.</p>
    <button type='button' class='btn'><router-link to="/">Back To Home</router-link> </button>
  </main>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>
/* ... */
.not-found{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: calc(100vh - 80px);
  width: 98%;
  margin: 0 auto;
}

.image_wrapper{
  width: 200px;
  height: 200px;
}
.image_wrapper img{
  width: 100%;
}
.head{
  font-size: 6rem/* 96px */;
  line-height: 1;
  font-weight: 700;
}
.heading-main{
  font-size: 48px;
  margin-bottom: 16px;
  text-align: center;
  font-family: primaryFont;
  font-weight: bolder;
}
.error__msg{
  font-family: terFont;
  font-size: 16px;
  text-align: center;
}
.btn{
  height: 4rem/* 64px */;
  padding-left: 1.5rem/* 24px */;
  padding-right: 1.5rem/* 24px */;
  min-height: 4rem/* 64px */;
  font-size: 1.125rem/* 18px */;
  background-color: rgb(17, 24, 39, 1);
  color: #fff;
  border-radius: 0.5rem/* 4px */;
}
.btn a{
  color: #fff;
  text-decoration: none;
}

</style>
