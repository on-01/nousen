<template>
  <section>
    <div class="merumaga-wrap -second">
      <div class="merumaga">
        <form
          name="ml_form_only_in"
          id="ml_form_only_in"
          method="post"
          action="http://xs003050.xsrv.jp/xmailinglist/nousen_news7/mail.php?page=MailReg"
          accept-charset="UTF-8"
        >
          <input type="text" name="add_mail" />
          <input type="button" value="登録する" @click="submitForm" />
          <br />
          <input type="hidden" name="sb_reg" value="" />
          <br />
          <input type="hidden" name="identity" value="*TWDtQn;" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    methods: {
      submitForm() {
        const form = document.forms["ml_form_only_in"];
        form.target = "tml_form";
        form.sb_reg.value = "登録する";
        const orgCharset = document.charset;
        document.charset = "UTF-8";
        window.open(
          "http://xs003050.xsrv.jp/xmailinglist/nousen_news7/mail.php",
          "tml_form",
          "width=400,height=300,menubar=no,toolbar=no"
        );
        form.submit();
        document.charset = orgCharset;
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
    padding: 1em 4rem 2rem;
    max-width: 942px;
    background-color: white;
    @media print, screen and (max-width: 1000px) {
      padding: 1rem 2rem;
    }
  }
</style>
