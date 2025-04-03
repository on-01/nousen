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
            様の『反社会的勢力排除宣言』に深く感銘を受け、共感いたしました。
            <br />
            弊社・株式会社NOUSENも同様の宣言を掲げ、反社会的勢力の排除に全力を尽くすことを誓います。
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
            <h4 class="section-contents-title">３．反社会的勢力との関係遮断</h4>
            <div>
              <p>
                当社は、反社会的勢力との関係を一切遮断するために、代表取締役以下、組織全体として断固たる姿勢で一切の取引を遮断します。
              </p>
            </div>
            <h4 class="section-contents-title">
              ４．不当要求の拒絶および法的対応
            </h4>
            <div>
              <p>
                当社は、反社会的勢力からの不当要求は断固拒絶し、民事と刑事の両面から法的措置を講じます。
              </p>
            </div>
            <h4 class="section-contents-title">５．労働契約・雇用契約の禁止</h4>
            <div>
              <p>
                当社は、反社会的勢力による被害を防止するために、反社会的勢力との雇用契約その他一切の労働契約を締結しません。
              </p>
            </div>
            <h4 class="section-contents-title">
              ６．反社会的勢力排除条項の規定
            </h4>
            <div>
              <p>
                当社は、反社会的勢力が取引先となって不当要求を行う場合の被害を防止するため、当社が締結する契約書等に反社会的勢力排除条項を規定するとともに、契約締結後に契約の相手方が反社会的勢力であると判明した場合は契約を解消します。
              </p>
            </div>
            <h4 class="section-contents-title">７．外部専門機関との連携</h4>
            <div>
              <p>
                当社は、警察、暴力団追放運動推進センター、弁護士等の外部専門機関と連携して、反社会的勢力の排除に取り組みます。
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
    margin: 100px auto 0;
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
  .anti-img {
    img {
      display: block;
      margin: 0 auto;
      width: 50%;
    }
  }
</style>
