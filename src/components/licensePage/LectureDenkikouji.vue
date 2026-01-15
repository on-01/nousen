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
      <div class="lecture-section -mt">
        <figure class="lecture-image">
          <img
            src="../../assets/img/license_page/doboku_s/lecture-image.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title">現場経験に基づく丁寧な指導</p>
          <p class="lecture-line"></p>
          <p class="lecture-text">
            やひろ技術士事務所の代表である山下先生は、技術士（建設部門・総合技術監理部門）として、通信インフラや土木工事の計画・設計・施工管理に長年従事されています。
            <br />
            また、1・2級土木施工管理技士や労働安全コンサルタントなどの資格を持ち、豊富な現場経験に基づく実践的でわかりやすい指導に定評があります。
            <br />
            <br />
            <span>山下宏幸 先生</span>
            <br />
            趣味：スポーツ観戦（野球、ラグビー、サッカー）
            <br />
            <span>【受講生へ一言】</span>
            <br />
            講義では、効率よく確実に合格するためのポイントや学習方法を中心に解説します。一緒に合格に向けて頑張りましょう。
          </p>
        </div>
      </div>
    </div>

    <div class="exam">
      <p class="exam-title">📚 合格サポートプログラム</p>
      <div class="exam-inner">
        <p class="exam-topHead">🟦 合格サポートプログラムとは？</p>
        <p class="exam-topText">
          はじめて受験される方でも安心して学習を進められるよう、計画的な学習支援・副教材・添削サポートを一体化したオリジナルプログラムです。
          <br />
          独学では難しい「短期合格の為の出題ポイント」や「経験記述の添削指導」なども含まれており、実力を着実に伸ばしながら合格を目指せます。
        </p>
        <!-- <ul>
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
                <br>
                <br>
                <span>※オンライン講座では、問題・解答解説のPDFをダウンロード</span>
              </p>
            </div>
          </li>
        </ul> -->
      </div>
    </div>

    <div class="lecture-inner">
      <p class="book-title">最新の人気テキストを使用</p>
      <div class="lecture-section -book">
        <div class="book-wrap -left">
          <img
            src="../../assets/img/license_page/doboku_s/lecture-book3.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <p class="book-text700 -first">【一次コース専用】</p>
          <p class="book-text700">
            ２級土木施工管理技士　要点テキスト　令和8年度版
          </p>
          <p class="book-text">
            過去問題と要点解説を一冊にまとめた、効率重視のテキストです。
            <br />
            令和8年度試験に対応し、令和3年度からの新制度や令和6年度の新傾向問題（土質工学・構造力学・水理学）を徹底分析。最新の出題傾向を反映しています。
            <br />
            図表やイラストを豊富に用い、重要事項は赤文字で整理。難しい内容もわかりやすく、短時間で理解できる構成です。
            <br />
            出題頻度の高いテーマを厳選し、合格に直結する要点だけを収録。忙しい方でも、短期間で効果的に実力を高められる内容です。
            <br />
            <span>※新刊は令和8年2月中旬頃の発送になります</span>
          </p>
        </div>
        <div class="book-wrap -right">
          <img
            src="../../assets/img/license_page/doboku_s/lecture-book5.png"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <p class="book-text700 -first">【二次コース専用】</p>
          <p class="book-text700">
            ２級土木施工管理技士　第二次検定対策テキスト
          </p>
          <p class="book-text">
            本テキストは、能セン完全オリジナルの「２級土木施工管理技士
            第二次検定」対策専用教材です。
            <br />
            第二次検定では、実務経験に基づいた記述問題が中心となり、施工計画・工程管理・安全管理・品質管理など、幅広い分野での理解と表現力が求められます。
            <br />
            本テキストでは、本試験の出題傾向を徹底分析し、重要テーマを体系的に整理。実際の現場経験をもとに、「使える表現」「減点されない書き方」を具体的に紹介します。
            <br />
            <span>※令和8年度更新版は1月中旬の発送になります。</span>
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
          <p class="counterplan-text -yellow">過去問５年分を進呈（一次）</p>
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
          <p class="counterplan-head">過去問7年分</p>
          <img
            class="counterplan-img -second"
            src="../../assets/img/license_page/doboku_s/counterplan-img1.jpg"
            alt="土木施工管理技士 講習会 通信講座 web講座"
          />
          <div class="counterplan-text-wrap">
            <p class="counterplan-text -yellow">過去問7年分を進呈</p>
            <p class="counterplan-text">
              2級土木施工管理技士の試験に合格するためには、過去問題を解くことが非常に重要です。そのため、受講者の皆様には
              <span>過去7年分の過去問題</span>
              を提供いたします。
              <br />
              この貴重な教材を試験対策にぜひご活用ください。
            </p>
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

  .lecture-section.-mt {
    margin-top: 60px;

    @media print, screen and (max-width: 1000px) {
      margin-top: 30px;
    }
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

  .book-text {
    span {
      font-weight: 700;
      color: red;
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

  .counterplan-text-wrap {
    width: 100%;
    margin: 0 auto;
    max-width: 400px;
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
    span {
      font-weight: 700;
    }
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

  .exam {
    background-color: #fff;
    margin: 50px auto 0;
    z-index: 0;
    position: relative;
    font-family: "メイリオ", sans-serif;
  }
  .exam-inner {
    max-width: 1110px;
    padding: 30px 30px 0;
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
    margin: 0;
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

  li:not(:first-of-type) {
    margin-top: 40px;
  }

  .exam-textWrap {
    width: 60%;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
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
</style>
