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
              Program①｜過去15年分の本試験データで“合格力”を徹底養成！
            </p>
            <p class="exam-text">
              電験三種の合格には、本試験を知り尽くすことが欠かせません。
              <br />
              本プログラムでは、過去15年分の本試験問題をまとめてご提供します。
              <br />
              通学・オンライン・通信、すべての受講生が対象です。
              <br />
              実際の出題形式・難易度を体感しながら学ぶことで、
              <br />
              <span>✅出題傾向の把握</span>
              <br />
              <span>✅頻出分野の分析</span>
              <br />
              <span>✅実戦的な対応力の強化</span>
              <br />
              を実現。合格へとつながる確かな学習が可能になります。
              <br />
              <br />
              ※情報量が多いため、環境に配慮してPDFでお送りします。
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
            src="../../assets/img/license_page/denken3/denken3_exam_9.png"
            alt="電験三種 第三種電気主任技術者"
          />
          <div class="exam-textWrap">
            <p class="exam-head">Program③｜提出課題と終了試験で実力を可視化</p>
            <p class="exam-text">
              本プログラムでは、全4科目分の提出課題および終了試験問題（通信講座）を通じて、学習の到達度を客観的に評価することが可能です。
              <br />
              これらの課題・試験問題は、各科目の理解度や知識の深さを測るように設計されており、ご自身の弱点や改善点を明確に把握できます。
              <br />
              <br />
              学習の進捗を確認しながら、着実に力をつけていける内容となっており、効果的な学習計画の立案にも役立つ構成です。
            </p>
            <div class="exam-textWrapBottom">
              <p class="exam-head">提出課題の添削例</p>
              <img
                src="../../assets/img/license_page/denken3/denken3_exam_10.png"
                alt="電験三種 第三種電気主任技術者"
              />
              <p class="exam-text -bottom">
                ご提出いただいた課題は、専門講師が一つひとつ丁寧にチェックし、赤ペンで的確なアドバイスを書き込みます。
                <br />
                さらに詳しい解答解説付きで返却するので、「なぜ間違えたのか」「どうすれば正解できるのか」がその場で理解できます。
              </p>
            </div>
          </div>
        </li>
        <li>
          <img
            src="../../assets/img/license_page/denken3/denken3_exam_11.png"
            alt="電験三種 第三種電気主任技術者"
          />
          <div class="exam-textWrap">
            <p class="exam-head">Program④｜質問用紙で質問できる</p>
            <p class="exam-text">
              学習中に
              <span>
                【計算式の途中が分からない】【テキストのどこを見ればいいのか迷う】
              </span>
              といった疑問が出てきたら、すぐに質問用紙に記入してください。
              <br />
              FAXやPDFで送るだけで、担当講師が丁寧に回答いたします。
              <br />
              <br />
              分からないところをそのままにせず、確実に解決しながら学習を進められる安心のサポートです。
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
    max-width: 1110px;
    padding: 30px 30px;
    margin: 0 auto;
    @media print, screen and (max-width: 1000px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .exam-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #fff;
    background-color: #1262b2;
    padding: 16px 0;
    margin: 50px 0 0;
  }

  .exam-topHead {
    margin: 0 0 20px;
    line-height: 1.5;
    font-weight: 700;
    font-size: 18px;
  }
  .exam-topText {
    margin: 0 0 50px;
    line-height: 1.5;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    column-gap: 20px;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
    }
    img {
      width: 40%;
      object-fit: cover;
      height: 308px;
      @media print, screen and (max-width: 1000px) {
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 20px;
      }
    }
  }

  li:nth-child(4) img {
    margin: 0 auto;
    width: 20%;
    @media print, screen and (max-width: 1000px) {
      width: 50%;
    }
  }

  li:not(:first-of-type) {
    margin-top: 40px;
  }

  .exam-textWrap {
    width: 60%;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  .exam-textWrapBottom {
    margin-top: 100px;
    @media print, screen and (max-width: 1000px) {
      margin-top: 30px;
    }
    .exam-head {
      text-align: center;
    }
    img {
      width: 70%;
      margin: 0 auto;
      display: block;
      height: auto;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }
  }

  .exam-head {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  .exam-text {
    margin: 10px 0 0;
    line-height: 1.5;

    span {
      font-size: 18px;
      font-weight: 700;
    }
  }
  .exam-text.-bottom {
    display: block;
    max-width: 575px;
    margin: 20px auto 0 auto;
  }
</style>
margin: 20px auto 0 auto; }
