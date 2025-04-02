<template>
  <Layout>
    <div class="privacy">
      <Hero backImgOver="" backImgUnder="" title="反社会的勢力排除宣言" />
      <div class="anti-img">
        <img
          src="../assets/img/license_page/anti.jpg"
          alt="反社会的勢力排除宣言"
        />
      </div>
      <div class="contents">
        <section class="section">
          <p class="section-comment">
            <a
              href="https://corekara.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              株式会社これから
            </a>
            様のサイトに掲載されている『反社会的勢力排除宣言』に深い感銘を受け、これに共感いたしました。
            <br />
            このたび、弊社である株式会社NOUSENも同様の宣言を掲げ、反社会的勢力の排除に全力を尽くすことをお誓いいたします。
          </p>
          <div class="content">
            <p>
              株式会社NOUSENは、企業としての社会的責任、コンプライアンスおよび企業防衛の観点から、
              ここに、反社会的勢力を排除することを宣言します。
            </p>
            <h4 class="section-contents-title">
              １．反社会的勢力の排除に関する姿勢
            </h4>
            <div>
              <p>
                当社は、暴力団、暴力団構成員、暴力団準構成員、暴力団関係企業、総会屋、社会運動標ぼうゴロ、特殊知能暴力集団、詐欺、特殊詐欺等の反社会的勢力（以下、「反社会的勢力」という）と、一切の関係を遮断
                します。
              </p>
            </div>
            <h4 class="section-contents-title">
              2. 詐欺・または詐欺的行為について
            </h4>
            <div>
              <p>
                刑法上の「詐欺」は人を騙して経済価値を交付させる反社会的犯罪行為であり、詐欺を犯す詐欺師や詐欺会社は反社会的勢力である。
                <br />
                弊社は個人・法人問わず詐欺的行為には断固とした対応を行います。
              </p>
            </div>
          </div>
          <div class="credit">
            令和６年１月１日
            <br />
            株式会社NOUSEN
            <br />
            代表　中村信明
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
        titleTemplate: "反社会的勢力排除宣言｜能セン-合格への近道-",
        meta: [
          {
            name: "description",
            content:
              "電気、建築、設備関連を中心とした受験対策講習会を開催しています能センのページです。反社会的勢力排除宣言について記載しています。",
          },
          {
            key: `og:title`,
            property: `og:title`,
            content: `反社会的勢力排除宣言｜能セン-合格への近道-`,
            // content: `プライバシーポリシー | ${this.$static.metadata.siteName}`,
          },
          {
            key: `og:url`,
            property: `og:url`,
            content: `${this.$static.metadata.siteUrl}/AntiSocialForce`,
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
  .privacy {
    padding-bottom: 100px;
    background: #ebf7ff;
  }
  .contents {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    @media print, screen and (max-width: 1000px) {
      width: 90%;
    }
  }
  .section {
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
