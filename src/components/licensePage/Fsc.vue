<template>
  <div class="fsc">
    <div class="fsc-inner">
      <div class="fsc-flex">
        <div class="fsc-flex-left">
          <img
            class="fsc-flex-image"
            src="../../assets/img/license_page/denken3/fsc.png"
            alt="電験三種 講習会 通信講座 オンライン講座"
          />
        </div>
        <div class="fsc-flex-right">
          <p class="fsc-title">{{ title }}</p>
          <div class="fsc-line"></div>
          <p class="fsc-text">
            能センでは全てのプリント・資料に
            <br class="-sp-only" />
            FSC認証を受けたエコペーパーを使用しております。
          </p>
          <p class="fsc-text">
            FSC認証とは、持続可能な森林活用・保全を目的として誕生した、
            <br class="-sp-only" />
            「適切な森林管理」を認証する国際的な制度です。
          </p>
          <p class="fsc-text">FSC認証とは</p>
          <a
            class="fsc-link"
            href="https://shitte-erabo.net/aboutfsc/certification/"
          >
            https://shitte-erabo.net/aboutfsc/certification/
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
    },
  };
</script>

<style lang="scss" scoped>
  .fsc {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 20px auto 0;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
  }
  .fsc p,
  .fsc img {
    margin: 0;
  }
  .fsc-inner {
    padding: 20px;
  }
  .fsc-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .fsc-flex-right,
  .fsc-flex-left {
    width: 49%;
  }
  .fsc-flex-right {
    padding-left: 6%;
  }
  .fsc-flex-image {
    transform: scale(0.95);
  }
  .fsc-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
  }
  .fsc-line {
    width: 22%;
    height: 4px;
    background: #00a73c;
    margin: 10px auto 0;
    border-radius: 8px;
  }
  .fsc-link {
    text-decoration: underline;
    text-decoration-color: #337ab7;
    color: #337ab7;
  }

  .fsc-text {
    font-weight: 500;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.8;
    padding-top: 18px;
  }

  .company .fsc {
    margin-bottom: 18px;
  }
  .company .fsc-title {
    font-size: 26x;
  }

  .company .fsc-line {
    margin: 6px auto 0;
  }

  .company .fsc-inner {
    padding: 0;
  }

  .company .fsc-text {
    font-size: 15px;
  }

  @media print, screen and (max-width: 768px) {
    .fsc {
      width: 90%;
    }
    .fsc-flex {
      flex-flow: wrap;
    }
    .fsc-flex-right,
    .fsc-flex-left {
      width: 100%;
    }

    .fsc-flex-right {
      padding-left: 0;
    }
    .fsc-title {
      font-size: 24px;
    }
    .fsc-text {
      font-size: 14px;
      line-height: 1.6;
    }

    .fsc-link {
      font-size: 14px;
    }

    .-sp-only {
      display: none;
    }
  }
</style>
