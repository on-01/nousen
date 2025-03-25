<template>
  <div class="follow">
    <div class="follow-inner">
      <div class="follow-content">
        <p class="follow-title">オームの法則もすぐに理解できる！</p>
        <div class="follow-wrap">
          <div class="follow-textWrap">
            <p class="follow-heading">オームの法則とは？</p>
            <p class="follow-text">
              オームの法則は、ドイツの物理学者ゲオルク・オーム（またはヘンリー・キャベンディッシュ）が発見した、
              <br />
              電圧（V）、電流（I）、抵抗（R）の関係を示す法則です
            </p>
          </div>
          <div class="follow-textWrap">
            <p class="follow-heading">式： V = I × R</p>
            <p class="follow-text">
              V（電圧） … 電流を流す力
              <br />
              I（電流） … 実際に流れる電気の量
              <br />
              R（抵抗） … 電流の流れにくさ
            </p>
          </div>
          <div class="follow-textWrap">
            <p class="follow-heading">計算例</p>
            <p class="follow-text">
              ・電圧 10V、抵抗 5Ωのとき → I = 10V ÷ 5Ω = 2A
              <br />
              ・電流 3A、抵抗 4Ωのとき → V = 3A × 4Ω = 12V
            </p>
          </div>
          <div class="follow-textWrap">
            <p class="follow-heading">なぜ重要？</p>
            <p class="follow-text">
              オームの法則は、電子機器の設計や故障防止に欠かせません。
              <br />
              例えば、
              <br />
              ✅ 適切な電圧・電流の設定
              <br />
              ✅ 必要な抵抗値の選定
              <br />
              ✅ 過電流による故障防止
            </p>
          </div>
          <div class="follow-textWrap">
            <p class="follow-heading">まとめ</p>
            <p class="follow-text">
              オームの法則は「V = I ×
              R」というシンプルな式で、電圧・電流・抵抗の関係を表しています。
              <br />
              基本的な計算ができれば、電気の仕組みを直感的に理解できるようになります。
            </p>
          </div>
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
  .follow {
    background-color: #ebf7ff;
    margin: 0 auto;
    padding: 0 24px;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
  }
  .follow-inner {
    padding: 0 0 50px;
    margin: 0 auto;
    max-width: 1000px;
  }

  .follow-content {
    padding: 20px;
    border: 4px solid #1262b2;
    background-color: #fff;
  }

  .follow-title {
    position: relative;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
    @media print, screen and (max-width: 1000px) {
      font-size: 24px;
    }
  }

  .follow-title::after {
    position: absolute;
    content: "";
    width: 252px;
    height: 3px;
    background: #1262b2;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .follow-wrap {
    margin-top: 30px;
  }

  .follow-flex {
    display: flex;
    margin-top: 40px;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .follow-imgWrap {
    width: 40%;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }

    img {
      display: block;
      margin: 0 auto;
    }

    .img-1 {
      width: 35%;
    }

    .img-2 {
      width: 55%;
    }

    .img-3 {
      width: 75%;
    }
  }

  .follow-textWrap {
    max-width: 870px;
    margin: 0 auto;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
      max-width: 100%;
      margin-top: 20px;
    }
  }

  .follow-textWrap:not(:first-of-type) {
    margin-top: 20px;
  }

  .follow-heading {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }

  .follow-text {
    font-size: 16px;
    margin: 0;
    line-height: 1.5;
    span {
      font-weight: 700;
    }
  }
</style>
