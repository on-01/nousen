<template>
  <Layout>
    <div class="company">
      <Hero
        :backImgOver="require('../assets/img/company/company_hero.jpg')"
        :backImgUnder="require('../assets/img/company/company_hero_sp.jpg')"
        title="会社概要"
      />

      <figure class="company-image">
        <img src="../assets/img/company/company_message2.jpg" />
      </figure>

      <div class="contents">
        <section class="greeting section">
          <h3 class="section-title">代表者ご挨拶</h3>
          <p class="section-text">
            私自身、これまでに数多くの資格やライセンスを取得してまいりました。
            <br />
            その経験をもとに、効率的な学習法や合格へのポイントを、皆さまにわかりやすくお伝えしております。
            <br />
            <br />
            資格取得の道のりは決して平坦ではありませんが、一歩一歩着実に進むことで、必ずゴールにたどり着けます。
            <br />
            その道のりを、私たちは全力でサポートいたします。
            <br />
            どのようなことでも構いませんので、どうぞお気軽にご相談ください。
            <br />
            <br />
            <br />
            株式会社NOUSEN
            <br />
            代表　中村 信明
          </p>
        </section>
        <section class="outline section">
          <h3 class="section-title">経営理念</h3>
          <p class="section-text -bold">
            どこよりも『合格』を提供し、
            <br />
            誰よりも日本社会の発展に貢献。
            <br />
            何よりも明るい未来を創造する。
          </p>
        </section>
        <section class="info section">
          <h3 class="section-title">企業情報</h3>
          <div class="content">
            <dl>
              <dt>社名</dt>
              <dd>株式会社ＮＯＵＳＥＮ</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>〒176-0014 東京都練馬区豊玉南2-9-6</dd>
            </dl>
            <dl>
              <dt>電話番号</dt>
              <dd>
                03-5946-9417（代表）
                <br />
                0120-547-284（フリーダイヤル）
              </dd>
            </dl>
            <!-- <dl>
              <dt>FAX</dt>
              <dd>03-5946-9418</dd>
            </dl> -->
            <dl>
              <dt>代表者</dt>
              <dd>中村 信明</dd>
            </dl>
            <dl>
              <dt>事業年度</dt>
              <dd>毎年4月1日から翌年3月末日まで</dd>
            </dl>
            <dl>
              <dt>主要取引金融機関</dt>
              <dd>
                住信ＳＢＩネット銀行株式会社
                <br />
                ＰａｙＰａｙ銀行株式会社
                <br />
                株式会社ゆうちょ銀行
                <br />
                楽天銀行株式会社
                <br />
                城北信用金庫
              </dd>
            </dl>
            <dl>
              <dt>法人番号</dt>
              <dd>8011601026730</dd>
            </dl>
            <dl>
              <dt>適格請求書発行事業者番号</dt>
              <dd>T8011601026730</dd>
            </dl>
            <dl>
              <dt>顧問税理士</dt>
              <dd>
                <a href="https://www.progsupport.or.jp/">
                  税理士法人プログレスサポート
                </a>
              </dd>
            </dl>
            <!-- <dl>
              <dt></dt>
              <dd>
                社団法人 日本電気技術者協会 維持会員
                <br />
                東京商工会議所 団体会員
              </dd>
            </dl> -->
          </div>
        </section>
        <section class="purpose section">
          <h3 class="section-title">目的・事業内容</h3>
          <h4 class="section-contents-title">
            資格取得のための受験準備講習会を開催
          </h4>
          <div class="content">
            当法人は、国家資格等取得に関する下記記載の各種事業を行い、合わせてその技術及び技能向上を図り、これの普及を目的とする。
            <br />
            <ol>
              <li>
                各種資格取得のための講習会、研修会及びセミナーの企画、開催及び運営
              </li>
              <li>各種資格取得のためのオンライン講座の開設及び通信教育事業</li>
              <li>書籍及び教材の制作、出版及び販売</li>
              <li>人材採用及び就職に関するコンサルタント業務</li>
              <li>
                建築工事、土木工事、管工事及び電気工事並びに省エネルギーに関するコンサルタント業務
              </li>
              <li>前各号に附帯又は関連する一切の業務</li>
            </ol>
          </div>
        </section>

        <section class="info section">
          <h3 class="section-title">沿革</h3>
          <div class="content">
            <dl>
              <dt>1983年</dt>
              <dd>株式会社能力開発研修センター 設立</dd>
            </dl>
            <dl>
              <dt>2020年3月</dt>
              <dd>
                一般社団法人能力開発研修センター
                設立（株式会社から社団法人へ移行）
              </dd>
            </dl>
            <dl>
              <dt>2023年4月</dt>
              <dd>株式会社NOUSEN 設立（ノウハウを継承）</dd>
            </dl>
            <dl>
              <dt>2024年1月</dt>
              <dd>
                こどもの未来応援基金に寄付、こども家庭庁支援局局長よりお礼状を受領
              </dd>
            </dl>
            <dl>
              <dt>2025年4月</dt>
              <dd>カリキュラム拡充に伴い、講師・運営体制を再構築</dd>
            </dl>
            <dl>
              <dt>2025年6月</dt>
              <dd>所属講師数が10人を超える（業務委託講師を含む体制へ拡充）</dd>
            </dl>
          </div>
        </section>
      </div>
      <section class="section03">
        <h2 class="section-title">
          <img
            src="../assets/img/front/reason_main_headline3.svg"
            alt="能センの社会貢献活動"
          />
        </h2>
        <div class="last-message">
          <div class="last-message-flex">
            <div class="last-message-flex-box">
              <p class="last-message-flexTitle">こどもの未来応援基金への寄付</p>
              <img
                src="../assets/img/common/social_image1-1.jpg"
                alt="「こどもの未来応援基金への寄付」"
              />
              <p class="last-message-flexText-bold">
                日本を元気に！
                <br />
                子どもたちが夢と希望を持って働ける世の中へ。
              </p>
              <p class="last-message-flexText">
                能センでは、
                <span>受講生1名につき100円</span>
                を「こどもの未来応援基金」へ寄付いたします。
                <br />
                「こどもの未来応援基金」は、子どもの貧困対策を進めるための
                <br />
                官民連携プロジェクトの一環として、2015年に創設されました。
              </p>
              <p class="last-message-flexText">
                こどもの未来応援基金についての詳細は、以下のリンクをご参照ください。
                <br />
                [
                <a href="https://kodomohinkon.go.jp/">
                  https://kodomohinkon.go.jp/
                </a>
                ]
              </p>
            </div>
            <div class="last-message-flex-box">
              <p class="last-message-flexTitle">
                環境への配慮～持続可能なミライへ～
              </p>
              <img
                src="../assets/img/common/social_image2.jpg"
                alt="環境への配慮～持続可能なミライへ～"
              />
              <p class="last-message-flexText-bold">
                能センでは、すべてのプリントや資料に
                <br />
                FSC認証を受けたエコペーパーを使用しております。
              </p>
              <p class="last-message-flexText">
                FSC認証とは、持続可能な森林の活用・保全を目的とし、
                <br />
                「適切な森林管理」を認証する国際的な制度です。
              </p>
              <p class="last-message-flexText">
                FSC認証についての詳細は、以下のリンクをご参照ください。
                <br />
                [
                <a href="https://shitte-erabo.net/aboutfsc/certification/">
                  https://shitte-erabo.net/aboutfsc/certification/
                </a>
                ]
              </p>
            </div>
            <!-- <img
              src="../assets/img/common/social_image.jpg"
              alt="子供の未来は日本の未来"
              class="last-message-logo"
              width="174"
              height="93"
              decoding="async"
            />
            <div class="last-message-description">
              <p class="last-message-text1">
                能センは子供の未来を
                <br />
                応援します!
              </p>
              <p class="last-message-text2">
                日本を元気に！
                <br />
                子供たちが夢と希望を持って働ける世の中へ！
                <br />
                能センでは受講生１名につき１００円を
                <br />
                「こどもの未来応援基金」へ寄付をいたします。
              </p>
              <p class="last-message-text3">
                <g-link to="https://kodomohinkon.go.jp/">
                  こどもの未来応援基金
                </g-link>
                は、
                <br />
                こどもの貧困対策を進めるための
                <br />
                官民連携プロジェクトのひとつとして、
                <br />
                ２０１５年に創設されました。
                <br />
              </p>
            </div> -->
          </div>
          <div class="last-message-flex -bottom">
            <div class="last-message-flex-box">
              <p class="last-message-flexTitle">
                建設業の発展と新規企業の成長をサポート！
              </p>
              <img
                src="../assets/img/common/social_image3.jpg"
                alt="建設業の発展と新規企業の成長をサポート！"
              />
              <p class="last-message-flexText-bold">
                建設業界の発展と新規企業の成長をサポート!
                <br />
                ミライを創ろう【創業支援割引制度】
              </p>
              <p class="last-message-flexText">
                建設業界の発展と新規企業の成長を支援するため、
                <br />
                創業2年以内の個人事業主および法人企業様向けに
                <span class="red">受講料を20％割引</span>
                でご提供します。
              </p>
              <p class="last-message-flexText -center">
                <!-- <span>対象者:&nbsp;</span>
                創業2年以内の個人事業主および法人企業の従業員様
                <br />
                <span>割引率:&nbsp;</span>
                受講料20％割引
                <br /> -->
                <span>必要事項:&nbsp;</span>
                特に提出書類は不要ですが、以下の情報が必要となります。
              </p>
              <p class="last-message-flexText">
                <span>・本社住所 ・代表電話番号　・代表者氏名</span>
              </p>
              <p class="last-message-flexText">
                能センは、このプログラムを通じて、建設業界の新しい担い手を応援し、
                <br />
                業界全体の持続的な発展に貢献したいと考えています。
                <br />
                皆様の挑戦を、私たちも全力でサポートさせていただきます。
              </p>
            </div>
          </div>
        </div>

        <div class="btn__apply __bottom">
          <a @click="openModal">
            <span>お申込みはこちら</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
              aria-labelledby="box"
              role="presentation"
              class="icon"
              data-v-2d92a3c2=""
              data-v-0aac86ab=""
            >
              <title id="box" lang="en" data-v-2d92a3c2="">box icon</title>
              <g fill="currentColor" data-v-2d92a3c2="">
                <g data-v-0aac86ab="" data-v-2d92a3c2="">
                  <path
                    d="M.17,8A5.06,5.06,0,0,1,5.23,2.94a5.11,5.11,0,0,1,4,1.89h4.22a2.43,2.43,0,0,1,0,4.85H10A5.07,5.07,0,0,1,.17,8ZM8.94,6.44H8.85a.79.79,0,0,1-.73-.36,3.47,3.47,0,1,0,.52,2.6A.8.8,0,0,1,9.42,8h4a.8.8,0,1,0,0-1.6H8.94Z"
                  ></path>
                  <path
                    d="M7.74,5.65V7.19a2.54,2.54,0,0,1-5.08,0V5.65a2.54,2.54,0,0,1,5.08-.23A.89.89,0,0,1,7.74,5.65ZM4.27,7.19a.94.94,0,0,0,1.87.14V5.65a.94.94,0,0,0-1.87-.14V7.19Z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </section>
      <!-- <div class="company">
        <Fsc title="持続可能なミライへ" />

        <div class="last-message">
          <div class="last-message-flex">
            <img
              src="../assets/img/common/social_image.jpg"
              alt="子供の未来は日本の未来"
              class="last-message-logo"
              width="174"
              height="93"
              decoding="async"
            />
            <div class="last-message-description">
              <p class="last-message-text1">
                能センは子供の未来を
                <br />
                応援します!
              </p>
              <p class="last-message-text2">
                日本を元気に！
                <br />
                子供たちが夢と希望を持って働ける世の中へ！
                <br />
                能センでは受講生１名につき１００円を
                <br />
                「こどもの未来応援基金」へ寄付をいたします。
              </p>
              <p class="last-message-text3">
                <g-link to="https://kodomohinkon.go.jp/">
                  こどもの未来応援基金
                </g-link>
                は、
                <br />
                こどもの貧困対策を進めるための
                <br />
                官民連携プロジェクトのひとつとして、
                <br />
                ２０１５年に創設されました。
                <br />
              </p>
            </div>
          </div>
        </div>

        <section class="session section">
          <h3 class="section-title">開催された主な講習会・研修会</h3>
          <div class="content">
            <h4 class="section-contents-title">
              通学講座
            </h4>
            <div>
              <p>
                １級・２級建築施工管理技士
                <br />
                １級・２級土木施工管理技士
                <br />
                １級・２級管工事施工管理技士
                <br />
                １級・２級電気工事施工管理技士
                <br />
                第一種電気工事士
                <br />
                第二種電気工事士
                <br />
                第三種電気主任技術者（電験三種）※
                <br />
                工事担任者
                <br />
                エネルギー管理士（熱、電気）
                <br />
                公害防止管理者
                <br />
                初級システムアドミニストレータ
                <br />
              </p>
              <p>
                基本情報技術者
                <br />
                環境計量士（濃度関係）
                <br />
                環境計量士（騒音・振動関係）
                <br />
                給水装置工事主任技術者
                <br />
                浄化槽設備士
                <br />
                浄化槽管理士
                <br />
                下水道技術検定
                <br />
                下水道技術管理認定試験
                <br />
                環境アセスメント手法研修
                <br />
                現場代理人研修
                <br />
                マンション管理士
                <br />
                管理業務主任者
              </p>
            </div>
            <h4 class="section-contents-title">
              通信講座
            </h4>
            <div>
              <p>
                通信講座第二種電気主任技術者（電験二種）
                <br />
                第三種電気主任技術者（電験三種）※
                <br />
                第一種電気工事士
                <br />
                第二種電気工事士
                <br />
                １級・２級電気工事施工管理技士
                <br />
              </p>
              <p>
                ※印は教育訓練給付制度厚生労働大臣指定講座です。
              </p>
            </div>
          </div>
        </section>
      </div> -->
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
  import Hero from "@/components/Hero.vue";
  import Fsc from "../components/licensePage/Fsc.vue";
  export default {
    metaInfo() {
      return {
        titleTemplate: "会社概要｜能セン-合格への近道",
        meta: [
          {
            name: "description",
            content:
              "電気、建築、設備関連を中心とした受験対策講習会を開催しています能センのページです。企業情報、沿革、事業内容、開催された講習会・研修会をご紹介しています。",
          },
          {
            key: `og:title`,
            property: `og:title`,
            content: `会社概要｜能セン-合格への近道`,
            // content: `会社概要 | ${this.$static.metadata.siteName}`,
          },
          {
            key: `og:url`,
            property: `og:url`,
            content: `${this.$static.metadata.siteUrl}/company`,
          },
        ],
      };
    },
    components: {
      Hero,
      Fsc,
    },
  };
