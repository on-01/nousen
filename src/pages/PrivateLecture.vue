<template>
  <Layout>
    <div class="private_lecture">
      <Hero
        :backImgOver="
          require('../assets/img/private_lecture/private_lecture_hero.jpg')
        "
        :backImgUnder="
          require('../assets/img/private_lecture/private_lecture_hero_sp.jpg')
        "
        title="出張講習のすすめ"
      />
      <div class="contents">
        <section class="message">
          <div class="introduction">
            <p>
              忙しい現場に、国家資格という武器を。
              <br />
              電気主任技術者・施工管理技士・設備系資格の合格対策を、
              <br />
              貴社内でも、オンラインでも柔軟に対応いたします。
            </p>
            <p class="example">
              「資格保有者が足りず、現場が回らない」
              <br />
              「講習に出したいが、業務を止められない」
              <br />
              「近隣で国家資格向けの研修が開催されていない」
              <br />
              「社内講習を開きたいが、専門講師がいない」
            </p>
            <p>――こうしたお悩みをお持ちの企業様へ</p>
            <p class="-fw500">
              能センでは、電験三種・施工管理技士などの国家資格に特化した出張講習を承っております。
              <br />
              国家資格対策のプロ講師が、貴社の会議室や研修室へ直接伺い、
              <br />
              業務と並行しながら効率よく、そして確実に“合格者”を育成いたします。
            </p>
          </div>
        </section>

        <section class="section03">
          <div class="public-media">
            <h2 class="section-title">
              <img
                src="../assets/img/front/reason_main_headline6.svg"
                alt="電験三種 施工管理技士 出張講習"
              />
            </h2>
            <div class="public-media-flex">
              <figure>
                <img
                  src="../assets/img/common/ntt-facilities.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image -type1"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/ntt-fieldtechno.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image -type2"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/ntt-higashinippon.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
            </div>
            <div class="public-media-flex -daikin">
              <figure>
                <img
                  src="../assets/img/common/daikin-airtechno.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/daikin-hvac.jpg"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
            </div>
            <div class="public-media-flex">
              <figure>
                <img
                  src="../assets/img/common/toyota.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/kansai-dennryoku.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/tokyogasu.jpg"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
            </div>
            <div class="public-media-flex">
              <figure>
                <img
                  src="../assets/img/common/kaji-shoukoukai.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/hokkaido-denki.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/hokuriku-denki.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
            </div>
            <div class="public-media-flex">
              <figure>
                <img
                  src="../assets/img/common/necusuko.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/nippongennsiryoku.png"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
              <figure>
                <img
                  src="../assets/img/common/shouenerugy.jpg"
                  alt="電験三種 施工管理技士 出張講習"
                  class="public-media-flex-image"
                />
              </figure>
            </div>
          </div>
        </section>

        <div class="point-wrapper">
          <Point
            :headlineImg="require('../assets/img/private_lecture/point1.svg')"
            :mainImg="require('../assets/img/private_lecture/backimg01.svg')"
            myCatch="全国どこへでもお伺い致します"
            text="北は北海道、南は沖縄まで全国各地で実績がございます。<br>講習会に参加してみたいけど毎回会場が遠く通い辛い…なんて不満もこれで解消できます。"
          />
          <Point
            :headlineImg="require('../assets/img/private_lecture/point2.svg')"
            :mainImg="require('../assets/img/private_lecture/backimg02.svg')"
            myCatch="講習に集中できる環境"
            text="気心知れた同僚とリラックスできる環境で、資格取得に向けての勉強が捗ります。<br>講師へも気兼ねなく疑問が解消されるまで質問できるチャンス！"
          />
          <Point
            :headlineImg="require('../assets/img/private_lecture/point3.svg')"
            :mainImg="require('../assets/img/private_lecture/backimg03.svg')"
            myCatch="ご希望に沿った<br>プログラムをご提案"
            text="日程やお時間、参加人数、講習を行いたい資格、実施場所、費用等のご要望をお知らせ下さい。<br>貴社に合った講習プランへとカスタマイズし、カリキュラムを作成・ご提案致します。<br>電気、建築、設備関連を中心に実施しておりますが、その他の分野についてもご相談ください。"
          />
          <Point
            :headlineImg="require('../assets/img/private_lecture/point4.svg')"
            :mainImg="require('../assets/img/private_lecture/backimg04.svg')"
            myCatch="個別で申し込むよりも低コスト"
            text="ご参加頂く人数にもよりますが、受講生が増えるほどおひとりあたりの受講費用が抑えられます。<br>また、遠方に通う必要がありませんので交通費や宿泊費も削減できます。"
          />
        </div>

        <div class="example-wrapper">
          <h4 class="example-title">
            <IconBase width="30" height="30">
              <IconFingerDiagonallyUp />
            </IconBase>
            過去の実施例を一部ご紹介
          </h4>
          <Example
            companyName="電機メーカーD社"
            :exampleList="[
              '講習の資格名：２級管工事施工管理技士 (学科・実地)',
              '日程：１日７時間×２日間',
              '教材：テキスト',
              '参加人数：５０名',
              '費用等：約750,000円 / お一人様あたり約15,000円',
            ]"
          />
          <Example
            companyName="通信関連企業Ｎ社"
            :exampleList="[
              '講習の資格名：第二種電気工事士 (技能)',
              '日程：１日７時間×２日間',
              '教材：テキスト・材料',
              '参加人数：１０名',
              '費用等：約700,000円 / お一人様あたり約70,000円',
            ]"
          />
          <Example
            companyName="電気関連協会"
            :exampleList="[
              '講習の資格名：第三種電気主任技術者 (理論・電力・機械・法規)',
              '日程：１日７時間×８日間(理論・電機・機械・法規の講習を各2日間)',
              '教材：テキスト・問題集',
              '参加人数：４３名 (４科目の合計参加数)',
              '費用等：約2,000,000円 / お一人様あたり約46,000円',
            ]"
          />
          <Example
            companyName="企業支援団体"
            :exampleList="[
              '講習の資格名：2級建築施工管理技士 (学科・実地)',
              '日程：１日７時間×２日間',
              '教材：テキスト・問題集',
              '参加人数：１9名',
              '費用等：約650,000円 / お一人様あたり約35,000円',
            ]"
          />
          <p class="attention">
            ※上記例の費用は目安です。条件により変動致します。
          </p>
        </div>

        <!-- <div class="contact">
          費用・研修内容等、何なりとご相談ください！
          <br />
          短期間、短時間の研修が可能です。
          <br />
          <g-link to="/contact" class="more-link">
            お見積もり・お問い合わせ
            <IconBase class="icon" width="25" height="25">
              <IconFingerRight />
            </IconBase>
          </g-link>
        </div> -->

        <ContactInfoPrivate
          title="出張講習のご相談<br>
          日程・費用・研修内容など<br>
          お気軽にお問い合わせください。"
        />
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
  import Hero from "@/components/Hero.vue";
  import Point from "@/components/private_lecture/Point.vue";
  import Example from "@/components/private_lecture/Example.vue";
  import IconBase from "@/components/IconBase.vue";
  import IconFingerDiagonallyUp from "@/components/icons/IconFingerDiagonallyUp.vue";
  import IconFingerRight from "@/components/icons/IconFingerRight.vue";
  import ContactInfo from "../components/licensePage/ContactInfo.vue";
  import ContactInfoPrivate from "../components/licensePage/ContactInfoPrivate.vue";
  export default {
    metaInfo() {
      return {
        titleTemplate: "出張講習のすすめ｜能セン-合格への近道-",
        meta: [
          {
            name: "description",
            content:
              "電気、建築、設備関連を中心とした受験対策講習会を開催しています能センの出張講習ページです。出張講習はご予算や期間、研修内容等お伺いした内容をもとに、貴社だけの研修プログラムをご提案します。",
          },
          {
            key: `og:title`,
            property: `og:title`,
            content: `出張講習のすすめ｜能セン-合格への近道-`,
            // content: `出張講習 | ${this.$static.metadata.siteName}`,
          },
          {
            key: `og:url`,
            property: `og:url`,
            content: `${this.$static.metadata.siteUrl}/private-lecture`,
          },
        ],
      };
    },
    components: {
      Hero,
      Point,
      Example,
      IconBase,
      IconFingerDiagonallyUp,
      IconFingerRight,
      ContactInfo,
      ContactInfoPrivate,
    },
  };
