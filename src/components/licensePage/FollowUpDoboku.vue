<template>
  <div class="follow">
    <div class="follow-inner">
      <div class="follow-content">
        <p class="follow-title">勉強フォローアップサービス</p>
        <div class="follow-wrap">
          <div class="follow-flex">
            <div class="follow-imgWrap">
              <img
                class="img-1"
                src="../../assets/img/license_page/doboku_s/follow-img1.jpg"
                alt="土木施工管理技士 講習会 通信講座 web講座"
              />
            </div>
            <div class="follow-textWrap">
              <p class="follow-heading">①&nbsp;勉強計画を立てて最短合格へ</p>
              <p class="follow-text">
                2級土木施工管理技士の試験合格を目指すなら、効率的な勉強計画が成功の鍵を握ります。計画的に学習を進めることで、無駄なく知識を身につけ、最短ルートで合格へと近づくことができます。
                <br />
                能センでは、一人ひとりのペースに合わせた
                <span>「勉強計画表」</span>
                をご用意。計画に沿って学習することで、迷うことなく着実にステップアップできます。
                <br />
                能センの教材・副教材は、合格への最短ルートを考え抜いて作られています。実践力と試験対策を網羅し、確実に力をつけられます！
              </p>
            </div>
          </div>
          <div class="follow-flex">
            <div class="follow-imgWrap">
              <img
                class="img-2"
                src="../../assets/img/license_page/doboku_s/follow-img2.jpg"
                alt="土木施工管理技士 講習会 通信講座 web講座"
              />
            </div>
            <div class="follow-textWrap">
              <p class="follow-heading">②&nbsp;リマインダーメールサービス</p>
              <p class="follow-text">
                試験日までの学習をしっかりサポート！
                <br />
                以下のタイミングで自動メールをお届けします。br
                <br />
                ・試験の 90日・60日・30日・10日前 に進捗サポートメールを配信
                <br />
                ・【受験申請期間】の 開始・締切
                も自動でお知らせ（申込み忘れを防止）
                <br />
                時期に合わせて、効果的な学習の進め方や目標達成のコツをお伝えします。
                <br />
                お申込みは簡単。フォームで「リマインダーメールサービス」を選択！
                <br />
                試験本番まで、あなたの学習をしっかりサポートします。
                <br />
                一緒に合格を目指しましょう！
              </p>
            </div>
          </div>
          <div class="follow-flex">
            <div class="follow-imgWrap">
              <img
                class="img-3"
                src="../../assets/img/license_page/doboku_s/follow-img3.jpg"
                alt="土木施工管理技士 講習会 通信講座 web講座"
              />
            </div>
            <div class="follow-textWrap">
              <p class="follow-heading">
                ③&nbsp;資格取得アドバイザーの質問サポート
              </p>
              <p class="follow-text">
                学習を進める中で「どこから手をつければいい？」「効率的な勉強方法は？」と迷うことはありませんか？
                <br />
                能センでは、学習計画の立て方や勉強の進め方についてのご相談に対応いたします。
                <br />
                また、学習に関する
                <span>「よくある質問」</span>
                にお答えし、スムーズに勉強を進められるようサポート！
                <br />
                まずは能センの教材を活用しながら、計画的に学習を進めてみましょう。
                <br />
                疑問や不安があれば、お気軽にご相談ください！あなたの合格を全力で応援します！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
    },
  };
</script>

<style lang="scss" scoped>
  .follow {
    max-width: 1050px;
    background-color: #fff;
    margin: 0 auto;
    padding: 0 24px;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
  }
  .follow-inner {
    padding: 30px 0;
    margin: 0 auto;
  }

  .follow-content {
    padding: 20px;
    border: 4px solid #1262b2;
  }

  .follow-title {
    position: relative;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
    @media print, screen and (max-width: 1000px) {
      font-size: 24px;
    }
  }

  .follow-title::after {
    position: absolute;
    content: "";
    width: 252px;
    height: 3px;
    background: #ff843a;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    @media print, screen and (max-width: 1000px) {
      bottom: 0;
    }
  }

  .follow-wrap {
    margin-top: 50px;
    @media print, screen and (max-width: 1000px) {
      margin-top: 30px;
    }
  }

  .follow-flex {
    display: flex;
    margin-top: 40px;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .follow-imgWrap {
    width: 40%;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }

    img {
      display: block;
      margin: 0 auto;
    }

    .img-1 {
      width: 35%;
    }

    .img-2 {
      width: 55%;
    }

    .img-3 {
      width: 75%;
    }
  }

  .follow-textWrap {
    width: 60%;
    max-width: 560px;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
      max-width: 100%;
      margin-top: 20px;
    }
  }

  .follow-heading {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }

  .follow-text {
    font-size: 16px;
    margin: 0;
    line-height: 1.5;
    span {
      font-weight: 700;
    }
  }

  .follow-text.-under {
    span {
      font-weight: 500;
      text-decoration: underline;
    }
  }
</style>
