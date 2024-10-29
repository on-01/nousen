<template>
  <div class="application">
    <a :href="personalFormLink" class="application-link -left">
      {{ personalFormText }}
      <IconBase class="icon" width="25" height="25">
        <IconFingerRight />
      </IconBase>
    </a>
    <a :href="businessFormLink" class="application-link -right">
      {{ businessFormText }}
      <IconBase class="icon" width="25" height="25">
        <IconFingerRight />
      </IconBase>
    </a>
    <p class="fax-link">
      <a href="../../assets/img/company/sanshu.pdf" target="_blank">
        FAXお申込み用紙(PDF)
      </a>
    </p>
  </div>
</template>

<script>
  import IconBase from "@/components/IconBase.vue";
  import IconFingerRight from "@/components/icons/IconFingerRight.vue";
  export default {
    props: {
      personalFormText: {
        type: String,
        default: "講習会へのお申し込み（個人）",
      },
      businessFormText: {
        type: String,
        default: "講習会へのお申し込み（法人）",
      },
      personalFormLink: String,
      businessFormLink: String,
      faxLink: String,
    },
    components: {
      IconBase,
      IconFingerRight,
    },
  };
</script>

<style lang="scss" scoped>
  .application {
    font-weight: bold;
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
    font-size: 18px;
    @media print, screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  .application-link {
    margin: 0 auto;
    color: #fff;
    max-width: 400px;
    width: 100%;
    padding: 20px 50px;
    text-align: center;
    background-color: #ed6c00;
    border: 3px solid #ed6c00;
    border-radius: 10px;
    @media print, screen and (max-width: 1000px) {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      padding: 10px;
      width: 90%;
    }
  }
  .application-link.-right {
    margin-left: 0.5%;
    @media print, screen and (max-width: 1000px) {
      margin-left: auto;
    }
  }
  .application-link.-left {
    margin-right: 0.5%;
    @media print, screen and (max-width: 1000px) {
      margin-right: auto;
    }
  }
  .fax-link {
    margin-top: 50px;
    color: #ed6c00;
    text-decoration: underline;
  }
</style>
