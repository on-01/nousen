<template>
  <Layout>
    <div class="test">
      <p>
        {{ targetDateFormatted1 }}まで あと
        <span>{{ remainingDays1 }}</span>
        日
      </p>
    </div>

    <div class="test2">
      <p>
        {{ targetDateFormatted2 }}まで あと
        <span>{{ remainingDays2 }}</span>
        日
      </p>
    </div>
  </Layout>
</template>

<script>
  export default {
    data() {
      return {
        targetDate1: new Date("2025-06-01"),
        targetDate2: new Date("2025-07-01"),
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
    metaInfo() {
      return {
        meta: [
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .test,
  .test2 {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    padding: 20px;
  }
</style>
