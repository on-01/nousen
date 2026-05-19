<template>
  <div :class="displayNone">
    <div class="sp_online_infomation">
      <p class="sp_online_infomation_text">
        【満足度No.1】資格合格支援スクール！
      </p>
    </div>
    <div class="online_infomation">
      <p class="online_infomation_text">【満足度No.1】資格合格支援スクール！</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      displayNone: String,
    },
  };
</script>
<style lang="scss" scoped>
  /* 202101　オンライン案内　↓ */
  .online_infomation {
    display: none;
    @media print, screen and(min-width: 1024px) {
      background: #1262b2;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      text-align: center;
      display: block;
      position: absolute;
      left: 100px;
      top: -3rem;
      width: 245px;
      outline: 1px solid rgb(255, 255, 255);
      outline-offset: -4px;
    }
    @media print, screen and(min-width: 1601px) {
      display: none;
    }
    & p {
      margin: 0;
      line-height: 2.5em;
      font-size: 13px;
      font-family: メイリオ, sans-serif;
    }
  }

  .sp_online_infomation {
    background: #1262b2;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    @media print, screen and(min-width: 1024px) {
      display: none;
    }
    & p {
      margin: 0;
      padding: 0.1em;
    }
  }
  .sp_none {
    display: none;
    @media print, screen and(min-width: 1024px) {
      display: block;
    }
  }
  .pc_none {
    display: block;
    @media print, screen and(min-width: 1024px) {
      display: none;
    }
  }
  /* 202101　オンライン案内　↑ */
</style>
