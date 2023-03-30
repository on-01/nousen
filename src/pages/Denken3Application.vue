<template>
  <Layout>
    <div class="denken3-application">
      <header class="header">
        <Hero
          title="第三種電気主任技術者（電験三種）<br>講習会お申し込み"
          color="#e60039"
        />
      </header>
      <div class="contents">
        <iframe
          class="google_form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf0yJEv3gFnvg7Irw92c-w0vQGoM9z1fgDpKfMDiAWSDfYEKA/viewform?embedded=true"
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
    siteUrl
  }
}
</static-query>

<script>
import Hero from '@/components/Hero.vue';
export default {
  name: 'denken3_application',
  metaInfo() {
    return {
      titleTemplate: '第三種電気主任技術者お申し込みフォーム｜能セン-学び方を学ぶ-',
      meta: [
        {
          name: 'description',
          content:
            '能セン受験対策講習会「第三種電気主任技術者（電験三種）」のお申し込みフォームです。通学講座、オンライン講座、通信講座共にこちらのフォームからお申込み頂けます。経験豊富な講師陣のポイントを絞った的確な講義をぜひ一度ご体験ください。',
        },
        {
          key: `og:title`,
          property: `og:title`,
          // content: `第三種電気主任技術者お申し込みフォーム | ${
          //   this.$static.metadata.siteName
          // }`,
          content: `第三種電気主任技術者お申し込みフォーム｜能セン-学び方を学ぶ-`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/denken3-application`,
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
// .denken3-application {
// padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>
