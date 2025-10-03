<template>
  <div class="setCourse">
    <p class="setCourse-title">{{ title }}</p>
    <div class="setCourse-inner">
      <p class="setCourse-text">
        その場で講師の授業を受けながら、オンラインで復習も可能。
        <br />
        より合格に近づきたい方におすすめのプランです！
      </p>
      <div class="setCourse-explanation">
        <p>
          例えば「通学講座にオンライン講座を追加」の場合、
          <i class="scroll-animation-item">
            オンライン講座の受講料は７０％割引。
          </i>
          <br />
          共通のテキストを使用し、講義内容も同じなので、会場で学んだ内容を繰り返し復習できます。
        </p>
      </div>
      <p class="setCourse-price">料金</p>
      <div class="setCourse-menu">
        <p><span>セット</span></p>
        <p>
          【全科目】完全制覇セット
          <del>302,500円</del>
          ▶️173,500円（セット割＋追加割）
        </p>
        <p>
          【４科目】完全制覇セット
          <del>270,600円</del>
          ▶️163,940円（セット割＋追加割）
        </p>
        <p><span>科目別</span></p>
        <p>基礎講座　20,350円</p>
        <p>理論・電力・機械　39,270円</p>
        <p>法規　21,450円</p>
        <p>模擬試験　 8,580円（1科目につき）</p>
        <p>※後から追加（70％割引）することもできます</p>
        <p>※教材および添削は共通のため、追加されません</p>
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
  .setCourse {
    width: 100%;
    background-color: #fff;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
  }
  .setCourse-inner {
    max-width: 1170px;
    margin: 0 auto;
    // width: 100%;
    padding: 20px 40px;
  }
  .setCourse-title {
    line-height: 1.3;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    background-color: #1262b2;
    padding: 1rem;
    text-align: center;
    margin: 0;
    // box-shadow: 0px 5px 1px #006bad;
  }

  .setCourse-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.8;
    text-align: center;
    padding-top: 10px;
    margin: 0;
  }
  .setCourse-explanation {
    padding: 30px 10px;
    font-size: 18px;
    border: 4px solid #000;
    margin: 0 auto;
    margin-top: 24px;
    font-weight: bold;
    text-align: center;
    position: relative;
    max-width: 830px;
    width: 100%;
    line-height: 2em;
    @media print, screen and (max-width: 1000px) {
      padding: 10px 20px;
      font-size: 16px;
      width: auto;
    }
    @media print, screen and (max-width: 767px) {
      text-align: left;
      padding: 10px 15px 10px 20px;
    }
    &:before {
      content: url("../../assets/img/icon/finger_diagonallyright_orange.svg");
      position: absolute;
      left: -10px;
      top: -20px;
      width: 20px;
      height: 25px;
      display: block;
      background-color: #fff;
      padding: 8px 3px;
    }
    p {
      margin: 0;
    }
  }
  .setCourse-explanation::v-deep i {
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
  .setCourse-price {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #1da1f2;
    border: 2px solid #1da1f2;
    padding: 8px 0;
    margin: 48px 0 12px;
  }
  .setCourse-menu {
    font-size: 18px;
    padding: 4px;
    text-align: center;
  }

  .setCourse-menu p {
    margin: 0;
  }
  .setCourse-menu span {
    font-size: 20px;
    font-weight: 700;
  }
  @media print, screen and (max-width: 768px) {
    .setCourse-inner {
      padding: 20px;
    }
    .setCourse-title {
      font-size: 20px;
    }
    .setCourse-text {
      font-size: 16px;
    }
    .setCourse-menu {
      font-size: 16px;
    }
    .setCourse-menu span {
      font-size: 18px;
    }
  }
</style>
