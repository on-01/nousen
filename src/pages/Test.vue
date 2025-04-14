<template>
  <Layout>
    <div class="test">
      <p>
        {{ targetDateFormatted }}まで あと
        <span>{{ remainingDays }}</span>
        日
      </p>
    </div>
  </Layout>
</template>

<script>
  export default {
    data() {
      return {
        targetDate: new Date("2025-06-01"),
        today: new Date(),
      };
    },
    computed: {
      remainingDays() {
        const diffTime = this.targetDate - this.today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 0 ? diffDays : 0;
      },
      targetDateFormatted() {
        const year = this.targetDate.getFullYear();
        const month = this.targetDate.getMonth() + 1;
        const day = this.targetDate.getDate();
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
  .test {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    padding: 20px;
  }
</style>
