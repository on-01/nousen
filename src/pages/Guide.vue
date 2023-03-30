<template>
  <Layout>
    <div class="guide">
      <Hero backImgOver="" backImgUnder="" title="特定商取引法に基づく表記" />
      <div class="contents">
        <section class="section">
          <div class="content">
            <dl>
              <dt>事業所名</dt>
              <dd>一般社団法人 能力開発研修センター</dd>
            </dl>
            <dl>
              <dt>代表理事</dt>
              <!-- <dd>櫛田 静代</dd> -->
              <dd>矢澤 健太郎</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>東京都江東区南砂2-6-3 サンライズ東陽ビル4Ｆ</dd>
            </dl>
            <dl>
              <dt>電話番号</dt>
              <dd>03-5632-6011</dd>
            </dl>
            <dl>
              <dt>FAX</dt>
              <dd>03-5632-6022</dd>
            </dl>
            <dl>
              <dt>電話受付時間</dt>
              <dd>9:00〜18:00</dd>
            </dl>
            <dl>
              <dt>ホームページ</dt>
              <dd>https://www.nouryoku.com</dd>
            </dl>
            <dl>
              <dt>販売価格</dt>
              <dd>
                講習費用：各科目講習会ページに記載<br />
                テキスト代・工具代：各販売ページに記載
              </dd>
            </dl>
            <dl>
              <dt>商品代金以外の必要料金</dt>
              <dd>
                <!-- 書籍販売：送料７００円（税別）※合計２万円超は無料<br> -->
                書籍販売：送料５００円（税別）※合計２万円超は無料<br />
                工具販売：送料１０００円（税別）<br />
                代金引換：５００円（税別）※上記送料に加算<br />
                通信添削：提出数量に応じた通信料（切手代）
              </dd>
            </dl>
            <dl>
              <dt>引き渡し時期</dt>
              <dd>
                ご入金確認後受講書類、教材を発送（テキスト改訂時は納品次第）
              </dd>
            </dl>
            <dl>
              <dt>お支払方法</dt>
              <dd>銀行振込</dd>
            </dl>
            <dl>
              <dt>お支払い期日</dt>
              <dd>原則ご請求日より１０日以内</dd>
            </dl>
            <dl>
              <dt>返品・交換・キャンセル等</dt>
              <dd>
                講習日より３１日前まで：ご入金額の７０％返金<br />
                講習日より１５日前まで：ご入金額の５０％返金<br />
                講習日１４日前以降：お取消し不可<br />
                書籍、工具等商品の不良品は交換対応致します。<br />
                オンライン講座は他社のツールを使用する関係で原則キャンセルはできません。
              </dd>
            </dl>
            <dl>
              <dt>返品期限</dt>
              <dd>書籍、工具の返品は到着後７日以内にご連絡下さい</dd>
            </dl>
          </div>
        </section>
        <p class="alert">令和３年８月１８日　書籍販売の送料変更</p>
        <p class="alert">令和４年４月１日　代表理事変更</p>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
		siteDescription
  }
}
</static-query>

<script>
import Hero from '@/components/Hero.vue';
export default {
  metaInfo() {
    return {
      titleTemplate: '特定商取引法に基づく表記｜能セン-学び方を学ぶ-',
      meta: [
        {
          name: 'description',
          content:
            '電気、建築、設備関連を中心とした受験対策講習会を開催しています能セン（能力開発研修センター）のページです。特定商取引法に基づく表記について記載しています。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `特定商取引法に基づく表記｜能セン-学び方を学ぶ-`,
          // content: `特定商取引法に基づく表記 | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/guide`,
        },
      ],
    };
  },
  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped>
.guide {
  padding-bottom: 100px;
}
.contents {
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
  }
}
.section {
  background-color: #f9f9f9;
  margin: 0 auto;
  padding: 50px;
  @media print, screen and (max-width: 1000px) {
    padding: 50px 5%;
  }
}
dl {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  padding: 0.5em 0;
  @media print, screen and (max-width: 1000px) {
    display: block;
  }
}
dl + dl {
  border-top: 1px dashed #808080;
}
dt {
  width: 200px;
  color: #ed6c00;
  font-weight: bold;
  @media print, screen and (max-width: 1000px) {
    width: 100%;
  }
}
dd {
  width: calc(100% - 200px);
  margin: 0;
  padding: 0;
  @media print, screen and (max-width: 1000px) {
    width: 100%;
  }
}
.content {
  margin: 50px 0;
  border-top: 1px dashed #808080;
  border-bottom: 1px dashed #808080;
}
.alert {
  text-align: center;
  font-size: 14px;
}
</style>
