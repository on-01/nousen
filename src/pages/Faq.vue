<template>
  <Layout>
    <div class="faq">
      <Hero
        :backImgOver="require('../assets/img/faq/faq_hero.jpg')"
        :backImgUnder="require('../assets/img/faq/faq_hero_sp.jpg')"
        title="よくあるご質問"
      />
      <div class="contents">
        <p class="intro">
          よくお寄せ頂くご質問にQ&amp;A形式でお答えしています。<br>
          その他のお問合せもどうぞお気軽にご連絡ください。
        </p>
        <FaqCard
          qText="どのような申込方法があるか教えて下さい。"
          aText="FAX、当ホームページから受け付けております。">
          再受講や別の科目の追加申し込みなどはお電話で可能な場合もありますのでご連絡下さい。
        </FaqCard>
        <FaqCard
          qText="申し込みの締め切りはありますか？"
          aText="講習直前まで受け付けております。">
          能センでは、合格のために早期の学習スタートをお勧めしております。また、各会場が定員に達し次第受付を終了とさせて頂いておりますのでお早目のお申し込みをお待ちしております。
        </FaqCard>
        <FaqCard
          qText="受験資格があるか知りたいのですが…。"
          aText="各試験実施機関のＨＰ、又は試験実施機関が発行している「受験の手引き」をご覧ください。">
          当ホームページの各講座のページに試験センターへのリンクがございます。基本的な内容でしたら能センまでお気軽にお問い合わせ下さい。
        </FaqCard>
        <FaqCard
          qText="申し込み後の流れを教えて下さい。"
          aText="請求書及び前納をご希望の方はご入金確認後に教材・受講書類を発送致します。コレクト便をご希望の方は受付後すぐに代金引換で教材・受講書類を発送致します。">
          講習会開催まで事前学習で下地を養って下さい。
        </FaqCard>
        <FaqCard
          qText="申し込んだ日程の都合が悪くなってしまったのですが、キャンセルはできますか？"
          aText="申し訳ございませんが、ご入金後のキャンセルはキャンセル料が発生してしまいます。">
          講習会初日より起算して以下の日数からキャンセル料が発生致します。<br>
          教材をお引き取り頂いた上で下記の内容でのご返金となります。<br>
          ● 入金後～講習日31日前  ・・・ 70％ご返金。<br>
          ● 講習日30日前～15日前 ・・・ 50％ご返金。<br>
          ● 講習日14日前～当日     ・・・ キャンセルできません。<br>
          受講者様のご変更や、他に会場がある場合のご変更、来年度への移行等は対応可能ですのでお気軽にお問い合わせください。<br>
          次年度へ持越の場合はテキスト代・資料代を別途ご負担頂きます。
        </FaqCard>
        <FaqCard
          qText="受講証、教材を紛失してしまったのですが…。"
          aText="お電話ください。受講証は再発行致します。">
          教材につきましては再度ご購入頂く場合もございますので何卒ご了承ください。
        </FaqCard>
        <FaqCard
          qText="検定試験の申込代行もしてもらえますか？"
          aText="本試験のお申し込みに関しましては、当センターでは行っておりません。">
          資格によってはご希望の受講者様に願書のお取り寄せサービスがございますが、受験申請はご自身で行って頂きますようお願い致します。
        </FaqCard>
        <FaqCard
          qText="講習会場に駐車場はありますか？"
          aText="能センでは都市部の会場を中心に講習会を開催しております関係上、原則として公共の交通機関の利用をお勧めしております。">
          駐車場の有無、また利用方法は会場により異なりますので、お車でご来場される方は直接各会場の管理事務所等にお問い合わせください。
        </FaqCard>
        <FaqCard
          qText="席は指定ですか？"
          aText="原則来場順の自由席となります。">
          前方等、希望のお席がある方はお早めにご来場ください。<br>
          受付は通常開始時間の1時間前から行っております。
        </FaqCard>
        <FaqCard
          qText="講習会への持ち物、また適した服装があれば教えてください。"
          aText="持ち物は全講座共通といたしましては教材、筆記用具です。他、電卓や工具をご持参頂く講座もございます。">
          詳しくは教材と一緒にお送りします学習要綱に記載しておりますので必ずご確認下さい。<br>
          服装に関しましては、特に指定はございません。技能の講習を受けられる方は作業のしやすい服装をお勧め致します。
        </FaqCard>
        <FaqCard
          qText="講習会の空き状況を知りたい。"
          aText="ホームページの開催日程に随時更新してお知らせしておりますのでどうぞご覧下さい。">
          お電話等でもお気軽にお問い合わせください。
        </FaqCard>
        <FaqCard
          qText="支払方法について。クレジットカードは利用できますか？"
          aText="申し訳ありませんがクレジットカードのお取り扱いは行っておりません。">
          銀行振込、またはコレクト便（代金引換）でのお支払いが可能となっております。<br>
          みずほ銀行、三菱UFJ銀行、三井住友銀行、ゆうちょ銀行の口座をご用意しております。
        </FaqCard>
        <FaqCard
          qText="CPDSとはなんですか？"
          aText="一般社団法人全国土木施工管理技士会連合会が運営しています土木施工管理技士の技術力および資質の向上を目的とした継続学習制度です。">
          講習会など学習の記録を登録し、必要な場合に学習履歴の証明書を発行するシステムで能センでも１・２級土木施工管理技士の一部の講座は指定を受けております。<br>
          <a href="https://www.ejcm.or.jp/about-cpds/" target="_blank">詳しくはこちらのサイト</a>をご覧ください。
        </FaqCard>
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
import FaqCard from '@/components/faq/FaqCard.vue';
export default {
  metaInfo() {
    return {
      titleTemplate: 'よくあるご質問｜能セン-学び方を学ぶ-',
      meta: [
					{
					name: 'description', content: '電気、建築、設備関連を中心とした受験対策講習会を開催しています能セン（能力開発研修センター）のホームページです。よくお寄せ頂くご質問にQ&A形式でお答えしています。'
				},
        {
          key: `og:title`,
          property: `og:title`,
          content: `よくあるご質問｜能セン-学び方を学ぶ-`,
          // content: `よくあるご質問 | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/faq`,
        },
      ]
    }
  },
  components: {
    Hero,
    FaqCard
  }
}
</script>

<style lang="scss" scoped>
.faq {
  padding-bottom: 100px;
}
.contents {
  max-width: 730px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
  }
}
.intro {
  padding: 100px 0;
  text-align: center;
  font-weight: bold;
  @media print, screen and (max-width: 1000px) {
    padding: 50px 0;
  }
}
</style>