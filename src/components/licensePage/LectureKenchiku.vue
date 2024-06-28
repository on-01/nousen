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
          <p class="lecture-bold" v-html="bold"></p>
          <p class="lecture-text">{{ text }}</p>
        </div>
      </div>
      <div class="lecture-section -bottom">
        <div class="lecture-book-images">
          <figure class="lecture-book-image">
            <a href="https://www.ohmsha.co.jp/book/9784274502552/">
              <g-image :src="imageBook1" :alt="altBook1" />
            </a>
          </figure>
          <figure class="lecture-book-image">
            <a href="https://www.ohmsha.co.jp/book/9784274506307/">
              <g-image :src="imageBook2" :alt="altBook2" />
            </a>
          </figure>
          <figure class="lecture-book-image">
            <a href="https://www.denkishoin.co.jp/products/view/1315">
              <g-image :src="imageBook3" :alt="altBook3" />
            </a>
          </figure>
        </div>
        <div class="lecture-description">
          <p class="lecture-teacher" v-html="teacher"></p>
          <p class="lecture-profile" v-html="profile"></p>
        </div>
      </div>
      <div class="lecture-section">
        <figure class="lecture-image">
          <g-image :src="imagePath3" :alt="altText3" />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title" v-html="title4"></p>
          <p class="lecture-line"></p>
          <p class="lecture-bold" v-html="bold"></p>
          <p class="lecture-text">{{ text3 }}</p>
        </div>
      </div>
      <div class="lecture-section -center">
        <figure class="lecture-image">
          <g-image :src="imagePath2" :alt="altText2" />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title" v-html="title2"></p>
          <p class="lecture-line"></p>
          <p class="lecture-text">{{ text2 }}</p>
          <p class="lecture-title -small" v-html="title3"></p>
        </div>
      </div>

      <div class="add">
        <p class="add-title">学習内容</p>
        <div class="add-wrapper">
          <p class="add-text1">【一次コース】</p>
          <p class="add-text2">
            ✅共通科目（建築学・施工・施工管理法）/ 選択科目（☆新設
            応用能力問題・法規）
            <br />
            ▶試験に出るポイントを絞った講座内容
            <br />
            問題演習が多く、用語解説、ポイント解説、実際の現場での経験談など。
            <br />
            １７歳以上の学生や、二次試験の受験資格に満たない方にもおすすめ！
          </p>
          <br />
          <p class="add-text1">【二次コース】</p>
          <p class="add-text2">
            ✅施工経験記述 / 施工用語 / 工程管理 / 法規 / 施工技術 / その他
            <br />
            ▶ 二次試験対策＋経験記述の添削付き
            <br />
            経験記述問題の対策が中心になります。経験記述試験はどのような問題が出題されるのか、書き方から
            ポイント及び注意点までをわかり易く説明いたします。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      title2: String,
      title3: String,
      title4: String,
      text: String,
      text2: String,
      text3: String,
      bold: String,
      imagePath: String,
      imagePath2: String,
      imagePath3: String,
      teacher: String,
      profile: String,
      imageBook1: String,
      imageBook2: String,
      imageBook3: String,
      altText: String,
      altText2: String,
      altText3: String,
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
  .lecture-section.-center {
    flex-direction: row-reverse;
    margin-top: 40px;
    .lecture-description {
      margin-left: 40px;
      padding-right: 0;
    }
    .lecture-image {
      width: 38%;
      img {
        width: 50%;
        margin-left: 100px;
      }
    }
  }
  .lecture-section.-bottom {
    margin-top: 18px;
    padding-bottom: 40px;
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
  .lecture-title.-small {
    font-size: 16px;
    line-height: 1.6;
    text-align: left;
  }
  .lecture-line {
    width: 20%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
  }
  .lecture-text,
  .lecture-bold {
    font-size: 16px;
    line-height: 2;
  }

  .lecture-text {
    margin-top: 0;
  }

  .lecture-bold {
    font-weight: bold;
    margin-bottom: 0;
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
    padding: 10px 30px 40px;
  }
  .add-wrapper {
    max-width: 755px;
    margin: 0 auto;
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

    .lecture-section.-center {
      justify-content: center;
      .lecture-description {
        margin-left: auto;
      }
      .lecture-image {
        width: 50%;
        img {
          width: 100%;
          margin-left: 0;
        }
      }
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
    .lecture-text,
    .lecture-bold {
      font-size: 16px;
      line-height: 1.6;
    }
    .add {
      padding: 0 20px 30px;
    }
  }
</style>
