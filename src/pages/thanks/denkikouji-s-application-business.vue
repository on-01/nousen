<template>
  <Layout>
    <div class="thanks">
      <div class="thanks-inner">
        <p class="thanks-title">お申込み受付いたしました。</p>
        <p class="thanks-text">
          講座のお申込み、ありがとうございます！
          <br />
          ご入力頂きましたメールアドレス宛に確認メールが自動送信されます。
          <br />
          ※メールが届いていない場合は受付できていない可能性がございます。
          <br />
          お問い合せください。
          <br />
          <br />
          能センでは教材発送の梱包に、全て再生紙を使用させていただきます。
          <br />
          （教材が少ない場合はレターパック等でお送りいたします）
        </p>
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
  export default {
    metaInfo() {
      return {
        titleTemplate: "お申込み受付いたしました。｜能セン-合格への近道-",
        meta: [
          {
            name: "description",
            content:
              "電気、建築、設備関連を中心とした受験対策講習会を開催しています能センのページです。",
          },
          {
            key: `og:title`,
            property: `og:title`,
            content: `お申込み受付いたしました。｜能セン-合格への近道-`,
          },
          {
            key: `og:url`,
            property: `og:url`,
            content: `${this.$static.metadata.siteUrl}/guide`,
          },
        ],
      };
    },

    // mounted() {
    //   (function () {
    //     var uqid = "ad5bd9cGM8364M65";
    //     var gid = "228";
    //     var uid =
    //       Date.now().toString(36) + Math.random().toString(36).substr(2, 9);

    //     // 直前のページ（リファラー）のパスからuid2を取得
    //     var referrerPath = new URL(document.referrer).pathname;
    //     var uid2 = referrerPath.replace(/^\/|\/$/g, ""); // パスの前後スラッシュを除去

    //     var af = "";
    //     var pid = "";
    //     var amount = "";

    //     var a = document.createElement("script");
    //     a.src = "//act.gro-fru.net/ac/action_js.php";
    //     a.id = "afadaction-" + Date.now();
    //     a.addEventListener("load", function () {
    //       new fpcAction(a.id).groupAction(
    //         gid,
    //         af,
    //         [uid, uid2],
    //         pid,
    //         amount,
    //         uqid
    //       );
    //     });
    //     document.head.appendChild(a);
    //   })();
    // },
  };
</script>

<style lang="scss" scoped>
  .thanks {
    background-color: #ebf7ff;
    padding: 50px;
  }
  .thanks-inner {
    background-color: white;
    font-family: "メイリオ", sans-serif;
    padding: 30px 0;
    margin: 0 auto;
    max-width: 580px;
  }

  .thanks-title {
    font-size: 28px;
    margin: 0;
    padding-bottom: 10px;
    position: relative;
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
  }

  .thanks-title::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 87%;
    background: gray;
    opacity: 0.5;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .thanks-text {
    text-align: center;
    margin: 20px 0 0;
    line-height: 1.5;
    font-weight: 700;
  }
</style>
