<template>
  <div class="time">
    <div class="time-inner">
      <div class="time-wrapper">
        <p class="time-heading">次回試験日まで</p>
        <ul>
          <li>
            <div class="time-text">
              <p class="text-top">下期(3月)試験</p>
              <p class="text-bottom">{{ targetDateFormatted1 }}まであと</p>
            </div>
            <p class="time-day">
              <span>{{ remainingDays1 }}</span>
              日
            </p>
          </li>
          <li>
            <div class="time-text">
              <p class="text-top">上期(8月)試験</p>
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
</template>

<script>
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // 日付のみ（時刻を切り捨てた0時）に揃える
  const startOfDay = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  export default {
    data() {
      return {
        // 左：下期(3月)試験 / 右：上期(8月)試験
        targetDate1: new Date(2027, 2, 21), // 2027年3月21日
        targetDate2: new Date(2027, 7, 29), // 2027年8月29日
        today: startOfDay(new Date()),
        timer: null,
      };
    },
    computed: {
      remainingDays1() {
        return this.calcRemainingDays(this.targetDate1);
      },
      remainingDays2() {
        return this.calcRemainingDays(this.targetDate2);
      },
      targetDateFormatted1() {
        return this.formatDate(this.targetDate1);
      },
      targetDateFormatted2() {
        return this.formatDate(this.targetDate2);
      },
    },
    methods: {
      calcRemainingDays(target) {
        const diffDays = Math.round((target - this.today) / ONE_DAY);
        return diffDays >= 0 ? diffDays : 0;
      },
      formatDate(date) {
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
      },
      updateToday() {
        const now = startOfDay(new Date());
        if (now.getTime() !== this.today.getTime()) {
          this.today = now;
        }
      },
    },
    mounted() {
      // 静的ビルド時の日付ではなく、閲覧時の日付で再計算する
      this.today = startOfDay(new Date());
      // ページを開いたまま日付が変わった場合も反映
      this.timer = setInterval(this.updateToday, 1000 * 60);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
  };
</script>

<style lang="scss" scoped>
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
    @media print, screen and (max-width: 980px) {
      margin-top: 42px;
    }
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
