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
        title="出張講習のご案内"
      />
      <div class="contents">
        <section class="message">
          <div class="introduction">
            <p>能セン(能力開発研修センター)では、出張講習も承っております。</p>
            <p class="example">
              「必要な資格取得者が大幅に不足している」<br />
              「社内など身近な環境で研修を行いたい」<br />
              「近隣で希望する講習が開催されていない」<br />
              「社内講習を行いたいが身近に専門の講師がいない」
            </p>
            <p>
              ・・・等のお悩みを抱えた企業様に向けた講習会をご提案させて頂いております。<br />
              大勢の方がお得にはなりますが、少人数でもご対応はできますのでお気軽にご相談ください。
            </p>
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
            <IconBase width="30" height="30"
              ><IconFingerDiagonallyUp /></IconBase
            >過去の実施例を一部ご紹介
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
        <div class="contact">
          費用・研修内容等、何なりとご相談ください！<br />
          短期間、短時間の研修が可能です。<br />
          <g-link to="/contact" class="more-link"
            >お見積もり・お問い合わせ
            <IconBase class="icon" width="25" height="25"
              ><IconFingerRight
            /></IconBase>
          </g-link>
        </div>
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
import Hero from '@/components/Hero.vue';
import Point from '@/components/private_lecture/Point.vue';
import Example from '@/components/private_lecture/Example.vue';
import IconBase from '@/components/IconBase.vue';
import IconFingerDiagonallyUp from '@/components/icons/IconFingerDiagonallyUp.vue';
import IconFingerRight from '@/components/icons/IconFingerRight.vue';
export default {
  metaInfo() {
    return {
    titleTemplate: '出張講習のご案内｜能セン-学び方を学ぶ-',
      meta: [
        {
          name: 'description',
          content:
            '電気、建築、設備関連を中心とした受験対策講習会を開催しています能セン（能力開発研修センター）の出張講習ページです。出張講習はご予算や期間、研修内容等お伺いした内容をもとに、貴社だけの研修プログラムをご提案します。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `出張講習のご案内｜能セン-学び方を学ぶ-`,
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
  },
};
</script>

<style lang="scss" scoped>
.private_lecture {
  padding-bottom: 100px;
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
  color: #3b241a;
  margin-top: 50px;
  @media print, screen and (min-width: 1001px) {
    text-align: center;
  }
  .example {
    color: #ed6c00;
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
</style>
