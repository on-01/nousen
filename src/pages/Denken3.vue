<template>
  <Layout>
    <div class="denken3">
      <header class="header">
        <Hero
          :backImgOver="
            require('../assets/img/license_page/denken3/denken3_hero.jpg')
          "
          :backImgUnder="
            require('../assets/img/license_page/bg_white.jpg')
          "
          title="第三種電気主任技術者<br/>（電験三種）"
          subTitle="通学講座 | オンライン講座 | 通信講座"
          color="#1D9BF0"
          :icon="require('../assets/img/icon/qualification/denken.svg')"
        />
        <Cheer
            text="能センは<br>
              電験男子・電験女子を<br>
              応援します！"
              :imagePath="require('../assets/img/license_page/denken3/denken3_point.jpg')"
        />
        <Explanation
            title="第三種電気主任技術者とは"
            text="第三種電気主任技術者(以下電験三種)は、電気設備の安全性と適合性を評価し管理する役割を担う専門家です。電気設備の運用や保守に関する専門知識を持ち、法律や規制に基づいて設備の安全性を確保します。<br>
            主な業務は、電気設備の点検、定期的な保守、トラブルシューティング、修理、安全基準の遵守などです。また、電験三種は、電気工事や設備の設計に関するコンサルティングも行うことがあります。<br>
            彼らは、電気設備が適切に設計され、安全に運用されるためのアドバイスや監督を提供します。<br>
            電験三種は、法的な規制や安全基準に準拠することが求められます。建物や工場の所有者や管理者と協力し、適切な文書作成や報告書の提出、必要な手続きの遵守などを行います。<br>
            総括すると、電験三種は、電気設備の安全性と適合性を確保するために、点検、保守、監督、コンサルティングなどの業務を担当する専門家です。"
            :imagePath="require('../assets/img/license_page/denken3/denken3_explain.jpg')"
        />
        <SpExplanation
            title="第三種電気主任技術者とは"
            text="第三種電気主任技術者(以下電験三種)とは、国家資格で事業用電気設備の保安監督を行い、該当の施設には必ず配置されます。<br>
              資格には第一種・第二種・第三種の3つの区分があり、電圧によって対応範囲が異なり、電圧5万ボルト未満の電気工作物は「電験三種」
              で対応できます。"
            :imagePath="require('../assets/img/license_page/denken3/denken3_explain.jpg')"
        />

        <div class="exam-link-wrapper -column">
          <g-link to="/licenses/#denken" class="exam-link">
            試験概要はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
          <g-link to="https://timerex.net/s/a4b3c5d67_73c6/9aab6876" class="online-link">
            オンライン相談はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
        </div>

        <quality
            title_1="＼科目合格率95%／<br>合格に特化した教材を使用！"
            text_1="講師が執筆したオリジナルテキストを使用。ポイントを絞り、合格点の60点を超える力を的確に身に付けます（目標は80点以上）。
            効果的な学習をサポートする副教材も特徴。
            自宅学習に使える解説付き問題集や4科目分の添削課題付き。"
            :imagePath_1="require('../assets/img/license_page/denken3/denken3_quality_1.jpg')"
            title_2="＼基礎から始める電験三種／<br> 初心者オススメ基礎講座！"
            text_2="初めて受験する方には、オススメの基礎講座をご用意！
            専用の教材を使って基礎数学から電気の法則などわかりやすく解説します！
            しばらく理系の学習から離れていた方は、ぜひご活用ください。"
            :imagePath_2="require('../assets/img/license_page/denken3/denken3_quality_2.jpg')"
            title_3=" ＼選べる受講スタイル／<br>通学・オンライン・通信講座"
            text_3="受講生のライフスタイルに合った講座を選ぶことができます！
            通学にオンライン講座を追加（70%割引）など、バリエーションは豊富です！どの講座も合格に特化した教材を使用いたします。"
            :imagePath_3="require('../assets/img/license_page/denken3/denken3_quality_3.jpg')"
        />

        <NewPvMovie
            :movie="$static.online.mediaYoutube"
            :image="
              $static.online.mediaImg ? $static.online.mediaImg.file.url : ''
            "
            movieTitle="科目合格率No.1  電験三種の講習会動画をご視聴ください"
            description="合格者を多数輩出した大嶋先生による基礎講座の無料動画になります。"
        />

        <Lecture
            title="宇宙一わかりやすい大嶋先生の講習！"
            text="長年電気と土木の建設工事、設備保守に従事し、経験を踏まえて１級土木施工管理技士、
                  電気主任技術者（３～１種）等多くの関連資格を取得。
                  その後電気・電子部門の技術士も取得した電気、土木のエキスパートです。
                  東京電力で技能訓練センター所長として約４年間勤務後独立し、
                  電気・土木関連の資格書籍の執筆や当センターをはじめとした受験対策講習で多数の講義を担当しています。
                  難解な内容もわかりやすいソフトな説明で理解させてくれるベテラン講師です。"
            :imagePath="require('../assets/img/license_page/denken3/denken3_lecture.jpeg')"
        />

      <div class="bg-lightBlue">

        <Study
            studySlug="denken"
            name1="電験三種の合格に必要な勉強時間"
            time1="1,000"
            text="勉強時間は個人の前提知識や学習スピードによって異なりますが、全科目合格するには通常は約1000時間の学習が必要とされています。<br>
            例えば、毎日3時間ずつ勉強すれば、約9ヶ月から1年かかるでしょう。<br>
            ただし、1000時間は目安であり、自身の進捗状況や理解度に合わせて、柔軟にスケジュールを調整することが重要です。<br>
            また、定期的な復習や自己評価も忘れずに行い、学習効果を高めることを意識しましょう。<br>
            特に理系の科目が多いため、理系出身かどうかや理系科目の得意不得意も影響を与えます。"
          />

          <Method
            text="電験三種の勉強は、理論、電力または機械、法規の順番で進めると効果的です。<br>
            まずは礎となる理論を理解し、その後に電力や機械といった実践的な科目を習得します。<br>
            電力と機械はどちらから先に学んでも問題ありません。 法規はそれまで勉強してきた科目の集大成として考えましょう。<br>
            電気工学や電力系統に関する基本的な知識を得るために、教科書や参考書、オンライン学習、講習会を利用することをおすすめします。<br><br>

            ① 試験範囲の確認: 受験要項や過去の試験問題を調べ、出題範囲や試験形式を把握。<br>
            ② 教科書や参考書の学習: 電気工学や電力系統に関する基礎知識を身につけるため、教科書や参考書を順番に学習。<br>
            ③ 過去の試験問題の解答: 過去の試験問題を解くことで、実際の試験形式や問題の傾向を把握し、対策を練ることができます。<br>
            ④ 模擬試験の受験: 本番の試験に近い環境で、模擬試験を受けることで実践力を養います。<br><br>

            また、独学の方は講習会やオンライン講座に参加することも有益です。<br>
            他の受験生と情報交換や質問をすることで学習の効率が上がるでしょう。<br>
            最終的には、自身の学習スタイルやペースに合わせて計画を立て、着実に進めることが重要です。<br>
            また、継続的な努力と忍耐力を持ちながら、定期的に自己評価を行い、必要な修正を加えることも大切です。<br>"

            boldText="能センでは基礎講座、模擬試験、出題傾向、過去問題、テキストまで全てご対応しております。"
            />

            <!-- <Food
              headline="効率的に勉強するためには、バランスの取れた食事と適切な栄養素が重要です。<br>
                  集中力を高めて効率よく勉強するために、おすすめの栄養や食事をご紹介します。<br><br>"
              /> -->
              
        <!-- <News :contents="richtextToHTML($static.news.newsField)" /> -->
        <!-- <figure class="point-image">
          <img src="../assets/img/license_page/denken3/denken3_point.jpg">
        </figure> -->

        <Point
          title="短期間で合格する３つのポイント"
          :points="[
            '担当講師が執筆したオリジナルテキスト（教科書）を使用。記載項目を絞り、合格点の60点を超える力を的確に身に付けます（目標は80点以上）。',
            '効果的な学習をサポートする副教材も特徴。講義の中での例題としての活用はもちろん、自宅学習にも使える解説付き問題集や4科目分の添削課題も付いています。',
            '初めて受験する方には、おすすめの基礎講座をご用意！第三種電気主任技術者（電験三種）の学習開始の前に、押さえておくべき電気の法則や数学の公式を総ざらい。しばらく理系の学習から離れていた方は、ぜひご活用ください。'
          ]"
        />

        <Linelink 
              text="能センLINE公式アカウント開設しました。<br>
                只今『お友達登録キャンペーン』で全講座に使える1000円割引キャンペーンコードをプレゼント！<br>
                期間限定ですのでお早めにご使用ください。（他の割引と併用可）"
          />

        <div class="exam-link-wrapper">
          <div class="exam-link-flex">
            <g-link to="/denken3-application" class="application-form-link">
              お申込みはこちら（個人）
              <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
            </g-link>
            <g-link to="/denken3-application-business" class="application-form-link">
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
          通学講座
          <IconBase class="icon"><IconArrowRight /></IconBase>
        </div>
        <div
          :class="['tab', { active: isActive === 3 }]"
          v-on:click="tabToggle(3)"
        >
          通信講座
          <IconBase class="icon"><IconArrowRight /></IconBase>
        </div>
      </section>
      <div class="body">
        <div v-show="isActive === 2">
          <h3 class="body-title">通学講座</h3>
          <h3 class="body-title">各会場の開催日程</h3>
          <Venue
            v-for="(items, index) in $static.tuugakuVenue.edges"
            :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Info
            :tuitionFee="richtextToHTML($static.tuugaku.tuitionFee)"
            :capacity="$static.tuugaku.capacity"
            :benefits="richtextToHTML($static.tuugaku.benefits)"
            :cpds="richtextToHTML($static.tuugaku.cpds)"
          />
            <NewApplication
              personalFormLink="/denken3-application"
              businessFormLink="/denken3-application-business"
              faxLink="https://assets.ctfassets.net/smbvwwns0c77/2n5AY16NQIzLmshSXSnId4/7c8d94a4a988e9568482580bb9f8db46/__________________FAX.pdf"
            />
        </div>
        <div v-show="isActive === 3">
          <h3 class="body-title">通信講座</h3>
          <Info
            :tuitionFee="richtextToHTML($static.tuushin.tuitionFee)"
            :capacity="$static.tuushin.capacity"
            :benefits="richtextToHTML($static.tuushin.benefits)"
            :cpds="richtextToHTML($static.tuushin.cpds)"
          />
          <NewApplication
            personalFormText="通信講座のお申込み（個人）"
            personalFormLink="/denken3-application"
            businessFormText="通信講座のお申込み（法人）"
            businessFormLink="/denken3-application-business"
            faxLink="https://assets.ctfassets.net/smbvwwns0c77/2n5AY16NQIzLmshSXSnId4/7c8d94a4a988e9568482580bb9f8db46/__________________FAX.pdf"
          />
        </div>
        <div v-show="isActive === 1">
          <h3 class="body-title">オンライン講座</h3>
          <Info
            :courseOutline="richtextToHTML($static.online.courseOutline)"
            :apply="richtextToHTML($static.online.apply)"
          />
          <div id="apply-section"></div>
          <NewApplication
            personalFormText="オンライン講座へのお申込み（個人）"
            personalFormLink="/denken3-application"
            businessFormText="オンライン講座へのお申込み（法人）"
            businessFormLink="/denken3-application-business"
            faxLink="https://assets.ctfassets.net/smbvwwns0c77/2n5AY16NQIzLmshSXSnId4/7c8d94a4a988e9568482580bb9f8db46/__________________FAX.pdf"
          />
          </div>
      </div>
      <div class="fixed-btn">
        <div @click="navigateToSection">
          <img
            src="../assets/img/common/fixed_btn.svg"
            alt="講座のお申し込み"
            width="534"
            height="92"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Denken3 {
    news:contentfulQualificationNews(id: "41kikEtCP4v1CbTnaW9n5L") {
      newsField
    }
    tuugaku:contentfulQualification(id:"6VzS8vwSpwUI40fOLwAeNd") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    tuushin:contentfulQualification(id:"2ZbX0D7OZ3NaL5F058SAIr") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    online:contentfulQualificationOnline(id:"2W790efooopLZNd6owCL2") {
      courseOutline
      apply
      mediaYoutube
      mediaImg {
        file { url }
      }
      mediaDescription
    }
    tuugakuVenue:allContentfulDenken3Venue(order: ASC) {
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
      siteUrl
    }
  }
