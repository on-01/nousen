<template>
<div class="kenchiku-template">
  <Layout>
    <div class="kenchiku">
      <header class="header">
        <Hero
          :backImgOver="
            require('../assets/img/license_page/kenchiku_s/kenchiku_s_hero.jpg')
          "
          :backImgUnder="
            require('../assets/img/license_page/bg_white.jpg')
          "
          title="1・2級 建築施工管理技士"
          subTitle="通学講座 | オンライン講座"
          color="#ed7d31"
          :icon="require('../assets/img/icon/qualification/kenchiku.svg')"
        />
        <Cheer
            text="能センは<br>
              建設男子・建設女子を<br>
              応援します！"
              :imagePath="require('../assets/img/license_page/kenchiku_s/kenchiku_point.jpg')"
        />
        <Explanation
            title="建築施工管理技士とは"
            text="1・2級建築施工管理技士とは、建設現場における施工管理の役割を担う専門職です。建設業法に基づく国家試験である「施工管理技術検定」に合格することで取得できる資格です。<br>
            1級建築施工管理技士は、大規模な建築工事や特定建設業における監理技術者として認められます。彼らは工事の計画立案や現場の監督、品質管理、安全対策など、高度な施工管理業務を担当します。1級は技術的に高い水準を要求される資格であり、建築現場での高い責任と専門性が求められます。<br>
            2級建築施工管理技士は、一般的な建設業における技術者や主任技術者として認められます。彼らも工事の監督や現場管理を担当し、工事の進捗状況や品質管理、安全対策などに関与します。2級は1級に比べて工事の規模や難易度がやや低い場合に活躍する資格ですが、施工管理の重要な役割を果たします。<br>
            1・2級の建築施工管理技士は、建築現場において施工管理の専門知識と技術を持つことで、工事の円滑な進行や品質の確保、安全の確保などに貢献します。これらの資格は建設業界でのキャリアや専門性を高めるために重要であり、施工管理に携わる方々にとって必要不可欠な存在となっています。"
            :imagePath="require('../assets/img/license_page/kenchiku_s/kenchiku_explain.jpg')"
        />

        <div class="exam-link-wrapper -column">
          <g-link to="/licenses/#kenchiku" class="exam-link">
            試験概要はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
          <g-link to="https://timerex.net/s/a4b3c5d67_73c6/9aab6876" class="online-link">
            オンライン相談はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
        </div>

        <Support 
          title="＼＼建設業を応援しよう【第一弾】／／"
        />

        <!-- <PvMovie
            :movie="$static.kenchikuOnline.mediaYoutube"
            :image="
              $static.kenchikuOnline.mediaImg
                ? $static.kenchikuOnline.mediaImg.file.url : ''
            "
            description="合格者を多数輩出した井岡先生による1級建築施工の無料動画をご覧ください。"
        /> -->

        <NewPvMovie
            :movie="$static.kenchikuOnline.mediaYoutube"
            :image="
              $static.kenchikuOnline.mediaImg ? $static.kenchikuOnline.mediaImg.file.url : ''
            "
            movieTitle="支持率No.1 建築施工の講習会動画をご視聴ください"
            description="合格者を多数輩出した井岡先生による１級建築施工の無料動画になります。"
        />

        <NewLecture
          title="井岡先生の講習がスゴイ！"
            text="関西地区で長年ゼネコン企業に勤務されて施工管理や設計監理業務に携わり、各種の建築関連資格を取得。
                その後独立して１級建築士事務所を設立し現在に至る。
                各種大学、専門学校、資格学校にて豊富な講師経験を持ち、建築士や建築施工管理技士の著書も多数執筆。
                特に建築施工管理技士のシリーズはロングセラーとして長年に渡って受験生からの多大な信頼を獲得しています。
                歯切れの良い語り口で要点をズバリと解説して下さる頼もしい先生です。"
            :imagePath="require('../assets/img/license_page/kenchiku_s/kenchiku_lecture.jpg')"
            teacher="井岡和雄 先生"
            profile="＜プロフィール＞<br>
                    関西大学工学部建築学科卒業<br>
                    ゼネコンに就職<br>
                    ５年間の現場管理を経て、設計部に転属<br>
                    １０年間の設計・監理業務後、独立<br>
                    近畿大学・追手門学院大学 非常勤講師<br>
                    現在 井岡一級建築士事務所 代表<br>
                    <br>
                    著書 : ４週間でマスター１級建築施工管理（弘文社）<br>
                    　　　４週間でマスター２級建築施工管理（弘文社）<br>
                    　　　４週間でマスター２級建設機械施工管理（弘文社）"
              :imageBook1="require('../assets/img/license_page/kenchiku_s/kenchiku_lecture_book_1.jpg')"
              :imageBook2="require('../assets/img/license_page/kenchiku_s/kenchiku_lecture_book_2.jpg')"
              :imageBook3="require('../assets/img/license_page/kenchiku_s/kenchiku_lecture_book_3.jpg')"
        />

      <div class="bg-lightBlue">

        <Study
            studySlug="other"
            name1="1級建築施工管理技士"
            time1="100～400"
            name2="2級建築施工管理技士"
            time2="50～100"
            pc_text="1級および2級建築施工管理技士の資格取得にかかる勉強時間は、個人の学習スタイルや経験によって異なります。一般的な目安としては以下のような時間枠が考えられますが、これはあくまで一般的な指標ですので、個々の状況に合わせて調整する必要があります。<br><br>
            1級建築施工管理技士<br>
            - 予備知識の学習: 約3ヶ月～半年程度　　- 本格的な試験対策: 約6ヶ月～1年以上<br>
            2級建築施工管理技士<br>
            - 予備知識の学習: 約1ヶ月～2ヶ月程度　　- 本格的な試験対策: 約3ヶ月～6ヶ月程度<br><br>
            勉強時間は、関連する法令や規制、建築技術、施工管理の手法などの学習に加えて、過去の試験問題の解答や模擬試験の受験なども含まれます。また、実務経験や現場での実践的な知識も重要ですので、それらを含めた学習時間を確保する必要があります。<br>
            一般的に、資格試験に向けた学習には継続的な努力と集中力が必要です。自分の学習ペースやスケジュールに合わせて計画を立て、充実した学習環境を整えることが重要です。"
            />

            <method
            text="① 試験範囲の把握と参考書の選定<br>
                  　建築施工管理技士の試験範囲を確認し、公式の試験要綱やガイドラインを参照して、出題範囲や試験形式を把握しましょう。<br>
                  　信頼性のある参考書を選び、試験に合わせた資料を活用しましょう。<br>
                  ② 勉強計画の作成と実行<br>
                  　週次や月次の勉強計画を作成し、各範囲を均等にカバーするようにスケジュールを立てましょう。計画通りに学習を進めることが重要です。<br>
                  ③ 理論と実務の学習<br>
                  　理論的な知識と実務経験の両方が必要です。参考書や資料を活用して理論を学び、実務経験を通じて実践的な知識を身につけます。<br>
                  ④ ノート作成と過去問の解答<br>
                  　重要なポイントやキーワードをノートにまとめ、理解を深めます。過去の試験問題を解くことで、実際の試験形式や問題の傾向を把握し対策を練ります。<br>
                  ⑤ グループ勉強や相互学習の活用<br>
                  　同じ目標を持つ仲間と一緒に学習することで、理解が深まります。グループ勉強や相互学習を通じて、知識の共有や質問の解決に役立てましょう。<br>
                  ⑥ 定期的な復習と模擬試験<br>
                  　学習した内容を定期的に復習し長期的な記憶と理解を固めます。試験本番に近い環境で模擬試験を受けることで、試験の雰囲気に慣れることも重要です。<br><br>
                  
                  また、独学だけでなく、講習会やオンライン講座に参加することも有益です。<br>
                  他の受験生との情報交換や質問をすることで学習の効率が上がるでしょう。"

            />

        <!-- <News :contents="richtextToHTML($static.news.newsField)" /> -->
        <!-- <figure class="point-image">
          <img src="../assets/img/license_page/kenchiku_s/kenchiku_point.jpg">
        </figure> -->

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

        <Campaign
            day="2"
            date="7/26(水)"
        />

        <Linelink
            text="能センLINE公式アカウント開設しました。<br>
              只今『お友達登録キャンペーン』で全講座に使える500円割引キャンペーンコードをプレゼント！<br>
              期間限定ですのでお早めにご使用ください。（他の割引と併用可）"
        />

        <div class="exam-link-wrapper">
          <div class="exam-link-flex">
            <g-link to="/kenchiku-s-application" class="application-form-link">
              お申込みはこちら（個人）
              <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
            </g-link>
            <g-link to="/kenchiku-s-application-business" class="application-form-link">
              お申込みはこちら（法人）
              <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
            </g-link>
          </div>
        </div>

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
          <NewApplication
            personalFormLink="/kenchiku-s-application"
            businessFormLink="/kenchiku-s-application-business"
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
          <NewApplication
            personalFormLink="/kenchiku-s-application"
            businessFormLink="/kenchiku-s-application-business"
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
          />
          <NewApplication
            personalFormText="オンライン講座へのお申込み（個人）"
            personalFormLink="/kenchiku-s-application"
            businessFormText="オンライン講座へのお申込み（法人）"
            businessFormLink="/kenchiku-s-application-business"
            faxLink="https://assets.ctfassets.net/smbvwwns0c77/4m5KWk5u9RGvf4AiAeeDFh/b1ab241d1fea2beb4748784ba06ad2c4/__________________FAX.pdf"
          />
        </div>

        <ContactInfo
            title="受講に関するご相談は<br>
            【お電話】【フォーム】【オンライン】<br>
            お気軽にお問い合わせください。"
          />
      </div>
    </div>
  </Layout>
