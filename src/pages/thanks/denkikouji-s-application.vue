<template>
  <Layout>
    <div class="thanks">
      <div class="thanks-inner">
        <p class="thanks-title">お申込み受付いたしました。</p>
        <p class="thanks-text">
          お申込みありがとうございます。
          <br />
          ここから新しい一歩が始まります。目標達成に向けて、
          <br />
          最後までしっかりサポートいたします。
          <br />
          能センでは教材発送の梱包に、全て再生紙を使用させていただきます。
          <br />
          （教材が少ない場合はレターパック等でお送りいたします。）
        </p>
      </div>
    </div>
    <!-- A8ネット 成果タグ -->
    <span id="a8sales"></span>
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
    mounted() {
      // A8ネット 成果タグ
      const script1 = document.createElement("script");
      script1.src = "//statics.a8.net/a8sales/a8sales.js";
      script1.onload = () => {
        if (typeof a8sales === "function") {
          a8sales({
            pid: "s00000027188001",
            order_number: "",
            currency: "JPY",
            items: [
              {
                code: "a8",
                price: 1,
                quantity: 1,
              },
            ],
            total_price: 1,
          });
        }
      };
      document.body.appendChild(script1);

      // AFI-B用のユーザー識別IDを生成（NG文字を削除）
      const sanitizeUserId = (str) => {
        if (!str) return "";
        // OK文字のみ残す: 英数字（a-z, A-Z, 0-9）と . - _ *
        // NG文字を削除: 日本語、? ! & "" ' \ / % # + = $ { } [ ] ; : | スペースなど
        let sanitized = str.replace(/[^a-zA-Z0-9.-_*]/g, "");
        // 先頭・最後の半角/全角スペースを削除（念のため）
        sanitized = sanitized.replace(/^[\s\u3000]+|[\s\u3000]+$/g, "");
        return sanitized;
      };

      const userId = sanitizeUserId("");

      // AFI-B LPCV CV タグ
      if (!window.afblpcvCvConf) {
        window.afblpcvCvConf = [];
      }
      window.afblpcvCvConf.push({
        siteId: "cd77d6d9",
        commitData: {
          pid: "Q15743i",
          u: userId || "", // 注文番号からNG文字を削除した値
        },
      });

      const script2 = document.createElement("script");
      script2.src =
        "https://t.afi-b.com/jslib/lpcv.js?cid=cd77d6d9&pid=Q15743i";
      script2.async = true;
      document.body.appendChild(script2);
    },
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
    text-align: left;
    margin: 20px 0 0;
    line-height: 1.5;
    font-weight: 500;
    padding: 0 34px;

    @media print, screen and (max-width: 768px) {
      padding: 16px;
    }
  }
</style>
