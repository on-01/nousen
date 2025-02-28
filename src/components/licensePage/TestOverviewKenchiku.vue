<template>
  <div class="test">
    <div class="test-inner">
      <p class="test-title">施工管理技術検定とは</p>
      <div class="test-wrap -orange -first">
        <p class="test-text">
          近年、建設工事の施工技術の高度化、専門化、多様化が一段と進展してきており、建設工事の円滑な施工と工事完成品の質的水準の確保を図る上で、施工管理技術の重要性がますます増大しています。
          <br />
          国土交通省では、建設工事に従事する者の技術力の向上を図るため、建設業法第27条において技術検定を行うことができるとしており、一般財団法人建設業振興基金はそのうち「建築施工管理技術検定」及び「電気工事施工管理技術検定」について、国土交通大臣から指定試験機関として指定を受け実施をしています。
          <br />
          <br />
          <br />
          引用元：
          <a
            href="https://www.fcip-shiken.jp/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            一般財団法人建設業振興基金
          </a>
        </p>
      </div>
      <div class="test-wrap -white">
        <p class="test-index">施工管理技士ができること</p>
        <p class="test-text">
          施工管理技術検定の第二次検定に合格して「施工管理技士」の称号を得ると、建設業の許可基準の一つである営業所ごとに置く専任の技術者、建設工事の現場に置く監理技術者または主任技術者になることができます。
          <br />
          施工管理技士は、工事品質の確保と、許可の取得や工事の受注に直結する、建設業にとって重要な国家資格となっています。
        </p>
      </div>
      <p class="test-title -mb0">1級 建築施工管理技士技術検定</p>
      <div class="test-wrap -white">
        <p class="test-index">1級建築施工管理技士技術検定とは</p>
        <p class="test-text">
          1級建築施工管理技士技術検定は、建築工事の施工計画や工程・品質・安全管理を行う1級建築施工管理技士の資格を取得するための国家試験です。
          <br />
          この検定は第一次検定（学科試験）と第二次検定（実地試験）の2段階に分かれており、両方に合格することで資格が与えられます。
          <br />
          この資格を取得すると、特定建設業の専任技術者や現場の監理技術者として認められ、大規模な建築工事の監督・管理ができるようになります。
          <br />
          特に公共工事では資格取得者の数が入札に影響するため、企業にとっても重要な資格です。
        </p>
      </div>
      <p class="test-heading">受験申請</p>
      <div class="test-wrap -white">
        <p class="test-text">
          1級建築施工管理技士技術検定の受験申請は、
          <a
            href="https://www.fcip-shiken.jp/ken1/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            公益財団法人建設業振興基金
          </a>
          が実施しており、毎年一定の期間に申し込みを受け付けています。
          <br />
          <br />
          初めて第二次検定を受検する場合（一次二次同時申請を含む、以下同じ）は、実務経験審査が必要となりますので、書面にて申請を行う必要があります。願書を購入して申請手続きを行ってください。
          <br />
          ただし、平成15年度以降に新規で第二次検定を受検されたことがある方は、過去提出いただいた実務経験証明書等を参照しますので、同じ級・種目・試験区分の受検申請に限り、実務経験証明書等を省略した再受検申請が可能です（欠席者を含み、辞退者を除きます）。
        </p>
        <table class="test-table-kenchiku">
          <tr>
            <th>&emsp;</th>
            <th>第一次検定のみ</th>
            <th>一次二次同時</th>
            <th>第二次検定のみ</th>
          </tr>
          <tr>
            <td bgcolor="#c3def3" class="c-blue">新規受検</td>
            <td><span>ネット申請</span></td>
            <td><span>書面申請</span></td>
            <td><span>書面申請</span></td>
          </tr>
          <tr>
            <td bgcolor="#c3def3" class="c-blue">再受検</td>
            <td><span>ネット申請</span></td>
            <td>
              <span>ネット申請</span>
              <br />
              または
              <br />
              <span>書類申請</span>
            </td>
            <td>
              <span>ネット申請</span>
              <br />
              または
              <br />
              <span>書類申請</span>
            </td>
          </tr>
        </table>
      </div>
      <p class="test-heading">受験手数料</p>
      <div class="test-wrap -white">
        <p class="test-text -fz18">
          第一次検定：12,300円（非課税）
          <br />
          第二次検定：12,300円（非課税）
        </p>
        <p class="test-text">
          ※一次二次を同時に申請される場合、第二次検定の受検手数料は、第一次検定合格後にお支払いいただきます。詳細は第一次検定合格通知にてご確認ください
        </p>
      </div>
      <p class="test-heading">試験地</p>
      <div class="test-wrap -white">
        <p class="test-text -fz18">
          札幌・仙台・東京・新潟・名古屋・大阪・広島・高松・福岡・沖縄
        </p>
        <p class="test-text">
          ※会場確保の都合上、やむを得ず近郊の府県等で実施する場合もあります
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

  .test-table-kenchiku {
    width: 100%;
    text-align: center;
    border-top: #dfdfdf solid 1px;
    border-left: #dfdfdf solid 1px;
    border-right: #dfdfdf solid 1px;

    th {
      border-right: #dfdfdf solid 1px;
      border-bottom: #dfdfdf solid 1px;
      background-color: #006bad;
      color: #ffffff;
    }

    td {
      border-right: #dfdfdf solid 1px;
      border-bottom: #dfdfdf solid 1px;
      padding: 10px;
      font-weight: 700;

      span {
        background-color: #286d45;
        color: white;
        padding: 5px 16px;
        border-radius: 5px;
      }
    }
  }

  .c-blue {
    color: #006bad;
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

  .-mb0 {
    margin-bottom: 0;
  }

  .-first {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media print, screen and (max-width: 1000px) {
  }
</style>
