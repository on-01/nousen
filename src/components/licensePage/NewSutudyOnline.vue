<template>
  <div class="lecture">
    <div class="lecture-inner">
      <div class="add">
        <p class="add-title">オンライン講座の学習内容</p>
        <p class="add-text1">✅ 基礎講座</p>
        <p class="add-text2">
          四則計算や比例・反比例から始め、方程式、指数・対数、三角関数、ベクトルを学びます。正弦波交流を例に、数学を電気の計算にどう使うかを確認します。
        </p>
        <p class="add-text1">✅ 理論</p>
        <p class="add-text2">
          電圧・電流・抵抗の関係をもとに、直流回路や交流回路の計算方法を学びます。電界と磁界の性質、半導体や電子回路の仕組み、電圧や電流の測定方法も扱います。
        </p>
        <p class="add-text1">✅ 電力</p>
        <p class="add-text2">
          発電所・変電所・蓄電所の役割と、送電線・配電線を通じて電気が届く仕組みを学びます。送配電設備の設計・運用、電気材料の特性、災害や事故に備えるための安全対策も扱います。
        </p>
        <p class="add-text1">✅ 機械</p>
        <p class="add-text2">
          変圧器・発電機・電動機の仕組みと計算方法を学びます。さらに、電力を変換するパワーエレクトロニクスや、照明・電熱・自動制御など、電気を利用する技術を扱います。
        </p>
        <p class="add-text1">✅ 法規</p>
        <p class="add-text2">
          電気事業法や電気工事士法、電気設備技術基準などを通じて、電気設備の安全を守るためのルールを学びます。あわせて、電力需給や設備の維持・運用など、電気施設管理の要点を押さえます。
        </p>
        <p class="add-text1">✅ 模擬試験</p>
        <p class="add-text2">
          最新版を含む各科目3年分の予想模擬試験に取り組めます。本番を想定して時間配分を練習し、解答後はポイント解説動画で解き方を確認できます。
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
      bold: String,
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
    padding: 0 0 50px;
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
    text-align: center;
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
    background: #1262b2;
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
    padding: 10px 30px;
  }
  .add-text1 {
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0 0;
  }
  .add-text1.-mt {
    margin-top: 10px;
    font-size: 16px;
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
    color: #fff;
    // border: 2px solid #1da1f2;
    background-color: #1262b2;
    padding: 16px 0;
    margin: 0 0 30px;
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
    .lecture-text,
    .lecture-bold {
      font-size: 16px;
      line-height: 1.6;
    }
    .add {
      padding: 0 20px;
    }
  }
</style>
