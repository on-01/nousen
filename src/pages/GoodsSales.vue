<template>
  <Layout>
    <div class="goods-sales">
      <header class="header">
        <Hero title="能センSHOP" color="#999" />
      </header>
      <div class="contents">
        <iframe
          class="google_form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScD2DrftYYKyH7Dj2UZtS13c7mDaIM9Uj_XVng3agIjVj3fEg/viewform?embedded=true"
          width="100%"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          読み込んでいます…
        </iframe>
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
import Hero from "@/components/Hero.vue";
export default {
  name: "goods-sales",
  metaInfo() {
    return {
      titleTemplate: "能センSHOP｜能セン-合格への近道-",
      meta: [
        {
          name: "description",
          content:
            "能センで実施している講習のオリジナルテキストを販売しています。こちらのフォームよりご購入頂けます。電気工事士で使用する工具もご購入頂けます。試験はもちろん実践用として長年使える工具をご紹介しています。"
        },
        {
          key: `og:title`,
          property: `og:title`,
          // content: `テキスト・工具販売 | ${this.$static.metadata.siteName}`,
          content: `能センSHOP｜能セン-合格への近道-`
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/goods-sales`
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
// .goods-sales {
// padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>
