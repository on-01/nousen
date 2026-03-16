<template>
  <div class="lecture">
    <div class="lecture-inner">
      <div class="add">
        <p class="add-title">学習内容</p>
        <p class="add-text1">✅基礎の基礎</p>
        <p class="add-text2">
          無料体験会・講座説明・電気数学の基礎・質疑応答・抽選会（電験Tシャツが当たる！）・個別相談会を実施します。
          <br />
          ※【通学講座】全科目セットの方は、「基礎の基礎」から受講開始となります。
        </p>
        <p class="add-text1">✅基礎講座</p>
        <p class="add-text2">
          電気数学の基礎から丁寧に学習します。<br />
          四則計算（加減乗除）、比例・反比例、指数法則と対数関数、二次方程式、分数式、連立方程式、三角関数、ベクトル、正弦波交流など、各科目の理解に必要な基礎力を身につけます。
        </p>
        <p class="add-text1">✅理論</p>
        <p class="add-text2">
          電気理論、電子理論、電気計測および電子計測を学習します。<br />
          電気磁気理論、電気回路理論、固体電子理論、真空電子理論、電子回路理論、電気・電子計測など、理論科目の重要分野に対応します。
        </p>
        <p class="add-text1">✅電力</p>
        <p class="add-text2">
          発電所、変電所および蓄電所の設計・運転、送電線路および配電線路（屋内配線を含む。）の設計・運用、電気材料を学習します。<br />
          さらに、発変電・送配電・蓄電に関する基礎に加え、安全確保、災害・事故対応、環境保全、再生可能エネルギー、高電圧工学など、最新の出題傾向にも対応します。
        </p>
        <p class="add-text1">✅機械</p>
        <p class="add-text2">
          電気機器、パワーエレクトロニクス、電動機応用、照明、電熱、電気化学、電気加工、自動制御、メカトロニクス、電力システムに関する情報伝送および処理を学習します。<br />
          加えて、回転機、静止器、保護機器、小形モータ、再生可能エネルギー技術、水素利用、バッテリー活用など、近年の技術動向も踏まえて学習します。
        </p>
        <p class="add-text1">✅法規</p>
        <p class="add-text2">
          電気法規（保安に関するものに限る。）および電気施設管理を学習します。<br />
          電気関係法令、各種技術基準に加え、電気施設全体の運営、レジリエンス、電力需給など、法規科目の重要内容に対応します。
        </p>
        <p class="add-text1">✅模擬試験</p>
        <p class="add-text2">
          最新試験の直前予想模擬試験を実施します。<br />
          模擬試験に取り組んだ後は、約30分の解答解説講座で理解を深め、本番に向けた実践力を養います。
        </p>
        <p class="add-text1 -mt">
          試験内容やその他、電気事業法や法令・法律は改定/改正されることがありますので、最新の試験対策講座をおすすめいたします！
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
