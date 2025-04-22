<template>
  <div class="time">
    <div class="time-inner">
      <div class="time-wrapper">
        <p class="time-heading">次回試験日まで</p>
        <ul>
          <li>
            <div class="time-text">
              <p class="text-top">上期(8月)試験</p>
              <p class="text-bottom">{{ targetDateFormatted1 }}まであと</p>
            </div>
            <p class="time-day">
              <span>{{ remainingDays1 }}</span>
              日
            </p>
          </li>
          <li>
            <div class="time-text">
              <p class="text-top">下期(3月)試験</p>
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
  export default {
    data() {
      return {
        targetDate1: new Date("2025-08-31"),
        targetDate2: new Date("2026-03-22"),
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
  .time {
    padding-top: 40px;
    font-family: "メイリオ", sans-serif;
  }

  .time-inner {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
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
  }

  ul {
    display: flex;
    justify-content: center;
    column-gap: 20px;
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
  }

  .text-top {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }

  .text-bottom {
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }

  .time-day {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    span {
      color: #ff4500;
      font-size: 32px;
      font-weight: 700;
    }
  }
</style>
