<template>
  <section>
    <div class="merumaga-wrap -second">
      <div class="merumaga">
        <p class="merumaga-title">メルマガ資格情報サービス</p>
        <p class="merumaga-text">
          能センのメールマガジンでは、第三種電気主任技術者に関する最新情報や試験対策、勉強法、申請手続きなど、資格取得に役立つ様々な情報を定期的にお届けします。
          <br />
          <br />
          <span>試験情報</span>
          ：最新の試験日程や受験資格、申請方法について
          <br />
          <span>試験対策</span>
          ：効果的な学習方法や過去問、模擬試験などの勉強リソース
          <br />
          <span>資格取得のメリット</span>
          ：資格取得後のキャリアアップや転職活動に役立つ情報
          <br />
          <span>キャンペーン情報</span>
          ：教材や通信講座の割引情報、講習会のご案内など
          <br />
          <br />
          このメールマガジンを購読することで、第三種電気主任技術者の資格取得を目指す方々にとって有益な情報をいち早くキャッチし、スムーズに目標を達成する手助けとなります。
          <br />
          ぜひご登録いただき、資格取得の一歩を踏み出してください！
        </p>
        <div class="merumaga-form">
          <img
            src="../../assets/img/license_page/merumaga-img.jpg"
            alt="電験三種 第三種電気主任技術者"
          />
          <form
            ref="mlForm"
            method="post"
            action="http://xs003050.xsrv.jp/xmailinglist/nousen_news7/mail.php?page=MailReg"
            accept-charset="UTF-8"
          >
            <input type="text" v-model="email" name="add_mail" />
            <input
              type="button"
              value="登録する"
              @click="MLFormSubmitOnlyIn('登録する')"
            />
            <input type="hidden" name="sb_reg" v-model="sbReg" />
            <input type="hidden" name="identity" value="*TWDtQn;" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        sbReg: "",
      };
    },
    methods: {
      MLFormSubmitOnlyIn(strButton) {
        this.sbReg = strButton;

        // 新しいウィンドウを開く
        const formWindow = window.open(
          "http://xs003050.xsrv.jp/xmailinglist/nousen_news7/mail.php",
          "tml_form",
          "width=400,height=300,menubar=no,toolbar=no"
        );

        // フォームを送信
        this.$refs.mlForm.target = "tml_form";
        this.$refs.mlForm.submit();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .merumaga-wrap {
    max-width: 100%;
    width: 100%;
    font-family: "Meiryo", sans-serif;
    background-color: #fff;
    margin: 20px auto 0;
    z-index: 0;
    position: relative;
  }
  .merumaga-wrap.-second {
    margin-top: 50px;
    background-color: #ebf7ff;
  }
  .merumaga {
    margin: 0 auto;
    padding: 2em 4rem;
    max-width: 942px;
    background-color: white;
    @media print, screen and (max-width: 1000px) {
      padding: 1rem 2rem;
    }
  }

  .merumaga-title {
    font-size: 28px;
    margin: 0;
    position: relative;
    font-weight: 700;
    text-align: center;
  }

  .merumaga-title::after {
    position: absolute;
    content: "";
    width: 200px;
    height: 4px;
    background: #ed6c00;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .merumaga-text {
    margin: 30px auto 0;
    max-width: 980px;

    span {
      font-weight: 700;
    }
  }

  .merumaga-form {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    img {
      width: 60px;
      margin-right: 10px;
    }
  }

  form {
    display: flex;
    align-items: center;
  }
</style>
