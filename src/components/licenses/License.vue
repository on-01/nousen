<template>
  <div :class="['license', `license-${licenseSlug}`, { 'is-open': isOpen }]">
    <header class="header">
      <div class="rate"></div>
      <div class="license-title-set">
        <div class="license-title-img"></div>
        <div class="license-title-text">
          <p class="abbreviation" v-html="abbreviation"></p>
          <p class="formal-name">
            {{ formalName }}
          </p>
          <p class="intro-text">
            {{ introText }}
          </p>
        </div>
      </div>
    </header>
    <transition name="slide">
      <section class="hidden-container" v-if="isOpen">
        <article class="license-point">
          <p class="license_catch" v-html="licenseCatch"></p>
          <div class="point-item">
            <dl v-for="(item, index) in pointItems" :key="index">
              <dt>
                <IconBase class="icon"><IconCheck /></IconBase>
                {{ item.dt }}
              </dt>
              <dd v-html="item.dd"></dd>
            </dl>
          </div>
        </article>
        <article class="license-outline">
          <h1 class="outline-title"><span>受験概要</span></h1>
          <div class="outline-item">
            <div v-for="(item, index) in outlineItems" :key="index">
              <dl v-if="item.dt || item.dt">
                <dt v-if="item.dt">
                  <span class="outline-item-inner" v-html="item.dt"></span>
                </dt>
                <dd v-if="item.dd" v-html="item.dd"></dd>
              </dl>
            </div>
          </div>
          <p class="attention" v-html="addBlank(attention)"></p>
          <p class="memo" v-html="memo"></p>
        </article>
        <div class="button-wrapper">
          <router-link :to="LicensePageLink" class="contents-link"
            >講習内容はコチラ
            <IconBase class="icon"><IconFingerRight /></IconBase>
          </router-link>
          <a
            v-if="applicationLink"
            :href="applicationLink"
            class="application-link"
            >講習会へのお申し込み
            <IconBase class="icon"><IconFingerRight /></IconBase>
          </a>
        </div>
      </section>
    </transition>
    <div class="close_button" v-on:click="isOpen = !isOpen">
      <span>
        <i v-show="isOpen">閉じる</i>
        <i v-show="!isOpen">続きを読む</i>
        <IconBase class="close-icon"><IconClose /></IconBase>
      </span>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconFingerRight from '@/components/icons/IconFingerRight.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import { documentToHtmlString } from '../../../node_modules/@contentful/rich-text-html-renderer';
