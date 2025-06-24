<template>
  <div class="exam">
    <p class="exam-title">📚 合格サポートプログラム</p>
    <div class="exam-inner">
      <p class="exam-topHead">🟦 合格サポートプログラムとは？</p>
      <p class="exam-topText">
        はじめて受験される方でも安心して学習を進められるよう、計画的な学習支援・副教材・添削サポートを一体化したオリジナルプログラムです。
        <br />
        独学では難しい「出題傾向の分析」や「提出課題の添削指導」なども含まれており、実力を着実に伸ばしながら合格を目指せます。
      </p>
      <ul>
        <li>
          <img
            src="../../assets/img/license_page/denken3/denken3_campaign_3.jpg"
            alt="電験三種 第三種電気主任技術者"
          />
          <div class="exam-textWrap">
            <p class="exam-head">
              Program①｜過去10年分の本試験問題で合格力を養成
            </p>
            <p class="exam-text">
              電験三種の試験突破には、過去の本試験問題を数多く解くことが極めて重要です。
              <br />
              本プログラムでは、実際に出題された過去10年分の本試験問題を進呈いたします。
              <br />
              通学・オンライン・通信講座すべての受講者が対象です。
              <br />
              実際の出題形式・難易度を体感しながら学習できるため、出題傾向の把握、頻出分野の分析、実戦力の強化に直結します。
              <br />
              ※本試験問題の提供には、メールアドレスのご登録が必要です。
            </p>
          </div>
        </li>
        <li>
          <img
            src="../../assets/img/license_page/denken3/denken3_campaign_4.jpg"
            alt="電験三種 第三種電気主任技術者"
          />
          <div class="exam-textWrap">
            <p class="exam-head">
              Program②｜出題傾向を分析し、効率的な学習を実現
            </p>
            <p class="exam-text">
              合格への近道は、「どこが出やすいか」を知ることから始まります。
              <br />
              本プログラムでは、過去10回分の本試験問題をもとに、出題傾向・出題形式の特徴を徹底分析。
              <br />
              科目ごと・分野ごとに出題内容を分類し、どこを重点的に学ぶべきかが一目でわかる資料をご提供します。
              <br />
              これにより、限られた時間でも効率よく合格に近づく戦略的な学習が可能になります。
              <br />
              <br />
              独学では見えづらい「試験の傾向」をつかみ、確実に得点源を増やしましょう。
            </p>
          </div>
        </li>
        <li>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_8.png"
            alt="電験三種 第三種電気主任技術者"
          />
          <div class="exam-textWrap">
            <p class="exam-head">Program③｜提出課題と終了試験で実力を可視化</p>
            <p class="exam-text">
              本プログラムでは、全4科目分の提出課題（通学・オンライン講座）および終了試験問題（通信講座）を通じて、学習の到達度を客観的に評価することが可能です。
              <br />
              これらの課題・試験問題は、各科目の理解度や知識の深さを測るように設計されており、ご自身の弱点や改善点を明確に把握できます。
              <br />
              <br />
              学習の進捗を確認しながら、着実に力をつけていける内容となっており、効果的な学習計画の立案にも役立つ構成です。
            </p>
          </div>
        </li>
        <li>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_9.png"
            alt="電験三種 第三種電気主任技術者"
          />
          <div class="exam-textWrap">
            <p class="exam-head">
              Program④｜最新の予想模擬試験＋ポイント解説で総仕上げ
            </p>
            <p class="exam-text">
              試験本番を想定した最新の予想模擬試験（全4科目対応）で、合格への最終確認を行います。
              <br />
              出題傾向を分析し、本試験で狙われるテーマに絞って作成した能センオリジナル模試です。
              <br />
              <br />
              <span>■ 模擬試験（問題）</span>
              <br />
              ・最新傾向を反映した実践的な予想問題
              <br />
              ・オンライン講座では、過去2年分の模試も受験可能
              <br />
              ・本番前の実力チェック・総仕上げに最適
              <br />
              <br />
              <span>■ 模擬試験（解答・解説）</span>
              <br />
              ・全問題に丁寧な解説つき解答を付属
              <br />
              ・各科目ごとに30分程度のポイント解説講座あり
              <br />
              ・オンライン講座では動画形式で視聴可能
              <br />
              ・弱点補強と理解定着を効率的にサポート
            </p>
          </div>
        </li>
      </ul>
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
  .exam {
    background-color: #fff;
    margin: 50px auto 0;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
  }
  .exam-inner {
    max-width: 1170px;
    width: 100%;
    padding: 30px 30px 0;
    margin: 0 auto;
  }

  .exam-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #fff;
    background-color: #1262b2;
    padding: 16px 0;
    margin: 50px 0 30px;
  }

  .exam-topHead {
    margin: 0 0 20px;
    line-height: 1.5;
  }
  .exam-topText {
    margin: 0 0 20px;
    line-height: 1.5;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      column-gap: 20px;
      img {
        width: 40%;
      }
      .exam-textWrap {
        width: 60%;
      }
    }
  }
</style>
