<template>
  <div class="layout">
    <LoadingManager>
      <TheMainHeader :class="{ 'mini-header': position > 100 }" />
      <slot />
      <TheMainFooter />
    </LoadingManager>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteOgImage
  }
}
</static-query>

<script>
import LoadingManager from '@/components/LoadingManager.vue';
import TheMainHeader from '@/components/TheMainHeader.vue';
import TheMainFooter from '@/components/TheMainFooter.vue';
export default {
  name: 'App',
  components: {
    LoadingManager,
    TheMainHeader,
    TheMainFooter,
  },
  metaInfo() {
    return {
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$static.metadata.siteUrl,
        },
      ],
      meta: [
        { key: `og:locale`, property: `og:locale`, content: `ja_JP` },
        { key: `og:type`, property: `og:type`, content: `website` },
        {
          key: `og:site_name`,
          property: `og:site_name`,
          content: this.$static.metadata.siteName,
        },
        {
          key: `og:image`,
          property: `og:image`,
          content: this.$static.metadata.siteOgImage,
        },
        {
          name: 'google-site-verification',
          content: 't0mivQD1J0vbPeiIQmbr2AaoXVBc1uKniSoWfLUYxtI',
        },
      ],
    };
  },
  data() {
    return {
      intersectionObserver: null,
      position: 0,
      googleForm: null,
    };
  },
  methods: {
    startIntersectionObserver: function(targets) {
      this.intersectionObserver = new IntersectionObserver(
        (changes) => {
          changes.forEach((change) => {
            if (change.isIntersecting) {
              change.target.classList.add('is-show');
            }
          });
        },
        {
          rootMargin: '0px',
          threshold: [1.0],
        }
      );
      targets.forEach((target) => {
        this.intersectionObserver.observe(target);
      });
    },
    returnScrollPosition: function() {
      //スクロールポイント　コンテンツのトップ位置からヘッダーの高さを差し引いた値
      const scrollTopPosition =
        document.querySelector('.contents').getBoundingClientRect().top +
        window.pageYOffset -
        document.querySelector('.main-header').clientHeight;

      this.$SmoothScroll(
        scrollTopPosition,
        400, //duration
        null, //callback
        null, //context
        'y' //軸
      );
    },
  },
  mounted() {
    document.onscroll = (e) => {
      const scrollingElement =
        'scrollingElement' in document
          ? document.scrollingElement
          : navigator.userAgent.indexOf('WebKit') != -1
          ? document.body
          : document.documentElement;
      this.position = scrollingElement.scrollTop;
    };
    const targets = Array.from(
      document.querySelectorAll('.scroll-animation-item')
    );
    this.startIntersectionObserver(targets);

    //googleformがある場合は次の質問に行くたびにスクロールポイントをトップに戻す
    this.googleForm = document.querySelectorAll('.google_form')[0];
    if (this.googleForm) {
      // this.googleForm.addEventListener('load',this.returnScrollPosition(),false);
      this.googleForm.onload = this.returnScrollPosition;
    }
  },
  // destoryed() {
  //   this.googleForm[0].removeEventListener('load',this.returnScrollPosition());
  // },
};
</script>

<style lang="scss">
.layout {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', 'メイリオ',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  --orange: #ed6c00;
}
body {
  color: #000;
  // font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', 'メイリオ', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* normalize */
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
footer,
header,
nav,
section {
  display: block;
}
video {
  display: inline-block;
  vertical-align: baseline;
}
b,
strong {
  font-weight: bold;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
small {
  font-size: 80%;
}
img {
  border: 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
button,
input,
select,
textarea {
  color: inherit;
  margin: 0;
}
button {
  overflow: visible;
  border-color: inherit;
  padding: 0;
  &:focus {
    outline: none;
  }
}
button,
select {
  text-transform: none;
}
button,
html input[type='button'],
input[type='reset'],
input[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input {
  line-height: normal;
}
input[type='checkbox'],
input[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  height: auto;
}
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
textarea {
  overflow: auto;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ol {
  margin: 1em;
  padding: 0;
}
p {
  line-height: 2em;
  margin-top: 1.5em;
}
a {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  transition: 0.2s;
}
i,
em {
  font-style: normal;
}
@media print, screen and (min-width: 768px) {
  a:not([href^='tel']):not(.comingsoon):hover {
    opacity: 0.5;
  }
}
a[href^='tel'] {
  cursor: default;
  text-decoration: none;
}
*:focus {
  outline: 0;
}
.main-header + div:not(.home) {
  margin-top: 130px;
  position: relative;
  @media print, screen and (max-width: 1000px) {
    margin-top: 75px;
  }
}
</style>
