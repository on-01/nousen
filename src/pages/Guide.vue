<template>
  <Layout>
    <div class="guide">
      <Hero backImgOver="" backImgUnder="" title="特定商取引法に基づく表記" />
      <div class="contents">
        <section class="section">
          <div class="content">
            <dl>
              <dt>事業所名</dt>
              <dd>株式会社ＮＯＵＳＥＮ</dd>
            </dl>
            <dl>
              <dt>代表</dt>
              <dd>中村 信明</dd>
            </dl>
            <dl>
              <dt>所在地</dt>
              <dd>東京都練馬区豊玉南2-9-6</dd>
            </dl>
            <dl>
              <dt>電話番号</dt>
              <dd>03-5946-9417（代表）　0120-547-284(フリーダイヤル)</dd>
            </dl>
            <dl>
              <dt>FAX</dt>
              <dd>03-5946-9418</dd>
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
                講座費用：各科目ページに記載
                <br />
                テキスト代：能センSHOPに記載
              </dd>
            </dl>
            <dl>
              <dt>商品代金以外の必要料金</dt>
              <dd>
                書籍販売：送料５００円（税込）※合計３０００円以上は無料
                <br />
                代金引換：手数料５５０円（税込）※上記送料に加算
                <br />
                代金引換：５５０円（税込）※上記送料に加算
                <br />
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
              <dd>銀行振込・代金引換・現金払い・カード払い</dd>
            </dl>
            <dl>
              <dt>お支払い期日</dt>
              <dd>原則ご請求日より１０日以内</dd>
            </dl>
            <dl>
              <dt>返品・交換・キャンセル等</dt>
              <dd>
                講習日より３１日前まで：ご入金額の７０％返金
                <br />
                講習日より１５日前まで：ご入金額の５０％返金
                <br />
                講習日１４日前以降：お取消し不可
                <br />
                書籍、工具等商品の不良品は交換対応致します。
                <br />
                オンライン講座は他社のツールを使用する関係で原則キャンセルはできません。
              </dd>
            </dl>
            <dl>
              <dt>返品期限</dt>
              <dd>書籍、工具の返品は到着後７日以内にご連絡下さい</dd>
            </dl>
            <dl>
              <dt>その他</dt>
              <dd>当社に対する強引な販売行為、電話勧誘販売行為、電話営業、その他の営業活動について、
                  <br />
                  就業時間中の対応の場合、有料で対応させていただく場合があります。予めご了承ください。
              </dd>
            </dl>
          </div>
        </section>
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
import Hero from "@/components/Hero.vue";
export default {
  metaInfo() {
    return {
      titleTemplate: "特定商取引法に基づく表記｜能セン-合格への近道-",
      meta: [
        {
          name: "description",
          content:
            "電気、建築、設備関連を中心とした受験対策講習会を開催しています能センのページです。特定商取引法に基づく表記について記載しています。"
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `特定商取引法に基づく表記｜能セン-合格への近道-`
          // content: `特定商取引法に基づく表記 | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/guide`
        }
      ]
    };
  },
  components: {
    Hero
  }
};
</script>

<style lang="scss" scoped>
.guide {
  padding-bottom: 100px;
  font-family: 'メイリオ', sans-serif;
  background: #ebf7ff;
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
  background-color: #fff;
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
