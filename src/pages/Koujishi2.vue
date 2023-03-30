<template>
  <Layout>
    <div class="koujishi2">
      <header class="header">
        <Hero
          :backImgOver="
            require('../assets/img/license_page/koujishi2/koujishi2_hero.jpg')
          "
          :backImgUnder="
            require('../assets/img/license_page/koujishi2/koujishi2_hero_sp.jpg')
          "
          title="第二種電気工事士<br>合格のための受験指導"
          color="#b60081"
          :icon="require('../assets/img/icon/qualification/denkikouji.svg')"
        />
        <Point
          :points="[
            '＜筆記＞近年の出題傾向から分析した、頻繁に出題される項目をわかりやすく解説。',
            '＜筆記＞「得意な分野を生かして合格点を獲得する」学習方法を指導します。',
            '＜技能＞試験同様の電材をご用意。',
            '＜技能＞基礎作業、複線図の書き方から公表問題の作成、品評まで複数の講師で対策します。電気の作業が不慣れな方は、優先的に講師がサポート。初心者の方も安心です。',
          ]"
        />
        <News :contents="richtextToHTML($static.news.newsField)" />
        <div class="exam-link-wrapper">
          <g-link to="/licenses/#koujishi2" class="exam-link">
            受験資格や試験日の確認はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
        </div>
      </header>
      <div class="body">
        <div>
          <h3 class="body-title">合格のための受験指導 通学講座</h3>
          <h3 class="body-title">各会場の開催日程</h3>
          <Venue
            v-for="(items, index) in $static.allContentfulKoujishi2Venue.edges"
            :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Info
            :tuitionFee="
              richtextToHTML($static.contentfulQualification.tuitionFee)
            "
            :capacity="$static.contentfulQualification.capacity"
            :benefits="richtextToHTML($static.contentfulQualification.benefits)"
            :cpds="richtextToHTML($static.contentfulQualification.cpds)"
          />
          <Application
            formLink="/koujishi-application"
            faxLink="/2_denki_FAX_2022year.pdf"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Koujishi2 {
    news:contentfulQualificationNews(id: "2HosbK7Ssj3mcSVrFiziQL") {
      newsField
    }
    contentfulQualification(id:"PgVXdfFKQA4IbD0F09PXr") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    allContentfulKoujishi2Venue(order: ASC) {
      edges {
        node {
          city
          period
          hall
          details
          address
          map {
            lat
            lon
          }
        }
      }
    }
    metadata {
      siteName
      siteUrl
    }
  }
</static-query>

<script>
import Hero from '@/components/Hero.vue';
import Point from '@/components/licensePage/Point.vue';
import News from '@/components/licensePage/News.vue';
import Info from '@/components/licensePage/Info.vue';
import Venue from '@/components/licensePage/Venue.vue';
import Application from '@/components/licensePage/Application.vue';
import IconBase from '@/components/IconBase.vue';
import IconDoubleArrowRight from '@/components/icons/IconDoubleArrowRight.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import { INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from '../../node_modules/@contentful/rich-text-html-renderer';
const options = {
  //contentfulのエディタで設定したassetへのリンクを変換
  renderNode: {
    [INLINES.ASSET_HYPERLINK]: (node) =>
      `<a href="${node.data.target.fields.file.url}">${
        node.content[0].value
      }</a>`,
  },
};
export default {
  name: 'koujishi2',
  metaInfo() {
    return {
      titleTemplate: '第二種電気工事士 受験対策講習会｜能セン-学び方を学ぶ-',
      meta: [
        {
          name: 'description',
          content:
            '短期集中型でリーズナブル！効率よく学べる通学講習会です。近年の出題傾向を分析し、ポイントを押さえた講義をお届けします。技能講習では公表問題を各自作成し講師が個別に採点指導。再受講割引もご用意しています。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `第二種電気工事士 受験対策講習会｜能セン-学び方を学ぶ-`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/koujishi2`,
        },
      ],
    };
  },
  components: {
    Hero,
    Point,
    News,
    Info,
    Venue,
    Application,
    IconBase,
    IconDoubleArrowRight,
    IconArrowRight,
  },
  methods: {
    richtextToHTML(content) {
      const richtextString = documentToHtmlString(content, options)
        .replace(/\n/g, `</br>`)
        .replace(/<a((?: .+?))?>(.*?)<\/a>/g, '<a $1 target="_blank">$2</a>');
      return richtextString;
    },
  },
};
</script>

<style lang="scss" scoped>
.koujishi2 {
  padding-bottom: 100px;
}
.header {
  background-color: #f2f2f2;
  border-bottom: 5px solid #b60081;
}
.exam-link-wrapper {
  text-align: center;
  padding: 80px 0 200px 0;
  @media print, screen and (max-width: 1000px) {
    padding: 60px 0 150px 0;
  }
}
.exam-link {
  background-color: #b60081;
  color: #fff;
  border-radius: 10px;
  padding: 14px 30px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  font-size: 17px;
}
.tab-wrapper {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: -70px;
  .tab {
    cursor: pointer;
    font-size: 20px;
    color: #666666;
    max-width: 280px;
    width: 100%;
    background-color: #f2f2f2;
    border: 5px solid #b60081;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 10px 0 10px 0;
    margin: 0 10px;
    &.active {
      border-bottom: none;
      background-color: #fff;
      color: #b60081;
      .icon {
        transform: rotate(90deg);
      }
    }
  }
}
.body {
  width: 100%;
  margin: 0 auto;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
  }
  .body-title {
    margin-top: 100px;
    text-align: center;
    font-size: 30px;
    @media print, screen and (max-width: 1000px) {
      font-size: 20px;
    }
    &:after {
      content: '';
      width: 70px;
      border-bottom: 5px solid #b60081;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>
