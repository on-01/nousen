<template>
  <Layout>
    <div class="kyuusui-application">
      <header class="header">
        <Hero
          title="給水装置工事主任技術者<br>講習会お申し込み"
          color="#00afcc"
        />
      </header>
      <div class="contents">
        <iframe
          class="google_form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdoJXRLYQyQpcKjhnPHU6JDqiup96h4w_NIHiR_fadmAh7xKQ/viewform?embedded=true"
          width="100%"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >読み込んでいます…</iframe
        >
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
export default {
  name: 'kyuusui_application',
  metaInfo() {
    return {
      titleTemplate: '給水装置工事主任技術者お申し込みフォーム｜能セン-学び方を学ぶ-',
      meta: [
        {
          name: 'description',
          content:
            '能セン受験対策講習会「給水装置工事主任技術者」のお申し込みフォームです。経験豊富な講師陣のポイントを絞った的確な講義をぜひ一度ご体験ください。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `給水装置工事主任技術者お申し込みフォーム｜能セン-学び方を学ぶ-`,
          // content: `給水装置工事主任技術者講習会お申し込み | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/kyuusui-application`,
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
// .kyuusui-application {
// padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>
