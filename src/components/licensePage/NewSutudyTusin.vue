<template>
  <div class="lecture">
    <div class="lecture-inner">
      <div class="add">
        <p class="add-title">通信講座の学習内容</p>
        <p class="add-text2">
          基礎講座は動画で、理論・電力・機械・法規の4科目はテキストと問題集で学びます。各科目の提出課題は講師による添削付きです。
        </p>
        <p class="add-text1">✅ 基礎講座（アーカイブ配信・視聴時間：約10時間）</p>
        <p class="add-text2">
          四則計算や比例・反比例から始め、方程式、指数・対数、三角関数、ベクトルと正弦波交流を学びます。あわせて、各科目の学習を進めるうえでのポイントを確認します。
        </p>
        <p class="add-text1">✅ 理論（学習時間の目安：100時間）</p>
        <p class="add-text2">
          基礎数学と電気で使う単位（SI単位）を確認し、直流回路や交流回路の計算方法を学びます。電気・光・磁気の性質、電子回路の仕組み、電圧や電流の測定方法も扱います。
        </p>
        <p class="add-text1">✅ 電力（学習時間の目安：60時間）</p>
        <p class="add-text2">
          発電所・変電所の役割と、送電線・配電線を通じて電気が届く仕組みを学びます。屋内配線を含む送配電設備の設計・運用や、電気材料の特性も扱います。
        </p>
        <p class="add-text1">✅ 機械（学習時間の目安：60時間）</p>
        <p class="add-text2">
          変圧器・発電機・電動機の仕組みと計算方法を学びます。さらに、電力を変換するパワーエレクトロニクスや、照明・電熱・自動制御など、電気を利用する技術を扱います。
        </p>
        <p class="add-text1">✅ 法規（学習時間の目安：40時間）</p>
        <p class="add-text2">
          電気事業法や電気工事士法、電気設備技術基準などを通じて、電気設備の安全を守るためのルールを学びます。あわせて、電力需給や設備の維持・運用など、電気施設管理の要点を押さえます。
        </p>
        <p class="add-text1">✅ 修了試験（学習時間の目安：8時間）</p>
        <p class="add-text2">
          学習の仕上げに修了試験に取り組みます。答案は講師が添削します。返却された答案で、理解できた点や、本試験までに復習したい分野を確認できます。
        </p>
      </div>

      <div class="workshop-orangeLine">
        <div class="workshop-orangeLine__inner">
          <img
            class="workshop-orangeLine__icon"
            src="../../assets/img/icon/note.svg"
            alt=""
          />
          <p class="workshop-orangeLine__heading">
            【オンライン講座へ変更可能】
          </p>
          <p class="workshop-orangeLine__text">
            通信講座だけでは学習に不安を感じる方は、オンライン講座💻に切り替えていただけます。
            <br />
            差額分の受講料＋変更手数料（1,000円）で、より充実した学習環境をご利用いただけます。
            <br />
            <br />
            🔹オンライン講座の特長
            <br />
            ・試験直前まで動画を繰り返し視聴でき、学習内容をしっかり定着
            <br />
            ・講義を何度でも振り返れるため、安心して学習を進められる
            <br />
            📌ご案内
            <br />
            ・変更は【受講開始から6ヶ月以内】に限ります
            <br />
            ・動画視聴には期限があります
            <br />
            ・課題提出期限はそのまま適用されます
            <br />
            ・同一科目のみ変更可能です
            <br />
            ・教材・添削内容は共通のため追加はありません
            <br />
            <br />
            👉 詳しくは『オンライン講座』のタブをご確認ください。
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
    margin: 0 auto -90px;
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

  .workshop-orangeLine {
    padding: 0 30px;
  }

  .workshop-orangeLine.-gansho {
    padding: 0 0 40px;
  }

  .workshop-orangeLine__inner {
    margin: 40px auto;
    padding: 20px;
    border: 4px solid #1262b2;
    border-radius: 12px;
    max-width: 690px;
    font-family: メイリオ, sans-serif;
    font-size: 16px;
    position: relative;
  }

  .workshop-orangeLine__inner.-gansho {
    max-width: 708px;
    margin-top: 40px;
    margin-bottom: 0;
    // @media print, screen and (max-width: 1000px) {
    //   margin-top: 0;
    // }
  }

  .workshop-orangeLine__icon {
    position: absolute;
    left: -20px;
    top: -18px;
    width: 54px;
  }

  .workshop-orangeLine__heading {
    font-weight: 700;
    text-align: left;
    font-size: 18px;
    margin: 0;
  }

  .workshop-orangeLine__text {
    margin: 10px 0 0;
    line-height: 1.7;
    text-align: left;
    @media print, screen and (max-width: 768px) {
      text-align: left;
    }
    span {
      font-weight: 700;
    }
  }
</style>
