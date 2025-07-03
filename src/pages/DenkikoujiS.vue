<template>
  <div class="denkikouji-template">
    <Layout>
      <div class="denkikoujisekou">
        <header class="header">
          <HeroDenkikouji
            :backImgOver="
              require('../assets/img/license_page/denkikouji_s/denkikouji_s_hero.jpg')
            "
            :backImgUnder="require('../assets/img/license_page/bg_white.jpg')"
            headTitle="令和8年度前期 / 令和8年度後期"
            title="1・2級電気工事施工管理技士"
            :icon="
              require('../assets/img/icon/qualification/denkikoujisekou.svg')
            "
          />
          <CheerDenkikouji
            text="能センは、<br>
              建設業で働く皆さまを<br>
              応援します！"
            :imagePath="
              require('../assets/img/license_page/denkikouji_s/denkikouji_s_cheer.png')
            "
            altText="電気工事施工管理技士 講習会 通信講座 web講座"
          />
          <!-- <Hero
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
        /> -->
          <!-- <Point
            :points="[
              '＜一次＞1級、2級ともに、合格点獲得に必要な学習項目を解説。',
              '＜一次＞選択問題のある科目はより効率的な学習方法を伝授します。記憶が重要な試験なので、「どこを優先的に覚え、なにを関連付けて理解すべきか」を指導します。',
              '＜二次＞多くの方が苦労される「経験記述問題」をしっかり対策します。',
              '＜二次＞工事件名の記述方法から使うべき言葉、記述してはいけない用語、文章の簡潔なまとめ方など、記述のテクニックを徹底解説。',
              '＜二次＞個別のご質問にも対応します。',
              '＜二次＞講習後に提出いただく経験記述の課題は講師自ら個別に添削。高得点となるように直し、助言を入れてお返しします。',
            ]"
          /> -->
          <!-- <News :contents="richtextToHTML($static.news.newsField)" /> -->
          <section class="tab-wrapper -top">
            <div
              :class="['tab', { active: isActiveTop === 1 }]"
              v-on:click="tabToggleTop(1)"
            >
              試験内容
              <IconBase class="icon"><IconArrowRight /></IconBase>
            </div>
            <div
              :class="['tab', { active: isActiveTop === 2 }]"
              v-on:click="tabToggleTop(2)"
            >
              講座情報
              <IconBase class="icon"><IconArrowRight /></IconBase>
            </div>
          </section>

          <!-- 試験情報 -->
          <div v-show="isActiveTop === 1">
            <!-- <Explanation
            title="建築施工管理技士とは"
            text="1・2級建築施工管理技士は、建築工事の施工計画の作成や現場での工程管理、品質管理、安全管理などを担う国家資格です。<br><br>
            1級建築施工管理技士は、大規模な建築工事や特定建設業における監理技術者として認められ、技術的に高い水準を要求される資格であり、建築現場での高い責任と専門性が求められます。<br><br>
            2級建築施工管理技士は、一般的な建設業における技術者や主任技術者として、中小規模の工事現場の監督や現場管理を担当し、工事の進捗状況や品質管理、安全対策などに関与します。<br><br>
            <span style='font-weight: 700;'>能センでは、受講生が業務の多忙さによる時間的制約の中、<br>
              最小限の努力で最大の結果（合格）を得るための講座をご提供いたします。</span>"
            :imagePath="
              require('../assets/img/license_page/kenchiku_s/kenchiku_explain.jpg')
            "
            altText="建築施工管理技士 講習会 通信講座 web講座"
          /> -->
            <div class="bg-lightBlue -pd100">
              <!-- <ScheduleKenchiku title="令和7年度 建築施工管理技士 試験日程" /> -->
              <!-- <TestOverviewKenchiku /> -->

              <!-- <div class="exam-link-wrapper -column">
                <g-link to="/licenses/#kenchiku" class="exam-link">
                  試験概要はこちら
                  <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
                </g-link>
                <g-link
                  to="https://timerex.net/s/a4b3c5d67_73c6/9aab6876"
                  class="online-link"
                >
                  オンライン相談はこちら
                  <IconBase class="icon" width="25" height="25">
                    <IconFingerRight />
                  </IconBase>
                </g-link>
                <g-link
                  to="https://business.form-mailer.jp/fms/fda5e149291799"
                  class="online-link"
                >
                  お問い合わせ / 資料請求
                  <IconBase class="icon" width="25" height="25">
                    <IconFingerRight />
                  </IconBase>
                </g-link>
              </div> -->

              <!-- <StudyKenchiku /> -->

              <!-- <Study
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
              /> -->

              <!-- <method
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
            /> -->

              <ContactInfo title="受講に関するご相談は" />

              <Linelink
                text="能センLINE公式アカウント開設しました。<br>
              只今『お友達登録キャンペーン』で500円割引キャンペーンコードをプレゼント！<br>
              期間限定ですのでお早めにご使用ください。（他の割引と併用可）"
              />
            </div>
          </div>

          <!-- 講座情報 -->
          <div v-show="isActiveTop === 2">
            <QualityDenkikouji
              text_1="多くの合格者を輩出したベテラン講師陣が担当します。試験に出る範囲のポイントを絞った講義が特徴です。<br>
                    難解な内容もわかりやすいソフトな説明で理解することができます。"
              :imagePath_1="
                require('../assets/img/license_page/doboku_s/doboku_quality_1.jpg')
              "
              text_2="【一次】選択問題のある科目はより効率的な学習方法を伝授。「どこを優先的に覚え、何を関連付けて理解すべきか」を指導。<br>
                      【二次】工事件名の記述方法から、使うべき専門用語、文章の簡潔なまとめ方、得点アップ方法など、記述のテクニックを徹底解説。"
              :imagePath_2="
                require('../assets/img/license_page/doboku_s/doboku_quality_2.jpg')
              "
              text_3="受講生のライフスタイルに合わせて【通学】または【オンライン】講座を選択可能。どちらも教材や講座内容は同じです。<br>提出いただく経験記述の課題は、講師が個別に添削し、高得点が狙えるよう修正とアドバイスを加えて<strong>最短1日</strong>でお返しいたします。"
              :imagePath_3="
                require('../assets/img/license_page/doboku_s/doboku_quality_4.jpg')
              "
            />

            <div class="bottom">
              <ContactInfo
                title="受講に関するご相談は<br>
            【お電話】【フォーム】【オンライン】<br>
            お気軽にお問い合わせください。"
              />
            </div>
          </div>
        </header>
      </div>
    </Layout>
  </div>
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
  import Hero from "@/components/Hero.vue";
  import Point from "@/components/licensePage/Point.vue";
  // import News from "@/components/licensePage/News.vue";
  import Info from "@/components/licensePage/Info.vue";
  import Venue from "@/components/licensePage/Venue.vue";
  import Application from "@/components/licensePage/Application.vue";
  import IconBase from "@/components/IconBase.vue";
  import IconDoubleArrowRight from "@/components/icons/IconDoubleArrowRight.vue";
  import IconArrowRight from "@/components/icons/IconArrowRight.vue";
  import { INLINES } from "@contentful/rich-text-types";
  import { documentToHtmlString } from "../../node_modules/@contentful/rich-text-html-renderer";
  import ContactInfo from "../components/licensePage/ContactInfo.vue";
  import HeroDenkikouji from "../components/HeroDenkikouji.vue";
  import CheerDenkikouji from "../components/licensePage/CheerDenkikouji.vue";
  import QualityDenkikouji from "../components/licensePage/QualityDenkikouji.vue";
  import Linelink from "../components/licensePage/Linelink.vue";

  const options = {
    //contentfulのエディタで設定したassetへのリンクを変換
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: (node) =>
        `<a href="${node.data.target.fields.file.url}">${node.content[0].value}</a>`,
    },
  };
  export default {
    name: "koujishi2",
    metaInfo() {
      return {
        titleTemplate: "1・2級電気工事施工管理技士 受験対策講習会｜能セン",
        meta: [
          {
            name: "description",
            content:
              "通学講座・オンライン講座とご自身に合った学習スタイルを選べる受験対策講習会です。担当講師執筆のテキストを使用。経験記述問題の対策も学べます。願書サービス、再受講割引等もご用意。ポイントを押さえた講義をお届けします。",
          },
          {
            key: `og:title`,
            property: `og:title`,
            content: `1・2級電気工事施工管理技士 受験対策講習会｜能セン`,
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
      // News,
      Info,
      Venue,
      Application,
      IconBase,
      IconDoubleArrowRight,
      IconArrowRight,
      ContactInfo,
      HeroDenkikouji,
      CheerDenkikouji,
      QualityDenkikouji,
      Linelink,
    },
    data() {
      return {
        isActive: 1,
        isActiveTop: 2,
      };
    },
    methods: {
      richtextToHTML(content) {
        const richtextString = documentToHtmlString(content, options)
          .replace(/\n/g, `</br>`)
          .replace(/<a((?: .+?))?>(.*?)<\/a>/g, '<a $1 target="_blank">$2</a>');
        return richtextString;
      },
      tabToggle: function (num) {
        this.isActive = num;
      },
      tabToggleTop: function (num) {
        this.isActiveTop = num;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .denkikoujisekou {
    padding-bottom: 0;
  }
  .header {
    background-color: #fff;
    // border-bottom: 5px solid #00a73c;
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
    position: relative;
    margin: 0 auto;
    // max-width: 900px;
    max-width: 1000px;
    width: 100%;
    display: flex;
    text-align: center;
    margin-top: -70px;
    font-weight: bold;
    justify-content: center;
    font-family: "メイリオ", sans-serif;
    @media print, screen and (max-width: 370px) {
      margin-top: -20vw;
    }
    .tab {
      cursor: pointer;
      font-size: 20px;
      color: #666666;
      // max-width: 280px;
      max-width: 305px;
      width: 100%;
      // background-color: #f2f2f2;
      // background-color: #fff7d5;
      background-color: #ebf7ff;
      border: 5px solid #1262b2;
      // border: 5px solid #ed7d31;
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
        // background-color: #fff7d5;
        background-color: #ebf7ff;
        color: #000000;
        // color: #ed7d31;
        .icon {
          transform: rotate(90deg);
        }
      }
    }
  }
  .tab:nth-child(1) {
    &::before {
      content: url("../assets/img/license_page/icon_pc.svg");
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

  .tab-wrapper.-top {
    @media print, screen and (max-width: 1000px) {
      margin-top: -45.7px;
    }

    .tab {
      max-width: 100%;
      background-color: #fff8cc;
    }

    .tab.active {
      border-bottom: 6px solid #fff8cc;
    }

    .tab::before {
      content: "";
      display: none;
    }

    .icon {
      @media print, screen and (max-width: 1000px) {
        display: inline;
        margin-top: 0;
        margin-left: 8px;
      }
    }
  }

  .tab-wrapper.-top .tab.active {
    color: #000;
  }
  .underdisplay {
    @media print, screen and(min-width: 1001px) {
      display: none;
    }
  }

  .body {
    width: 100%;
    margin: 0 auto;
    font-family: "メイリオ", sans-serif;
    background-color: #ebf7ff;
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
        // border-bottom: 5px solid #00a73c;
        border-bottom: 5px solid #1d9bf0;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
      }
    }
  }

  .bottom {
    padding-bottom: 85px;
  }

  .bg-lightBlue {
    background-color: #fff8cc;
    padding: 80px 0;
  }
</style>
