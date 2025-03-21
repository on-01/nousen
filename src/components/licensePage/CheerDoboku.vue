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

      <div class="cheer-topImg">
        <img
          src="../../assets/img/license_page/doboku_s/doboku_cheer_1.jpg"
          alt="２級土木施工管理技士 講習会 通信講座 web講座"
        />
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
    border-bottom: 5px solid #1262b2;
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

  .cheer-topImg {
    img {
      display: block;
      margin: 0 auto;
      width: 65%;
      @media print, screen and (max-width: 768px) {
        width: 80%;
      }
      @media print, screen and (max-width: 480px) {
        width: 86%;
      }
    }
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
