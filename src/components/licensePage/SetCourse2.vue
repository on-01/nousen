<template>
  <div class="setCourse">
    <p class="setCourse-title">{{ title }}</p>
    <div class="setCourse-inner">
      <p class="setCourse-text">
        その場で講師の授業も受講しつつ、オンラインで復習もできる。
        <br />
        より合格に近づきたい方におすすめプランです
      </p>
      <div class="setCourse-explanation">
        <p>
          例えば「通学講座にオンライン講座を追加」の場合、
          <i class="scroll-animation-item">
            オンライン講座の受講料は７０％割引。
          </i>
          <br />
          共通のテキストで原則は講義内容も同じなので会場で学習した内容を繰り返し復習できます。
        </p>
      </div>
      <p class="setCourse-price">料金</p>
      <div class="setCourse-menu">
        <p><span>セット</span></p>
        <p>
          一次・二次セット
          <del>88,000円</del>
          ▶️56,430円（セット割＋追加割）
        </p>
        <p><span>コース別</span></p>
        <p>
          一次コース
          <del>69,300円</del>
          ▶️43,890円（追加割）
        </p>
        <p>
          二次コース
          <del>35,640円</del>
          ▶️23,309円（追加割）
        </p>
        <p>※後から追加（70%割引）することもできます</p>
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
    background-color: #1da1f2;
    padding: 1rem;
    text-align: center;
    margin: 0;
    box-shadow: 0px 5px 1px #006bad;
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
    margin: 24px 0 12px;
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
