<template>
  <div class="gansho">
    <div class="gansho-contents">
      <p class="gansho-title">願書取り寄せ・記入サポート</p>
      <p class="gansho-text">
        書面申請が必要な受講生には、願書の取り寄せ・記入方法をサポートします。
      </p>
      <p class="bottom">※一部の申請区分が対象です。</p>
    </div>
    <img src="../../assets/img/license_page/gansho-img.webp" alt="" />
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
    max-width: 768px;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
    background-color: #fff7d5;
  }

  .gansho-contents {
    display: flex;
    justify-content: space-between;
  }
</style>
