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

      <div class="time">
        <div class="time-inner">
          <div class="time-wrapper">
            <p class="time-heading">次回試験日まで</p>
            <ul>
              <li>
                <div class="time-text">
                  <p class="text-top">前期(6月)試験</p>
                  <p class="text-bottom">{{ targetDateFormatted1 }}まであと</p>
                </div>
                <p class="time-day">
                  <span>{{ remainingDays1 }}</span>
                  日
                </p>
              </li>
              <li>
                <div class="time-text">
                  <p class="text-top">後期(10月)試験</p>
                  <p class="text-bottom">{{ targetDateFormatted2 }}まであと</p>
                </div>
                <p class="time-day">
                  <span>{{ remainingDays2 }}</span>
                  日
                </p>
              </li>
            </ul>
          </div>
        </div>
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
    data() {
      return {
        targetDate1: new Date("2025-06-01"),
        targetDate2: new Date("2025-10-26"),
        today: new Date(),
      };
    },
    computed: {
      remainingDays1() {
        const diffTime = this.targetDate1 - this.today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 0 ? diffDays : 0;
      },
      remainingDays2() {
        const diffTime = this.targetDate2 - this.today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 0 ? diffDays : 0;
      },
      targetDateFormatted1() {
        const year = this.targetDate1.getFullYear();
        const month = this.targetDate1.getMonth() + 1;
        const day = this.targetDate1.getDate();
        return `${year}年${month}月${day}日`;
      },
      targetDateFormatted2() {
        const year = this.targetDate2.getFullYear();
        const month = this.targetDate2.getMonth() + 1;
        const day = this.targetDate2.getDate();
        return `${year}年${month}月${day}日`;
      },
    },
    mounted() {
      setInterval(() => {
        this.today = new Date();
      }, 1000 * 60 * 60);
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

  .time {
    background: #fff;
    padding-top: 40px;
    font-family: "メイリオ", sans-serif;
  }

  .time-inner {
    max-width: 625px;
    margin: 0 auto;

    @media print, screen and (max-width: 768px) {
      padding-left: 18px;
      padding-right: 18px;
    }
  }

  .time-wrapper {
    background-color: #1262b2;
    padding: 10px;
  }

  .time-heading {
    font-size: 42px;
    color: #fff;
    font-weight: 700;
    margin: 0 0 10px;
    line-height: 1.5;
    text-align: center;
    @media print, screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    column-gap: 20px;
    @media print, screen and (max-width: 768px) {
      row-gap: 18px;
      flex-direction: column;
    }
  }

  li {
    width: 50%;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    column-gap: 12px;
    align-items: flex-end;
    @media print, screen and (max-width: 768px) {
      flex-direction: row;
      width: auto;
    }
  }

  .text-top {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }

  .text-bottom {
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }

  .time-day {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    span {
      color: #ff4500;
      font-size: 32px;
      font-weight: 700;
    }
  }
</style>
