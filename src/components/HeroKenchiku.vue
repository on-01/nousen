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
      <p class="title -red">
        能センの最短合格講座で
        <br />
        目標達成の未来へ
      </p>
      <!-- <p v-if="subTitle" class="sub-title" v-html="subTitle"></p> -->
      <p class="sub-title">
        <!-- <a href="https://denken.nouryoku.com/kiso-kouza">基礎講座</a>
        | -->
        <a href="https://kenchiku.nouryoku.com/">通学講座</a>
        |
        <a href="https://kenchiku-online.nouryoku.com/">オンライン講座</a>
        <!-- |
        <a href="https://t.kouza.nouryoku.com/">通信講座</a> -->
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
      subTitle: String,
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

  .title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    background-color: #fff;
    border-radius: 8px;
    color: #000;
    padding: 1em 114px;
    border: 6px solid #f4891e;
    @media print, screen and (max-width: 1000px) {
      padding: 1em 62px;
    }
    .title {
      margin: 0;
      letter-spacing: 0.1em;
      font-size: 29px;
      font-family: "メイリオ", sans-serif;
      text-align: center;
      @media print, screen and (max-width: 1000px) {
        font-size: 20px;
      }
      @media print, screen and (max-width: 414px) {
        font-size: 16px;
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
        font-size: 16px;
      }
      @media print, screen and (max-width: 414px) {
        font-size: 13px;
      }
      a {
        text-decoration: underline;
      }
    }
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
  .doboku .title,
  .kenchiku .title {
    font-size: 24px;

    @media print, screen and (max-width: 1000px) {
      font-size: 16px;
    }
  }

  @media print, screen and (max-width: 980px) {
    .doboku .hero-inner,
    .kenchiku .hero-inner {
      height: 240px;
    }
    .doboku .title-wrapper,
    .kenchiku .title-wrapper {
      top: 60%;
    }
  }
</style>
