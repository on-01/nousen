<template>
  <Layout>
    <div class="company">
      <Hero
        :backImgOver="require('../assets/img/company/company_hero.jpg')"
        :backImgUnder="require('../assets/img/company/company_hero_sp.jpg')"
        title="会社概要"
      />

      <figure class="company-image">
          <img src="../assets/img/company/company_message.jpg">
      </figure>

      <div class="contents">
        <section class="info section">
          <h3 class="section-title">企業情報</h3>
          <div class="content">
            <dl>
              <dt>会社名</dt>
              <dd>株式会社ＮＯＵＳＥＮ</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>東京都練馬区豊玉南2-9-6</dd>
            </dl>
            <dl>
              <dt>電話番号</dt>
              <dd>03-5946-9417（代表）<br>
              0120-547-284(フリーダイヤル)</dd>
            </dl>
            <dl>
              <dt>FAX</dt>
              <dd>03-5946-9418</dd>
            </dl>
            <dl>
              <dt>代表</dt>
              <dd>中村 信明</dd>
            </dl>
            <dl>
              <dt></dt>
              <dd>
                社団法人 日本電気技術者協会 維持会員
                <br />
                東京商工会議所 団体会員
              </dd>
            </dl>
          </div>
        </section>
        <section class="outline section">
          <h3 class="section-title">経営理念</h3>
          <p class="section-text">
            どこよりも『合格』を提供し、
            <br />
            誰よりも日本社会の発展に貢献。
            <br />
            何よりも明るい未来を創造する。
          </p>
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
              <li>各種資格取得のための講習会、研修会及びセミナーの企画、開催及び運営</li>
              <li>各種資格取得のためのオンライン講座の開設及び通信教育事業</li>
              <li>書籍及び教材の制作、出版及び販売</li>
              <li>人材採用及び就職に関するコンサルタント業務</li>
              <li>建築工事、土木工事、管工事及び電気工事並びに省エネルギーに関するコンサルタント業務</li>
              <li>前各号に附帯又は関連する一切の業務</li>
            </ol>
          </div>
        </section>

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
                <p class="last-message-text1">能センは子供の未来を<br>応援します!</p>
                <p class="last-message-text2">日本を元気に！<br>
                子供たちが夢と希望を持って働ける世の中へ！<br>
                能センでは受講生１名につき１００円を<br>
                「こどもの未来応援基金」へ寄付をいたします。
                </p>
                <p class="last-message-text3">
                  <g-link to="https://kodomohinkon.go.jp/">
                    こどもの未来応援基金
                  </g-link>は、<br>
                    こどもの貧困対策を進めるための<br>
                    官民連携プロジェクトのひとつとして、<br>
                    ２０１５年に創設されました。<br>
                </p>
            </div>
          </div>
        </div>
        
        <!-- <section class="session section">
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
        </section> -->
      </div>
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
export default {
  metaInfo() {
    return {
      titleTemplate: "会社概要｜能セン-合格への近道",
      meta: [
        {
          name: "description",
          content:
            "電気、建築、設備関連を中心とした受験対策講習会を開催しています能センのページです。企業情報、沿革、事業内容、開催された講習会・研修会をご紹介しています。"
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `会社概要｜能セン-合格への近道`
          // content: `会社概要 | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/company`
        }
      ]
    };
  },
  components: {
    Hero
  }
};
</script>

<style lang="scss" scoped>
.company {
  padding-bottom: 100px;
  font-family: 'メイリオ', sans-serif;
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
  background-color: #f9f9f9;
  margin: 0 auto;
  padding: 50px;
  margin-top: 50px;
  @media print, screen and (max-width: 1000px) {
    padding: 50px 5%;
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
  width: 200px;
  color: #ed6c00;
  font-weight: bold;
  @media print, screen and (max-width: 1000px) {
    width: 100%;
  }
}
dd {
  width: calc(100% - 200px);
  margin: 0;
  padding: 0;
  @media print, screen and (max-width: 1000px) {
    width: 100%;
  }
}
.content {
  border-top: 1px dashed #808080;
  border-bottom: 1px dashed #808080;
}
.section-text {
  text-align: center;
}

.company-image {
  margin: 0;
}
.company-image img{
    margin: 40px auto 0;
    display: block;
}

.last-message {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
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
.last-message-description::after{
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
