<template>
  <div class="courseOverview">
    <!-- <img class="courseOverview-icon" src="../../assets/img/icon/note.svg"> -->
    <div class="courseOverview-inner">
      <div class="courseOverview-content">
        <div class="courseOverview-flex -reverse">
          <div class="courseOverview-flex-left">
            <!-- <p class="courseOverview-title">{{ title }}</p>
            <div class="courseOverview-line"></div> -->
            <p class="courseOverview-text -type1 -center">
              特選問題集を新しく追加！
            </p>
            <p class="courseOverview-text -type1 -center">計算問題を中心に</p>
            <p class="courseOverview-text -type1 -center">
              選りすぐりの問題を集めました！
            </p>
            <p class="courseOverview-text -type1 -center">
              合格には欠かせない内容となります
            </p>
          </div>
          <div class="courseOverview-flex-right">
            <img
              class="courseOverview-flex-image"
              src="../../assets/img/license_page/denken3/denken3_courseOverview_6.jpg"
              alt="電験三種 第三種電気主任技術者"
            />
          </div>
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
  .courseOverview {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
    // border-top: 4px solid #ed6c00;
    margin: 0 auto;
  }
  // .courseOverview-icon {
  //     position: absolute;
  //     z-index: 0;
  //     top: -18px;
  //     left: -43px;
  //     width: 54px
  // }
  .courseOverview p,
  .courseOverview img {
    margin: 0;
  }
  .courseOverview-inner {
    padding: 60px 40px 40px;
  }
  .courseOverview-content {
    margin: 0 auto;
  }
  .courseOverview-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .courseOverview-flex.-reverse {
    margin-top: 40px;
  }
  .courseOverview-flex-right,
  .courseOverview-flex-left {
    width: 49%;
  }
  .courseOverview-flex-image {
    transform: scale(0.95);
  }
  .courseOverview-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
  }
  .courseOverview-line {
    width: 10%;
    height: 4px;
    background: #1262b2;
    margin: 20px auto;
    border-radius: 8px;
  }
  .-center {
    text-align: center;
  }
  .courseOverview-text.-type1 {
    font-weight: bold;
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.8;
  }
  .courseOverview-text.-type2 {
    font-weight: bold;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.8;
  }
  .courseOverview-text.-type3 {
    font-size: 18px;
    line-height: 1.8;
  }
  .courseOverview-text.-type4 {
    font-size: 16px;
    line-height: 1.8;
  }
  .courseOverview table {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    border-left: 1px solid #000;
    margin: 20px auto;
    width: 100%;
  }
  .courseOverview tr {
    border-top: 1px solid #000;
    display: flex;
    text-align: left;
  }
  .courseOverview th {
    border-right: 1px solid #000;
    width: 38%;
    background: #fff7d5;
    font-size: 16px;
    line-height: 1.8;
    font-weight: 700;
    padding: 8px;
  }
  .courseOverview td {
    width: 62%;
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    padding: 8px;
  }
  .courseOverview-th-text {
    font-weight: 400;
  }
  .courseOverview-td-text {
    font-weight: 700;
  }
  .courseOverview td span {
    font-weight: 700;
  }
  .red {
    color: red;
  }

  .courseOverview-link {
    text-decoration: underline;
    text-decoration-color: #337ab7;
    color: #337ab7;
  }
  .online-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    margin-bottom: 28px;
  }
  .online-flex-image,
  .online-flex-description {
    width: 50%;
    margin: 0;
  }
  .online-flex-image img {
    width: 70%;
    margin: 0 auto;
    display: block;
  }
  .online-flex-description p {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.8;
    text-align: center;
  }
  @media print, screen and (max-width: 1170px) {
    .courseOverview {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media print, screen and (max-width: 768px) {
    .courseOverview {
      width: 84%;
      margin: 0 auto;
    }
    .courseOverview-inner {
      max-width: 100%;
      padding: 40px 16px;
    }
    // .courseOverview-icon {
    //     top: -15px;
    //     left: -21px;
    //     width: 41px
    // }
    .courseOverview-content {
      width: 100%;
    }
    .courseOverview-flex {
      flex-flow: wrap;
    }
    .courseOverview-flex.-reverse {
      flex-direction: column-reverse;
    }
    .courseOverview-flex-right,
    .courseOverview-flex-left {
      width: 100%;
    }
    .courseOverview-title {
      font-size: 24px;
    }
    .courseOverview-text.-type1 {
      font-size: 18px;
      line-height: 1.6;
    }
    .courseOverview-text.-type2 {
      font-size: 16px;
      line-height: 1.6;
    }
    .courseOverview-text.-type3 {
      font-size: 16px;
      line-height: 1.6;
    }
    .courseOverview-text.-type4 {
      font-size: 14px;
      line-height: 1.6;
    }
    .courseOverview table {
      border-bottom: 1px solid #000;
      border-right: none;
      border-left: none;
      margin: 20px auto;
    }
    .courseOverview tr {
      flex-wrap: wrap;
    }
    .courseOverview th {
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      border-left: 1px solid #000;
      width: 100%;
      font-size: 14px;
      line-height: 1.6;
    }
    .courseOverview td {
      border-right: 1px solid #000;
      border-left: 1px solid #000;
      width: 100%;
      font-size: 14px;
      line-height: 1.6;
    }

    .online-flex {
      flex-wrap: wrap;
    }
    .online-flex-image,
    .online-flex-description {
      width: 100%;
    }
    .online-flex-image img {
      width: 80%;
    }
    .online-flex-description {
      margin-top: 18px;
    }
    .online-flex-description p {
      line-height: 1.6;
      font-size: 18px;
    }
  }
</style>