</div>
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
import Linelink from "@/components/licensePage/Linelink.vue";
import NewPvMovie from '../components/licensePage/NewPvMovie.vue';
import Method from '../components/licensePage/Method.vue';
import Support from '../components/licensePage/Support.vue';
import NewLecture from '../components/licensePage/NewLecture.vue';
import Cheer from '../components/licensePage/Cheer.vue';
// import News from "@/components/licensePage/News.vue";
import Info from "@/components/licensePage/Info.vue";
import Venue from "@/components/licensePage/Venue.vue";
import Application from "@/components/licensePage/Application.vue";
import NewApplication from "@/components/licensePage/NewApplication.vue";
import IconBase from "@/components/IconBase.vue";
import IconDoubleArrowRight from "@/components/icons/IconDoubleArrowRight.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import { INLINES } from "@contentful/rich-text-types";
import { documentToHtmlString } from "../../node_modules/@contentful/rich-text-html-renderer";
import ContactInfo from '../components/licensePage/ContactInfo.vue';
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
    Linelink,
    NewPvMovie,
    Method,
    Support,
    NewLecture,
    Cheer,
    // News,
    Info,
    Venue,
    Application,
    NewApplication,
    IconBase,
    IconDoubleArrowRight,
    IconArrowRight,
    ContactInfo
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
.exam-link-flex {
  display: flex;
  margin: 0 auto;
  @media print, screen and (max-width: 768px) {
    flex-wrap: wrap;
    max-width: 480px;
    justify-content: center
  }
}
.kenchiku {
  padding-bottom: 0;
}
.header {
  background-color: #fff8cc;
  border-bottom: 5px solid #ed7d31;
}
.exam-link-wrapper {
  text-align: center;
  padding: 60px 0 180px 0;
  display: flex;
  flex-direction: column;
  @media print, screen and (max-width: 1000px) {
    padding: 40px 0 150px 0;
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
  margin: 0 20px;
  font-size: 17px;
  width: 338px;
  box-sizing: border-box;
  font-family: 'メイリオ', sans-serif;
  @media print, screen and (max-width: 370px) {
    padding: 7px 15px;
    width: 80%;
  }
}
.exam-link{
  background-color: #1D9BF0;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
}
.application-form-link {
  background-color: #ed6c00;
  margin-top: 25px;
}
.online-link {
  background-color: #00a73c;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
}
.tab-wrapper {
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: -70px;
  font-weight: bold;
  font-family: 'メイリオ', sans-serif;
  @media print, screen and (max-width: 370px) {
    margin-top: -20vw;
  }
  .tab {
    cursor: pointer;
    font-size: 20px;
    color: #666666;
    max-width: 280px;
    width: 100%;
    // background-color: #f2f2f2;
    background-color: #FFF7D5;
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
      // background-color: #ebf7ff;
      background-color: #FFF7D5;
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
  font-family: 'メイリオ', sans-serif;
  // background-color: #ebf7ff;
  background-color: #FFF7D5;
  padding-bottom: 100px;
  // @media print, screen and (max-width: 1000px) {
  //   width: 90%;
  // }
  .body-title {
    padding-top: 116px;
    text-align: center;
    font-size: 30px;
    margin-top: 0;
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
.bg-lightBlue {
  padding-top: 20px;
  background: #ebf7ff;
}
.exam-link-wrapper.-column {
  padding: 20px 0 40px;
}
@media print, screen and (max-width: 1000px) {
  .exam-link-wrapper.-column {
  padding: 20px 0 40px;
}
}

</style>
