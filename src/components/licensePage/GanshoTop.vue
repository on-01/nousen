<template>
  <div class="gansho">
    <div class="gansho-wrapper">
      <div class="gansho-contents">
        <p class="gansho-title">願書取り寄せ・記入サポート</p>
        <p class="gansho-text">
          書面申請が必要な受講生には、願書の取り寄せ・記入方法をサポートします。
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
    max-width: 450px;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
    background-color: #fff7d5;
    display: flex;
  }

  .gansho-wrapper {
    background-color: #ffffff;
    padding: 24px;
  }

  .gansho-contents {
    img {
      display: block;
    }
    .gansho-title {
      position: relative;
      margin: 0;
      color: #1262b2;

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
    }

    .gansho-bottom {
      margin: 0;
    }
  }
</style>
