<template>
  <section :class="['hero', { 'no-pic': !backImgOver }]">
    <!-- 使用方法
    <Hero :backImgOver="require('../assets/hero.jpg')" :backImgUnder="require('../assets/hero_sp.jpg')" title="タイトル" />
    -->
    <div
      v-if="backImgOver"
      class="hero-inner over-display"
      :style="{ 'background-image': `url(${backImgOver})` }"
    ></div>
    <div
      v-if="backImgUnder"
      class="hero-inner under-display"
      :style="{ 'background-image': `url(${backImgUnder})` }"
    ></div>
    <div class="title-wrapper" :style="styles">
      <div v-if="icon" class="icon">
        <img :src="icon" alt="" />
      </div>
      <p v-if="headTitle" class="sub-title" v-html="headTitle"></p>
      <h2 class="title" v-html="title"></h2>
      <p class="title -orange">
        合格への最短ルート
        <br />
        確かな成果を、確実に
      </p>
      <p class="sub-title -link">
        <a href="https://denken.nouryoku.com/kiso-kouza">基礎講座</a>
        |
        <a href="https://denken.nouryoku.com/denken3-tuugaku">通学講座</a>
        |
        <a href="https://taiken.nouryoku.com/">無料体験講座</a>
        <br />
        <a href="https://denken.nouryoku.com/online">オンライン講座</a>
        |
        <a href="https://t.kouza.nouryoku.com/">通信講座</a>
      </p>
    </div>
  </section>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "hero",
    components: {},
    props: {
      backImgOver: String,
      backImgUnder: String,
      title: String,
      // subTitle: String,
      headTitle: String,
      color: {},
      icon: String,
    },
    computed: {
      // バインドするスタイルを生成
      // styles () {
      //   return {
      //     '--color': this.color
      //   }
      // }
      styles() {
        return {
          "background-color": this.color,
        };
      },
    },
  };
</script>

<style scoped lang="scss">
  .hero {
    position: relative;
    &.no-pic {
      //背景画像がない場合は余白つける
      padding: 150px 0;
      @media print, screen and (max-width: 980px) {
        padding: 100px 0;
      }
    }
  }
  .hero-inner {
    height: 470px;
    background-position: center;
    background-size: cover;
    position: relative;
    @media print, screen and (max-width: 980px) {
      height: 375px;
    }
    &.over-display {
      @media print, screen and (max-width: 980px) {
        display: none;
      }
    }
    &.under-display {
      @media print, screen and (min-width: 981px) {
        display: none;
      }
    }
  }
  .-red {
    color: red;
    font-weight: 700;
  }
  .-orange {
    color: #ff4500;
    font-weight: 700;
  }

  .title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    background-color: #fff;
    border-radius: 8px;
    color: #000;
    padding: 0.8em 65px;
    border: 6px solid #1262b2;
    @media print, screen and (max-width: 1000px) {
      padding: 1em;
    }
    .title {
      margin: 0;
      letter-spacing: 0.3em;
      font-size: 24px;
      font-family: "メイリオ", sans-serif;
      text-align: center;
      @media print, screen and (max-width: 1000px) {
        font-size: 15px;
      }
    }
    .sub-title {
      margin: 0;
      letter-spacing: 0.1em;
      font-size: 22px;
      font-family: "メイリオ", sans-serif;
      font-weight: 600;
      text-align: center;
      @media print, screen and (max-width: 1000px) {
        font-size: 15px;
      }
      @media print, screen and (max-width: 560px) {
        font-size: 12px;
      }
    }
    .sub-title.-link {
      font-size: 18px;
      @media print, screen and (max-width: 1000px) {
        font-size: 15px;
      }
      @media print, screen and (max-width: 560px) {
        font-size: 12px;
      }
    }
  }
  .sub-title a {
    text-decoration-line: underline;
  }
  .icon {
    width: 80px;
    position: absolute;
    top: -40px;
    left: -40px;
    @media print, screen and (max-width: 414px) {
      width: 40px;
      top: -20px;
      left: -20px;
    }
  }

  @media print, screen and (max-width: 980px) {
    .hero-inner {
      height: 265px;
    }
    .title-wrapper {
      top: 60%;
      padding: 1rem 62px;
    }
  }

  .-sp-none {
    @media print, screen and (max-width: 767px) {
      display: none;
    }
  }
  .-pc-none {
    display: none;
    @media print, screen and (max-width: 767px) {
      display: inline-block;
    }
  }
</style>
