<template>
  <Layout>
    <div class="contact">
      <header class="header">
        <Hero
          title="お問い合わせ"
          color="#ed6c00;"
        />
      </header>
      <div class="contents">
        <iframe class="google_form" src="https://docs.google.com/forms/d/e/1FAIpQLSexR1sxJSfJf1laTV8yLEKdD_VftspGFHMFkZwS1K_7nWUIoA/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  </Layout>
</template>


<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import Hero from '@/components/Hero.vue';
export default {
  name: "contact",
  metaInfo() {
    return {
      titleTemplate: 'お問い合わせフォーム｜能セン-学び方を学ぶ-',
      meta: [
					{
					name: 'description', content: '電気、建築、設備関連を中心とした受験対策講習会を開催しています能セン（能力開発研修センター）です。ご質問や資料請求等はこちらのフォームからお気軽にお問い合わせください。'
				},
        {
          key: `og:title`,
          property: `og:title`,
          content: `お問い合わせフォーム｜能セン-学び方を学ぶ-`,
          // content: `お問い合わせ | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/contact`,
        },
      ]
    }
  },
  components: {
    Hero,
  },
}
</script>

<style lang="scss" scoped>
// .contact {
  // padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>
