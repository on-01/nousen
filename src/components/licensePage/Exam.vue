<template>
  <div class="exam">
    <div class="exam-inner">
      <p class="exam-title">{{ title }}</p>
      <p class="exam-line"></p>
      <div class="exam-image">
        <figure>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_3.jpg"
            alt="電験三種 第三種電気主任技術者"
          />
        </figure>
        <figure>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_1.jpg"
            alt="電験三種 第三種電気主任技術者"
          />
        </figure>
        <figure>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_2.jpg"
            alt="電験三種 第三種電気主任技術者"
          />
        </figure>
      </div>
      <p class="exam-note">
        <!-- <i class="scroll-animation-item">
          通学講座・オンライン講座で予想模擬試験
        </i> -->
        通学講座・オンライン講座で予想模擬試験
      </p>
      <p class="exam-text">
        <span>【解答解説付き模擬試験】</span>
        <br />
        最新の本試験出題傾向を徹底分析した予想問題は【理論】【電力】【機械】【法規】の４科目分を取り揃えています。
        <br />
        <br />
        <span>・模擬試験（問題）</span>
        <br />
        今年の試験で出題が予想される問題を厳選した、能センオリジナルの模擬試験です。
        <br />
        オンライン講座では、この最新模試に加えて、過去2年分の模擬試験にも挑戦できます！
        <br />
        試験直前の総仕上げとして、ぜひご活用ください。
        <br />
        <br />
        <span>・模擬試験（解答解説）</span>
        <br />
        解説付きの解答で理解度UP！30分程度のポイント解説の講習（オンライン講座では動画）があり、問題の考え方を丁寧に指導します。
      </p>
      <p class="exam-title -bottom">提出課題で実力診断ができる！</p>
      <p class="exam-line"></p>
      <div class="exam-image -center">
        <figure>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_5.jpg"
            alt="電験三種 第三種電気主任技術者"
          />
          <p class="exam-heading">【提出課題】</p>
        </figure>
        <figure>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_6.jpg"
            alt="電験三種 第三種電気主任技術者"
          />
          <p class="exam-heading">【終了試験問題】</p>
        </figure>
      </div>
      <!-- <p class="exam-note">
        <i class="scroll-animation-item">
          通学講座・オンライン講座で予想模擬試験
        </i>
      </p> -->
      <p class="exam-text -top">
        4科目分の提出課題と終了試験問題を通じて、ご自身の実力をより正確に評価することができます。
        <br />
        これらの課題や試験問題は、それぞれの科目における理解度や知識の深さを測るために設計されており、学習の進捗を確認しながら、弱点や改善点を見つけ出す手助けとなります。
        <br />
        <br />
        また、終了試験問題は実際の試験環境に近い形式で提供されるため、試験対策にも非常に有益です。
        <br />
        これらを活用することで、より効果的な学習計画を立てることができ、学習成果を最大限に引き出すことが可能になります。
      </p>
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
    margin: 50px auto 0;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
  }
  .exam-inner {
    padding: 0 80px;
  }

  .exam-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
  }

  .exam-title.-bottom {
    margin-top: 70px;
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
    background: #1262b2;
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
    max-width: 765px;
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
    margin-top: 78px;
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
    background: #1262b2;
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