export default {
  name: 'test',
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    IconBase,
    IconClose,
    IconFingerRight,
    IconCheck,
  },
  props: {
    licenseSlug: String,
    rateStar: String,
    abbreviation: String,
    formalName: String,
    introText: String,
    licenseCatch: String,
    pointItems: Array,
    outlineItems: Array,
    attention: String,
    memo: String,
    LicensePageLink: String,
    applicationLink: String,
  },
  methods: {
    addBlank(content) {
      const addblankAnchorHtml = content.replace(
        /<a((?: .+?))?>(.*?)<\/a>/g,
        '<a $1 target="_blank">$2</a>'
      );
      return addblankAnchorHtml;
    },
  },
  mounted() {
    //ハッシュつきでリンクしてきたらその資格のスライダーを開いておく
    if (this.$route.hash === `#${this.$props.licenseSlug}`) {
      this.isOpen = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.license {
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  @media print, screen and (min-width: 1001px) {
    padding-top: 140px; //アンカーリンクのとき固定ヘッダー分位置を下げたいため
    margin-top: -140px; //アンカーリンクのとき固定ヘッダー分位置を下げたいため
  }
  @media print, screen and (max-width: 1000px) {
    width: 90%;
    padding-top: 110px; //アンカーリンクのとき固定ヘッダー分位置を下げたいため
    margin-top: -110px; //アンカーリンクのとき固定ヘッダー分位置を下げたいため
  }
  .close-icon {
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:not(.is-open) .close-icon {
    transform: rotate(45deg);
  }
}
.header {
  height: 250px;
  width: 100%;
  background-color: #000;
  position: relative;
}
.rate {
  color: #fff;
  display: flex;
  display: inline-block;
}
.license-title-set {
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media print, screen and (max-width: 1000px) {
    display: block;
    padding: 20px 5%;
  }
}
.license-title-img {
  width: 80px;
  margin-right: 30px;
  display: block;
  height: 80px;
  &:before {
    width: 100%;
    height: 100%;
    display: block;
  }
  @media print, screen and (max-width: 1000px) {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
}
.abbreviation {
  display: inline;
  font-size: 18px;
}
.formal-name {
  display: inline;
  font-size: 18px;
  line-height: 1.5em;
}
.intro-text {
  margin-top: 10px;
  font-size: 24px;
  margin-bottom: 0;
  line-height: 1.5em;
  @media print, screen and (max-width: 1000px) {
    font-size: 18px;
  }
}
.hidden-container {
  background-color: #f9f9f9;
  padding: 50px 30px 100px 30px;
  @media print, screen and (max-width: 1000px) {
    padding: 50px 5% 100px 5%;
  }
}
.license_catch {
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  @media print, screen and (max-width: 1000px) {
    text-align: left;
  }
}
.point-item {
  margin-top: 50px;
  border-top: 1px dotted #808080;
}
.point-item dl {
  border-bottom: 1px dotted #808080;
  padding: 1em;
  display: flex;
  margin: 0;
  @media print, screen and (max-width: 1000px) {
    display: block;
  }
}
.point-item dt {
  font-weight: bold;
  max-width: 250px;
  width: 100%;
  .icon {
    margin-right: 10px;
  }
}
.point-item dd {
  margin: 0;
  padding: 0;
}
.license-outline {
  margin-top: 100px;
}
.outline-item {
  border-top: 1px dotted #808080;
  ::v-deep a {
    text-decoration: underline;
  }
}
.outline-title {
  color: #fff;
  position: relative;
  text-align: center;
  margin-bottom: 50px;
  line-height: 1em;
  font-size: 18px;
  span {
    padding: 20px;
    background-color: #000;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      width: 0;
      height: 0;
      margin: 0 auto;
      bottom: -40px;
      border: 10px solid transparent;
      border-top: 10px solid #000;
    }
  }
}
.outline-item dl {
  border-bottom: 1px dotted #808080;
  padding: 1em;
  display: flex;
  margin: 0;
  @media print, screen and (max-width: 1000px) {
    display: block;
  }
}
.outline-item dt {
  font-weight: bold;
  max-width: 250px;
  width: 100%;
}
.outline-item-inner {
  background-color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
}
.outline-item dd {
  margin: 0;
  padding: 0;
}
.attention {
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
  ::v-deep a {
    text-decoration: underline;
  }
}
.button-wrapper {
  display: flex;
  font-weight: bold;
  justify-content: space-around;
  margin-top: 70px;
  @media print, screen and (max-width: 1000px) {
    display: block;
  }
}
.contents-link {
  max-width: 400px;
  width: 100%;
  text-align: center;
  border: 3px solid #000;
  border-radius: 10px;
  padding: 10px 0;
  @media print, screen and (max-width: 1000px) {
    display: block;
    margin: 0 auto;
  }
}
.application-link {
  color: #fff;
  max-width: 400px;
  width: 100%;
  text-align: center;
  background-color: #ed6c00;
  border: 3px solid #ed6c00;
  border-radius: 10px;
  padding: 10px 0;
  @media print, screen and (max-width: 1000px) {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }
}
.close_button {
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: #fff;
  padding: 5px 0;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.7;
  }
  svg {
    margin-left: 1em;
  }
}
.license {
  .header {
    background-size: cover;
  }
  .rate {
    width: 100px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .abbreviation {
    margin-right: 20px;
  }
  .outline-item {
    white-space: pre-wrap;
  }
  .memo {
    white-space: pre-wrap;
  }
}

//個別のカラー
.license-denken {
  .header {
    background-image: url('../../assets/img/licenses/background/denken.jpg');
    @media print, screen and (max-width: 1000px) {
      background-image: url('../../assets/img/licenses/background/denken_sp.jpg');
    }
  }
  .rate {
    content: url('../../assets/img/licenses/rate_denken.svg');
  }
  .license-title-img {
    &:before {
      content: url('../../assets/img/icon/qualification/denken.svg');
    }
  }
  .abbreviation {
    background-color: #e60039;
  }
  .license_catch {
    color: #e60039;
  }
  .point-item dt {
    color: #e60039;
  }
  .outline-title {
    span {
      background-color: #e60039;
      &:after {
        border-top-color: #e60039;
      }
    }
  }
  .outline-item-inner {
    background-color: #e60039;
  }
  .attention {
    color: #e60039;
  }
  .contents-link {
    border-color: #e60039;
    color: #e60039;
  }
  .close_button {
    background-color: #e60039;
  }
}

.license-koujishi1,
.license-koujishi2 {
  .license-title-img {
    &:before {
      content: url('../../assets/img/icon/qualification/denkikouji.svg');
    }
  }
  .abbreviation {
    background-color: #b60081;
  }
  .license_catch {
    color: #b60081;
  }
  .point-item dt {
    color: #b60081;
  }
  .outline-title {
    span {
      background-color: #b60081;
      &:after {
        border-top-color: #b60081;
      }
    }
  }
  .outline-item-inner {
    background-color: #b60081;
  }
  .attention {
    color: #b60081;
  }
  .contents-link {
    border-color: #b60081;
    color: #b60081;
  }
  .close_button {
    background-color: #b60081;
  }
}

.license-koujishi1 {
  .header {
    background-image: url('../../assets/img/licenses/background/koujishi1.jpg');
    @media print, screen and (max-width: 1000px) {
      background-image: url('../../assets/img/licenses/background/koujishi1_sp.jpg');
    }
  }
  .rate {
    content: url('../../assets/img/licenses/rate_koujishi1.svg');
  }
}

.license-koujishi2 {
  .header {
    background-image: url('../../assets/img/licenses/background/koujishi2.jpg');
    @media print, screen and (max-width: 1000px) {
      background-image: url('../../assets/img/licenses/background/koujishi2_sp.jpg');
    }
  }
  .rate {
    content: url('../../assets/img/licenses/rate_koujishi2.svg');
  }
}

.license-denkikoujisekou,
.license-kenchiku,
.license-kankouji,
.license-doboku {
  .rate {
    content: url('../../assets/img/licenses/rate_other.svg');
  }
  .abbreviation {
    background-color: #00a73c;
  }
  .license_catch {
    color: #00a73c;
  }
  .point-item dt {
    color: #00a73c;
  }
  .outline-title {
    span {
      background-color: #00a73c;
      &:after {
        border-top-color: #00a73c;
      }
    }
  }
  .outline-item-inner {
    background-color: #00a73c;
  }
  .attention {
    color: #00a73c;
  }
  .contents-link {
    border-color: #00a73c;
    color: #00a73c;
  }
  .close_button {
    background-color: #00a73c;
  }
}

.license-denkikoujisekou {
  .header {
    background-image: url('../../assets/img/licenses/background/denkikoujisekou.jpg');
    @media print, screen and (max-width: 1000px) {
      background-image: url('../../assets/img/licenses/background/denkikoujisekou_sp.jpg');
    }
  }
  .license-title-img {
    &:before {
      content: url('../../assets/img/icon/qualification/denkikoujisekou.svg');
    }
  }
}

.license-kenchiku {
  .header {
    background-image: url('../../assets/img/licenses/background/kenchiku.jpg');
    @media print, screen and (max-width: 1000px) {
      background-image: url('../../assets/img/licenses/background/kenchiku_sp.jpg');
    }
  }
  .license-title-img {
    &:before {
      content: url('../../assets/img/icon/qualification/kenchiku.svg');
    }
  }
}

.license-kankouji {
  .header {
    background-image: url('../../assets/img/licenses/background/kankouji.jpg');
    @media print, screen and (max-width: 1000px) {
      background-image: url('../../assets/img/licenses/background/kankouji_sp.jpg');
    }
  }
  .license-title-img {
    content: url('../../assets/img/icon/qualification/kankouji.svg');
  }
}

.license-doboku {
  .header {
    background-image: url('../../assets/img/licenses/background/doboku.jpg');
    @media print, screen and (max-width: 1000px) {
      background-image: url('../../assets/img/licenses/background/doboku_sp.jpg');
    }
  }
  .license-title-img {
    &:before {
      content: url('../../assets/img/icon/qualification/doboku.svg');
    }
  }
}

.license-kyuusui {
  .header {
    background-image: url('../../assets/img/licenses/background/kyuusui.jpg');
    @media print, screen and (max-width: 1000px) {
      background-image: url('../../assets/img/licenses/background/kyuusui_sp.jpg');
    }
  }
  .rate {
    content: url('../../assets/img/licenses/rate_kyuusui.svg');
  }
  .license-title-img {
    &:before {
      content: url('../../assets/img/icon/qualification/kyuusui.svg');
    }
  }
  .abbreviation {
    background-color: #00afcc;
  }
  .license_catch {
    color: #00afcc;
  }
  .point-item dt {
    color: #00afcc;
  }
  .outline-title {
    span {
      background-color: #00afcc;
      &:after {
        border-top-color: #00afcc;
      }
    }
  }
  .outline-item-inner {
    background-color: #00afcc;
  }
  .attention {
    color: #00afcc;
  }
  .contents-link {
    border-color: #00afcc;
    color: #00afcc;
  }
  .close_button {
    background-color: #00afcc;
  }
}

// トランジション
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
