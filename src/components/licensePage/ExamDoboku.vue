<template>
  <div class="exam">
    <div class="exam-inner">
      <p class="exam-title">一次検定の実力診断は提出課題！</p>
      <p class="exam-line"></p>
      <div class="exam-image -center">
        <figure>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_7.jpg"
            alt="電験三種"
          />
        </figure>
      </div>
      <p class="exam-note">
        <i class="scroll-animation-item">
          100点満点で図書カードをプレゼント！【提出課題】
        </i>
      </p>
      <p class="exam-text -top">
        ◆ 実力診断として実施してください
        <br />
        ◆ 試験時間　５０分
        <br />
        <br />
        ◆ 問題数　全２０問
        <br />
        見事全問正解した暁には【図書カード】をプレゼントします！
        <br />
        <br />
        全問正解に向けて勉強頑張りましょう！！
      </p>
      <p class="exam-title">{{ title }}</p>
      <p class="exam-line"></p>
      <div class="exam-image">
        <figure>
          <img
            src="../../assets/img/license_page/doboku_s/doboku_exam_1.jpg"
            alt="電験三種"
          />
        </figure>
        <figure>
          <img
            src="../../assets/img/license_page/doboku_s/doboku_exam_2.jpg"
            alt="電験三種"
          />
        </figure>
        <figure>
          <img
            src="../../assets/img/license_page/doboku_s/doboku_exam_3.jpg"
            alt="電験三種"
          />
        </figure>
      </div>
      <p class="exam-note">
        <i class="scroll-animation-item">
          通学講座・オンライン講座で予想模擬試験
        </i>
      </p>
      <p class="exam-text">
        <span>【解答解説付き模擬試験】</span>
        <br />
        最新の本試験出題傾向を徹底分析した一次試験対策の予想問題は解答解説付きになります。
        <br />
        <br />
        <span>・模擬試験（問題）</span>
        <br />
        試験で出題が予想される問題を扱った、能センオリジナルの模擬試験です。
        <br />
        本番前の総仕上げとしてご活用ください。
        <br />
        <br />
        <span>・模擬試験（解答解説）</span>
        <br />
        解説付きの解答で理解度UP！問題の考え方から解き方まで丁寧に説明します。
      </p>
      <div class="lecture-section -center">
        <figure class="lecture-image">
          <img
            src="../../assets/img/license_page/doboku_s/doboku_lecture2.jpg"
            alt="電験三種"
          />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title">勉強計画を立てて最短合格へ</p>
          <p class="lecture-line"></p>
          <p class="lecture-text">
            勉強計画表は、勉強をスムーズに進めるために、とても効果的な方法だと言われています。
            能センでは計画に沿った勉強で最短合格ができるように、勉強計画表をお渡ししています。
          </p>
          <p class="lecture-title -small">
            能センの教材、副教材全てが合格へと通じています！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
    },
  };
</script>

<style lang="scss" scoped>
  .exam {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
  }
  .exam-inner {
    padding: 0 80px 60px;
  }

  .exam-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
  }

  .exam-note::v-deep i {
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

  .exam-line {
    width: 20%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto;
    border-radius: 8px;
  }

  .exam-image {
    display: flex;
    justify-content: space-between;
    margin: 24px auto;
  }

  .exam-image.-center {
    justify-content: center;
    column-gap: 60px;

    figure {
      margin: 0;
    }
  }

  .exam-image figure {
    // width: 30%;
    width: 27%;
    margin: 0 auto;
  }

  .exam-image figure img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }

  .exam-heading {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    margin: 10px 0 20px;
  }

  .exam-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    margin-top: 20px;
    margin: 0;
  }

  .exam-text.-top {
    max-width: 511px;
    margin: 0 auto 50px auto;
  }

  .exam-note {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.8;
    margin: 0;
    text-align: center;
    margin-bottom: 8px;
  }
  .exam-text span {
    font-weight: 700;
  }
  .exam-bottom-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
  }
  .exam-bottom-image {
    width: 54%;
    margin: 0;
  }
  .exam-bottom-description {
    width: 42%;
  }
  .exam-bottom-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
  .exam-bottom-line {
    width: 40%;
    height: 4px;
    background: #249ef0;
    margin: 10px auto;
    border-radius: 8px;
  }
  .exam-bottom-text {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 28px;
  }
  .exam-bottom-text span {
    font-weight: 700;
  }
  .exam-bottom-wrap {
    padding: 18px 0;
  }

  @media print, screen and (max-width: 1100px) {
    .exam-inner {
      padding: 40px 60px;
    }
  }

  @media print, screen and (max-width: 1000px) {
    .exam {
      width: 90%;
    }
    .exam-inner {
      padding: 0px 0px 40px;
    }
    .exam-bottom-section {
      flex-wrap: wrap;
      margin-top: 36px;
    }
    .exam-bottom-image {
      width: 100%;
      margin-top: 10px;
    }
    .exam-bottom-description {
      width: 90%;
      margin-top: 20px;
      padding-right: 0;
      margin: 0 auto;
      text-align: center;
    }
    .exam-bottom-title {
      font-size: 20px;
    }
    .exam-bottom-text {
      font-size: 16px;
      line-height: 1.6;
      margin-top: 20px;
    }
    .exam-image figure img {
      max-width: 96%;
    }
  }
  @media print, screen and (max-width: 800px) {
    .exam-image figure {
      margin: 0 auto;
      width: 48%;
    }
    .exam-note {
      margin-top: 8px;
    }

    .exam-image figure img {
      display: block;
      margin: 0 auto;
    }
  }

  @media print, screen and (max-width: 560px) {
    .exam-title {
      font-size: 20px;
    }

    .exam-text {
      font-size: 14px;
      line-height: 1.6;
    }
    .exam-note {
      font-size: 16px;
    }
  }
</style>
