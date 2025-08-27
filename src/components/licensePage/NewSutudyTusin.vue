<template>
  <div class="lecture">
    <div class="lecture-inner">
      <div class="add">
        <p class="add-title">学習内容</p>
        <p class="add-text1">✅基礎 (アーカイブ配信・視聴時間：約10時間)</p>
        <p class="add-text2">
          ▶
          電気数学の基礎【四則計算(加減乗除)・比例・反比例・指数法則と対数関数・二次方程式の根・分数式・連立方程式・三角関数・ベクトルと正弦波交流】・科目学習のポイント
        </p>
        <p class="add-text1">✅理論 (学習時間の目安：100時間)</p>
        <p class="add-text2">
          ▶
          基礎数学、SI単位、電気・光・磁気効果、電気理論、電子理論、電気計測、電子計測、問題集、提出課題【添削対象】
        </p>
        <p class="add-text1">✅電力 (学習時間の目安：60時間)</p>
        <p class="add-text2">
          ▶
          発電所及び変電所の設計及び運転、送電線路及び配電線路（屋内配線を含む）の設計及び運用、電気材料、問題集、提出課題【添削対象】
        </p>
        <p class="add-text1">✅機械 (学習時間の目安：60時間)</p>
        <p class="add-text2">
          ▶
          電気機器、パワーエレクトロニクス、電動機応用、照明、電熱、電気化学、電気加工、自動制御、メカトロニクス、電力システムに関する情報伝送及び処理、問題集、提出課題【添削対象】
        </p>
        <p class="add-text1">✅法規 (学習時間の目安：40時間)</p>
        <p class="add-text2">
          ▶
          電気法規（保安に関するものに限る）、電気施設管理、問題集、提出課題【添削対象】
        </p>
        <p class="add-text1">✅終了試験 (学習時間の目安：8時間)</p>
        <p class="add-text2">▶ 終了試験問題【添削対象】</p>
        <p class="add-text1 -mt">
          試験内容やその他、電気事業法や法令・法律は改定/改正されることがありますので、最新の試験対策講座をおすすめいたします。
        </p>
      </div>

      <div class="workshop-orangeLine">
        <div class="workshop-orangeLine__inner">
          <img
            class="workshop-orangeLine__icon"
            src="../../assets/img/icon/note.svg"
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
