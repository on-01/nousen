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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  export default {
    data() {
      return {
        targetDate: new Date("2025-06-01"), // 目標日
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
        const options = { month: "long", day: "numeric" };
        return this.targetDate.toLocaleDateString("ja-JP", options);
      },
    },
    mounted() {
      // 日付を毎時更新
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
