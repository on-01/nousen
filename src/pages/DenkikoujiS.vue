<template>
  <Layout>
    <div class="denkikoujisekou">
      <header class="header">
        <Hero
          :backImgOver="
            require('../assets/img/license_page/denkikouji_s/denkikouji_s_hero.jpg')
          "
          :backImgUnder="
            require('../assets/img/license_page/denkikouji_s/denkikouji_s_hero_sp.jpg')
          "
          title="1・2級電気工事施工管理技士<br>合格のための受験指導"
          color="#00a73c"
          :icon="
            require('../assets/img/icon/qualification/denkikoujisekou.svg')
          "
        />
        <Point
          :points="[
            '＜一次＞1級、2級ともに、合格点獲得に必要な学習項目を解説。',
            '＜一次＞選択問題のある科目はより効率的な学習方法を伝授します。記憶が重要な試験なので、「どこを優先的に覚え、なにを関連付けて理解すべきか」を指導します。',
            '＜二次＞多くの方が苦労される「経験記述問題」をしっかり対策します。',
            '＜二次＞工事件名の記述方法から使うべき言葉、記述してはいけない用語、文章の簡潔なまとめ方など、記述のテクニックを徹底解説。',
            '＜二次＞個別のご質問にも対応します。',
            '＜二次＞講習後に提出いただく経験記述の課題は講師自ら個別に添削。高得点となるように直し、助言を入れてお返しします。',
          ]"
        />
        <News :contents="richtextToHTML($static.news.newsField)" />
        <div class="exam-link-wrapper">
          <g-link to="/licenses/#denkikoujisekou" class="exam-link">
            受験資格や試験日の確認はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
        </div>
      </header>
      <section class="tab-wrapper">
        <div
          :class="['tab', { active: isActive === 1 }]"
          v-on:click="tabToggle(1)"
        >
          オンライン<br class="underdisplay" />講座
          <IconBase class="icon"><IconArrowRight /></IconBase>
        </div>
        <div
          :class="['tab', { active: isActive === 2 }]"
          v-on:click="tabToggle(2)"
        >
          1級通学講座
          <IconBase class="icon"><IconArrowRight /></IconBase>
        </div>
        <div
          :class="['tab', { active: isActive === 3 }]"
          v-on:click="tabToggle(3)"
        >
          2級通学講座
          <IconBase class="icon"><IconArrowRight /></IconBase>
        </div>
      </section>
      <div class="body">
        <div v-show="isActive === 2">
          <h3 class="body-title">合格のための受験指導 1級通学講座</h3>
          <h3 class="body-title">各会場の開催日程</h3>
          <Venue
            v-for="(items, index) in $static.denkikoujiSekou1Venue.edges"
            :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Info
            :tuitionFee="richtextToHTML($static.denkikoujiSekou1.tuitionFee)"
            :capacity="$static.denkikoujiSekou1.capacity"
            :benefits="richtextToHTML($static.denkikoujiSekou1.benefits)"
            :cpds="richtextToHTML($static.denkikoujiSekou1.cpds)"
          />
          <!-- <Application
            formLink="/denkikouji-s-application"
            faxLink="/denkikouji_1_FAX_31year.pdf"
          /> -->
        </div>
        <div v-show="isActive === 3">
          <h3 class="body-title">合格のための受験指導 2級通学講座</h3>
          <h3 class="body-title">各会場の開催日程</h3>
          <Venue
            v-for="(items, index) in $static.denkikoujiSekou2Venue.edges"
            :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Info
            :tuitionFee="richtextToHTML($static.denkikoujiSekou2.tuitionFee)"
            :capacity="$static.denkikoujiSekou2.capacity"
            :benefits="richtextToHTML($static.denkikoujiSekou2.benefits)"
            :cpds="richtextToHTML($static.denkikoujiSekou2.cpds)"
          />
          <!-- <Application
            formLink="/denkikouji-s-application"
            faxLink="/denkikouji_2_FAX_31year.pdf"
          /> -->
        </div>
        <div v-show="isActive === 1">
          <h3 class="body-title">合格のための受験指導 オンライン講座</h3>
          <Info
            :courseOutline="
              richtextToHTML($static.denkikoujiSekouOnline.courseOutline)
            "
            :apply="richtextToHTML($static.denkikoujiSekouOnline.apply)"
            :mediaYoutube="$static.denkikoujiSekouOnline.mediaYoutube"
            :mediaImg="
              $static.denkikoujiSekouOnline.mediaImg
                ? $static.denkikoujiSekouOnline.mediaImg.file.url
                : ''
            "
            :mediaDescription="$static.denkikoujiSekouOnline.mediaDescription"
          />
          <!-- <Application
            formText="オンライン講座へのお申し込み"
            formLink="/denkikouji-s-application"
          /> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query DenkikoujiSekou {
    news:contentfulQualificationNews(id: "13zBcrR9EWiArAYNIbC9vd") {
      newsField
    }
    denkikoujiSekou1:contentfulQualification(id:"AIvJR4HIVEJ0s94ZT0kYU") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    denkikoujiSekou2:contentfulQualification(id:"21ReIGj2G8idFoOQPRUxPz") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    denkikoujiSekouOnline:contentfulQualificationOnline(id:"4dseTq8lHWp2eE2FneVpT2") {
      courseOutline
      apply
      mediaYoutube
      mediaImg {
        file { url }
      }
      mediaDescription
    }
    denkikoujiSekou1Venue:allContentfulDenkikoujiSekou1Venue(order: ASC) {
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
    denkikoujiSekou2Venue:allContentfulDenkikoujiSekou2Venue(order: ASC) {
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
      titleTemplate:
        '1・2級電気工事施工管理技士 受験対策講習会｜能セン-学び方を学ぶ-',
      meta: [
        {
          name: 'description',
          content:
            '通学講座・オンライン講座とご自身に合った学習スタイルを選べる受験対策講習会です。担当講師執筆のテキストを使用。経験記述問題の対策も学べます。願書サービス、再受講割引等もご用意。ポイントを押さえた講義をお届けします。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `1・2級電気工事施工管理技士 受験対策講習会｜能セン-学び方を学ぶ-`,
          // content: `1級・2級 電気工事施工管理技士 | ${
          //   this.$static.metadata.siteName
          // }`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/denkikouji-s`,
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
  data() {
    return {
      isActive: 1,
    };
  },
  methods: {
    richtextToHTML(content) {
      const richtextString = documentToHtmlString(content, options)
        .replace(/\n/g, `</br>`)
        .replace(/<a((?: .+?))?>(.*?)<\/a>/g, '<a $1 target="_blank">$2</a>');
      return richtextString;
    },
    tabToggle: function(num) {
      this.isActive = num;
    },
  },
};
</script>

<style lang="scss" scoped>
.denkikoujisekou {
  padding-bottom: 100px;
}
.header {
  background-color: #f2f2f2;
  border-bottom: 5px solid #00a73c;
}
.exam-link-wrapper {
  text-align: center;
  padding: 80px 0 200px 0;
  @media print, screen and (max-width: 1000px) {
    padding: 60px 0 150px 0;
  }
}
.exam-link {
  background-color: #00a73c;
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
  max-width: 900px;
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: -70px;
  font-weight: bold;
  @media print, screen and (max-width: 370px) {
    margin-top: -20vw;
  }
  .tab {
    cursor: pointer;
    font-size: 20px;
    color: #666666;
    max-width: 280px;
    width: 100%;
    background-color: #f2f2f2;
    border: 5px solid #00a73c;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 10px 0;
    margin: 0 10px;
    @media print, screen and (max-width: 1000px) {
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      padding: 5.9px 0;
      margin: 0 3px;
    }
    @media print, screen and (max-width: 370px) {
      font-size: 4.4vw;
      padding: 2.4% 0;
      height: 4.55em;
      box-sizing: border-box;
    }
    .icon {
      vertical-align: middle;
      @media print, screen and (max-width: 1000px) {
        display: block;
        margin: 0 auto;
        margin-top: 0.4em;
      }
    }
    &.active {
      border-bottom: none;
      background-color: #fff;
      color: #00a73c;
      .icon {
        transform: rotate(90deg);
      }
    }
  }
}
.tab:nth-child(1) {
  &::before {
    content: url('../assets/img/license_page/icon_pc_green.svg');
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
    @media print, screen and (max-width: 1000px) {
      margin-right: 0;
    }
  }
  .icon {
    @media print, screen and (max-width: 1000px) {
      display: inline;
      margin-top: 0;
    }
  }
}

.underdisplay {
  @media print, screen and(min-width: 1001px) {
    display: none;
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
      font-size: 18px;
    }
    &:after {
      content: '';
      width: 70px;
      border-bottom: 5px solid #00a73c;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>
