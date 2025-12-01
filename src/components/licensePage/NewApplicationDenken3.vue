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
    <div class="experience-link">
      <a class="application-link -blue">
        無料体験講座（基礎の基礎）お申込み
        <IconBase class="icon" width="25" height="25">
          <IconFingerRight />
        </IconBase>
      </a>
    </div>
    <p class="fax-link" v-if="faxLink">
      <a :href="faxLink" target="_blank">FAXお申込み用紙(PDF)</a>
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
        default: "講習会へのお申込み（個人）",
      },
      businessFormText: {
        type: String,
        default: "講習会へのお申込み（法人）",
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
    // background-color: #ff4500;
    // border: 3px solid #ff4500;
    background-color: #1262b2;
    border: 3px solid #1262b2;
    box-shadow: 4px 4px 10px rgba(0, 47, 77, 0.3);
    border-radius: 10px;
    @media print, screen and (max-width: 1000px) {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      padding: 10px;
      width: 90%;
    }
  }
  .application-link.-blue {
    background-color: #1262b2;
    border: 3px solid #1262b2;
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
    margin-top: 60px;
    color: #ed6c00;
    text-decoration: underline;
  }
  .experience-link {
    margin-top: 60px;
  }
</style>
