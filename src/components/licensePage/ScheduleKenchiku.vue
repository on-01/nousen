<template>
  <div class="schedule">
    <p class="schedule-title">{{ title }}</p>
    <div class="schedule-inner">
      <div class="schedule-line"></div>
      <!-- <p class="schedule-tableTitle">
        令和６年度　第三種電気主任技術者　各種日程
      </p> -->
      <div class="schedule-table-wrap">
        <table class="schedule-table">
          <tr>
            <th class="schedule-th -first">等級</th>
            <th class="schedule-th -second">願書発売</th>
            <th class="schedule-th -third">願書提出</th>
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
                <p class="schedule-table-padding">２月９日（金）</p>
              </div>
            </td>
            <td>２月２２日（金）～３月８日（金）</td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  ７月２１日（日）
                </p>
                <p class="schedule-table-padding">１０月２０日（日）</p>
              </div>
            </td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  ８月２３日（金）
                </p>
                <p class="schedule-table-padding">令和７年１月１０日（金）</p>
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
            <td>２月９日（木）～３月８日（金）</td>
            <td>６月９日（日）</td>
            <td>７月１０日（水）</td>
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
                <p class="schedule-table-padding">６月２６日(水)</p>
              </div>
            </td>
            <td>７月１０日（水）～７月２４日（水）</td>
            <td>１１月２４（日）</td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  令和７年１月１０日（金）
                </p>
                <p class="schedule-table-padding">令和７年２月７日（金）</p>
              </div>
            </td>
          </tr>
        </table>
        <div class="schedule-table-bottomTable bottomTable">
          <div class="bottomTable__wrap">
            <div class="bottomTable__text -blue">試験機関</div>
            <div class="bottomTable__text -center">
              一般財団法人 建設業振興基金
            </div>
            <div class="bottomTable__text -bottom">
              TEL ０３－５４７３－１５８１（土日・祝日・年末年始除く）
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
    width: 100%;
    background-color: #fff;
    // margin: 20px auto 0;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
    font-size: 14px;
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
    padding: 20px 10px;
    max-width: 1170px;
    width: 100%;
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
    background-color: #1da1f2;
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
    background: #249ef0;
    color: #fff;
    padding-top: 2px;
    border-bottom: 1px solid #000;
    font-size: 20px;
  }
  .schedule-th.-first {
    width: 20%;
  }
  .schedule-th.-second {
    width: 12%;
    border-left: 1px solid #000;
  }
  .schedule-th.-third {
    width: 31%;
    border-left: 1px solid #000;
  }
  .schedule-th.-forth {
    width: 12%;
    border-left: 1px solid #000;
  }

  .schedule-th.-fifth {
    width: 25%;
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
    width: 40%;
  }
  .schedule-td-flex-right {
    width: 60%;
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
    padding: 3px 0;
  }
  .schedule-table-padding-type2 {
    padding: 3px 0;
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
    min-width: 1110px;
  }

  .schedule-table-bottomTable {
    min-width: 1110px;
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
  }

  .bottomTable__text {
    border: 1px solid #000;
  }

  .bottomTable__text.-blue {
    width: 20%;
    background: #249ef0;
    color: #fff;
    padding-top: 2px;
    font-size: 20px;
    font-weight: 700;
  }

  .bottomTable__text.-center {
    width: 40%;
    border-left: none;
  }

  .bottomTable__text.-bottom {
    width: 40%;
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
      min-width: 1110px;
    }
  }
</style>
