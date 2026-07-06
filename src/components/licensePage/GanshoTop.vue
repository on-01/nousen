<template>
  <div class="gansho">
    <div class="gansho-wrapper">
      <div class="gansho-contents">
        <p class="gansho-title">願書取り寄せ・記入サポート</p>
        <p class="gansho-text">
          書面申請が必要な受講生には、
          <br />
          <span class="gansho-text-blue">願書の取り寄せ・記入方法サポート</span>
          。
          <br />
          受験区分の確認や、記入時に迷いやすい項目もわかりやすくご案内します。
        </p>
        <p class="gansho-bottom">※一部の申請区分が対象です。</p>
      </div>
      <img src="../../assets/img/license_page/gansho-img.webp" alt="" />
    </div>
  </div>
</template>
<p></p>
<script>
  export default {
    props: {
      title: String,
    },
  };
</script>

<style lang="scss" scoped>
  .gansho {
    z-index: 0;
    padding-bottom: 50px;
    position: relative;
    font-family: "メイリオ", sans-serif;
    background-color: #fff7d5;
  }

  .gansho-wrapper {
    max-width: 500px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 24px 0 12px 24px;
    display: flex;
    img {
      display: block;
      width: 44%;
      object-fit: contain;
    }
  }

  .gansho-contents {
    .gansho-title {
      position: relative;
      margin: 0;
      color: #1262b2;
      font-weight: 700;
      font-size: 18px;

      ::after {
        position: absolute;
        content: "";
        width: 100px;
        height: 2px;
        background: #399fec;
      }
    }

    .gansho-text {
      margin: 0;
      font-size: 15px;
    }

    .gansho-text-blue {
      color: #399fec;
      font-weight: 700;
    }

    .gansho-bottom {
      margin: 0;
      font-size: 15px;
    }
  }
</style>
