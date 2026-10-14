<template>
  <section :class="['hero', { 'no-pic': !backImgOver }]">
    <!-- 使用方法（各資格の Hero*.vue から呼び出す）
    <HeroLicense
      :backImgOver="require('../assets/hero.jpg')"
      headTitle="令和8年度前期 / 令和8年度後期"
      title="資格名<br>試験・講座情報"
      color="#ed7d31"
      :buttons="[[{ label: '通学講座', note: '対面でしっかり学ぶ', href: '...', icon: 'classroom' }]]"
    />
    buttons は PC 表示時の行ごとの配列。icon は classroom / online / book / trial / correspondence
    SP は背景画像を出さず、白背景の上に枠を通常フローで配置する
    -->
    <div
      v-if="backImgOver"
      class="hero-inner"
      :style="{ 'background-image': `url(${backImgOver})` }"
    ></div>
    <div class="title-wrapper" :style="{ 'border-color': color }">
      <div v-if="icon" class="icon" :style="{ 'background-color': color }">
        <img :src="icon" alt="" />
      </div>
      <p v-if="headTitle" class="head-title" v-html="headTitle"></p>
      <span class="head-line" :style="{ 'background-color': color }"></span>
      <h1 class="title">
        <span class="title-main" v-html="titleLines[0]"></span>
        <span
          v-if="titleLines[1]"
          class="title-sub"
          v-html="titleLines[1]"
        ></span>
      </h1>
      <p class="catch">
        合格まで伴走支援！
        <br />
        確かな成果を、確実に
      </p>
      <div class="link-buttons">
        <div v-for="(row, i) in buttons" :key="i" class="link-row">
          <a
            v-for="button in row"
            :key="button.label"
            class="link-button"
            :href="button.href"
            :style="{ 'background-color': color }"
          >
            <svg
              class="link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0"
              aria-hidden="true"
            >
              <template v-if="button.icon === 'classroom'">
                <rect x="9" y="3" width="13" height="10" rx="1" fill="none" stroke-width="1.8" />
                <path d="M12 7.5l3 2 4-4" fill="none" stroke-width="1.6" />
                <circle cx="5" cy="7.5" r="2.4" />
                <path d="M1.5 21v-6a3 3 0 0 1 3-3H8l3.6-2.4 1.1 1.6L9 14.6V21z" />
              </template>
              <template v-else-if="button.icon === 'online'">
                <rect x="4" y="4.5" width="16" height="11.5" rx="1" fill="none" stroke-width="1.8" />
                <path d="M1.5 18h21v1a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 19z" />
              </template>
              <template v-else-if="button.icon === 'book'">
                <path
                  d="M12 6.5C10 5 7 4.5 2.5 4.5v14c4.5 0 7.5.5 9.5 2 2-1.5 5-2 9.5-2v-14C17 4.5 14 5 12 6.5z"
                  fill="none"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                />
                <path d="M12 6.5v14" fill="none" stroke-width="1.8" />
              </template>
              <template v-else-if="button.icon === 'trial'">
                <circle cx="12" cy="7.5" r="3.2" />
                <path d="M6 20a6 6 0 0 1 12 0z" />
                <circle cx="4.8" cy="10" r="2.3" />
                <path d="M.5 19a4.3 4.3 0 0 1 6.3-3.8A7.4 7.4 0 0 0 4.8 19z" />
                <circle cx="19.2" cy="10" r="2.3" />
                <path d="M23.5 19a4.3 4.3 0 0 0-6.3-3.8 7.4 7.4 0 0 1 2 3.8z" />
              </template>
              <template v-else-if="button.icon === 'correspondence'">
                <path
                  d="M5 2h9.5L19 6.5V22H5z"
                  fill="none"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                />
                <path d="M14 2v5h5" fill="none" stroke-width="1.8" />
                <path d="M10 11v7.5l5.8-3.75z" />
              </template>
            </svg>
            <span class="link-text">
              <span class="link-label">{{ button.label }}</span>
              <span v-if="button.note" class="link-note">{{ button.note }}</span>
            </span>
            <svg class="link-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "hero-license",
    props: {
      backImgOver: String,
      title: String,
      headTitle: String,
      icon: String,
      color: String,
      buttons: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      // 「資格名<br>試験・講座情報」を大小2行に分ける
      titleLines() {
        return (this.title || "").split(/<br\s*\/?>/i);
      },
    },
  };
</script>

