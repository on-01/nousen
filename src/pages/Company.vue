<template>
  <Layout>
    <div class="company">
      <Hero
        :backImgOver="require('../assets/img/company/company_hero.jpg')"
        :backImgUnder="require('../assets/img/company/company_hero_sp.jpg')"
        title="会社概要"
      />
      <div class="contents">
        <section class="info section">
          <h3 class="section-title">企業情報</h3>
          <div class="content">
            <dl>
              <dt>会社名</dt>
              <dd>一般社団法人 能力開発研修センター</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>東京都江東区南砂2-6-3 サンライズ東陽ビル４F</dd>
            </dl>
            <dl>
              <dt>電話番号</dt>
              <dd>03-5632-6011（代表）</dd>
            </dl>
            <dl>
              <dt>FAX</dt>
              <dd>03-5632-6022</dd>
            </dl>
            <dl>
              <dt>代表理事</dt>
              <!-- <dd>櫛田 静代</dd> -->
              <dd>矢澤 健太郎</dd>
            </dl>
            <dl>
              <dt></dt>
              <dd>
                社団法人 日本電気技術者協会 維持会員<br />
                東京商工会議所 団体会員
              </dd>
            </dl>
          </div>
        </section>
        <section class="outline section">
          <h3 class="section-title">沿革</h3>
          <div class="content">
            <dl>
              <dt>1983年</dt>
              <dd>
                「環境計量協会」「環境整備協会」「電気技術振興会」「建設技術振興会」と、それぞれ専門分担制で設立
              </dd>
            </dl>
            <dl>
              <dt>1999年</dt>
              <dd>
                専門知識をひとつに結集し、現在の名称「能力開発研修センター」に名称を変更
              </dd>
            </dl>
            <dl>
              <dt>2010年</dt>
              <dd>株式会社に変更</dd>
            </dl>
            <dl>
              <dt>2012年7月30日</dt>
              <dd>一般社団法人　能力開発研修センターに移行</dd>
            </dl>
          </div>
        </section>
        <section class="purpose section">
          <h3 class="section-title">目的・事業内容</h3>
          <h4 class="section-contents-title">
            資格取得のための受験準備講習会を開催
          </h4>
          <div class="content">
            当法人は、国家資格等取得に関する下記記載の各種事業を行い、合わせてその技術及び技能向上を図り、これの普及を目的とする。<br />
            <ol>
              <li>各種資格試験に対する受験準備講習会の開催</li>
              <li>各種講演会、講習会、研修会、懇談会及び見学会等の開催</li>
              <li>書籍の出版</li>
              <li>その他、当法人の目的を達するために必要な事業</li>
            </ol>
          </div>
        </section>
        <section class="session section">
          <h3 class="section-title">開催された主な講習会・研修会</h3>
          <div class="content">
            <h4 class="section-contents-title">
              通学講座
            </h4>
            <div>
              <p>
                １級・２級建築施工管理技士<br />
                １級・２級土木施工管理技士<br />
                １級・２級管工事施工管理技士<br />
                １級・２級電気工事施工管理技士<br />
                第一種電気工事士<br />
                第二種電気工事士<br />
                第三種電気主任技術者（電験三種）※<br />
                工事担任者<br />
                エネルギー管理士（熱、電気）<br />
                公害防止管理者<br />
                初級システムアドミニストレータ<br />
              </p>
              <p>
                基本情報技術者<br />
                環境計量士（濃度関係）<br />
                環境計量士（騒音・振動関係）<br />
                給水装置工事主任技術者<br />
                浄化槽設備士<br />
                浄化槽管理士<br />
                下水道技術検定<br />
                下水道技術管理認定試験<br />
                環境アセスメント手法研修<br />
                現場代理人研修<br />
                マンション管理士<br />
                管理業務主任者
              </p>
            </div>
            <h4 class="section-contents-title">
              通信講座
            </h4>
            <div>
              <p>
                通信講座第二種電気主任技術者（電験二種）<br />
                第三種電気主任技術者（電験三種）※<br />
                第一種電気工事士<br />
                第二種電気工事士<br />
                １級・２級電気工事施工管理技士<br />
              </p>
              <p>
                ※印は教育訓練給付制度厚生労働大臣指定講座です。
              </p>
            </div>
          </div>
        </section>
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
import Hero from '@/components/Hero.vue';
export default {
  metaInfo() {
    return {
      titleTemplate: '会社概要｜能セン-学び方を学ぶ-（能力開発研修センター）',
      meta: [
        {
          name: 'description',
          content:
            '電気、建築、設備関連を中心とした受験対策講習会を開催しています能セン（能力開発研修センター）のページです。企業情報、沿革、事業内容、開催された講習会・研修会をご紹介しています。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `会社概要｜能セン-学び方を学ぶ-（能力開発研修センター）`,
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
  },
};
</script>

<style lang="scss" scoped>
.company {
  padding-bottom: 100px;
}
.contents {
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
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
</style>
