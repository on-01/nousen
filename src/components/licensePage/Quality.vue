<template>
  <div class="quality">
    <div class="quality-wrap">
      <a
        href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="quality-topTextWrap">
          <p class="quality-topText">人材開発支援助成金</p>
          <p class="quality-topText">人材育成支援コース 対象講座</p>
        </div>
      </a>
      <div class="quality-topImg">
        <img
          class="flex-img -right"
          src="../../assets/img/license_page/denken3/denken3_quality_kokuban.jpg"
          alt="電験三種 講習会 通信講座 オンライン講座"
        />
      </div>
      <p class="quality-mainTitle">
        【完全攻略】できる
        <br />
        ３つのポイント！
      </p>
      <div class="quality-flex">
        <div class="quality-box">
          <div class="quality-header">
            Point
            <span>1</span>
          </div>
          <figure class="quality-image">
            <img
              :src="imagePath_1"
              alt="電験三種 講習会 通信講座 オンライン講座"
            />
          </figure>
          <div class="quality-description">
            <p class="quality-title">
              <i class="scroll-animation-item">
                科目合格率82%以上※
                <br />
                合格に特化した教材を使用
              </i>
            </p>
            <p class="quality-line"></p>
            <p class="quality-text" v-html="text_1"></p>
          </div>
        </div>
        <div class="quality-box">
          <div class="quality-header">
            Point
            <span>2</span>
          </div>
          <figure class="quality-image">
            <a href="https://denken.nouryoku.com/kiso-kouza?_fsi=18qTQM4E">
              <img
                :src="imagePath_2"
                alt="電験三種 講習会 通信講座 オンライン講座"
              />
            </a>
          </figure>
          <div class="quality-description">
            <p class="quality-title">
              <i class="scroll-animation-item">
                基礎から始める電験三種
                <br />
                初心者オススメ基礎講座
              </i>
            </p>
            <p class="quality-line"></p>
            <p class="quality-text" v-html="text_2"></p>
          </div>
        </div>
        <div class="quality-box">
          <div class="quality-header">
            Point
            <span>3</span>
          </div>
          <figure class="quality-image">
            <img
              :src="imagePath_3"
              alt="電験三種 講習会 通信講座 オンライン講座"
            />
          </figure>
          <div class="quality-description">
            <p class="quality-title">
              <i class="scroll-animation-item">
                選べる受講スタイル
                <br />
                通学・オンライン・通信講座
              </i>
            </p>
            <p class="quality-line"></p>
            <p class="quality-text" v-html="text_3"></p>
          </div>
        </div>
      </div>
      <div class="quality-basis">
        <p class="basis-title">初学者も安心！基礎講座からしっかり学べます。</p>
        <div class="basis-wrap">
          <div class="basis-img">
            <img
              class="flex-img -right"
              src="../../assets/img/license_page/denken3/denken3_quality_basis.jpg"
              alt="電験三種 講習会 通信講座 オンライン講座"
            />
          </div>
          <div class="basis-textWrap">
            <p class="basis-head">初学者の方へ</p>
            <p class="basis-text">
              ・数学や物理に自信がない、特に文系出身で理系科目が苦手な方
              <br />
              ・電験三種の勉強を始めたいが、どこから手をつければよいかわからない方
              <br />
              ・基礎からしっかりと学び、無理なく理解を深めていきたい方
            </p>
            <p class="basis-head">電験三種の試験範囲を知りたい方へ</p>
            <p class="basis-text">
              ・電験三種で出題される科目やその内容について、全体像をつかみたい方
              <br />
              ・各科目の重要ポイントや学習の進め方を知りたい方
              <br />
              ・どのような知識が求められるのか、事前に把握して効率的に勉強したい方
            </p>
          </div>
        </div>
        <p class="basis-bottom">
          「数学が苦手でも大丈夫！電験三種の全体像を基礎から学ぼう」
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text_1: String,
      imagePath_1: String,
      text_2: String,
      imagePath_2: String,
      text_3: String,
      imagePath_3: String,
    },
  };