</script>

<style lang="scss" scoped>
  .private_lecture {
    padding-bottom: 100px;
    font-family: "メイリオ", sans-serif;
  }
  .contents {
    margin: 0 auto;
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
    @media print, screen and (max-width: 1000px) {
      width: 90%;
    }
  }
  .message {
    font-weight: bold;
    color: #000000;
    margin-top: 50px;
    font-family: メイリオ, sans-serif;
    padding-bottom: 250px;

    @media print, screen and (min-width: 1001px) {
      text-align: center;
    }
    @media print, screen and (max-width: 1000px) {
      padding-bottom: 120px;
    }
    .example {
      color: #ff4500;
    }
  }
  .point-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 100px;
  }
  .example-wrapper {
    margin-top: 120px;
  }
  .example-title {
    color: #ed6c00;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px dotted #000;
    padding-bottom: 50px;
    svg {
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  .attention {
    text-align: right;
    color: #ed6c00;
    margin-top: 1em;
  }
  .contact {
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
  }
  .more-link {
    background-color: #f4891e;
    display: inline-block;
    color: #fff;
    text-align: center;
    padding: 20px 3em;
    font-weight: bold;
    margin-top: 30px;
    font-size: 20px;
    border-radius: 10px;
    @media print, screen and (max-width: 1000px) {
      font-size: 16px;
    }
    .icon {
      margin-left: 10px;
    }
  }

  .-fw500 {
    font-weight: 500;
    margin: 0;
  }

  .section03 {
    position: relative;
    margin-top: -225px;
    // z-index: -1;
    @media print, screen and (max-width: 1000px) {
      margin-top: -55px;
    }
    &:before {
      content: "";
      // height: 500px;
      height: 305px;
      width: 5px;
      background-color: #000;
      display: block;
      position: relative;
      top: 5px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: -2;
      @media print, screen and (max-width: 1000px) {
        // height: 300px;
        height: 220px;
      }
    }
    &:after {
      content: "";
      height: 30px;
      width: 5px;
      background-color: #000;
      display: block;
      position: absolute;
      // top: 473px;
      top: 283px;
      left: -20px;
      right: 0;
      margin: auto;
      transform: rotate(-45deg);
      @media print, screen and (max-width: 1000px) {
        // top: 274px;
        top: 196px;
      }
    }
    .section-title {
      max-width: 330px;
      width: 100%;
      margin: 0 auto;
      background-color: #fff;
      position: absolute;
      // top: 200px;
      top: 0;
      left: 0;
      right: 0;
      padding: 50px 0;
      @media print, screen and (max-width: 1000px) {
        width: 90%;
        top: 0;
        max-width: 250px;
        padding: 20px 0;
      }
      &:before {
        content: url("../assets/img/icon/finger_top_brown.svg");
        width: 30px;
        height: 50px;
        display: block;
        margin: 0 auto;
        background-color: #fff;
        padding: 10px;
      }
    }
  }

  .public-media {
    margin: 50px auto 225px;
    max-width: 800px;
    background: #fff;
    @media print, screen and (max-width: 1000px) {
      margin-bottom: 100px;
    }
  }
  .public-media p {
    margin: 0 0 20px 0;
    text-align: center;
    font-family: "メイリオ", sans-serif;
    font-size: 28px;
    font-weight: bold;
  }
  .public-media-flex {
    display: flex;
    margin: 12px 0;
  }
  .public-media-flex.-bottom {
    width: 75%;
    @media print, screen and (max-width: 800px) {
      margin: 0 auto;
    }
  }
  .public-media-flex figure {
    margin: 0;
    width: 33.33%;
    display: flex;
    justify-content: center;
  }

  .public-media-flex.-daikin figure {
    width: 50%;
    @media print, screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .public-media-flex.-daikin img {
    width: 85%;
    @media print, screen and (max-width: 800px) {
      width: 40%;
    }
  }
  .public-media-flex figure a {
    position: relative;
    z-index: 1;
  }

  .public-media-flex-image {
    width: 80%;
    display: block;
    margin: auto;
  }

  .public-media-flex-image.-type2 {
    width: 100%;
  }
  @media print, screen and (max-width: 800px) {
    .public-media p {
      font-size: 24px;
    }
    .public-media-flex {
      flex-flow: wrap;
      margin: 0;
    }
    .public-media-flex figure {
      width: 100%;
      margin: 12px 0;
    }
    .public-media-flex-image {
      width: 40%;
      display: block;
      margin: auto;
    }

    .public-media-flex-image.-type1 {
      transform: none;
    }
    .public-media-flex-image.-type2 {
      width: 40%;
      display: block;
      margin: auto;
    }
  }
</style>
