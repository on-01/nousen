<template>
  <Layout>
    <div class="kyuusui">
      <header class="header">
        <Hero
          :backImgOver="
            require('../assets/img/license_page/kyuusui/kyuusui_hero.jpg')
          "
          :backImgUnder="
            require('../assets/img/license_page/kyuusui/kyuusui_hero_sp.jpg')
          "
          title="給水装置工事主任技術者<br>合格のための受験指導"
          color="#00afcc"
          :icon="require('../assets/img/icon/qualification/kyuusui.svg')"
        />
        <Point
          :points="[
            '過去問題の分析に基づいた学習の優先順位を徹底解説。',
            '足切りされない学習の仕方を指導。ただの暗記ではなく、内容を理解した上で覚えていただける講義を心がけています。',
          ]"
        />
        <News :contents="richtextToHTML($static.news.newsField)" />
        <div class="exam-link-wrapper">
          <g-link to="/licenses/#kyuusui" class="exam-link">
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
            v-for="(items, index) in $static.allContentfulKyuusuiVenue.edges"
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
          <!-- <Application
            formLink="/kyuusui-application"
            faxLink="/kyuusui_FAX_31year.pdf"
          /> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Kyuusui {
    news:contentfulQualificationNews(id: "2Y6FDzW3Tn7rFkxN941stl") {
      newsField
    }
    contentfulQualification(id:"5rxFD2VOiMRvqB8cnIpIYK") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    allContentfulKyuusuiVenue(order: ASC) {
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
  name: 'kyuusui',
  metaInfo() {
    return {
      titleTemplate:
        '給水装置工事主任技術者 受験対策講習会｜能セン-学び方を学ぶ-',
      meta: [
        {
          name: 'description',
          content:
            '通学スタイルの受験対策講習会です。担当講師執筆のテキストを使用。再受講割引等もご用意。過去問題を分析し、ポイントを押さえた講義をお届けします。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `給水装置工事主任技術者 受験対策講習会｜能セン-学び方を学ぶ-`,
          // content: `給水装置工事主任技術者 | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/kyuusui`,
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
.kyuusui {
  padding-bottom: 100px;
}
.header {
  background-color: #f2f2f2;
  border-bottom: 5px solid #00afcc;
}
.exam-link-wrapper {
  text-align: center;
  padding: 80px 0 200px 0;
  @media print, screen and (max-width: 1000px) {
    padding: 60px 0 150px 0;
  }
}
.exam-link {
  background-color: #00afcc;
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
    border: 5px solid #00afcc;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 10px 0 10px 0;
    margin: 0 10px;
    &.active {
      border-bottom: none;
      background-color: #fff;
      color: #00afcc;
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
    font-size: 30px;
    @media print, screen and (max-width: 1000px) {
      font-size: 20px;
    }
    &:after {
      content: '';
      width: 70px;
      border-bottom: 5px solid #00afcc;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>
