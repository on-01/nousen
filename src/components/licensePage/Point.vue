<template>
  <div class="point">
    <div class="point-inner">
      <p class="point-title" v-if="title">{{ title }}</p>
      <div class="point1 point-item" v-for="(item, index) in points" :key="index">
        <div class="point-header">
          Point
          <span>{{index + 1}}</span>
        </div>
        <p class="point-content" v-html="item"></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
 props: {
   points: Array,
   title: String,
 } 
}
</script>

<style lang="scss" scoped>
.point {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  margin-top: -20px;
  z-index: 0;
  position: relative;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
  }
}
.point-inner {
  padding: 50px;
  @media print, screen and (max-width: 1000px) {
    padding: 50px 0;
  }
}
.point-title {
  font-weight: bold;
  margin: 0 auto 20px;
  text-align: center;
  font-size: 28px;

  @media print, screen and (max-width: 560px) {
    font-size: 20px;
  }
}

.point-item {
  display: flex;
  justify-content: space-between;
  @media print, screen and (min-width: 1001px) {
    align-items: center;
    margin: 30px 0;
  }
  @media print, screen and (max-width: 1000px) {
    display: block;
  }
  .point-header {
    display: inline-block;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    padding: 0 30px 0 20px;
    position: relative;
    font-size: 13px;
    letter-spacing: 0.1em;
    span {
      font-size: 24px;
      vertical-align: middle;
      margin-left: 5px;
    }
    &:after {
      content: "";
      border: 24px solid transparent;
      border-right: 10px solid #fff;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .point-content {
    max-width: calc(100% - 180px);
    width: 100%;
    color: #1D9BF0;
    font-weight: bold;
    margin: 0;
    @media print, screen and (max-width: 1000px) {
      padding: 20px 5%;
      max-width: 90%;
    }
  }
}

//個別のカラー
.denken3 {
   .point-header {
      background-color: #1D9BF0;
   }
   .point-content {
      color: #333;
   }
}
.koujishi1,.koujishi2 {
  .point-header {
    background-color: #b60081;
  }
  .point-content {
    color: #b60081;
  }
}
.denkikoujisekou,.kankouji {
  .point-header {
    background-color: #00a73c;
  }
  .point-content {
    color: #00a73c;
  }
}
.kenchiku,.doboku {
  .point-header {
    background-color: #ed7d31;
  }
  .point-content {
    color: #333;
  }
}
.kyuusui {
  .point-header {
    background-color: #00afcc;
  }
  .point-content {
    color: #333;
  }
}
</style>