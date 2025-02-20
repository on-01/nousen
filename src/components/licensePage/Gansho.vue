<template>
  <div class="gansho">
    <div class="gansho-content">
      <div class="gansho-inner">
        <p class="gansho-top-text">令和7年度</p>
        <p class="gansho-top-text">
          <span>願書</span>
          取り寄せサポート！
        </p>
        <div class="gansho-wrap">
          <div class="gansho-box">
            <p class="gansho-head">願書代</p>
            <p class="gansho-price">&yen;０</p>
            <p class="gansho-text">能センが負担します！</p>
          </div>
          <div class="gansho-box">
            <p class="gansho-head">記入サポート</p>
            <p class="gansho-price">&yen;０</p>
            <p class="gansho-text">
              初受験の方への
              <br />
              記入アドバイスもします
            </p>
          </div>
        </div>
        <p class="gansho-bottom-text">
          受験願書（一次二次用・二次用）を無料でお送りいたします。
          <br />
          ・サイトお申込みフォームからお選びください
          <br />
          ・２種類ありますので、申込みの際にお間違えのない様にして下さい
          <br />
          ・願書提出期日2日前までに講座をお申込みの方が対象です
          <br />
          <span>
            ※一次試験は願書の提出が不要で、インターネットからのお申込みで手続きが完了します
          </span>
        </p>
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
  .gansho {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 24px;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
    padding-bottom: 40px;
  }

  .gansho-content {
    background-color: #fff8cc;
    padding: 0 24px;
  }
  .gansho-inner {
    padding: 30px 60px;
    margin: 0 auto;
  }

  .gansho-top-text {
    margin: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    span {
      font-size: 60px;
      color: red;
    }
  }

  .gansho-wrap {
    display: flex;
    justify-content: space-between;
    column-gap: 40px;
    margin: 40px auto 0 auto;
    max-width: 95%;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
      row-gap: 30px;
    }
  }

  .gansho-box {
    width: 50%;
    background-color: #ed6c00;
    color: white;
    font-weight: 700;
    text-align: center;
    padding: 5px;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  .gansho-head {
    text-decoration: underline;
    margin: 0;
    font-size: 40px;
  }
  .gansho-price {
    margin: 0;
    font-size: 100px;
    line-height: 1;
  }
  .gansho-text {
    margin: 0;
    font-size: 20px;
    line-height: 1.8;
  }

  .gansho-bottom-text {
    margin-top: 40px;
    span {
      font-weight: 700;
    }
  }
</style>
