<template>
  <div class="method">
      <div class="method-inner">
          <p class="method-title">勉強方法は？</p>
          <p class="method-line"></p>
          <p class="method-text" v-html="text"></p>
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
.method {
    max-width: 1070px;
    width: 100%;
    background-color: #fff;
    margin: 20px auto;
    z-index: 0;
    position: relative;
}
.method-inner {
    padding: 20px 40px;
}

.method-line {
    width: 10%;
    height: 4px;
    background: #ed7d31;
    margin: 20px auto 20px;
    border-radius: 8px;
}

.method-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}

.method-text {
    font-size: 14px;
    line-height: 1.8;
    margin-top: 20px;
}

@media print, screen and (max-width: 1000px) {
    .method {
        width: 90%;
    }
}

@media print, screen and (max-width: 560px) {
    .method-title {
        font-size: 20px;
    }
    .method-text {
    font-size: 14px;
    line-height: 1.6;
    }
}

</style>
