<template>
  <Layout>
    <div class="not_found">
      <div class="not_found-contents">
        <h2 class="not_found-title">お探しのページが見つかりませんでした</h2>
      </div>
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
  name: 'not_found',
  metaInfo() {
    return {
      title: '404',
      meta: [
        {
          key: `og:title`,
          property: `og:title`,
          content: `404 | ${this.$static.metadata.siteName}`,
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.not_found-contents {
  width: 100%;
  margin: 0 auto;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
  }
}
.not_found-title {
  text-align: center;
  padding: 150px 0;
  @media print, screen and (max-width: 980px) {
    padding: 100px 0;
  }
}
</style>