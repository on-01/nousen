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

      <div class="quality-flex">
        <div class="quality-box">
          <div class="quality-header">
            Point
            <span>1</span>
          </div>
          <figure class="quality-image">
            <img :src="imagePath_1" alt="電験三種 第三種電気主任技術者" />
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
              <img :src="imagePath_2" alt="電験三種 第三種電気主任技術者" />
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
            <img :src="imagePath_3" alt="電験三種 第三種電気主任技術者" />
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
      <!-- <div class="quality-topImg">
        <img
          class="flex-img -right"
          src="../../assets/img/license_page/denken3/denken3_quality_kokuban.jpg"
          alt="電験三種 第三種電気主任技術者"
        />
      </div> -->
      <div class="quality-basis">
        <p class="basis-title">初学者も安心！基礎講座からしっかり学べます。</p>
        <div class="basis-wrap">
          <div class="basis-img">
            <img
              class="flex-img -right"
              src="../../assets/img/license_page/denken3/denken3_quality_basis.jpg"
              alt="電験三種 第三種電気主任技術者"
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
            <p class="basis-head -bottom">電験三種の試験範囲を知りたい方へ</p>
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
        <div class="workshop-orangeLine">
          <div class="workshop-orangeLine__inner">
            <img
              class="workshop-orangeLine__icon"
              src="../../assets/img/icon/note.svg"
            />
            <p class="workshop-orangeLine__heading">
              令和8年度上期 無料体験講習「基礎の基礎」
            </p>
            <p class="workshop-orangeLine__title">
              電験三種の合格を目指す皆さまへ！
            </p>
            <p class="workshop-orangeLine__text">
              これから勉強を始める方も、基礎を固め直したい方も大歓迎！
              <br />
              受験成功への第一歩として、無料体験講習を開催します！
              <br />
              <br />
              日時：令和8年4月04日(土) 9:30～12:30
              <span>【受付終了】</span>
              <br />
              場所：専売ビル３F会議室（定員25名）
              <br />
              費用：無料
              <br />
              持ち物：筆記用具・電卓（やる気もぜひ！）
            </p>
            <div class="application">
              <div class="experience-link">
                <a class="application-link -blue">
                  無料体験講座（基礎の基礎）お申込み
                  <IconBase class="icon" width="25" height="25">
                    <IconFingerRight />
                  </IconBase>
                </a>
              </div>
            </div>
            <p class="basis-bottom-text">
              無料体験講習のお申込みは、応募多数のため受付を終了しました。
              <br />
              次回は令和8年10月頃を予定しております。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IconBase from "../IconBase.vue";
  import IconFingerRight from "../icons/IconFingerRight.vue";

  export default {
    components: {
      IconBase,
      IconFingerRight,
    },
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
    padding: 20px 0 50px;
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
    font-family: メイリオ, sans-serif;
    margin-bottom: 30px;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
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
    @media print, screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .quality-basis {
    padding: 30px 50px;
    background-color: #fff;
    margin-top: 40px;
    border: solid 4px #1262b2;
    max-width: 828px;
    margin-left: auto;
    margin-right: auto;

    @media print, screen and (max-width: 768px) {
      padding: 30px 20px;
    }
  }

  .basis-title {
    position: relative;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    padding-bottom: 10px;
    @media print, screen and (max-width: 1000px) {
      font-size: 30px;
    }
    @media print, screen and (max-width: 768px) {
      font-size: 24px;
    }
    @media print, screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  .basis-title::after {
    position: absolute;
    content: "";
    width: 30%;
    height: 4px;
    background: #1262b2;
    border-radius: 8px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .basis-wrap {
    margin: 40px auto 0;
    display: flex;
    justify-content: center;
    max-width: 975px;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .basis-img {
    width: 35%;
    @media print, screen and (max-width: 1000px) {
      margin: 0 auto;
      width: 50%;
    }
  }

  .basis-textWrap {
    width: 65%;
    margin-left: 30px;
    margin-top: 30px;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
      margin-left: 0;
    }
  }

  .basis-head {
    font-weight: 700;
    font-size: 20px;
    margin: 0;
    @media print, screen and (max-width: 1000px) {
      font-size: 20px;
    }
    @media print, screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media print, screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  .basis-head.-bottom {
    margin-top: 20px;
  }

  .basis-text {
    margin: 5px 0 0;
    font-size: 15px;
    @media print, screen and (max-width: 1000px) {
      font-size: 15px;
    }
    @media print, screen and (max-width: 480px) {
      font-size: 14px;
    }
  }

  .basis-bottom {
    font-size: 27px;
    font-weight: 700;
    text-align: center;
    margin: 30px 0 0;
    text-decoration-line: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: #ffff8d;
    @media print, screen and (max-width: 1000px) {
      font-size: 24px;
    }
    @media print, screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media print, screen and (max-width: 480px) {
      font-size: 18px;
    }
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

  .workshop-orangeLine {
    padding: 0 30px;
    @media print, screen and (max-width: 1000px) {
      padding: 0;
    }
  }

  .workshop-orangeLine.-gansho {
    padding: 0 0 40px;
  }

  .workshop-orangeLine__inner {
    margin: 40px auto;
    padding: 20px;
    border: 4px solid #f4891e;
    border-radius: 12px;
    max-width: 575px;
    // min-width: 652px;
    font-family: メイリオ, sans-serif;
    font-size: 16px;
    position: relative;
  }

  .workshop-orangeLine__inner.-gansho {
    max-width: 708px;
    margin-top: 40px;
    margin-bottom: 0;
    // @media print, screen and (max-width: 1000px) {
    //   margin-top: 0;
    // }
  }

  .workshop-orangeLine__icon {
    position: absolute;
    left: -20px;
    top: -18px;
    width: 54px;
  }

  .workshop-orangeLine__heading {
    font-size: 27px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    @media print, screen and (max-width: 1000px) {
      font-size: 24px;
    }
    @media print, screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media print, screen and (max-width: 480px) {
      font-size: 18px;
    }
  }

  .workshop-orangeLine__title {
    margin: 5px 0 0;
    font-size: 15px;
    font-weight: 700;
    @media print, screen and (max-width: 1000px) {
      font-size: 15px;
    }
    @media print, screen and (max-width: 480px) {
      font-size: 14px;
    }
  }

  .workshop-orangeLine__text {
    margin: 5px 0 0;
    font-size: 15px;
    @media print, screen and (max-width: 1000px) {
      font-size: 15px;
    }
    @media print, screen and (max-width: 480px) {
      font-size: 14px;
    }
    span {
      font-weight: 700;
      color: red;
    }
  }

  .application {
    font-weight: bold;
    margin: 50px auto 25px;
    text-align: center;
    font-size: 18px;
    @media print, screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  .application-link {
    margin: 0 auto;
    color: #fff;
    max-width: 400px;
    width: 100%;
    padding: 20px 50px;
    text-align: center;
    // background-color: #ff4500;
    // border: 3px solid #ff4500;
    background-color: #1262b2;
    border: 3px solid #1262b2;
    box-shadow: 4px 4px 10px rgba(0, 47, 77, 0.3);
    border-radius: 10px;
    @media print, screen and (max-width: 1000px) {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      padding: 10px;
      width: 90%;
    }
  }
  .application-link.-blue {
    background-color: #1262b2;
    border: 3px solid #1262b2;
  }

  .application-link.-right {
    margin-left: 0.5%;
    @media print, screen and (max-width: 1000px) {
      margin-left: auto;
    }
  }
  .application-link.-left {
    margin-right: 0.5%;
    @media print, screen and (max-width: 1000px) {
      margin-right: auto;
    }
  }
  .fax-link {
    margin-top: 60px;
    color: #ed6c00;
    text-decoration: underline;
  }
  .experience-link {
    margin-top: 60px;
  }

  .basis-bottom-text {
    color: red;
    font-size: 15px;
    max-width: 450px;
    margin: 0 auto;
    margin-top: 8px;
    font-weight: 700;
  }
</style>