</script>

<style lang="scss" scoped>
  .company {
    // padding-bottom: 100px;
    font-family: "メイリオ", sans-serif;
    background: #ebf7ff;
  }
  .contents {
    max-width: 970px;
    width: 100%;
    margin: 60px auto 0;
    @media print, screen and (max-width: 1000px) {
      width: 90%;
      margin: 50px auto 0;
    }
  }
  .section {
    background-color: #fff;
    margin: 0 auto;
    padding: 50px;
    margin-top: 50px;
    @media print, screen and (max-width: 1000px) {
      padding: 50px 5%;
    }
  }
  .purpose {
    margin-bottom: 135px;
    @media print, screen and (max-width: 1000px) {
      margin-bottom: 110px;
    }
  }
  .section-title {
    color: #ed6c00;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin-bottom: 50px;
  }
  .section-contents-title {
    color: #ed6c00;
    font-weight: bold;
  }
  dl {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    padding: 0.5em 0;
    @media print, screen and (max-width: 1000px) {
      display: block;
    }
  }
  dl + dl {
    border-top: 1px dashed #808080;
  }
  dt {
    width: 250px;
    color: #ed6c00;
    font-weight: bold;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  dd {
    width: calc(100% - 250px);
    margin: 0;
    padding: 0;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  dd a {
    text-decoration: underline;
  }
  dd a:hover {
    opacity: 0.8;
  }
  .content {
    border-top: 1px dashed #808080;
    border-bottom: 1px dashed #808080;
  }
  .section-text {
  }

  .section-text.-bold {
    text-align: center;
    font-weight: 700;
  }

  .company-image {
    max-width: 770px;
    margin: 0 auto;
  }
  .company-image img {
    margin: 40px auto 0;
    display: block;
    width: 90%;

    @media print, screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .last-message {
    max-width: 970px;
    margin: 0 auto;
    overflow: hidden;
    font-family: "メイリオ", sans-serif;
  }

  .last-message-flex {
    display: flex;
    margin: 20px auto 0;
  }

  .last-message-flex p {
    margin: 0;
  }
  .last-message-logo {
    width: 45%;
  }
  .last-message-description {
    width: 55%;
    background: #fff8cc;
    padding-left: 8%;
    position: relative;
  }
  .last-message-description::after {
    content: "";
    position: absolute;
    left: -322px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 548px solid transparent;
    border-top: 96px solid #fff8cc;
    transform: rotate(90deg);
  }
  .last-message-text1 {
    color: #0071bb;
    font-size: 28px;
    font-weight: 700;
    padding-top: 10px;
    line-height: 1.8;
    letter-spacing: 0.1em;
  }
  .last-message-text2 {
    font-size: 15px;
    font-weight: 700;
    padding-top: 10px;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }
  .last-message-text3 {
    font-size: 14px;
    font-weight: 500;
    padding-top: 10px;
    padding-bottom: 8px;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }
  .last-message-text3 a {
    text-decoration: underline;
  }

  .section03 {
    position: relative;
    background: white;
    // margin-bottom: 50px;
    // margin: -225px calc(50% - 50vw) 0;
    // width: 100vw;
    // z-index: -1;
    @media print, screen and (max-width: 1000px) {
      margin-top: -55px;
    }
    &:before {
      content: "";
      // height: 500px;
      height: 305px;
      width: 5px;
      background-color: #000;
      display: block;
      position: relative;
      top: 5px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 0;
      @media print, screen and (max-width: 1000px) {
        // height: 300px;
        height: 220px;
      }
    }
    &:after {
      content: "";
      height: 30px;
      width: 5px;
      background-color: #000;
      display: block;
      position: absolute;
      // top: 473px;
      top: 283px;
      left: -20px;
      right: 0;
      margin: auto;
      transform: rotate(-45deg);
      @media print, screen and (max-width: 1000px) {
        // top: 274px;
        top: 196px;
      }
    }
    .section-title {
      max-width: 330px;
      width: 100%;
      margin: 0 auto;
      background-color: #fff;
      position: absolute;
      // top: 200px;
      top: 0;
      left: 0;
      right: 0;
      padding: 50px 0;
      @media print, screen and (max-width: 1000px) {
        width: 90%;
        top: 0;
        max-width: 250px;
        padding: 20px 0;
      }
      &:before {
        content: url("../assets/img/icon/finger_top_brown.svg");
        width: 30px;
        height: 50px;
        display: block;
        margin: 0 auto;
        background-color: #fff;
        padding: 10px;
      }
    }
    .reason-wrapper {
      margin-top: 100px;
      .btn__apply {
        width: 100%;
        text-align: center;
        margin: 100px auto 200px;
        @media print, screen and (max-width: 1000px) {
          margin: 100px auto 150px;
        }

        a {
          // 非表示に
          display: none;
          // display: inline-block;
          background-color: #f4891e;
          color: #fff;
          padding: 10px 3em;
          font-weight: bold;
          font-size: 20px;
          width: 375px;
          box-sizing: border-box;
        }
        svg {
          margin-left: 10px;
        }
      }
    }
    .btn__apply.__bottom {
      width: 100%;
      text-align: center;
      margin: 100px auto 0;
      // 非表示に
      display: none;

      a {
        display: inline-block;
        background-color: #f4891e;
        color: #fff;
        padding: 10px 3em;
        font-weight: bold;
        font-size: 20px;
        width: 375px;
        box-sizing: border-box;
      }
      svg {
        margin-left: 10px;
      }
    }
    .last-message {
      // max-width: 970px;
      max-width: 1300px;
      padding: 0 20px 40px;
      // width: 100%;
      margin: 0 auto;
      overflow: hidden;
      font-family: "メイリオ", sans-serif;
      // @media print, screen and (max-width: 1000px) {
      //   width: 90%;
      // }
      .under_display {
        @media print, screen and (min-width: 1001px) {
          display: none;
        }
      }
      // &:before {
      //   content: "";
      //   height: 200px;
      //   width: 5px;
      //   background-color: #000;
      //   display: block;
      //   position: relative;
      //   left: 0;
      //   right: 0;
      //   margin: auto;
      //   margin-top: 30px;
      //   @media print, screen and (max-width: 1000px) {
      //     height: 100px;
      //   }
      // }
    }
  }
  .last-message-flex {
    display: flex;
    margin: 80px auto 0;
    // align-items: center;
    justify-content: space-between;
    overflow: hidden;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
      row-gap: 40px;
    }

    .last-message-flex-box {
      width: 50%;
      @media print, screen and (max-width: 1000px) {
        width: 100%;
      }
      img {
        width: 63%;
        display: block;
        margin: 20px auto 10px;
      }
    }
    .last-message-flexTitle {
      font-size: 24px;
      padding: 0 40px;
      text-align: center;
      color: white;
      font-weight: 700;
      margin: 0 auto;
      border: solid 2px #333333;
      background-color: #00af50;
      width: 75%;
      @media print, screen and (max-width: 570px) {
        font-size: 20px;
        padding: 0 20px;
        width: 85%;
      }
    }
    .last-message-flexText-bold {
      text-align: center;
      font-size: 15px;
      font-weight: 700;
      margin: 0;
      line-height: 1.5;
    }
    .last-message-flexText {
      text-align: center;
      font-size: 15px;
      margin: 10px 0 0;
      line-height: 1.5;

      span {
        font-weight: 700;
      }
    }
  }

  .last-message-flex.-bottom {
    justify-content: center;
    @media print, screen and (max-width: 1000px) {
      margin-top: 40px;
    }

    .last-message-flex-box {
      img {
        width: 80%;
        @media print, screen and (max-width: 1000px) {
          width: 63%;
        }
      }
    }

    .last-message-flexText-bold {
      font-size: 17px;
      @media print, screen and (max-width: 1000px) {
        font-size: 15px;
      }
    }

    .last-message-flexTitle {
      background-color: #ed6c00;
      padding: 10px 90px 10px 100px;
      @media print, screen and (max-width: 1000px) {
        padding: 0 40px;
      }
      @media print, screen and (max-width: 570px) {
        padding: 0 20px;
      }
    }
    .red {
      color: red;
    }
    .last-message-flexText.-center {
      text-align: left;
      margin: 10px auto 0;
      max-width: 500px;
    }
  }

  .last-message-flex p {
    margin: 0;
  }
  .last-message-logo {
    width: 45%;
  }
  .last-message-description {
    width: 55%;
    // background: #fff8cc;
    padding-left: 8%;
    position: relative;
  }
  .last-message-description::after {
    content: "";
    position: absolute;
    left: -322px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 548px solid transparent;
    border-top: 96px solid #fff8cc;
    transform: rotate(90deg);
  }
  .last-message-text1 {
    color: #0071bb;
    font-size: 28px;
    font-weight: 700;
    padding-top: 10px;
    line-height: 1.8;
    letter-spacing: 0.1em;
  }
  .last-message-text2 {
    font-size: 15px;
    font-weight: 700;
    padding-top: 10px;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }
  .last-message-text3 {
    font-size: 14px;
    font-weight: 500;
    padding-top: 10px;
    padding-bottom: 8px;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }
  .last-message-text3 a {
    text-decoration: underline;
  }

  @media print, screen and (max-width: 1000px) {
    .company-image {
      width: 90%;
    }
    .last-message-description::after {
      display: none;
    }
    .last-message-flex {
      width: 100%;
      max-width: 560px;
      flex-wrap: wrap;
    }
    .last-message-logo {
      width: 100%;
    }
    .last-message-description {
      width: 100%;
      padding-left: 0;
    }
    .last-message-text1 {
      text-align: center;
      font-size: 20px;
    }
    .last-message-text2 {
      text-align: center;
      font-size: 13px;
    }
    .last-message-text3 {
      text-align: center;
      font-size: 12px;
    }
  }
</style>
