<template>
  <div class="setCourse">
    <p class="setCourse-title">{{ title }}</p>
    <div class="setCourse-inner">
      <p class="setCourse-text">
        その場で講師の授業を受けながら、オンラインで復習も可能。
        <br />
        より合格に近づきたい方におすすめのプランです！
      </p>
      <figure class="setCourse-image">
        <img
          src="../../assets/img/license_page/setcourse_online70.webp"
          alt="通学＋オンラインセット 共通のテキスト・同じ講義内容で追加する講座が70%割引"
        />
      </figure>
      <p class="setCourse-price">料金</p>
      <div class="setCourse-menu">
        <p><span>セット</span></p>
        <p>
          【全科目】完全制覇セット
          <del>297,000円</del>
          ▶️175,900円（セット割＋追加割）
        </p>
        <p>
          【４科目】完全制覇セット
          <del>265,100円</del>
          ▶️163,940円（セット割＋追加割）
        </p>
        <p><span>科目別</span></p>
        <p>基礎講座　20,350円</p>
        <p>理論・電力・機械　38,940円</p>
        <p>法規　20,020円</p>
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
  .setCourse-image {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    margin-top: 24px;
    img {
      display: block;
      width: 100%;
      height: auto;
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
