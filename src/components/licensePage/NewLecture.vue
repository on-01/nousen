<template>
  <div class="lecture">
    <div class="lecture-inner">
      <div class="lecture-section">
        <figure class="lecture-image">
          <g-image :src="imagePath" :alt="altText" />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title" v-html="title"></p>
          <p class="lecture-line"></p>
          <p class="lecture-text">{{ text }}</p>
        </div>
      </div>
      <div class="lecture-section -bottom">
        <div class="lecture-book-images">
          <figure class="lecture-book-image">
            <g-image :src="imageBook1" :alt="altBook1" />
          </figure>
          <figure class="lecture-book-image">
            <g-image :src="imageBook2" :alt="altBook2" />
          </figure>
          <figure class="lecture-book-image">
            <g-image :src="imageBook3" :alt="altBook3" />
          </figure>
        </div>
        <div class="lecture-description">
          <p class="lecture-teacher" v-html="teacher"></p>
          <p class="lecture-profile" v-html="profile"></p>
        </div>
      </div>

      <div class="add">
        <p class="add-title">学習内容</p>
        <p class="add-text1">【基礎講座】</p>
        <p class="add-text2">
          電気数学の基礎【四則計算(加減乗除)・比例・反比例・指数法則と対数関数・二次方程式の根・分数式・連立方程式・三角関数・ベクトルと正弦波交流】・科目学習のポイント
        </p>
        <p class="add-text1">【理論】</p>
        <p class="add-text2">
          基礎数学・SI単位・電気・光・磁気効果・電気理論・電子理論・電気計測・電子計測・その他
        </p>
        <p class="add-text1">【電力】</p>
        <p class="add-text2">
          発電所及び変電所の設計及び運転・送電線路及び配電線路(屋内配線を含む)の設計及び
          運用・電気材料・その他
        </p>
        <p class="add-text1">【機械】</p>
        <p class="add-text2">
          電気機器・パワーエレクトロニクス・電動機応用・照明・電熱・電気化学・電気加工・自動制御・メカトロニクス・電力システムに関する情報伝送及び処理・その他
        </p>
        <p class="add-text1">【法規】</p>
        <p class="add-text2">
          電気法規(保安に関するものに限る)・電気施設管理・その他
        </p>
        <p class="add-text1">【模擬試験】</p>
        <p class="add-text2">
          最新試験の直前予想模擬試験。模擬試験を取り組んだ後30分程度の解答解説講座
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      text: String,
      imagePath: String,
      teacher: String,
      profile: String,
      imageBook1: String,
      imageBook2: String,
      imageBook3: String,
      altText: String,
      altBook1: String,
      altBook2: String,
      altBook3: String,
    },
  };
</script>

<style lang="scss" scoped>
  .lecture {
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    font-family: "メイリオ", sans-serif;
  }
  .lecture-inner {
    max-width: 1170px;
    width: 100%;
    padding: 30px 0 0;
    margin: 0 auto;
  }

  .lecture-section {
    display: flex;
    justify-content: space-between;
  }
  .lecture-section.-bottom {
    margin-top: 18px;
  }

  .lecture-image {
    width: 48%;
  }
  .lecture-description {
    width: 48%;
    padding-right: 20px;
  }

  .lecture-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
  .lecture-line {
    width: 20%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
  }
  .lecture-text {
    font-size: 16px;
    line-height: 2;
  }
  .lecture-book-images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 48%;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }
  .lecture-book-image {
    width: 28%;
    margin: 0;
  }
  .lecture-teacher {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  .lecture-profile {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
  .add {
    padding: 10px 30px;
  }
  .add-text1 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  .add-text2 {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
  .kenchiku .add {
    display: none;
  }
  .add-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #000;
    border: 2px solid #1da1f2;
    padding: 8px 0;
    margin: 36px 0 12px;
  }

  @media print, screen and (max-width: 1000px) {
    .lecture-section {
      flex-wrap: wrap;
    }
    .lecture-image {
      width: 100%;
    }
    .lecture-description {
      width: 90%;
      margin-top: 20px;
      padding-right: 0;
      margin: 18px auto;
    }
    .lecture-book-images {
      width: 90%;
      margin: 0 auto;
    }

    .lecture-title {
      font-size: 24px;
    }
    .lecture-text {
      font-size: 16px;
      line-height: 1.6;
    }
    .add {
      padding: 0 20px;
    }
  }
</style>
