<template>
  <div class="schedule">
    <p class="schedule-title">{{ title }}</p>
    <div class="schedule-inner">
      <!-- <div class="schedule-line"></div> -->
      <!-- <p class="schedule-tableTitle">
        令和６年度　第三種電気主任技術者　各種日程
      </p> -->
      <div class="schedule-table-wrap">
        <table class="schedule-table">
          <tr>
            <th class="schedule-th -first">項目</th>
            <!-- <th class="schedule-th -second">令和５年度 下期試験</th> -->
            <th class="schedule-th -forth">令和7年度 上期試験</th>
            <th class="schedule-th -third">令和7年度 下期試験</th>
          </tr>
          <tr>
            <td class="schedule-td-border-none schedule-padding-none">
              <div class="schedule-table-flex">
                <div class="schedule-td-bold schedule-td-flex-left">試験日</div>
                <div class="schedule-td-flex-right">
                  <p class="schedule-td-flex-right-top schedule-table-padding">
                    CBT方式
                    <!-- <span class="schedule-table-note">※1</span> -->
                  </p>
                  <p class="schedule-table-padding">
                    筆記方式
                    <!-- <span class="schedule-table-note">※2</span> -->
                  </p>
                </div>
              </div>
            </td>
            <!-- <td class="schedule-padding-none">
                    <div>
                        <p class="schedule-td-flex-right-top schedule-table-padding">令和６年２月１日(木)～２月２５日(日)</p>
                        <p class="schedule-table-padding">令和６年３月２４日(日)</p>
                    </div>
                </td> -->
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  7月17日(木)～8月10日(日)
                  <br />
                  (25日間)
                </p>
                <p class="schedule-table-padding">8月31日(日)</p>
              </div>
            </td>
            <td class="schedule-padding-none">
              <div>
                <p
                  class="schedule-td-flex-right-top schedule-table-padding-type2"
                >
                  2月5日(木)〜3月1日(日)
                  <br />
                  (25日間)
                </p>
                <p class="schedule-table-padding">3月22日(日)</p>
              </div>
            </td>
          </tr>
          <tr>
            <td
              class="schedule-td-bold schedule-td-border-none schedule-table-padding"
            >
              【受験申込受付期間】
              <br />
              申込期間はCBT方式・筆記方式共
              <br />
              に同じです。
            </td>
            <!-- <td>１１月１３日(月)～１１月３０日(木)</td> -->
            <td>5月19日(月)～6月05日(木)</td>
            <td>11月10日(月)～11月27日(木)</td>
          </tr>
          <!-- <tr>
            <td
              class="schedule-td-bold schedule-td-border-none schedule-table-padding"
            >
              試験結果発表日(筆記方式)
            </td>
            <td>4月頃</td>
            <td>9月頃</td>
          </tr> -->
          <tr class="schedule-tr-border-none">
            <td class="schedule-td-border-none schedule-padding-none">
              <div class="schedule-table-flex">
                <div class="schedule-td-bold schedule-td-flex-left">
                  受験手数料
                  <br />
                  (非課税)
                </div>
                <div class="schedule-td-flex-right">
                  <p class="schedule-td-flex-right-top">
                    インターネット
                    <br />
                    による申込み
                  </p>
                  <p>
                    書面(郵送)
                    <br />
                    による申込み
                  </p>
                </div>
              </div>
            </td>
            <!-- <td class="schedule-padding-none">
                    <div>
                        <p class="schedule-td-flex-right-top"></p>
                        <p></p>
                    </div>
                </td> -->
            <td colspan="2" class="schedule-padding-none">
              <div>
                <p class="schedule-td-flex-right-top">
                  <span class="schedule-price-type1">7,700円</span>
                </p>
                <p><span class="schedule-price-type2">8,100円</span></p>
              </div>
            </td>
            <!-- <td class="schedule-padding-none" style="border-left: none;">
                    <div>
                        <p class="schedule-td-flex-right-top"></p>
                        <p></p>
                    </div>
                </td> -->
          </tr>
        </table>
        <div class="schedule-table-bottomTable bottomTable">
          <div class="bottomTable__wrap">
            <div class="bottomTable__text -blue">試験機関</div>
            <div class="bottomTable__text -center">
              <a href="https://www.shiken.or.jp/">
                一般財団法人 電気技術者試験センター
              </a>
            </div>
            <div class="bottomTable__text -bottom">
              TEL 03-3552-7691
              <br />
              (土日・祝日・年末年始除く)
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="schedule-details">
        <p>
          <span class="schedule-table-note">※１</span>
          CBT方式(パソコンでの受験)
        </p>
        <p>所定の期間内に試験会場、試験日時を選択することが可能です。</p>
        <p>
          <span class="schedule-table-note">※２</span>
          筆記方式
        </p>
        <p>所定の期日、会場にて開催する従来の試験と同様に行われる試験です。</p>
        <br />
        <p class="schedule-emphasis-bold">
          試験は上期試験と下期試験の年２回になります。
          <br />
          上期試験が落ちてもそのまま勉強を続けて下期試験で合格する方もいます。
        </p>
        <br />
        <p class="schedule-emphasis-text">【受験申請】</p>
        <p>
          ・電験三種の申込方法はインターネットと書面の2種類があります。(令和６年度からは原則インターネット申込みになります)
        </p>
        <p>・筆記方式かCBT方式、どちらの方式で受験をするかを選びます。</p>
        <p>・CBT方式の試験を欠席した場合、筆記方式の試験は受験できません。</p>
        <br />
        <p>■インターネット申込み方法　</p>
        <p>
          1.
          <a
            class="schedule-link"
            href="https://www.shiken.or.jp/"
            target="_blank"
          >
            一般財団法人 電気技術者試験センター
          </a>
          にアクセスする
        </p>
        <p>2.申込画面で必要事項を入力する</p>
        <p>3.受験手数料を支払う</p>
        <p>4.試験日の約2週間前に受験票が郵送される</p>
        <br />
        <p>■書面申込み方法</p>
        <p>
          1.受験案内 / 願書を入手する　願書の入手方法は
          <a
            class="schedule-link"
            href="https://www.shiken.or.jp/"
            target="_blank"
          >
            一般財団法人 電気技術者試験センター
          </a>
          のサイトでご確認ください。
        </p>
        <p>2.受験申込書を記入する</p>
        <p>3.受験手数料を納付する(ゆうちょ銀行で支払い)</p>
        <p>4.郵送にて願書を提出</p>
        <p>5.試験日の約2週間前に受験票が郵送される</p>
        <br />
        <p>
          ・インターネット申込みは申込み初日の１０時から最終日の１７時までとなります。
        </p>
        <p>
          ・受験手数料の入金方法は、個人申込みにあっては、クレジットカード決済、コンビニ決済、ペイジー決済がご利用
          いただけます。
        </p>
        <p>・団体申込みについては、銀行振込がご利用いただけます。</p>
        <p>・書面での申込みは、インターネット環境等がない方におすすめです。</p>
        <br />
        <p class="schedule-emphasis-text">【合格発表】</p>
        <p>
          筆記方式：試験の合否については、郵送されてくる合格通知書にて確認する方法とネットで受験番号を入力して確認する方法があります。
        </p>
        <p>試験日から約３～４週間後に試験センターのサイトで発表されます。</p>
        <p>
          ＣＢＴ方式：申込マイページで試験終了から約２週間以降に受験した科目の結果を確認することができます。
        </p>
        <br />
        <p>問い合わせ先</p>
        <p>一般財団法人 電気技術者試験センター 本部事務局</p>
        <p>TEL 03-3552-7691　9時から17時15分まで(土・日・祝日を除く)</p>
      </div> -->
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
    // background-color: #fff;
    background-color: #eaf7ff;
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

  .schedule-inner {
    // padding: 20px 10px;
    padding: 40px 0 20px;
    max-width: 1027px;
    // width: 100%;
    margin: 5px auto 0 auto;
    background-color: #fff;
    p {
      margin: 0;
    }
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
    margin: 0 auto;
    max-width: 995px;
    @media print, screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  .schedule-line {
    width: 10%;
    height: 4px;
    // background: #249ef0;
    margin: 20px auto 30px;
    border-radius: 8px;
  }
  .schedule-tableTitle {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
  }
  .schedule-table {
    border: 2px solid #000;
    width: 76%;
    margin: 0 auto;
  }
  .schedule-th {
    background: #1262b2;
    color: #fff;
    padding-top: 20px;
    border-bottom: 1px solid #000;
    font-size: 20px;
  }
  .schedule-th.-first {
    width: 33.3333%;
  }
  .schedule-th.-second,
  .schedule-th.-third,
  .schedule-th.-forth {
    width: 33.3333%;
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
    padding: 17px 0;
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

  .schedule-table-bottomTable {
    // min-width: 930px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .bottomTable__wrap {
    display: flex;
    width: 76%;
    margin: 0 auto;
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
    text-align: center;
  }

  @media print, screen and (max-width: 1110px) {
    .schedule {
      width: 90%;
    }
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

    .schedule-table-bottomTable {
      min-width: 1110px;
    }
    .bottomTable__wrap {
      width: 100%;
    }
  }

  @media print, screen and (max-width: 1000px) {
  }
</style>
