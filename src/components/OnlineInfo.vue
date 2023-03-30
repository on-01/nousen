<template>
  <div :class="displayNone">
    <div class="sp_online_infomation">
      <p class="sp_online_infomation_text">オンライン講座はじめました！</p>
    </div>
    <div class="online_infomation">
      <img
        src="../assets/img/icon/online_info.svg"
        alt="オンライン講座はじめました！"
        class="online_display"
      />
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
  @media print, screen and(min-width: 1000px) {
    display: block;
    position: absolute;
    left: 3rem;
    top: -3rem;
    width: 190px;
  }
  @media print, screen and(min-width: 1080px) {
    left: 0;
    // width: 215px;
    width: 230px;
  }
  & img {
    width: 100%;
    height: auto;
  }
}
.sp_online_infomation {
  background: var(--orange);
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  @media print, screen and(min-width: 1000px) {
    display: none;
  }
  & p {
    margin: 0;
    padding: 0.1em;
  }
}
.sp_none {
  display: none;
  @media print, screen and(min-width: 1000px) {
    display: block;
  }
}
.pc_none {
  display: block;
  @media print, screen and(min-width: 1000px) {
    display: none;
  }
}
/* 202101　オンライン案内　↑ */
</style>
