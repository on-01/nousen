<template>
  <div class="lecture">
    <div class="lecture-inner">
      <div class="lecture-section">
        <figure class="lecture-image">
          <img :src="imagePath" :alt="altText" />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title" v-html="title"></p>
          <p class="lecture-line"></p>
          <p class="lecture-title -small" v-html="title2"></p>
          <p class="lecture-text">{{ text }}</p>
        </div>
      </div>
      <!-- <div class="lecture-section -bottom">
        <figure class="lecture-image">
          <img :src="imagePath2" />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title" v-html="title3"></p>
          <p class="lecture-line"></p>
          <p class="lecture-text">{{ text2 }}</p>
          <br />
          <p class="lecture-title -small" v-html="title4"></p>
        </div>
      </div> -->
      <p class="book-title">最新の人気テキストを使用</p>
      <div class="lecture-section -book">
        <div class="book-wrap -left">
          <img
            src="../../assets/img/license_page/doboku_s/lecture-book1.jpg"
            alt=""
          />
          <p class="book-text700 -first">【一次コース】</p>
          <p class="book-text700">
            図解でよくわかる 2級土木施工管理技術検定 第1次検定 2024年版
          </p>
          <p class="book-text">
            「2級土木施工管理技術検定
            第1次検定(学科試験)」を受験される方を対象とした、厳選された過去問題とテキストを兼ねた解説書です。
            <br />
            短時間で理解できるように、イラストや図表を豊富に取り入れ、わかりやすく要点を解説し、無駄の少ない効率の良い学習ができるように構成しています。
          </p>
        </div>
        <div class="book-wrap -right">
          <img
            src="../../assets/img/license_page/doboku_s/lecture-book2.jpg"
            alt=""
          />
          <p class="book-text700 -first">【二次コース】</p>
          <p class="book-text700">
            これだけマスター 2級土木施工管理技士 第二次検定
          </p>
          <p class="book-text">
            2級土木施工管理技士　第二次検定対策書の決定版！経験記述（60文例）が必ず役に立つ！！2級土木施工管理技術検定の第二次検定は経験を重視した試検内容となっています。記述形式で出題される問題は記述量が多いうえ、出題範囲も広く、ポイントをしっかりおさえておく必要があります。
          </p>
          <p class="book-text700">
            能センと仲が良いオーム社さんのテキストです。
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
      imagePath: String,
      imagePath2: String,
      altText: String,
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
    padding: 30px 0;
    margin: 0 auto;
  }

  .lecture-section {
    display: flex;
    justify-content: space-between;
  }

  .lecture-section.-book {
    grid-column: 20px;
    margin-top: 80px;
  }

  .book-title {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 0;
    border-bottom: solid 3px #249ef0;
  }

  .book-wrap {
    width: 50%;
    p {
      margin: 0;
    }
    img {
      display: block;
      margin: 0 auto;
    }
  }

  .book-wrap.-left {
    img {
      width: 60%;
    }
  }

  .book-text700 {
    font-weight: 700;
  }

  .book-text700.-first {
    font-weight: 700;
    margin-top: 10px;
  }

  .lecture-section.-bottom {
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
    line-height: 2;
    text-align: left;
  }

  .lecture-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
  }

  .lecture-text {
    font-size: 16px;
    line-height: 2;
    margin-top: 0;
  }

  .add {
    padding: 10px 30px;
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

    .lecture-section.-bottom {
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
      margin: 0 auto;
    }

    .lecture-title {
      font-size: 24px;
    }
    .lecture-title.-small {
      font-size: 16px;
      line-height: 1.6;
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
