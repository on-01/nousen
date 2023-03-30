<template>
  <div class="news">
    <h3 class="news-head">
      <span class="news-head-inner">
        <IconBase class="icon" width="30" height="30"><IconFukidashi /></IconBase>
        お知らせ
      </span>
    </h3>
    <section class="news-inner">
      <div v-html="contents" v-if="contents">
      </div>
      <div v-else class="no-contents">
        ただいまお知らせはございません。
      </div>
    </section>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconFukidashi from '@/components/icons/IconFukidashi.vue'
export default {
  components: {
    IconBase,
    IconFukidashi
  },
  props: {
    contents: String,
  }
}
</script>

<style lang="scss" scoped>
.news {
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  z-index: 0;
  position: relative;
  margin-top: 80px;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
  }
}
.news-head {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-top: -1em;
}
.news-head-inner {
  background-color: #fff;
  border-radius: 30px;
  padding: 1em;
  text-align: center;
  svg {
    vertical-align: middle;
  }
}
.news-inner {
  padding: 60px 50px 50px 50px;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  @media print, screen and (max-width: 1000px) {
    padding-left: 0;
    padding-right: 0;
  }

}
.news-inner::v-deep a{
    text-decoration: underline;
    word-break: break-all;
}
.no-contents {
  text-align: center;
}
</style>
