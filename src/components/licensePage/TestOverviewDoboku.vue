<template>
  <div class="test">
    <div class="test-inner">
      <p class="test-title">施工管理技術検定とは</p>
      <div class="test-wrap -orange -first">
        <p class="test-text">
          施工管理技術検定とは、建設工事の現場管理を担う技術者の能力を評価し、一定の知識・技術を有することを証明する国家資格制度です。
          <br />
          国土交通省が管轄し、一般財団法人
          全国建設研修センターなどが試験を実施しています。
          <br />
          この検定は「1級」と「2級」に分かれており、それぞれの資格を取得することで、建設工事の現場での管理業務に関する法的な業務範囲や役割が変わります。
        </p>
      </div>
      <div class="test-wrap -white">
        <p class="test-index">施工管理技士ができること</p>
        <p class="test-text">
          施工管理技術検定の第二次検定に合格して「施工管理技士」の称号を得ると、建設業の許可基準の一つである営業所ごとに置く専任の技術者、土木工事の現場に置く監理技術者または主任技術者になることができます。
          <br />
          施工管理技士は、工事品質の確保と、許可の取得や工事の受注に直結する、建設業にとって重要な国家資格となっています。
        </p>
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
  .test {
    width: 100%;
    background-color: #eaf7ff;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
    font-size: 16px;
    @media print, screen and (max-width: 1110px) {
      width: 90%;
    }
  }

  .test-inner {
    padding: 0 50px 40px;
    max-width: 927px;
    margin: 0 auto;
    background-color: #fff;
    @media print, screen and (max-width: 1110px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .test-title {
    font-size: 28px;
    color: white;
    text-align: center;
    background-color: #1262b2;
    padding: 1rem;
    line-height: 1.3;
    margin: 0 auto 40px;
    max-width: 980px;
    font-weight: 700;
  }

  .test-wrap {
    margin: 0 auto;
    max-width: 980px;
  }

  .test-wrap.-white {
    padding: 30px 0;
  }

  .test-wrap.-orange {
    position: relative;
    border: solid 2px #f4891e;
    background-color: #eae3db;
    background-color: rgba(244, 137, 30, 0.1);
    padding: 30px 45px;
    margin-top: 20px;

    a {
      color: #1da1f2;
    }
  }

  .test-wrap.-orange.-pt10 {
    padding-top: 10px;
  }

  .test-wrap.-orange::after,
  .test-wrap.-orange::before {
    position: absolute;
  }

  .test-wrap.-orange::after {
    content: "”";
    color: #f4891e;
    font-size: 60px;
    line-height: 1;
    right: 20px;
    bottom: -30px;
  }
  .test-wrap.-orange::before {
    content: "“";
    color: #f4891e;
    font-size: 60px;
    line-height: 1;
    left: 20px;
    top: 5px;
  }

  .test-text {
    line-height: 1.5;
    margin: 0;

    span {
      font-weight: 700;
    }
  }

  .test-text.-fz18 {
    font-size: 18px;
    font-weight: 700;
  }

  .test-flex {
    display: flex;
    align-items: baseline;
  }

  .test-text-yellow {
    position: relative;
    display: inline;
    line-height: 1.5;
    font-weight: 700;
    margin: 30px 0 0;
    z-index: 3;
    background: linear-gradient(transparent 60%, #ffff8d 0%);
  }

  .test-heading {
    font-size: 28px;
    color: black;
    text-align: center;
    background-color: white;
    border: solid 3px #1262b2;
    padding: 10px;
    line-height: 1.3;
    margin: 0 auto;
    max-width: 980px;
    font-weight: 700;
    @media print, screen and (max-width: 1110px) {
      font-size: 24px;
      padding: 8px;
    }
  }

  .test-index {
    font-size: 18px;
    line-height: 1.5;
    margin: 0 0 10px;
    font-weight: 700;
    border-bottom: solid 2px #f4891e;
    display: inline-block;
  }

  .test-other {
    margin-top: 30px;
    padding: 20px;
    border: solid 2px gray;
    border-radius: 12px;
  }

  .test-other.-bottom {
    margin-bottom: 30px;
  }

  .test-other-text {
    line-height: 1.5;
    margin: 0;
    span {
      display: inline;
      position: relative;
      z-index: 3;
      background: linear-gradient(transparent 60%, #ffff8d 0%);
    }
  }

  .test-table {
    border-top: #f4891e solid 1px;
    border-left: #f4891e solid 1px;
    border-right: #f4891e solid 1px;
    width: 90%;
    margin: 0 auto;

    tr {
      display: flex;
    }

    th {
      border-right: #f4891e solid 1px;
      border-bottom: #f4891e solid 1px;
      width: 20%;
      padding: 8px;
      font-weight: 700;
      display: flex;
      align-items: center;
    }

    td {
      border-bottom: #f4891e solid 1px;
      width: 80%;
      padding: 5px 0;
      padding: 8px;
      display: flex;
      align-items: center;
    }
  }

  .test-table:not(:first-of-type) {
    margin-top: 30px;
  }

  .-mt20 {
    margin-top: 20px;
  }
  .-mt40 {
    margin-top: 40px;
  }
  .-ml10 {
    margin-left: 10px;
  }

  .-first {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media print, screen and (max-width: 1000px) {
  }
</style>