</static-query>

<script>
import Hero from "@/components/Hero.vue";
import Point from "@/components/licensePage/Point.vue";
import Explanation from "@/components/licensePage/Explanation.vue";
import SpExplanation from "@/components/licensePage/SpExplanation.vue";
import Study from "@/components/licensePage/Study.vue";
import Linelink from "@/components/licensePage/Linelink.vue";
import NewPvMovie from '../components/licensePage/NewPvMovie.vue';
import Method from '../components/licensePage/Method.vue';
// import Food from '../components/licensePage/Food.vue';
import Lecture from '../components/licensePage/Lecture.vue';
import Cheer from '../components/licensePage/Cheer.vue';
import Quality from '../components/licensePage/Quality.vue';
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
  name: "denken3",
  metaInfo() {
    return {
      titleTemplate:
        "第三種電気主任技術者（電験三種） 受験対策講習会｜能セン-合格への近道-",
      meta: [
        {
          name: "description",
          content:
            "通学・オンライン・通信講座とご自身に合った学習スタイルを選べる受験対策講習会です。給付制度や再受講割引等もご用意しています。担当講師執筆のオリジナルテキストを使用し、ポイントを押さえた講義をお届けします。"
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `第三種電気主任技術者（電験三種） 受験対策講習会｜能セン-合格への近道-`
          // content: `第三種電気主任技術者（電験三種） | ${
          //   this.$static.metadata.siteName
          // }`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/denken3`
        }
      ]
    };
  },
  components: {
    Hero,
    Point,
    Explanation,
    SpExplanation,
    Study,
    Linelink,
    NewPvMovie,
    Method,
    // Food,
    Lecture,
    Cheer,
    Quality,
    // News,
    Info,
    Venue,
    Application,
    NewApplication,
    IconBase,
    IconDoubleArrowRight,
    IconArrowRight,
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
    },
    navigateToSection() {
    // ユーザーエージェントを取得
    const userAgent = navigator.userAgent;

    // スマートフォンかどうかを判別
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (isMobile) {
      // スマートフォンの場合の処理
      window.location.href = 'https://www.nouryoku.com/denken3/#temp';
      
      setTimeout(() => {
        window.location.href = 'https://www.nouryoku.com/denken3/#apply-section';
      }, 10);
    } else {
      // PCの場合の処理
      window.location.href = 'https://www.nouryoku.com/denken3/#apply-section';
    }
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
.denken3 {
  padding-bottom: 0;
  scroll-behavior: smooth;
}
.header {
  background-color: #fff8cc;
  border-bottom: 5px solid #1D9BF0;
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
.exam-link {
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
    border: 5px solid #1D9BF0;
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
      color: #1D9BF0;
      .icon {
        transform: rotate(90deg);
      }
    }
  }
}

.tab::before {
  content: url("../assets/img/license_page/icon_bag.svg");
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 0.2em;
  @media print, screen and (max-width: 1000px) {
    margin-right: 0;
  }
}

.tab:nth-child(3) {
  &::before {
    content: url("../assets/img/license_page/icon_home.svg");
  }
}
.tab:nth-child(1) {
  &::before {
    content: url("../assets/img/license_page/icon_pc.svg");
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
      border-bottom: 5px solid #1D9BF0;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}

.is-sp {
  display: none;
}
@media screen and (max-width: 430px) {
  .is-sp {
    display: block;
  }
}

.fixed-btn {
  position: fixed;
  z-index: 10;
  bottom: 10px;
  width: 84%;
  max-width: 528px;
  left: 50%;
  transform: translateX(-50%);
  @media print, screen and (min-width: 1001px) {
    left: auto;
    right: 10px;
    transform: none;
    width: 528px;
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