</script>

<style lang="scss" scoped>
  .quality {
    width: 100%;
    font-family: "メイリオ", sans-serif;
    padding: 20px 0 110px;
  }
  .quality-wrap {
    max-width: 1170px;
    margin: 0 auto;
  }
  .quality-mainTitle {
    font-weight: bold;
    text-align: center;
    font-size: 28px;
    color: red;
    margin-bottom: 30px;
  }

  .quality-mainTitle br {
    display: none;
  }
  .quality-flex {
    display: flex;
    justify-content: space-between;
  }
  .quality-box {
    width: 30%;
    background: #fff;
    position: relative;
  }
  .quality-header {
    display: flex;
    font-weight: bold;
    background-color: #1262b2;
    color: #fff;
    padding: 0 12px;
    position: relative;
    position: absolute;
    font-size: 12px;
    letter-spacing: 0.1em;
    top: 0;
    left: 0;
    align-items: center;
  }

  .quality-header span {
    font-size: 20px;
    vertical-align: baseline;
    margin-left: 4px;
  }

  /* .quality-header:after {
    content: "";
    border: 14px solid transparent;
    border-right: 8px solid #fff;
    position: absolute;
    right: 0;
    top: 0;
    } */

  .quality-description {
    padding: 20px 20px 10px;
  }
  .quality-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
  }

  .quality-title::v-deep i {
    background: -webkit-linear-gradient(to right, #f4b073 50%, transparent 50%);
    background: -moz-linear-gradient(to right, #f4b073 50%, transparent 50%);
    background: linear-gradient(to right, #f4b073 50%, transparent 50%);
    background-repeat: no-repeat;
    background-size: 200% 1em;
    background-position: 100% 0.5em;
    transition: background-position 0.5s ease-in-out;
    &.is-show {
      background-position: 0% 0;
    }
  }

  .quality-line {
    width: 20%;
    height: 4px;
    background: #1262b2;
    margin: 16px auto;
    border-radius: 8px;
  }
  .quality-image {
    width: 100%;
    margin: 0;
  }
  .quality-image img {
    width: 100%;
  }

  .quality-text {
    font-size: 15px;
    line-height: 1.8;
    margin: 0;
  }

  .quality-topTextWrap {
    padding: 2px 10px;
    border: solid 2px #000;
    background-color: #fff;
    max-width: 280px;
    margin: 42px auto 0;
  }

  .quality-topText {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    margin: 0;
  }

  .quality-topImg {
    margin: 30px auto 0 auto;
    width: 80%;
  }

  .quality-basis {
    padding: 30px;
    background-color: #fff;
  }

  .basis-title {
    position: relative;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    padding-bottom: 10px;
  }

  .basis-title::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 4px;
    background: #1262b2;
    border-radius: 8px;
    bottom: 0;
    left: 0;
    transform: translateX(-50%);
  }

  .basis-wrap {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .basis-img {
    width: 30%;
  }

  .basis-textWrap {
    width: 70%;
  }

  .basis-head {
    font-weight: 700;
    font-size: 18px;
    margin: 0;
  }

  .basis-text {
    margin: 5px 0 0;
  }

  .basis-bottom {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin: 30px 0 0;
  }

  @media print, screen and (max-width: 1000px) {
    .quality {
      padding-bottom: 40px;
    }
    .quality-wrap {
      width: 90%;
    }
    .quality-mainTitle {
      font-size: 20px;
      margin-bottom: 0;
    }

    .quality-flex {
      flex-wrap: wrap;
    }

    .quality-box {
      width: 100%;
      margin: 30px auto 0;
    }

    .quality-description {
      padding: 20px 20px 20px;
    }
  }

  @media print, screen and (max-width: 560px) {
    .quality-mainTitle {
      font-size: 24px;
    }
    .quality-mainTitle br {
      display: block;
    }

    .quality-mainTitle span {
      display: none;
    }
    .quality-title {
      font-size: 18px;
    }
  }
</style>
