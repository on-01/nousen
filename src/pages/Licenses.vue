<template>
  <Layout>
    <div class="licenses">
      <Hero
        :backImgOver="require('../assets/img/licenses/licenses_hero.jpg')"
        :backImgUnder="require('../assets/img/licenses/licenses_hero_sp.jpg')"
        title="学べる資格と講習会"
      />
      <div class="licenses-contents">
        <License
          id="denken"
          licenseSlug="denken"
          abbreviation="電 験"
          formalName="第三種電気主任技術者"
          introText="「第三種電気主任技術者」 を最短で目指す。"
          licenseCatch="業務上必要な方はもちろん、キャリアアップを目指す方も、<br>やる気のある方にはぜひ挑戦していただきたいお薦めの資格です。"
          :pointItems="[
            {
              dt: '取得後の展望',
              dd:
                '電力関係をはじめ大規模施設の管理会社、製造業など幅広い企業から求められます。<br>近年は太陽光、風力発電設備施設管理企業からの求人も多くなってきています。',
            },
            {
              dt: '収　入',
              dd: '仕事内容に応じますが、高収入が得られる機会は多いです。',
            },
            {
              dt: '将来的には',
              dd:
                '保安監督の実務経験を５年以上積むことで、独立開業も目指せます。',
            },
            {
              dt: '科目合格制度',
              dd:
                '受験に必要な4科目を3年以内に合格できれば免状を得られる制度。<br>理系が得意でない方もコツコツ学習を重ねれば十分チャンスはあります。',
            },
            {
              dt: '学習開始時に必要な知識',
              dd: '高校レベルの数学。決してハードルは高くありません。',
            },
          ]"
          :outlineItems="[
            {
              dt: $static.denken.outlineHead1,
              dd: $static.denken.outlineBody1,
            },
            {
              dt: $static.denken.outlineHead2,
              dd: $static.denken.outlineBody2,
            },
            {
              dt: $static.denken.outlineHead3,
              dd: $static.denken.outlineBody3,
            },
            {
              dt: $static.denken.outlineHead4,
              dd: $static.denken.outlineBody4,
            },
          ]"
          :attention="richtextToHTML($static.denken.attention)"
          :memo="$static.denken.memo"
          LicensePageLink="/denken3"
          applicationLink="/denken3-application"
        />
      </div>
      <div class="licenses-contents">
        <License
          id="koujishi1"
          licenseSlug="koujishi1"
          abbreviation="電気工事士"
          formalName="第一種電気工事士"
          introText="「第一種電気工事士」 ここからスタートもあり。"
          licenseCatch=""
          :pointItems="[
            {
              dt: 'ポイント',
              dd: '二種に比べて、筆記・技能試験ともに難度は上がります。',
            },
          ]"
          :outlineItems="[
            {
              dt: $static.koujishi1.outlineHead1,
              dd: $static.koujishi1.outlineBody1,
            },
            {
              dt: $static.koujishi1.outlineHead2,
              dd: $static.koujishi1.outlineBody2,
            },
            {
              dt: $static.koujishi1.outlineHead3,
              dd: $static.koujishi1.outlineBody3,
            },
            {
              dt: $static.koujishi1.outlineHead4,
              dd: $static.koujishi1.outlineBody4,
            },
          ]"
          :attention="richtextToHTML($static.koujishi1.attention)"
          :memo="$static.koujishi1.memo"
          LicensePageLink="/koujishi1"
        />
        <!-- ↑の属性に追加で有効化される。 -->
        <!-- applicationLink="/koujishi-application" -->
      </div>
      <div class="licenses-contents">
        <License
          id="koujishi2"
          licenseSlug="koujishi2"
          abbreviation="電気工事士"
          formalName="第二種電気工事士"
          introText="「第二種電気工事士」 はじめの一歩を確実に。"
          licenseCatch=""
          :pointItems="[
            {
              dt: '試験内容',
              dd:
                '筆記試験と技能試験を行います。もしも技能試験が不合格の場合、次回に限り筆記試験は免除となります。',
            },
            {
              dt: '筆記試験のポイント',
              dd:
                '記憶力で対応できる問題が多く出ます。理系の資格ですが、計算が苦手な方でも十分合格が狙えます。',
            },
            {
              dt: '技能試験のポイント',
              dd:
                '仕事ですでに経験されている方には、さほど難しい内容ではありません。<br>さらに、試験センターが毎年出題内容の候補を公開。必要な技能は事前に対策できます。そのため、初心者の方も練習で十分対応できます。',
            },
          ]"
          :outlineItems="[
            {
              dt: $static.koujishi2.outlineHead1,
              dd: $static.koujishi2.outlineBody1,
            },
            {
              dt: $static.koujishi2.outlineHead2,
              dd: $static.koujishi2.outlineBody2,
            },
            {
              dt: $static.koujishi2.outlineHead3,
              dd: $static.koujishi2.outlineBody3,
            },
            {
              dt: $static.koujishi2.outlineHead4,
              dd: $static.koujishi2.outlineBody4,
            },
          ]"
          :attention="richtextToHTML($static.koujishi2.attention)"
          :memo="$static.koujishi2.memo"
          LicensePageLink="/koujishi2"
          applicationLink="/koujishi-application"
        />
      </div>
      <div class="licenses-contents">
        <License
          id="denkikoujisekou"
          licenseSlug="denkikoujisekou"
          abbreviation="施工管理技士"
          formalName="1・2級 電気工事施工管理技士"
          introText="「1・2級 電気工事施工管理技士」 を徹底理解。"
          licenseCatch="実務経験の年数や工事の規模など受験のハードルは低くありませんが、<br>条件を満たしていればぜひ取っておきたい資格です。"
          :pointItems="[
            {
              dt: '取得後の展望',
              dd:
                '建設の中でも電気工事に特化した資格です。企業からの高い需要があり、電気工事事業者として建設業の許可を得る場合にとても有用となります。経営事項審査における技術力の評価で計上する技術者数にカウントされるメリットも。<br>また、建設現場の主任技術者などにもステップアップ可能です。',
            },
            {
              dt: '現場でのポジション',
              dd:
                '替えの利かない重要な資格です。特定建設業の営業所ごとに置く専任の技術者と、建設工事の現場に配置しなければならない監理技術者は1級が必要となっています。',
            },
            {
              dt: '試験内容',
              dd:
                '幅広い専門知識を求められる学科試験と、受験者の工事経験を踏まえた記述式の実地試験。実地試験が不合格の場合、学科の合格は次年度に限って持ち越されます。<br>平成の末に学科試験のみの受験制度も創設され、実務経験の無い方にも門戸が広がっています。',
            },
          ]"
          :outlineItems="[
            {
              dt: $static.denkikoujisekou.outlineHead1,
              dd: $static.denkikoujisekou.outlineBody1,
            },
            {
              dt: $static.denkikoujisekou.outlineHead2,
              dd: $static.denkikoujisekou.outlineBody2,
            },
            {
              dt: $static.denkikoujisekou.outlineHead3,
              dd: $static.denkikoujisekou.outlineBody3,
            },
            {
              dt: $static.denkikoujisekou.outlineHead4,
              dd: $static.denkikoujisekou.outlineBody4,
            },
          ]"
          :attention="richtextToHTML($static.denkikoujisekou.attention)"
          :memo="$static.denkikoujisekou.memo"
          LicensePageLink="/denkikouji-s"
        />
        <!-- applicationLink="/denkikouji-s-application" -->
      </div>
      <div class="licenses-contents">
        <License
          id="kenchiku"
          licenseSlug="kenchiku"
          abbreviation="施工管理技士"
          formalName="1・2級 建築施工管理技士"
          introText="「1・2級 建築施工管理技士」 を効率的にマスター。"
          licenseCatch="実務経験の年数や工事の規模など受験のハードルは低くありませんが、<br>条件を満たしていればぜひ取っておきたい資格です。"
          :pointItems="[
            {
              dt: '取得後の展望',
              dd:
                '建築工事に特化した資格です。企業からの高い需要があり、建築工事事業者として建設業の許可を得る場合にとても有用となります。経営事項審査における技術力の評価で計上する技術者数にカウントされるメリットも。<br>また、建設現場の主任技術者などにもステップアップ可能です。',
            },
            {
              dt: '現場でのポジション',
              dd:
                '替えの利かない重要な資格です。特定建設業の営業所ごとに置く専任の技術者と、<br>建設工事の現場に配置しなければならない監理技術者は1級が必要となっています。',
            },
            {
              dt: '試験内容',
              dd:
                '幅広い専門知識を求められる学科試験と、受験者の工事経験を踏まえた記述式の実地試験。実地試験が不合格の場合、学科の合格は次年度に限って持ち越されます。<br>平成の末に学科試験のみの受験制度も創設され、実務経験の無い方にも門戸が広がっています。',
            },
          ]"
          :outlineItems="[
            {
              dt: $static.kenchiku.outlineHead1,
              dd: $static.kenchiku.outlineBody1,
            },
            {
              dt: $static.kenchiku.outlineHead2,
              dd: $static.kenchiku.outlineBody2,
            },
            {
              dt: $static.kenchiku.outlineHead3,
              dd: $static.kenchiku.outlineBody3,
            },
            {
              dt: $static.kenchiku.outlineHead4,
              dd: $static.kenchiku.outlineBody4,
            },
          ]"
          :attention="richtextToHTML($static.kenchiku.attention)"
          :memo="$static.kenchiku.memo"
          LicensePageLink="/kenchiku-s"
          applicationLink="/kenchiku-s-application"
        />
      </div>
      <div class="licenses-contents">
        <License
          id="kankouji"
          licenseSlug="kankouji"
          abbreviation="施工管理技士"
          formalName="1・2級 管工事施工管理技士"
          introText="「1・2級 管工事施工管理技士」 を漏らさず学ぶ。"
          licenseCatch="実務経験の年数や工事の規模など受験のハードルは低くありませんが、<br>条件を満たしていればぜひ取っておきたい資格です。"
          :pointItems="[
            {
              dt: '取得後の展望',
              dd:
                '建設の中でも管工事に特化した資格です。企業からの高い需要があり、管工事事業者として建設業の許可を得る場合にとても有用となります。経営事項審査における技術力の評価で計上する技術者数にカウントされるメリットも。<br>また、建設現場の主任技術者などにもステップアップ可能です。',
            },
            {
              dt: '現場でのポジション',
              dd:
                '替えの利かない重要な資格です。特定建設業の営業所ごとに置く専任の技術者と、<br>建設工事の現場に配置しなければならない監理技術者は1級が必要となっています。',
            },
            {
              dt: '試験内容',
              dd:
                '幅広い専門知識を求められる学科試験と、受験者の工事経験を踏まえた記述式の実地試験。実地試験が不合格の場合、学科の合格は次年度に限って持ち越されます。<br>平成の末に学科試験のみの受験制度も創設され、実務経験の無い方にも門戸が広がっています。',
            },
          ]"
          :outlineItems="[
            {
              dt: $static.kankouji.outlineHead1,
              dd: $static.kankouji.outlineBody1,
            },
            {
              dt: $static.kankouji.outlineHead2,
              dd: $static.kankouji.outlineBody2,
            },
            {
              dt: $static.kankouji.outlineHead3,
              dd: $static.kankouji.outlineBody3,
            },
            {
              dt: $static.kankouji.outlineHead4,
              dd: $static.kankouji.outlineBody4,
            },
          ]"
          :attention="richtextToHTML($static.kankouji.attention)"
          :memo="$static.kankouji.memo"
          LicensePageLink="/kankouji-s"
        />
        <!-- applicationLink="/kankouji-s-application" -->
      </div>
      <div class="licenses-contents">
        <License
          id="doboku"
          licenseSlug="doboku"
          abbreviation="施工管理技士"
          formalName="1・2級 土木施工管理技士"
          introText="「1・2級 土木施工管理技士」 を最速で突破する。"
          licenseCatch="実務経験の年数や工事の規模など受験のハードルは低くありませんが、<br>条件を満たしていればぜひ取っておきたい資格です。"
          :pointItems="[
            {
              dt: '取得後の展望',
              dd:
                '建設の中でも土木工事に特化した資格です。企業からの高い需要があり、土木工事事業者として建設業の許可を得る場合にとても有用となります。経営事項審査における技術力の評価で計上する技術者数にカウントされるメリットも。<br>また、建設現場の主任技術者などにもステップアップ可能です。',
            },
            {
              dt: '現場でのポジション',
              dd:
                '替えの利かない重要な資格です。特定建設業の営業所ごとに置く専任の技術者と、建設工事の現場に配置しなければならない監理技術者は1級が必要となっています。',
            },
            {
              dt: '試験内容',
              dd:
                '幅広い専門知識を求められる学科試験と、受験者の工事経験を踏まえた記述式の実地試験。実地試験が不合格の場合、学科の合格は次年度に限って持ち越されます。<br>平成の末に学科試験のみの受験制度も創設され、実務経験の無い方にも門戸が広がっています。',
            },
          ]"
          :outlineItems="[
            {
              dt: $static.doboku.outlineHead1,
              dd: $static.doboku.outlineBody1,
            },
            {
              dt: $static.doboku.outlineHead2,
              dd: $static.doboku.outlineBody2,
            },
            {
              dt: $static.doboku.outlineHead3,
              dd: $static.doboku.outlineBody3,
            },
            {
              dt: $static.doboku.outlineHead4,
              dd: $static.doboku.outlineBody4,
            },
          ]"
          :attention="richtextToHTML($static.doboku.attention)"
          :memo="$static.doboku.memo"
          LicensePageLink="/doboku-s"
          applicationLink="/doboku-s-application"
        />
      </div>
      <div class="licenses-contents">
        <License
          id="kyuusui"
          licenseSlug="kyuusui"
          abbreviation="給水装置工事"
          formalName="給水装置工事主任技術者"
          introText="「給水装置工事主任技術者」 が驚くほどよくわかる。"
          licenseCatch=""
          :pointItems="[
            {
              dt: '取得後の展望',
              dd:
                '給水装置工事事業者が、水道事業者から指定を受けるための唯一の資格です。<br>技術的な管理・指導・監督をはじめ、給水装置の基準の適合確認、検査の立会いなど多彩な業務に携われる魅力的な資格です。',
            },
            {
              dt: '試験内容',
              dd:
                '試験では出題項目ごとに足切り点(最低正答数)が設定されています。<br>そのため、広く偏りがないように学ぶことが求められます。<br>ただし、出題範囲は膨大ではないので、決して難関ということはありません。',
            },
          ]"
          :outlineItems="[
            {
              dt: $static.kyuusui.outlineHead1,
              dd: $static.kyuusui.outlineBody1,
            },
            {
              dt: $static.kyuusui.outlineHead2,
              dd: $static.kyuusui.outlineBody2,
            },
            {
              dt: $static.kyuusui.outlineHead3,
              dd: $static.kyuusui.outlineBody3,
            },
            {
              dt: $static.kyuusui.outlineHead4,
              dd: $static.kyuusui.outlineBody4,
            },
          ]"
          :attention="richtextToHTML($static.kyuusui.attention)"
          :memo="$static.kyuusui.memo"
          LicensePageLink="/kyuusui"
        />
        <!-- applicationLink="/kyuusui-application" -->
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Licenses {
    denken:contentfulLicenses(id:"7bZqIerQuLXpm4ZOOVdaFk") {
      outlineHead1
      outlineHead2
      outlineHead3
      outlineHead4
      outlineBody1
      outlineBody2
      outlineBody3
      outlineBody4
      attention
      memo
    }
    koujishi1:contentfulLicenses(id:"6ownpesFvyBnX35ZYNsj0e") {
      outlineHead1
      outlineHead2
      outlineHead3
      outlineHead4
      outlineBody1
      outlineBody2
      outlineBody3
      outlineBody4
      attention
      memo
    }
    koujishi2:contentfulLicenses(id:"7dAOeSTSuhTkM2BHAluTPF") {
      outlineHead1
      outlineHead2
      outlineHead3
      outlineHead4
      outlineBody1
      outlineBody2
      outlineBody3
      outlineBody4
      attention
      memo
    }
    denkikoujisekou:contentfulLicenses(id:"6olH4e60FiFnA9clfZAxov") {
      outlineHead1
      outlineHead2
      outlineHead3
      outlineHead4
      outlineBody1
      outlineBody2
      outlineBody3
      outlineBody4
      attention
      memo
    }
    kenchiku:contentfulLicenses(id:"2XYrLWBtIT6nDC2If2N6F8") {
      outlineHead1
      outlineHead2
      outlineHead3
      outlineHead4
      outlineBody1
      outlineBody2
      outlineBody3
      outlineBody4
      attention
      memo
    }
    kankouji:contentfulLicenses(id:"3laKSlwe2SUwdcbUlvlsps") {
      outlineHead1
      outlineHead2
      outlineHead3
      outlineHead4
      outlineBody1
      outlineBody2
      outlineBody3
      outlineBody4
      attention
      memo
    }
    doboku:contentfulLicenses(id:"7aZwgxuYcxOgYX6Jc4r06K") {
      outlineHead1
      outlineHead2
      outlineHead3
      outlineHead4
      outlineBody1
      outlineBody2
      outlineBody3
      outlineBody4
      attention
      memo
    }
    kyuusui:contentfulLicenses(id:"156ZJumUgrNpDwHUxOnv1V") {
      outlineHead1
      outlineHead2
      outlineHead3
      outlineHead4
      outlineBody1
      outlineBody2
      outlineBody3
      outlineBody4
      attention
      memo
    }
    metadata {
      siteName
      siteUrl
    }
  }
