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
      <!-- <div class="lecture-section -center">
        <figure class="lecture-image">
          <g-image :src="imagePath2" :alt="altText2" />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title" v-html="title2"></p>
          <p class="lecture-line"></p>
          <p class="lecture-text">{{ text2 }}</p>
          <p class="lecture-title -small" v-html="title3"></p>
        </div>
      </div> -->
      <!-- <div class="lecture-section -center">
        <figure class="lecture-image">
          <img
            src="../../assets/img/license_page/doboku_s/doboku_lecture2.jpg"
            alt="土木施工管理技士 講習会 通信講座"
          />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title">勉強計画を立てて最短合格へ</p>
          <p class="lecture-line"></p>
          <p class="lecture-text">
            勉強の計画を立てることは、勉強をスムーズに進めるために、とても効果的な方法だと言われています。
            <br />
            能センでは計画に沿った勉強で最短合格ができるように、勉強計画表をお渡ししています。
          </p>
          <p class="lecture-title -small">
            能センの教材、副教材全てが合格へと通じています！
          </p>
        </div>
      </div> -->

      <p class="book-title">最新の人気テキストを使用</p>
      <div class="lecture-section -book">
        <div class="book-wrap -left">
          <img
            src="../../assets/img/license_page/kenchiku_s/lecture-book1.png"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
          <p class="book-text700 -first">【一次・二次コース】</p>
          <p class="book-text700">
            ２級建築施工管理技士 第一次・第二次検定合格ガイド
          </p>
          <p class="book-text">
            ２級建築施工管理技士のテキストランキングなどで常に上位を占めている翔泳社さんの参考書です。
            <br />
            「よく出るところだけを」という受験者のリクエストに応え、短時間で効率よく学習できるよう、必須の知識にポイントを絞ってコンパクトにまとめています。
            <br />
            そして、文章だけではポイントが理解しづらい項目について、構造などがイメージしやすいイラストや、現場感が伝わる写真を豊富に使って解説しています。
          </p>
        </div>
        <div class="book-wrap -right">
          <img
            src="../../assets/img/license_page/kenchiku_s/lecture-book2.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
          <p class="book-text700 -first">旧テキストはプレゼント！！</p>
          <p class="book-text">
            受講生の方には最新のテキストとは別に、以前使用していました学科と実地のテキストをプレゼントします！
            <br />
            1・2級 建築施工管理技士 学科編(第一次検定)
            <br />
            第1編　建築学
            <br />
            第2編　建築設備・外構・契約関連
            <br />
            第3編　施工共通（躯体）
            <br />
            第4編　施工共通（仕上）
            <br />
            第5編　施工管理
            <br />
            第6編　法規
            <br />
            1・2級 建築施工管理技士 実地編(第二次検定)
            <br />
            第1編　施工経験記述（１級、２級）
            <br />
            第2編　施工管理
            <br />
            第3編　法規
          </p>
        </div>
      </div>

      <p class="counterplan-title -top">第一次検定 試験対策</p>
      <div class="lecture-section -counterplan">
        <div class="counterplan-wrap">
          <p class="counterplan-head">過去問5年分</p>
          <img
            class="counterplan-img -first"
            src="../../assets/img/license_page/doboku_s/counterplan-img1.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            過去問５年分を進呈（一次コース）
          </p>
          <p class="counterplan-text">
            2級建築施工管理技士の試験に合格するためには、過去問題を解くことが非常に重要です。そのため、受講者の皆様には
            <span>過去5年分の過去問題</span>
            を提供いたします。
            <br />
            この貴重な教材を試験対策にぜひご活用ください。
          </p>
        </div>
        <div class="counterplan-wrap">
          <p class="counterplan-head">オリジナル問題集</p>
          <img
            class="counterplan-img -second"
            src="../../assets/img/license_page/kenchiku_s/counterplan-img1.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            １・２級に対応したスーパー問題集！！
          </p>
          <p class="counterplan-text">
            一次試験に出る重要ポイントのみを集めた能センオリジナルの問題集です。
            <br />
            第一編【建築学】
            <br />
            第二編【建築設備・外溝・契約関連】
            <br />
            第三編【施工共通（躯体）】
            <br />
            第四編【施工共通（仕上げ）】
            <br />
            第五編【施工管理】
            <br />
            第六編【法規】
          </p>
        </div>
        <div class="counterplan-wrap">
          <p class="counterplan-head">一次検定 予想模擬試験</p>
          <img
            class="counterplan-img -third"
            src="../../assets/img/license_page/doboku_s/counterplan-img3.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            一次試験の総仕上げ【予想模擬試験】
          </p>
          <p class="counterplan-text">
            模擬試験/解答解説
            <br />
            ◆ 学習の総仕上げとして実施してください
            <br />
            ◆ 試験時間：150分
            <br />
            ◆ 問題数：全50問
            <br />
            最新の本試験出題傾向を徹底分析した一次試験対策の予想問題を、解答解説付きでご提供します。
            <br />
            一次試験完全突破を目指す最終ステージの模擬試験です！
            <br />
            この予想問題をしっかり解いて、自信を持って試験に臨みましょう。
          </p>
        </div>
      </div>
      <p class="counterplan-title">第二次検定 試験対策</p>
      <div class="lecture-section -counterplan2">
        <div class="counterplan-wrap">
          <p class="counterplan-head">最短１日！ 施工経験記述の通信添削</p>
          <img
            class="counterplan-img -first"
            src="../../assets/img/license_page/kenchiku_s/counterplan-img2.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            専門講師が記述式の第二次検定を添削指導します！
          </p>
          <p class="counterplan-text">
            <span>二次コースの特長</span>
            <br />
            <span>&emsp;・講座料金に添削1回分が含まれる</span>
            <br />
            &emsp;追加添削は1回2,750円（税込）。
            <br />
            <span>&emsp;・専用プリントで簡単対応</span>
            <br />
            &emsp;指定テンプレートに記述して提出。
            <br />
            <span>&emsp;・最短1日でフィードバック</span>
            <br />
            &emsp;丁寧な修正とアドバイスで効率的に高得点を狙えます。
            <br />
            他社では添削費用が別途かかる場合も。PDF提出なら
            <span>最短1日</span>
            で返却可能です。
          </p>
          <p class="counterplan-text -yellow">経験記述添削のみのサービス</p>
          <p class="counterplan-text">
            講座なしで添削を希望する方向け。
            <br />
            <span>・料金：3,800円（税込4,180円）</span>
            <br />
            <span>&emsp;・内容：添削1回＋二次試験対応テキスト</span>
            <br />
            &emsp;建築・躯体・仕上げの全種別対応。
            <br />
          </p>
        </div>
        <div class="counterplan-wrap">
          <p class="counterplan-head">過去問5年分</p>
          <img
            class="counterplan-img -second"
            src="../../assets/img/license_page/doboku_s/counterplan-img1.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            過去問５年分を進呈（二次コース）
          </p>
          <p class="counterplan-text">
            2級建築施工管理技士試験に合格するための鍵は、過去問題に取り組むことです。
            <br />
            そこで、受講者限定特典として、過去5年分の試験問題をご提供します。
            <br />
            この充実した教材を使って、試験の傾向を徹底的に分析し、合格への自信を高めましょう。
            <br />
            試験対策に最適なこの機会を、ぜひお見逃しなく！
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

  .lecture-section.-book {
    column-gap: 20px;
    row-gap: 50px;
    margin-top: 80px;
    padding-left: 20px;
    padding-right: 20px;

    @media print, screen and (max-width: 1000px) {
      width: 90%;
      margin: 40px auto 0;
    }
  }

  .book-title {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin: 30px 20px 0;
    border-bottom: solid 3px #1262b2;
  }

  .book-wrap {
    width: 50%;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }
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
      width: 40%;
      @media print, screen and (max-width: 1000px) {
        width: 50%;
      }
    }
  }
  .book-wrap.-right {
    img {
      width: 87%;
      @media print, screen and (max-width: 1000px) {
        width: 80%;
      }
    }
  }

  .book-text700 {
    font-weight: 700;
  }

  .book-text700.-first {
    font-weight: 700;
    margin-top: 10px;

    @media print, screen and (max-width: 1000px) {
      margin-top: 30px;
    }
  }

  .lecture-section.-counterplan {
    padding: 0 20px;
    column-gap: 20px;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
    }
  }

  .lecture-section.-counterplan2 {
    padding: 0 20px;
    column-gap: 20px;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
    }
    .counterplan-wrap {
      width: calc(100% / 2);
      img {
        display: block;
        margin: 0 auto;
      }
      @media print, screen and (max-width: 1000px) {
        width: 100%;
      }
    }
    .counterplan-img.-first {
      width: 63%;
    }
    .counterplan-img.-second {
      width: 63%;
    }
  }

  .counterplan-title {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin: 30px 20px 0;
    background-color: #ff843a;
    color: white;
    box-shadow: 0 5px 1px #a14900;
  }

  .counterplan-title.-top {
    margin-top: 60px;
  }

  .counterplan-wrap {
    width: calc(100% / 3);
    img {
      display: block;
      margin: 0 auto;
    }
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  .counterplan-head {
    font-weight: 700;
    font-size: 20px;
    // padding-bottom: 10px;
    // border-bottom: 2px solid #249ef0;
    text-align: center;
    margin: 40px 0 5px;
  }

  .counterplan-text {
    margin: 0;
    line-height: 1.5;
    span {
      font-weight: 700;
    }
  }

  .counterplan-text.-bold {
    font-weight: 700;
    margin-top: 30px;
  }

  .counterplan-text.-yellow {
    background: #ffff8d;
    font-weight: 700;
    display: inline-block;
    line-height: 1;
    margin-top: 20px;
  }

  .counterplan-img.-second {
    width: 51%;
  }

  .counterplan-img.-third {
    width: 94%;
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
    background: #ff843a;
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
