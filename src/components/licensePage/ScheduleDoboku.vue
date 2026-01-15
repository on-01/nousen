<template>
  <div class="schedule">
    <p class="schedule-title">{{ title }}</p>
    <div class="schedule-inner">
      <!-- <p class="schedule-tableTitle">
        令和６年度　第三種電気主任技術者　各種日程
      </p> -->
      <div class="schedule-table-wrap">
        <table class="schedule-table">
          <tr>
            <th class="schedule-th -first">等級</th>
            <th class="schedule-th -second">願書発売</th>
            <th class="schedule-th -third">受験申請</th>
            <th class="schedule-th -forth">試験日</th>
            <th class="schedule-th -fifth">合格発表日</th>
          </tr>
          <tr>
            <td class="schedule-td-border-none schedule-padding-none">
              <div class="schedule-table-flex">
                <div class="schedule-td-bold schedule-td-flex-left">１級</div>
                <div class="schedule-td-flex-right">
                  <p class="schedule-td-flex-right-top schedule-table-padding">
                    一次
                  </p>
                  <p class="schedule-table-padding">二次</p>
                </div>
              </div>
            </td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  ※
                </p>
                <p class="schedule-table-padding">3月 6日(金)</p>
              </div>
            </td>
            <td>3月23日(月)～4月 6日(月)</td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  7月 5日(日)
                </p>
                <p class="schedule-table-padding">10月 4日(日)</p>
              </div>
            </td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  8月13日(木)
                </p>
                <p class="schedule-table-padding">令和 9年 1月 8日(金)</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="schedule-td-border-none schedule-padding-none">
              <div class="schedule-table-flex">
                <div class="schedule-td-bold schedule-td-flex-left">
                  ２級前期
                </div>
                <div class="schedule-td-flex-right">
                  <p class="schedule-table-padding">一次</p>
                </div>
              </div>
            </td>
            <td>※</td>
            <td>3月 4日(水)～3月18日(水)</td>
            <td>6月7日(日)</td>
            <td>7月7日(火)</td>
          </tr>
          <tr>
            <td class="schedule-td-border-none schedule-padding-none">
              <div class="schedule-table-flex">
                <div class="schedule-td-bold schedule-td-flex-left">
                  ２級後期
                </div>
                <div class="schedule-td-flex-right">
                  <p class="schedule-td-flex-right-top schedule-table-padding">
                    一次
                  </p>
                  <p class="schedule-table-padding">二次</p>
                </div>
              </div>
            </td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  ※
                </p>
                <p class="schedule-table-padding">6月23日(火)</p>
              </div>
            </td>
            <td>7月 8日(水)～7月22日(水)</td>
            <td>10月25日(日)</td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  12月2日(水)
                </p>
                <p class="schedule-table-padding">令和 9年 2月 3日(水)</p>
              </div>
            </td>
          </tr>
        </table>
        <div class="schedule-table-bottomTable bottomTable">
          <div class="bottomTable__wrap">
            <div class="bottomTable__text -blue">試験機関</div>
            <div class="bottomTable__text -center">
              <a href="https://www.jctc.jp/">
                一般財団法人 全国建設研修センター
              </a>
            </div>
            <div class="bottomTable__text -bottom">
              TEL 042-300-6860
              <br />
              (土日・祝日・年末年始除く)
            </div>
          </div>
        </div>
        <p class="schedule-table-bottomText">
          ※一次のみの受験申込は、インターネット申込になります。インターネット環境がない方は、試験機関にお問合せください
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
  .schedule {
    // max-width: 1170px;
    max-width: 1027px;
    width: 100%;
    background-color: #fff;
    // margin: 20px auto 0;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
    font-size: 14px;
    @media print, screen and (max-width: 1000px) {
      width: 90%;
    }
  }

  .schedule-details {
    font-size: 14px;
    padding-right: 20px;
    padding-left: 20px;
  }

  .schedule p {
    margin: 0;
  }
  .schedule-inner {
    // padding: 20px 0 20px 10px;
    // padding: 40px 0 40px 10px;
    padding: 40px 0 60px 10px;
    max-width: 930px;
    // width: 100%;
    margin: 0 auto;
  }
  .schedule-title {
    // font-weight: bold;
    // margin: 0 auto;
    // text-align: center;
    // font-size: 28px;
    line-height: 1.3;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    background-color: #1262b2;
    padding: 1rem;
    text-align: center;
    -webkit-box-shadow: 0 5px 1px #006bad;
    box-shadow: 0 5px 1px #006bad;
    margin-top: 0;
    @media print, screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  .schedule-line {
    width: 10%;
    height: 4px;
    // background: #249ef0;
    // margin: 20px auto 30px;
    margin: 10px auto 0;
    border-radius: 8px;
  }
  .schedule-tableTitle {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
  }
  .schedule-table {
    border: 1px solid #000;
    width: 100%;
  }
  .schedule-th {
    background: #1262b2;
    color: #fff;
    padding: 6.5px 0;
    border-bottom: 1px solid #000;
    font-size: 20px;
  }
  .schedule-th.-first {
    width: 20%;
  }
  .schedule-th.-second {
    width: 14%;
    border-left: 1px solid #000;
  }
  .schedule-th.-third {
    width: 27%;
    border-left: 1px solid #000;
  }
  .schedule-th.-forth {
    width: 17%;
    border-left: 1px solid #000;
  }

  .schedule-th.-fifth {
    width: 22%;
    border-left: 1px solid #000;
  }

  .schedule-table tr {
    border-bottom: 1px solid #000;
  }
  .schedule-table td {
    text-align: center;
    border-left: 1px solid #000;
  }
  .schedule-td-bold {
    font-weight: 700;
  }
  .schedule-table-flex {
    display: flex;
    border-left: none;
    align-items: center;
  }
  .schedule-td-flex-left {
    width: 50%;
  }
  .schedule-td-flex-right {
    width: 50%;
    border-left: 1px solid #000;
  }
  .schedule-tr-border-none {
    border-bottom: none;
  }
  .schedule-td-border-none {
    border-left: none;
  }
  .schedule-td-flex-right-top {
    border-bottom: 1px solid #000;
  }
  .schedule-table-padding {
    padding: 8px 0;
  }
  .schedule-table-padding-type2 {
    padding: 8px 0;
  }
  .schedule-table-note {
    color: red;
    font-size: 11px;
    font-weight: 500;
  }
  .schedule-emphasis-bold {
    font-weight: 700;
  }
  .schedule-emphasis-text {
    font-size: 18px;
    font-weight: 700;
  }
  .schedule-link {
    text-decoration: underline;
  }
  .schedule-padding-none {
    padding: 0;
  }

  .schedule-price-type1 {
    display: block;
    transform: translateY(-10px);
  }
  .schedule-price-type2 {
    display: block;
    transform: translateY(10px);
  }

  .schedule-table-bottomText {
    min-width: 930px;
  }

  .schedule-table-bottomTable {
    min-width: 930px;
    margin-top: 20px;
    margin-bottom: 2px;
  }

  .bottomTable__wrap {
    display: flex;
  }

  .bottomTable__text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 0;
  }

  .bottomTable__text {
    border: 1px solid #000;
  }

  .bottomTable__text.-blue {
    width: 20%;
    background: #1262b2;
    color: #fff;
    padding-top: 5px;
    font-size: 20px;
    font-weight: 700;
  }

  .bottomTable__text.-center {
    width: 41%;
    border-left: none;
    // a {
    //   text-decoration: underline;
    // }
  }

  .bottomTable__text.-bottom {
    width: 39%;
    border-left: none;
  }

  @media print, screen and (max-width: 1110px) {
    .schedule-inner {
      padding: 20px;
    }
    .schedule-details {
      padding-right: 0px;
      padding-left: 0px;
    }
    .schedule-title {
      font-size: 20px;
    }
    .schedule-tableTitle {
      font-size: 16px;
    }
    .schedule-table-wrap {
      overflow-x: auto;
    }
    .schedule-table {
      min-width: 930px;
    }
  }
</style>
