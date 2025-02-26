<template>
  <div class="quality">
    <div class="quality-wrap">
      <div class="quality-topTextWrap">
        <p class="quality-topText">人材開発支援助成金</p>
        <p class="quality-topText">人材育成支援コース 対象講座</p>
      </div>
      <p class="quality-mainTitle">
        短期間で合格する
        <br />
        3つのポイント！！
      </p>
      <div class="quality-flex">
        <div class="quality-box">
          <div class="quality-header">
            Point
            <span>1</span>
          </div>
          <figure class="quality-image">
            <img
              :src="imagePath_1"
              alt="土木施工管理技士 講習会 通信講座 web講座"
            />
          </figure>
          <div class="quality-description">
            <p class="quality-title">
              <i class="scroll-animation-item">
                合格者を多数輩出
                <br />
                講師が土木のエキスパート！
              </i>
            </p>
            <p class="quality-line"></p>
            <p class="quality-text" v-html="text_1"></p>
          </div>
        </div>
        <div class="quality-box">
          <div class="quality-header">
            Point
            <span>2</span>
          </div>
          <figure class="quality-image">
            <img
              :src="imagePath_2"
              alt="土木施工管理技士 講習会 通信講座 web講座"
            />
          </figure>
          <div class="quality-description">
            <p class="quality-title">
              <i class="scroll-animation-item">
                効率的な学習方法
                <br />
                勉強時間がない方におすすめ！
              </i>
            </p>
            <p class="quality-line"></p>
            <p class="quality-text" v-html="text_2"></p>
          </div>
        </div>
        <div class="quality-box">
          <div class="quality-header">
            Point
            <span>3</span>
          </div>
          <figure class="quality-image">
            <img
              :src="imagePath_3"
              alt="土木施工管理技士 講習会 通信講座 web講座"
            />
          </figure>
          <div class="quality-description">
            <p class="quality-title">
              <i class="scroll-animation-item">
                二次試験対策＋添削
                <br />
                通学でもオンラインでも！
              </i>
            </p>
            <p class="quality-line"></p>
            <p class="quality-text" v-html="text_3"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text_1: String,
      imagePath_1: String,
      text_2: String,
      imagePath_2: String,
      text_3: String,
      imagePath_3: String,
    },
  };
</script>

<style lang="scss" scoped>
  .quality {
    width: 100%;
    font-family: "メイリオ", sans-serif;
    padding: 20px 0 50px;
    // padding: 20px 0 110px;
  }
  .quality-wrap {
    max-width: 1170px;
    margin: 0 auto;
  }
  .quality-mainTitle {
    font-weight: bold;
    text-align: center;
    font-size: 28px;
    color: red;
    margin-bottom: 30px;
  }

  .quality-mainTitle br {
    display: none;
  }
  .quality-flex {
    display: flex;
    justify-content: space-between;
  }
  .quality-box {
    width: 30%;
    background: #fff;
    position: relative;
  }
  .quality-header {
    display: flex;
    font-weight: bold;
    background-color: #1262b2;
    color: #fff;
    padding: 0 12px;
    position: relative;
    position: absolute;
    font-size: 12px;
    letter-spacing: 0.1em;
    top: 0;
    left: 0;
    align-items: center;
  }

  .quality-header span {
    font-size: 20px;
    vertical-align: baseline;
    margin-left: 4px;
  }

  /* .quality-header:after {
    content: "";
    border: 14px solid transparent;
    border-right: 8px solid #fff;
    position: absolute;
    right: 0;
    top: 0;
    } */

  .quality-description {
    padding: 20px 20px 10px;
  }
  .quality-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
  }

  .quality-title::v-deep i {
    background: -webkit-linear-gradient(to right, #f4b073 50%, transparent 50%);
    background: -moz-linear-gradient(to right, #f4b073 50%, transparent 50%);
    background: linear-gradient(to right, #f4b073 50%, transparent 50%);
    background-repeat: no-repeat;
    background-size: 200% 1em;
    background-position: 100% 0.5em;
    transition: background-position 0.5s ease-in-out;
    &.is-show {
      background-position: 0% 0;
    }
  }

  .quality-line {
    width: 20%;
    height: 4px;
    background: #1262b2;
    margin: 16px auto;
    border-radius: 8px;
  }
  .quality-image {
    width: 100%;
    margin: 0;
  }
  .quality-image img {
    width: 100%;
  }

  .quality-text {
    font-size: 15px;
    line-height: 1.8;
    margin: 0;
  }

  .quality-topTextWrap {
    padding: 2px 10px;
    border: solid 2px #000;
    background-color: #fff;
    max-width: 280px;
    margin: 42px auto 0;
  }

  .quality-topText {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    margin: 0;
  }

  @media print, screen and (max-width: 1000px) {
    .quality {
      padding-bottom: 40px;
    }
    .quality-wrap {
      width: 90%;
    }
    .quality-mainTitle {
      font-size: 20px;
      margin-bottom: 0;
    }

    .quality-flex {
      flex-wrap: wrap;
    }

    .quality-box {
      width: 100%;
      margin: 30px auto 0;
    }

    .quality-description {
      padding: 20px 20px 20px;
    }
  }

  @media print, screen and (max-width: 560px) {
    .quality-mainTitle {
      font-size: 24px;
    }
    .quality-mainTitle br {
      display: block;
    }

    .quality-mainTitle span {
      display: none;
    }
    .quality-title {
      font-size: 18px;
    }
  }
</style>
