<template>
  <div class="food">
      <div class="food-inner">
          <p class="food-title">勉強に効果的な食事・栄養素</p>
          <p class="food-line"></p>
          <p class="food-text" v-html="text"></p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  } 
}
</script>

<style lang="scss" scoped>
.food {
    max-width: 1070px;
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: 'Meiryo', sans-serif;
}
.food-inner {
    padding: 20px 40px;
}

.food-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
}

.food-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}

.food-text {
    font-size: 14px;
    line-height: 1.8;
    margin-top: 20px;
}

@media print, screen and (max-width: 1000px) {
    .food {
        width: 90%;
    }
}

@media print, screen and (max-width: 560px) {
    .food-title {
        font-size: 20px;
    }
    .food-text {
    font-size: 14px;
    line-height: 1.6;
    }
}

</style>
