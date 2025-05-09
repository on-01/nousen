<template>
  <div class="cheer">
    <div class="cheer-inner">
      <!-- <div class="cheer-section">
        <p class="cheer-title" v-html="text"></p>
      </div> -->

      <div class="cheer-topImg">
        <img
          src="../../assets/img/license_page/denken3/denken3_cheer_1.jpg"
          alt="電験三種 講習会 通信講座 オンライン講座"
        />
      </div>
      <div class="experience-link">
        <a
          class="application-link -blue"
          href="https://business.form-mailer.jp/fms/d8f3692b263372"
        >
          無料体験講座（基礎の基礎）お申込み
          <IconBase class="icon" width="25" height="25">
            <IconFingerRight />
          </IconBase>
        </a>
      </div>

      <!-- <figure class="cheer-image">
        <a href="https://denken.nouryoku.com/denke3-honkidegokaku">
          <g-image :src="imagePath" :alt="altText" />
        </a>
      </figure> -->
      <!-- <div class="bg-white_type2">
        <div class="exam-link-wrapper">
          <div class="exam-link-flex">
            <g-link to="/denken3-application" class="application-form-link">
              お申込みはこちら（個人）
            </g-link>
            <g-link
              to="/denken3-application-business"
              class="application-form-link"
            >
              お申込みはこちら（法人）
            </g-link>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import IconBase from "@/components/IconBase.vue";
  import IconFingerRight from "@/components/icons/IconFingerRight.vue";

  export default {
    props: {
      text: String,
      imagePath: String,
      altText: String,
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
  .cheer {
    width: 100%;
    background-color: #fff;
    margin: 0px auto;
    font-family: "メイリオ", sans-serif;
    padding-bottom: 60px;
  }
  .cheer-inner {
    max-width: 1170px;
    width: 100%;
    padding: 40px 0 60px;
    margin: 0 auto;
  }

  .cheer-section {
    display: flex;
    justify-content: space-between;
  }

  .cheer-topImg {
    img {
      display: block;
      margin: 0 auto;
      width: 49%;
      @media print, screen and (max-width: 768px) {
        width: 60%;
      }
      @media print, screen and (max-width: 480px) {
        width: 86%;
      }
    }
  }
  .cheer-image {
    // width: 48%;
    // width: 72%;
    width: 65%;
    margin: 0 auto;
  }
  .cheer-description {
    width: 48%;
  }

  .cheer-title {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 28px;
    padding-left: 8px;
    line-height: 2;
  }
  .cheer-line {
    width: 50%;
    height: 4px;
    background: #1262b2;
    margin: 0 auto 20px;
    border-radius: 8px;
  }

  .experience-link {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
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
    font-weight: 700;
    svg {
      margin-top: -3px;
    }
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

  @media print, screen and (max-width: 1200px) {
    .cheer-title {
      font-size: 42px;
    }
  }

  @media print, screen and (max-width: 980px) {
    .cheer {
      padding-top: 20px;
    }
    .cheer-section {
      flex-wrap: wrap;
    }
    .cheer-inner {
      padding-top: 0px;
    }
    .cheer-image {
      width: 80%;
      margin-top: 40px;
    }
    .cheer-image img {
      display: block;
      margin: 0 auto;
    }
    .cheer-description {
      width: 90%;
      margin-top: 20px;
      padding-right: 0;
      margin: 0 auto;
    }
    .cheer-line {
      width: 20%;
    }
    .cheer-title {
      font-size: 30px;
      padding-left: 0;
      padding-top: 0;
    }
  }

  @media print, screen and (max-width: 480px) {
    .cheer-line {
      width: 40%;
    }
  }

  .denken3 .cheer {
    border-bottom: 5px solid #1262b2;
  }

  .exam-link-wrapper {
    text-align: center;
    padding: 30px 0 10px 0;
    display: flex;
    flex-direction: column;
    @media print, screen and (max-width: 1000px) {
      padding: 40px 0 0 0;
    }
  }

  .exam-link-flex {
    display: flex;
    margin: 0 auto;
    @media print, screen and (max-width: 768px) {
      flex-wrap: wrap;
      max-width: 480px;
      justify-content: center;
      row-gap: 25px;
    }
  }

  .application-form-link {
    // background-color: #ed6c00;
    background-color: #ff4500;
    margin-top: 25px;
    width: 370px;
    padding: 14px 30px;
    @media print, screen and (max-width: 900px) {
      width: 300px;
    }

    @media print, screen and (max-width: 480px) {
      width: 90%;
    }
  }

  .exam-link,
  .application-form-link,
  .online-link {
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    margin: 0 20px;
    font-size: 17px;
    box-sizing: border-box;
    font-family: "メイリオ", sans-serif;
    @media print, screen and (max-width: 370px) {
      padding: 7px 15px;
      width: 80%;
    }
  }
</style>
