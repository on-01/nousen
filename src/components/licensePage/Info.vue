<template>
  <div class="info">
    <section class="tuition_fee info-section" v-if="tuitionFee">
      <div class="head">
        受講料（教材費・消費税等含む）
      </div>
      <div class="body">
        <div class="body-inner" v-html="tuitionFee">
        </div>
      </div>
    </section>
    <section class="capacity info-section" v-if="capacity">
      <div class="head">
        定員
      </div>
      <div class="body">
        <div class="body-inner" v-html="capacity">
        </div>
      </div>
    </section>
    <section class="benefits info-section" v-if="benefits">
      <div class="head">
        給付制度
      </div>
      <div class="body">
        <div class="body-inner" v-html="benefits">
        </div>
      </div>
    </section>
    <section class="cpds info-section" v-if="cpds">
      <div class="head">
        CPDS
      </div>
      <div class="body">
        <div class="body-inner" v-html="cpds">
        </div>
      </div>
    </section>
    <!-- オンライン講座 ↓ -->
    <section class="online course_outline info-section" v-if="courseOutline">
      <div class="head">
        講座概要
      </div>
      <div class="body">
        <div class="body-inner" v-html="courseOutline">
        </div>
      </div>
    </section>
    <section class="online" v-if="mediaYoutube || mediaImg">
      <div class="media">
        <div class="media-movie" v-if="mediaYoutube">
          <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${mediaYoutube}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="media-img" v-if="!mediaYoutube && mediaImg">
          <img :src="mediaImg" alt="">
        </div>
        <p class="media-description">{{ mediaDescription }}</p>
      </div>
    </section>
    <section class="online apply info-section" v-if="apply">
      <div class="head">
        お申し込みから受講までの流れ
      </div>
      <div class="body">
        <div class="body-inner" v-html="apply">
        </div>
      </div>
    </section>
    <!-- オンライン講座 ↑ -->
  </div>
</template>

<script>
export default {
  props: {
    tuitionFee: String,
    capacity: String,
    benefits: String,
    cpds: String,
    courseOutline: String,
    apply: String,
    mediaYoutube: String,
    mediaImg: String,
    mediaDescription: String
  }
}
</script>

<style lang="scss" scoped>
.info {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
}
.info-section {
  background-color: #f2f2f2;
  position: relative;
  margin-top: 50px;
  ::v-deep a {
    text-decoration: underline;
  }
}
.head {
  background-color: #000;
  position: absolute;
  top: -20px;
  color: #fff;
  padding: 5px 20px;
  font-weight: bold;
}
.body {
  padding: 50px;
  @media print, screen and (max-width: 1000px) {
    padding: 50px 5%;
  }
}

//個別のカラー
.denken3 {
  .head {
    background-color: #e60039;
  }
  .info-section ::v-deep a {
    color: #e60039;
  }
  .course_outline.info-section ::v-deep h5 {
    background: #e60039;
  }
  .course_outline.info-section ::v-deep i {
    font-weight: bold;
    color: #e60039;
  }
}
.koujishi1,.koujishi2 {
  .head {
    background-color: #b60081;
  }
  .info-section ::v-deep a {
    color: #b60081;
  }
}
.denkikoujisekou,.kenchiku,.kankouji,.doboku {
  .head {
    background-color: #00a73c;
  }
  .info-section ::v-deep a {
    color: #00a73c;
  }
  .course_outline.info-section ::v-deep h5 {
    background: #00a73c;
  }
  .course_outline.info-section ::v-deep i {
    font-weight: bold;
    color: #00a73c;
  }
}
.kyuusui {
  .head {
    background-color: #00afcc;
  }
  .info-section ::v-deep a {
    color: #00afcc;
  }
}

/* オンライン講座 */
.online{
  &.info-section {
    ::v-deep a {
      color: #000;
      font-weight: bold;
    }
    ::v-deep hr{
      margin: 1.5em 0;
    }
  }
}
.course_outline.info-section {
  ::v-deep h4 {
    font-weight: bold;
    margin-top: 3em;
    font-size: 18px;
    color: #3b241a;
  }
  ::v-deep h5 {
    display: inline;
    padding: 0.4em 0.5em;
    border-radius: 50px;
    font-size: 16px;
    color: #fff;
  }
  ::v-deep h6 {
    font-weight: bold;
    font-size: 15px;
    margin: 0.5em 0;
    @media print, screen and (min-width: 768px) {
      padding-left: 1em;
      display: inline;
  }
  }
  ::v-deep p {
    margin: 0.3em 0 0;
  }
}

.apply.info-section ::v-deep i {
  font-weight: bold;
  color:#e60039;
}

.media{
  width: 100%;
  margin: 0 auto;
  padding: 6em 0;
  @media print, screen and (min-width: 1001px) {
    width: 90%;
  }
}
.media-description{
    line-height: 1.8;
    font-size: 13px;
    @media print, screen and (min-width: 1001px) {
      font-size: 15px;
    }
}
.media-movie {
  position: relative;
  width: 100%;
  height:0px;
  padding-top: 56.25%;
}
.media-movie iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.media-img img {
  width: 100%;
}
</style>