<style scoped lang="scss">
  .hero {
    position: relative;
    &.no-pic {
      //背景画像がない場合は余白つける
      padding: 150px 0;
      @media print, screen and (max-width: 980px) {
        padding: 100px 0;
      }
    }
  }
  .hero-inner {
    height: 470px;
    background-color: #fff;
    background-position: center;
    background-size: cover;
    position: relative;
    @media print, screen and (max-width: 980px) {
      display: none;
    }
  }

  .title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    background-color: #fff;
    border: 5px solid;
    border-radius: 10px;
    color: #1a1a1a;
    padding: 22px 40px 26px;
    text-align: center;
    font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "游ゴシック体",
      YuGothic, "Yu Gothic", "メイリオ", Meiryo, sans-serif;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    @media print, screen and (max-width: 980px) {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      white-space: normal;
      max-width: 600px;
      margin: 50px auto 30px;
      padding: 18px 14px 18px;
      border-width: 4px;
    }
    @media print, screen and (max-width: 640px) {
      margin: 45px 12px 30px;
      padding: 18px 8px;
    }
  }
  .icon {
    width: 64px;
    height: 64px;
    border-radius: 10px;
    position: absolute;
    top: -28px;
    left: -28px;
    overflow: hidden;
    @media print, screen and (max-width: 980px) {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      top: -20px;
      left: -12px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .head-title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 1.5;
    @media print, screen and (max-width: 980px) {
      font-size: 13px;
    }
  }
  .head-line {
    display: block;
    width: 40px;
    height: 3px;
    margin: 8px auto 10px;
    @media print, screen and (max-width: 980px) {
      width: 30px;
      height: 2px;
      margin: 6px auto 8px;
    }
  }
  .title {
    margin: 0;
    font-weight: 700;
    letter-spacing: 0.04em;
    .title-main {
      display: block;
      font-size: 36px;
      font-weight: 900;
      line-height: 1.3;
      @media print, screen and (max-width: 980px) {
        font-size: 24px;
      }
      @media print, screen and (max-width: 414px) {
        font-size: 20px;
      }
    }
    .title-sub {
      display: block;
      margin-top: 4px;
      font-size: 22px;
      line-height: 1.4;
      @media print, screen and (max-width: 980px) {
        font-size: 15px;
      }
    }
  }
  .catch {
    margin: 12px 0 0;
    color: #e8380d;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.45;
    letter-spacing: 0.05em;
    @media print, screen and (max-width: 980px) {
      margin-top: 10px;
      font-size: 17px;
    }
    @media print, screen and (max-width: 414px) {
      font-size: 16px;
    }
  }

  .link-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    @media print, screen and (max-width: 980px) {
      // SP は全ボタンを2列で折り返す
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin: 12px -3px 0;
    }
  }
  .link-row {
    display: flex;
    justify-content: center;
    & + & {
      margin-top: 10px;
    }
    @media print, screen and (max-width: 980px) {
      display: contents;
    }
  }
  .link-button {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 222px;
    min-height: 58px;
    margin: 0 6px;
    padding: 8px 8px 8px 12px;
    border-radius: 6px;
    color: #fff;
    text-align: left;
    text-decoration: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: opacity 0.2s;
    @media print, screen and (max-width: 980px) {
      width: calc(50% - 6px);
      min-height: 50px;
      margin: 3px;
      padding: 6px 3px 6px 7px;
    }
    &[href]:hover {
      opacity: 0.8;
    }
  }
  .link-icon {
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    @media print, screen and (max-width: 980px) {
      width: 22px;
      height: 22px;
      margin-right: 5px;
    }
  }
  .link-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .link-label {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    @media print, screen and (max-width: 980px) {
      font-size: 14px;
    }
    @media print, screen and (max-width: 374px) {
      font-size: 13px;
    }
  }
  .link-note {
    margin-top: 2px;
    font-size: 11px;
    line-height: 1.3;
    white-space: nowrap;
    @media print, screen and (max-width: 980px) {
      font-size: 10px;
    }
    @media print, screen and (max-width: 414px) {
      font-size: 9px;
      letter-spacing: -0.02em;
    }
    @media print, screen and (max-width: 374px) {
      white-space: normal;
    }
  }
  .link-arrow {
    flex: 0 0 auto;
    width: 18px;
    height: 18px;
    margin-left: 4px;
    @media print, screen and (max-width: 980px) {
      width: 12px;
      height: 12px;
      margin-left: 2px;
    }
  }
</style>
