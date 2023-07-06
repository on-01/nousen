<template>
  <Layout>
    <div class="kenchiku">
      <header class="header">
        <Hero
          :backImgOver="
            require('../assets/img/license_page/kenchiku_s/kenchiku_s_hero.jpg')
          "
          :backImgUnder="
            require('../assets/img/license_page/kenchiku_s/kenchiku_s_hero_sp.jpg')
          "
          title="1・2級 建築施工管理技士<br>合格のための受験指導"
          color="#ed7d31"
          :icon="require('../assets/img/icon/qualification/kenchiku.svg')"
        />
        <Explanation
            title="建築施工管理技士とは"
            text="1・2級建築施工管理技士とは、建設現場における施工管理の役割を担う専門職です。建設業法に基づく国家試験である「施工管理技術検定」に合格することで取得できる資格です。<br>
            1級建築施工管理技士は、大規模な建築工事や特定建設業における監理技術者として認められます。彼らは工事の計画立案や現場の監督、品質管理、安全対策など、高度な施工管理業務を担当します。1級は技術的に高い水準を要求される資格であり、建築現場での高い責任と専門性が求められます。<br>
            2級建築施工管理技士は、一般的な建設業における技術者や主任技術者として認められます。彼らも工事の監督や現場管理を担当し、工事の進捗状況や品質管理、安全対策などに関与します。2級は1級に比べて工事の規模や難易度がやや低い場合に活躍する資格ですが、施工管理の重要な役割を果たします。<br>
            1・2級の建築施工管理技士は、建築現場において施工管理の専門知識と技術を持つことで、工事の円滑な進行や品質の確保、安全の確保などに貢献します。これらの資格は建設業界でのキャリアや専門性を高めるために重要であり、施工管理に携わる方々にとって必要不可欠な存在となっています。"
            :imagePath="require('../assets/img/license_page/kenchiku_s/kenchiku_explain.jpg')"
        />

        <Study
            name1="1級建築施工管理技士"
            time1="100～400"
            name2="2級建築施工管理技士"
            time2="50～100"
            text="1級および2級建築施工管理技士の資格取得にかかる勉強時間は、個人の学習スタイルや経験によって異なります。一般的な目安としては以下のような時間枠が考えられますが、これはあくまで一般的な指標ですので、個々の状況に合わせて調整する必要があります。<br><br>
            1級建築施工管理技士<br>
            - 予備知識の学習: 約3ヶ月～半年程度<br>
            - 本格的な試験対策: 約6ヶ月～1年以上<br>
            2級建築施工管理技士<br>
            - 予備知識の学習: 約1ヶ月～2ヶ月程度<br>
            - 本格的な試験対策: 約3ヶ月～6ヶ月程度<br><br>
            勉強時間は、関連する法令や規制、建築技術、施工管理の手法などの学習に加えて、過去の試験問題の解答や模擬試験の受験なども含まれます。また、実務経験や現場での実践的な知識も重要ですので、それらを含めた学習時間を確保する必要があります。<br>
            一般的に、資格試験に向けた学習には継続的な努力と集中力が必要です。自分の学習ペースやスケジュールに合わせて計画を立て、充実した学習環境を整えることが重要です。"
            />

        <Point
          title="短期間で合格する５つのポイント"
          :points="[
            '『担当講師が建築のエキスパート！』<br>多くの合格者を輩出した井岡先生が担当。講師や執筆活動を通して建築の道に進む方が少しでも多く活躍することを応援しています。',
            '『合格特化型の講座』<br>一次・二次共に合格点獲得に必要な学習項目を解説。',
            '『効率的な学習方法』<br>＜一次＞選択問題のある科目はより効率的な学習方法を伝授。「どこを優先的に覚え、何を関連付けて理解すべきか」を指導。',
            '『経験記述問題をしっかり対策』<br>＜二次＞工事件名の記述方法から使うべき言葉、専門用語、文章の簡潔なまとめ方、得点アップ方法など、記述のテクニックを徹底解説。',
            '『添削で合格の近道へ』<br>＜二次＞提出していただく経験記述の課題は講師自ら個別に添削。高得点となるように直し、助言を入れてお返しします。'
          ]"
        />
        <!-- <News :contents="richtextToHTML($static.news.newsField)" /> -->
        <figure class="point-image">
          <img src="../assets/img/license_page/kenchiku_s/kenchiku_point.jpg">
        </figure>

        <Campaign
            date="7/24(月)"
        />

        <Line />

        <div class="exam-link-wrapper">
          <g-link to="https://timerex.net/s/a4b3c5d67_73c6/9aab6876" class="online-link">
            オンライン相談はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
          <g-link to="/licenses/#kenchiku" class="exam-link">
            受験資格や試験日の確認はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
          <g-link to="/kenchiku-s-application" class="application-form-link">
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
            v-for="(items, index) in $static.kenchiku1Venue.edges"
            :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Info
            :tuitionFee="richtextToHTML($static.kenchiku1.tuitionFee)"
            :capacity="$static.kenchiku1.capacity"
            :benefits="richtextToHTML($static.kenchiku1.benefits)"
            :cpds="richtextToHTML($static.kenchiku1.cpds)"
          />
          <Application
            formLink="/kenchiku-s-application"
            faxLink="https://assets.ctfassets.net/smbvwwns0c77/4m5KWk5u9RGvf4AiAeeDFh/b1ab241d1fea2beb4748784ba06ad2c4/__________________FAX.pdf"
          />
        </div>
        <div v-show="isActive === 3">
          <h3 class="body-title">2級通学講座</h3>
          <h3 class="body-title">各会場の開催日程</h3>
          <Venue
            v-for="(items, index) in $static.kenchiku2Venue.edges"
            :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Info
            :tuitionFee="richtextToHTML($static.kenchiku2.tuitionFee)"
            :capacity="$static.kenchiku2.capacity"
            :benefits="richtextToHTML($static.kenchiku2.benefits)"
            :cpds="richtextToHTML($static.kenchiku2.cpds)"
          />
          <Application
            formLink="/kenchiku-s-application"
            faxLink="https://assets.ctfassets.net/smbvwwns0c77/4m5KWk5u9RGvf4AiAeeDFh/b1ab241d1fea2beb4748784ba06ad2c4/__________________FAX.pdf"
          />
        </div>
        <div v-show="isActive === 1">
          <h3 class="body-title">オンライン講座</h3>
          <Info
            :courseOutline="
              richtextToHTML($static.kenchikuOnline.courseOutline)
            "
            :apply="richtextToHTML($static.kenchikuOnline.apply)"
            :mediaYoutube="$static.kenchikuOnline.mediaYoutube"
            :mediaImg="
              $static.kenchikuOnline.mediaImg
                ? $static.kenchikuOnline.mediaImg.file.url
                : ''
            "
            :mediaDescription="$static.kenchikuOnline.mediaDescription"
          />
          <Application
            formText="オンライン講座へのお申し込み"
            formLink="/kenchiku-s-application"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Kenchiku {
    news:contentfulQualificationNews(id: "5I5McpaCjyH6zfTH7eHtDO") {
      newsField
    }
    kenchiku1:contentfulQualification(id:"VdqtSPpXKUbnbx84EPwQu") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    kenchiku2:contentfulQualification(id:"1WWCpaZzkgzroCJAH8zGoB") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    kenchikuOnline:contentfulQualificationOnline(id:"1o0TWr082xOfUDSuKHflft") {
      courseOutline
      apply
      mediaYoutube
      mediaImg {
        file { url }
      }
      mediaDescription
    }
    kenchiku1Venue:allContentfulKenchikuSekou1Venue(order: ASC) {
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
    kenchiku2Venue:allContentfulKenchikuSekou2Venue(order: ASC) {
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
        "1・2級建築施工管理技士 受験対策講習会｜能セン-合格への近道-",
      meta: [
        {
          name: "description",
          content:
            "通学講座・オンライン講座とご自身に合った学習スタイルを選べる受験対策講習会です。担当講師執筆のオリジナルテキストを使用。経験記述問題の対策も学べます。願書サービス、再受講割引等もご用意。ポイントを押さえた講義をお届けします。"
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `1・2級建築施工管理技士 受験対策講習会｜能セン-合格への近道-`
          // content: `1・2級 建築施工管理技士 | ${
          //   this.$static.metadata.siteName
          // }`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/kenchiku-s`
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
.kenchiku {
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
