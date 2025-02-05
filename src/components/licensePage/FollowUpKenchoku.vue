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
                alt="建築施工管理技士 講習会 通信講座 web講座"
              />
            </div>
            <div class="follow-textWrap">
              <p class="follow-heading">勉強計画を立てて最短合格へ</p>
              <p class="follow-text">
                2級建築施工管理技士の試験合格を目指すなら、効率的な勉強計画が成功の鍵を握ります。計画的に学習を進めることで、無駄なく知識を身につけ、最短ルートで合格へと近づくことができます。
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
                alt="建築施工管理技士 講習会 通信講座 web講座"
              />
            </div>
            <div class="follow-textWrap">
              <p class="follow-heading">リマインダーメールサービス</p>
              <p class="follow-text">
                試験日をうっかり忘れてしまうこと、ありませんか？
                <br />
                そんな心配を解消するために、試験の90日前、60日前、30日前、10日前に進捗状況をサポートするリマインダーメールをお届けします。
                <br />
                各時点での勉強の進め方や目標達成のポイントをお伝えし、試験準備をしっかりサポート！
                <br />
                ご希望の方は、お申込みフォームで「リマインダーメールサービス」を選択するだけ！一緒に試験まで頑張りましょう！
              </p>
            </div>
          </div>
          <div class="follow-flex">
            <div class="follow-imgWrap">
              <img
                class="img-3"
                src="../../assets/img/license_page/doboku_s/follow-img3.jpg"
                alt="建築施工管理技士 講習会 通信講座 web講座"
              />
            </div>
            <div class="follow-textWrap">
              <p class="follow-heading">資格取得アドバイザーの質問サポート</p>
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
    max-width: 1170px;
    // width: 100%;
    background-color: #fff;
    margin: 0 auto;
    padding: 0 24px;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
  }
  .follow-inner {
    max-width: 1170px;
    width: 100%;
    padding: 60px 0 30px;
    margin: 0 auto;
  }

  .follow-content {
    padding: 20px;
    border: 4px solid #1d9bf0;
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
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .follow-wrap {
    margin-top: 30px;
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
    span {
      font-weight: 700;
    }
  }
</style>
