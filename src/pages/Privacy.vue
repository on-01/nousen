<template>
  <Layout>
    <div class="privacy">
      <Hero
        backImgOver=""
        backImgUnder=""
        title="プライバシー・ポリシー"
      />
      <div class="contents">
        <section class="section">
          <p class="section-comment">一般社団法人 能力開発研修センターは、以下のようにプライバシーポリシーを定めます。</p>
          <div class="content">
            <h4 class="section-contents-title">
              用語の定義
            </h4>
            <div>
              <p>
                本プライバシーポリシーにおいて個人情報とは、受講番号、氏名、性別、電話番号、住所、会社名、部署名、役職、メールアドレス、受講（購入）履歴、その他連絡先に関する情報のうち、一つまたは複数の組み合わせにより特定の個人を識別することができる情報をいいます。
              </p>
            </div>
          </div>
          <div class="content">
            <h4 class="section-contents-title">
              個人情報の利用について
            </h4>
            <div>
              <p>
                お客様の管理<br>
                各種問い合わせ、アフターサービス対応<br>
                料金の課金、請求<br>
                教材、必要書類等の送付<br>
                商品の案内書送付、ご連絡
              </p>
            </div>
          </div>
          <div class="content">
            <h4 class="section-contents-title">
              個人情報の提供について
            </h4>
            <div>
              <p>
                （一社）能力開発研修センターは、個人情報を適切に保護し、個人情報保護法その他の法令等により認められた場合を除き、個人識別が可能な状態で同意なく第三者に開示、提供することはありません。
              </p>
            </div>
          </div>
          <div class="content">
            <h4 class="section-contents-title">
              プライバシーポリシーの更新について
            </h4>
            <div>
              <p>
                （一社）能力開発研修センターは、個人情報保護を図るため、法令等の変更や必要に応じて、本プライバシーポリシーを改訂する事があります。その際は最新のプライバシーポリシーを本ウェブサイトに掲載いたします。
              </p>
            </div>
          </div>
          <div class="credit">
            以上<br>
            平成17年 3月31日 制定
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
import Hero from '@/components/Hero.vue';
export default {
  metaInfo() {
    return {
      titleTemplate: 'プライバシーポリシー｜能セン-学び方を学ぶ-',
      meta: [
					{
					name: 'description', content: '電気、建築、設備関連を中心とした受験対策講習会を開催しています能セン（能力開発研修センター）のページです。プライバシーポリシーについて記載しています。'
				},
        {
          key: `og:title`,
          property: `og:title`,
          content: `プライバシーポリシー｜能セン-学び方を学ぶ-`,
          // content: `プライバシーポリシー | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/privacy`,
        },
      ]
    }
  },
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
.privacy {
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
.section-comment {
  text-align: center;
  font-size: 17px;
  margin-bottom: 50px;
}
.section-contents-title {
  color: #ed6c00;
  font-weight: bold;
}
.content {
  padding: 20px 0;
}
.content:first-of-type {
  border-top: 1px dashed #808080;
}
.content + .content {
  border-top: 1px dashed #808080;
}
.credit {
  text-align: right;
  padding-top: 50px;
  border-top: 1px dashed #808080;
}
</style>