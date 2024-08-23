<template>
  <div class="exam">
    <div class="exam-inner">
      <div class="exam-image -center">
        <figure>
          <img
            src="../../assets/img/license_page/kenchiku_s/kenchiku_exam.jpg"
            alt="建築施工管理技士 講習会 通信講座"
          />
        </figure>
      </div>
      <p class="exam-title">わかるまで質問してください。</p>
      <p class="exam-note">
        <i class="scroll-animation-item">何回でも質問に対応いたします！</i>
      </p>
      <p class="exam-note">
        <i class="scroll-animation-item">
          学習に関する相談も気軽にご連絡ください。
        </i>
      </p>
      <p class="exam-text -top">
        効率的な学習方法や、何から手をつけて良いのか分からないといった、
        <br />
        学習内容そのものではなく学習の方法に関する問い合わせもOKです！
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
    // max-width: 1170px;
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
    margin-top: 20px;
    margin-bottom: 20px;
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
    margin: 0 auto;
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
    width: 50%;
    margin: 0 auto;
  }

  .exam-image figure img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }

  .exam-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    margin-top: 20px;
    margin: 0;
  }

  .exam-text.-top {
    max-width: 514px;
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
    // width: 54%;
    width: 38%;
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

  .lecture {
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    font-family: "メイリオ", sans-serif;
  }
  .lecture-inner {
    max-width: 1170px;
    width: 100%;
    padding: 30px 0 0;
    margin: 0 auto;
  }

  .lecture-section {
    display: flex;
    justify-content: space-between;
  }
  .lecture-section.-center {
    flex-direction: row-reverse;
    margin-top: 40px;
    .lecture-description {
      // margin-left: 40px;
      padding-right: 0;
    }
    .lecture-image {
      width: 38%;
      img {
        width: 50%;
        margin-left: 100px;
      }
    }
  }
  .lecture-section.-bottom {
    margin-top: 18px;
    padding-bottom: 40px;
  }

  .lecture-image {
    width: 48%;
  }
  .lecture-description {
    width: 48%;
    padding-right: 20px;
  }

  .lecture-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
  .lecture-title.-small {
    font-size: 16px;
    line-height: 1.6;
    text-align: left;
  }
  .lecture-line {
    width: 20%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
  }
  .lecture-text,
  .lecture-bold {
    font-size: 16px;
    line-height: 2;
  }

  .lecture-text {
    margin-top: 0;
  }

  .lecture-bold {
    font-weight: bold;
    margin-bottom: 0;
  }

  .lecture-book-images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 48%;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }
  .lecture-book-image {
    width: 28%;
    margin: 0;
  }
  .lecture-teacher {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  .lecture-profile {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
  .add {
    padding: 10px 30px 40px;
  }
  .add-wrapper {
    max-width: 755px;
    margin: 0 auto;
  }
  .add-text1 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  .add-text2 {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }

  .add-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #000;
    border: 2px solid #1da1f2;
    padding: 8px 0;
    margin: 36px 0 12px;
  }

  @media print, screen and (max-width: 1100px) {
    .exam-inner {
      padding: 40px 60px;
    }
  }

  @media print, screen and (max-width: 1000px) {
    .exam {
      width: 100%;
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
    .lecture-section {
      flex-wrap: wrap;
    }

    .lecture-section.-center {
      justify-content: center;
      .lecture-description {
        margin-left: auto;
      }
      .lecture-image {
        width: 50%;
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }

    .lecture-image {
      width: 100%;
    }
    .lecture-description {
      width: 90%;
      margin-top: 20px;
      padding-right: 0;
      margin: 18px auto;
    }
    .lecture-book-images {
      width: 90%;
      margin: 0 auto;
    }

    .lecture-title {
      font-size: 24px;
    }
    .lecture-text,
    .lecture-bold {
      font-size: 16px;
      line-height: 1.6;
    }
    .add {
      padding: 0 20px 30px;
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
