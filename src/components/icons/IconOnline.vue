<template>
  <img src="@/assets/img/icon/online_icon.svg" alt="" :class="iconClass" />
</template>
<script>
export default {
  props: {
    iconClass: String,
  },
};
</script>
<style lang="scss" scoped>
/* 202101 */
.online_icon_header {
  display: none;
  @media print, screen and(min-width: 1000px) {
    display: block;
    position: absolute;
    top: 3.5em;
    left: 5em;
  }
}
.online_icon_index {
  position: absolute;
  bottom: -1.5em;
  left: 0;
  @media print, screen and (max-width: 1000px) {
    bottom: 2.2em;
    right: 0;
    margin: 0 auto;
  }
}
</style>
