<template>
  <section class="point">
    <div class="headline">
      <img :src="headlineImg" alt="point1">
    </div>
    <div class="main">
      <div class="img">
        <img :src="mainImg" alt="">
      </div>
      <p class="catch" v-html="myCatch">
      </p>
    </div>
    <div class="text" v-html="text">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    headlineImg: String,
    mainImg: String,
    myCatch: String,
    text: String,
  }
}
</script>

<style lang="scss" scoped>
.point {
  max-width: 430px;
  width: 100%;
  position: relative;
  margin-top: 50px;
  .headline {
    width: 184px;
  }
  .main {
    position: relative;
    background-color: #ededed;
    width: 100%;
    height: 270px;
  }
  .img {
    position: absolute;
    width: 100%;
    height: 80%;
    top: 10%;
    text-align: center;
    img {
      height: 100%;
    }
  }
  .catch {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    left: 0;
    width: 100%;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #ed6c00;
    @media print, screen and (max-width: 1000px) {
      font-size: 20px;
    }
  }
  .text {
    font-size: 15px;
    margin-top: 20px;
  }
}

</style>