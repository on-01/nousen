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
            src="../../assets/img/license_page/doboku_s/lecture-book3.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <p class="book-text700 -first">【一次・二次コース】</p>
          <p class="book-text700">
            ２級土木施工管理技士　要点テキスト　令和7年度版
          </p>
          <p class="book-text">
            「2級土木施工管理技術検定」を受験される方を対象とした、厳選された過去問題とテキストを兼ねた解説書です。
            <br />
            短時間で理解できるように、イラストや図表を豊富に取り入れ、わかりやすく要点を解説し、無駄の少ない効率の良い学習ができるように構成しています。
          </p>
        </div>
        <div class="book-wrap -right">
          <img
            src="../../assets/img/license_page/doboku_s/lecture-book4.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <p class="book-text700 -first">【旧二次テキストはプレゼント】</p>
          <p class="book-text700">２級土木施工管理技士　実地試験テキスト</p>
          <p class="book-text">
            能センで使用していたオリジナルテキストです。2級土木施工管理技術検定の第二次検定は経験を重視した試検内容となっています。
            <br />
            記述形式で出題される問題は記述量が多いうえ、出題範囲も広く、ポイントをしっかりおさえておく必要があります。
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
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            過去問５年分を進呈（一次・二次共に）
          </p>
          <p class="counterplan-text">
            2級土木施工管理技士の試験に合格するためには、過去問題を解くことが非常に重要です。そのため、受講者の皆様には
            <span>過去5年分の過去問題</span>
            を提供いたします。
            <br />
            この貴重な教材を試験対策にぜひご活用ください。
          </p>
        </div>
        <div class="counterplan-wrap">
          <p class="counterplan-head">一次検定 提出課題</p>
          <img
            class="counterplan-img -second"
            src="../../assets/img/license_page/doboku_s/counterplan-img2.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            100点満点で図書カードをプレゼント！
          </p>
          <p class="counterplan-text">
            提出課題 / 解答解説
            <br />
            ◆ 実力診断として実施してください
            <br />
            ◆ 試験時間：50分
            <br />
            ◆ 問題数：全20問
            <br />
            問題を解きながら、実力をチェックしてみましょう！
            <br />
            解答を提出していただいたうえで、見事全問正解された方には、
            <span>【図書カード】</span>
            をプレゼントいたします！
          </p>
        </div>
        <div class="counterplan-wrap">
          <p class="counterplan-head">一次検定 予想模擬試験</p>
          <img
            class="counterplan-img -third"
            src="../../assets/img/license_page/doboku_s/counterplan-img3.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            一次試験の総仕上げ【予想模擬試験】
          </p>
          <p class="counterplan-text">
            模擬試験/解答解説
            <br />
            ◆ 学習の総仕上げとして実施してください
            <br />
            ◆ 試験時間：130分
            <br />
            ◆ 問題数：全61問
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
            src="../../assets/img/license_page/doboku_s/counterplan-img4.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
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
            &emsp;土木・鋼構造物塗装・薬液注入の全種別対応。
            <br />
          </p>
        </div>
        <div class="counterplan-wrap">
          <p class="counterplan-head">二次試験対策㊙資料</p>
          <img
            class="counterplan-img -second"
            src="../../assets/img/license_page/doboku_s/counterplan-img5.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <p class="counterplan-text -yellow">
            「2級土木施工管理技士の二次試験がどうしても突破できない…」
          </p>
          <p class="counterplan-text">
            そんな悩みを抱える受験者の方に朗報です！
            <br />
            多くの方がつまずく二次試験。その原因を解決するために、私たちは
            <br />
            2級土木施工管理技士 二次試験合格のための極秘資料をご用意しました！
            <br />
            この資料には、実践的な解答例 や
            試験の出題傾向、さらに高得点を狙う記述のポイントを網羅。
            <br />
            特に、経験記述の暗記方法やスムーズに書けるコツをわかりやすく解説しています。
            <br />
            これを読めば、「なぜ二次試験に通らなかったのか」が明確になり、次の試験で結果を出せる自信が手に入ります！
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
      width: 42%;
      @media print, screen and (max-width: 1000px) {
        width: 50%;
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
    background-color: #1262b2;
    color: white;
    box-shadow: 0 5px 1px #1262b2;
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
    width: 46%;
  }

  .counterplan-img.-third {
    width: 94%;
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
    width: 25%;
    height: 4px;
    background: #ff843a;
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
