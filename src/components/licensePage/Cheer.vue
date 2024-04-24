<template>
  <div class="cheer">
    <div class="cheer-inner">
      <div class="cheer-section">
        <div class="cheer-description">
          <p class="cheer-title" v-html="text"></p>
          <p class="cheer-line"></p>
        </div>
        <figure class="cheer-image">
          <g-image :src="imagePath" :alt="altText" />
        </figure>
      </div>
      <div class="bg-white_type2">
        <div class="exam-link-wrapper">
          <div class="exam-link-flex">
            <g-link to="/denken3-application" class="application-form-link">
              お申込みはこちら（個人）
              <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
            </g-link>
            <g-link
              to="/denken3-application-business"
              class="application-form-link"
            >
              お申込みはこちら（法人）
              <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
            </g-link>
          </div>

          <!-- <figure class="credit-image">
                <img src="../assets/img/common/credit.jpg" />
              </figure> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      imagePath: String,
      altText: String,
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
  .cheer-image {
    width: 48%;
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
    background: #249ef0;
    margin: 0 auto 20px;
    border-radius: 8px;
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
      width: 100%;
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
    border-bottom: 5px solid #1d9bf0;
  }
</style>
