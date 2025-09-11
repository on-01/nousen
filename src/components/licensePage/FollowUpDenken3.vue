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
                src="../../assets/img/license_page/denken3/follow-img1.jpg"
                alt="電験三種 第三種電気主任技術者"
              />
            </div>
            <div class="follow-textWrap">
              <p class="follow-heading">①&nbsp;勉強計画を立てて最短合格へ</p>
              <p class="follow-text">
                第三種電気主任技術者の資格取得には長期間の勉強が必要になります。
                <br />
                能センでは、計画に沿った勉強で最短合格ができるように、二つのシートをお渡ししています。
                <br />
                勉強計画を立てることは、勉強をスムーズに進めるためにとても効果的な方法だと言われています。
                <br />
                <span>・電験三種 勉強計画表</span>
                <br />
                <span>・電験三種 勉強チェックシート</span>
                <br />

                能センの教材、副教材全てが合格へと通じています！
              </p>
            </div>
          </div>
          <div class="follow-flex">
            <div class="follow-imgWrap">
              <img
                class="img-2"
                src="../../assets/img/license_page/doboku_s/follow-img2.jpg"
                alt="電験三種 第三種電気主任技術者"
              />
            </div>
            <div class="follow-textWrap">
              <p class="follow-heading">②&nbsp;リマインダーメールサービス</p>
              <p class="follow-text -under">
                <span>
                  ・試験の90日・60日・30日・10日前に進捗状況をサポートするメール配信
                </span>
                <br />
                <span>
                  ・【受験申請時期】も自動でお知らせ（申込み忘れを防止）
                </span>
                <br />
                各時点での勉強の進め方や目標達成のポイントをお伝えし、試験準備をしっかりサポート！
                <br />
                受験申請の開始・締切も自動通知。申込み忘れを防げて安心です。
                <br />
                ご希望の方は、お申込みフォームで「リマインダーメールサービス」を選ぶだけ。
                <br />
                一緒に試験まで頑張りましょう！
              </p>
            </div>
          </div>
          <div class="follow-flex">
            <div class="follow-imgWrap">
              <img
                class="img-3"
                src="../../assets/img/license_page/doboku_s/follow-img3.jpg"
                alt="電験三種 第三種電気主任技術者"
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
          <div class="follow-bottom">
            <p class="follow-bottom-title">
              ④オンラインサポートサービス【能センサポ】
            </p>
            <img
              class="follow-bottom-img"
              src="../../assets/img/license_page/denken3/follow-bottom.png"
              alt="電験三種 第三種電気主任技術者"
            />
            <div class="workshop-orangeLine">
              <div class="workshop-orangeLine__inner">
                <img
                  class="workshop-orangeLine__icon"
                  src="../../assets/img/icon/note.svg"
                />
                <p class="workshop-orangeLine__heading">能センサポとは？</p>
                <p class="workshop-orangeLine__text">
                  「わからない…」を、そのままにしない。
                  <br />
                  能センサポは、オンラインで講師に直接質問できる、
                  <span>あなた専用の家庭教師サービス</span>
                  です。
                  <br />
                  追加料金はかかりません。何度でも安心して使えます。
                  <br />
                  <br />
                  1回のご利用時間は
                  <span>最大30分</span>
                  。短時間でも、疑問をピンポイントで解決できます。
                  <br />
                  専用の予約ページから自分に合った日時を選ぶだけ。
                  <br />
                  GoogleカレンダーやOutlookと連携できて、スケジュール管理も簡単です。
                  <br />
                  予約時間には担当講師と1対1でつながり、疑問を丁寧に解決。
                  <br />
                  「わからないのに誰にも聞けない…」そんな不安はもう終わり。
                  <br />
                  <span>
                    ひとりで抱え込まない、心強い味方。それが「能センサポ」です。
                  </span>
                </p>
              </div>
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
      width: 70%;
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

  .follow-bottom {
    margin-top: 40px;
  }

  .follow-bottom-title {
    font-size: 24px;
    font-weight: 700;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    background-color: #1262b2;
    padding: 5px 0;
    max-width: 940px;
  }

  .follow-bottom-img {
    display: block;
    margin: 40px auto 0 auto;
    width: 60%;
    @media print, screen and (max-width: 1000px) {
      width: 90%;
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
    border: 4px solid #f4891e;
    border-radius: 12px;
    max-width: 652px;
    // min-width: 652px;
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
