<template>
  <Layout>
    <div class="doboku">
      <header class="header">
        <Hero
          :backImgOver="
            require('../assets/img/license_page/doboku_s/doboku_s_hero.jpg')
          "
          :backImgUnder="
            require('../assets/img/license_page/doboku_s/doboku_s_hero_sp.jpg')
          "
          title="1・2級 土木施工管理技士<br>合格のための受験指導"
          color="#ed7d31"
          :icon="require('../assets/img/icon/qualification/doboku.svg')"
        />
        <Explanation
            title="土木施工管理技士とは"
            text="1・2級土木施工管理技士は、土木工事現場の施工管理業務を担当するための国家資格です。<br>
                  主任技術者や監理技術者として配置され、土木工事プロジェクトの施工計画の立案や管理、品質管理、安全管理、進捗管理など、施工現場全体の適切な運営を担保する役割を果たします。<br>
                  1級土木施工管理技士は、高度な専門知識と実務経験を要する資格です。彼らは大規模な土木工事プロジェクトを指導し、複雑な施工計画の策定や施工管理の高度な技術を駆使して、工事の品質や安全性を確保します。<br>
                  2級土木施工管理技士は、基礎的な知識と経験を要する資格です。彼らは中規模な土木工事プロジェクトを担当し、施工計画の作成や現場の安全管理、品質管理、進捗管理を行います。また、作業員の指揮命令や教育指導など、日常的な施工管理業務を効果的に遂行します。<br>
                  1・2級土木施工管理技士の資格は、施工現場において指導者として活躍し、工事の品質向上や安全確保、スケジュールの遵守などに貢献します。専門知識と経験に基づいた適切な判断とリーダーシップによって、土木工事プロジェクトの成功を支えます。"
            :imagePath="require('../assets/img/license_page/doboku_s/doboku_explain.jpg')"
        />

        <Study
            name1="1級土木施工管理技士"
            time1="100～400"
            name2="2級土木施工管理技士"
            time2="50～100"
            text="1・2級土木施工管理技士の資格を取得するための勉強時間は個人によって異なりますが、一般的には数十時間から数百時間の学習が必要とされています。<br>
            1級土木施工管理技士の試験範囲は広く、施工計画、品質管理、安全管理、法令知識など多岐にわたります。これらの内容を十分に習得するためには、長期間にわたって学習を行う必要があります。<br>
            勉強時間は、学習の進め方や個人の学習スピードによっても異なります。講習会や教材の利用、過去の試験問題の解答など、効果的な学習方法を活用することも重要です。<br>
            2級の試験範囲は、1級に比べてより基礎的な内容ですが、それでも施工計画の作成や現場の安全管理、品質管理、進捗管理など多くの要素が含まれています。これらの内容を十分に理解し、適切に対応するためには、一定の学習時間を確保する必要があります。<br>
            また、一定の勉強時間だけでなく、定期的な復習も重要です。継続的な学習と復習を行いながら、理解を深めることが試験に合格するために役立ちます。<br>
            個々の学習スタイルや状況によっても異なるため、自分の目標に向けて効果的な学習プランを立て、着実に学習を進めていくことが重要です。"
        />

        <Point
          title="短期間で合格する５つのポイント"
          :points="[
            '『担当講師が土木のエキスパート！』<br>多くの合格者を輩出した大嶋先生が担当。難解な内容もわかりやすいソフトな説明で理解させてくれるベテラン講師です。',
            '『合格特化型の講座』<br>一次・二次共に合格点獲得に必要な学習項目を解説。',
            '『効率的な学習方法』<br>＜一次＞選択問題のある科目はより効率的な学習方法を伝授。「どこを優先的に覚え、何を関連付けて理解すべきか」を指導。',
            '『経験記述問題をしっかり対策』<br>＜二次＞工事件名の記述方法から使うべき言葉、専門用語、文章の簡潔なまとめ方、得点アップ方法など、記述のテクニックを徹底解説。',
            '『添削で合格の近道へ』<br>＜二次＞提出していただく経験記述の課題は講師自ら個別に添削。高得点となるように直し、助言を入れてお返しします。'
          ]"
        />
        <!-- <News :contents="richtextToHTML($static.news.newsField)" /> -->
        <figure class="point-image">
          <img src="../assets/img/license_page/doboku_s/doboku_point.jpg">
        </figure>

        <Campaign
            date="7/15(土)"
        />

        <Line 
          text=" 能センLINE公式アカウント開設しました。<br>
              只今『お友達登録キャンペーン』で全講座に使える5000円割引キャンペーンコードをプレゼント！<br>
              期間限定ですのでお早めにご使用ください。（他の割引と併用可）"
        />

        <div class="exam-link-wrapper">
          <g-link to="https://timerex.net/s/a4b3c5d67_73c6/9aab6876" class="online-link">
            オンライン相談はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
          <g-link to="/licenses/#doboku" class="exam-link">
            受験資格や試験日の確認はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
          <g-link to="/doboku-s-application" class="application-form-link">
            お申込みはこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
        </div>
      </header>
      <section class="tab-wrapper">
        <div
          :class="['tab', { active: isActive === 1 }]"
          v-on:click="tabToggle(1)"
        >
          オンライン
          <br class="underdisplay" />
          講座
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
          <h3 class="body-title">1級通学講座</h3>
          <h3 class="body-title">各会場の開催日程</h3>
          <Venue
            v-for="(items, index) in $static.doboku1Venue.edges"
            :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Info
            :tuitionFee="richtextToHTML($static.doboku1.tuitionFee)"
            :capacity="$static.doboku1.capacity"
            :benefits="richtextToHTML($static.doboku1.benefits)"
            :cpds="richtextToHTML($static.doboku1.cpds)"
          />
          <Application
            formLink="/doboku-s-application"
            faxLink="https://assets.ctfassets.net/smbvwwns0c77/7LbRQTOY4f0eTu4qFlnIBC/3b7b0bf112e2c69cce90f28d787db6ee/__________________FAX.pdf"
          />
        </div>
        <div v-show="isActive === 3">
          <h3 class="body-title">2級通学講座</h3>
          <h3 class="body-title">各会場の開催日程</h3>
          <Venue
            v-for="(items, index) in $static.doboku2Venue.edges"
            :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Info
            :tuitionFee="richtextToHTML($static.doboku2.tuitionFee)"
            :capacity="$static.doboku2.capacity"
            :benefits="richtextToHTML($static.doboku2.benefits)"
            :cpds="richtextToHTML($static.doboku2.cpds)"
          />
          <Application
            formLink="/doboku-s-application"
            faxLink="https://assets.ctfassets.net/smbvwwns0c77/7LbRQTOY4f0eTu4qFlnIBC/3b7b0bf112e2c69cce90f28d787db6ee/__________________FAX.pdf"
          />
        </div>
        <div v-show="isActive === 1">
          <h3 class="body-title">オンライン講座</h3>
          <Info
            :courseOutline="richtextToHTML($static.dobokuOnline.courseOutline)"
            :apply="richtextToHTML($static.dobokuOnline.apply)"
            :mediaYoutube="$static.dobokuOnline.mediaYoutube"
            :mediaImg="
              $static.dobokuOnline.mediaImg
                ? $static.dobokuOnline.mediaImg.file.url
                : ''
            "
            :mediaDescription="$static.dobokuOnline.mediaDescription"
          />
          <Application
            formText="オンライン講座へのお申し込み"
            formLink="/doboku-s-application"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Doboku {
    news:contentfulQualificationNews(id: "4hfHZ42FBwJYfv8FReqiFV") {
      newsField
    }
    doboku1:contentfulQualification(id:"1pwvOhHtaf3ykHUUwVOgys") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    doboku2:contentfulQualification(id:"2frd3fKgxZXU32RDgH5XxS") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    dobokuOnline:contentfulQualificationOnline(id:"yOrlRRPoXrrsG40ksuU4u") {
      courseOutline
      apply
      mediaYoutube
      mediaImg {
        file { url }
      }
      mediaDescription
    }
    doboku1Venue:allContentfulDobokuSekou1Venue(order: ASC) {
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
    doboku2Venue:allContentfulDobokuSekou2Venue(order: ASC) {
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
import Hero from "@/components/Hero.vue";
import Point from "@/components/licensePage/Point.vue";
import Explanation from "@/components/licensePage/Explanation.vue";
import Campaign from "@/components/licensePage/Campaign.vue";
import Study from "@/components/licensePage/Study.vue";
import Line from "@/components/licensePage/Line.vue";
// import News from "@/components/licensePage/News.vue";
import Info from "@/components/licensePage/Info.vue";
import Venue from "@/components/licensePage/Venue.vue";
import Application from "@/components/licensePage/Application.vue";
import IconBase from "@/components/IconBase.vue";
import IconDoubleArrowRight from "@/components/icons/IconDoubleArrowRight.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import { INLINES } from "@contentful/rich-text-types";
import { documentToHtmlString } from "../../node_modules/@contentful/rich-text-html-renderer";
const options = {
  //contentfulのエディタで設定したassetへのリンクを変換
  renderNode: {
    [INLINES.ASSET_HYPERLINK]: node =>
      `<a href="${node.data.target.fields.file.url}">${
        node.content[0].value
      }</a>`
  }
};
export default {
  name: "koujishi2",
  metaInfo() {
    return {
      titleTemplate:
        "1・2級土木施工管理技士 受験対策講習会｜能セン-合格への近道-",
      meta: [
        {
          name: "description",
          content:
            "通学講座・オンライン講座とご自身に合った学習スタイルを選べる受験対策講習会です。経験記述問題の対策も学べます。願書サービス、再受講割引等もご用意。CPDS認定講座。ポイントを押さえた講義をお届けします。"
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `1・2級土木施工管理技士 受験対策講習会｜能セン-合格への近道-`
          // content: `1・2級 土木施工管理技士 | ${
          //   this.$static.metadata.siteName
          // }`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/doboku-s`
        }
      ]
    };
  },
  components: {
    Hero,
    Point,
    Explanation,
    Campaign,
    Study,
    Line,
    // News,
    Info,
    Venue,
    Application,
    IconBase,
    IconDoubleArrowRight,
    IconArrowRight
  },
  data() {
    return {
      isActive: 1
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
    }
  }
};
</script>

<style lang="scss" scoped>
.doboku {
  padding-bottom: 100px;
}
.header {
  background-color: #f2f2f2;
  border-bottom: 5px solid #ed7d31;
}
.exam-link-wrapper {
  text-align: center;
  padding: 80px 0 200px 0;
  display: flex;
  flex-direction: column;
  @media print, screen and (max-width: 1000px) {
    padding: 60px 0 150px 0;
  }
}
.exam-link,
.application-form-link,
.online-link {
  color: #fff;
  border-radius: 10px;
  padding: 7px 30px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  font-size: 17px;
  width: 338px;
  box-sizing: border-box;
  @media print, screen and (max-width: 370px) {
    padding: 7px 15px;
    width: 80%;
  }
}
.exam-link{
  background-color: #1D9BF0;
  margin-top: 25px;
}
.application-form-link {
  background-color: #ed6c00;
  margin-top: 25px;
}
.online-link {
  background-color: #00a73c;
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
    border: 5px solid #ed7d31;
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
      color: #ed7d31;
      .icon {
        transform: rotate(90deg);
      }
    }
  }
}
.tab:nth-child(1) {
  &::before {
    content: url("../assets/img/license_page/icon_pc_green.svg");
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
      content: "";
      width: 70px;
      border-bottom: 5px solid #ed7d31;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
.point-image {
  width: 590px;
  height: 380px;
  margin: 40px auto 0;

  @media print, screen and (max-width: 767px) {
    width: 80%;
    height: auto;
  }
}

.point {
  margin-top: 30px;
}
</style>