</static-query>

<script>
import Hero from '@/components/Hero.vue';
import License from '@/components/licenses/License.vue';
import { documentToHtmlString } from '../../node_modules/@contentful/rich-text-html-renderer';
export default {
  name: 'licenses',
  metaInfo() {
    return {
      titleTemplate: '学べる資格と講習会のご案内｜能セン-学び方を学ぶ-',
      meta: [
        {
          name: 'description',
          content:
            '能センで開催しています講習会の資格「電験三種」「電気工事士」「施工管理技士」「給水」に関する基本情報です。受験資格、試験日、受験申請期間等、資格取得に必須の基本情報を分かりやすく記載しています。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `学べる資格と講習会のご案内｜能セン-学び方を学ぶ-`,
          // content: `学べる資格と講習会のご案内 | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/licenses`,
        },
      ],
    };
  },
  components: {
    Hero,
    License,
  },
  methods: {
    richtextToHTML(content) {
      const richtextString = documentToHtmlString(content)
        .replace(/\n/g, `</br>`)
        .replace(/<a((?: .+?))?>(.*?)<\/a>/g, '<a $1 target="_blank">$2</a>');
      return richtextString;
    },
  },
};
</script>

<style lang="scss" scoped>
.licenses {
  padding-bottom: 100px;
}
.licenses-contents {
  margin-top: 100px;
}
</style>
