<template>
  <div class="lecture">
    <div class="lecture-inner">
      <div class="lecture-section">
        <figure class="lecture-image">
          <img :src="imagePath" />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title" v-html="title"></p>
          <p class="lecture-line"></p>
          <p class="lecture-title -small" v-html="title2"></p>
          <p class="lecture-text">{{ text }}</p>
        </div>
      </div>
      <!-- <div class="lecture-section -bottom">
        <figure class="lecture-image">
          <img :src="imagePath2" />
        </figure>
        <div class="lecture-description">
          <p class="lecture-title" v-html="title3"></p>
          <p class="lecture-line"></p>
          <p class="lecture-text">{{ text2 }}</p>
          <br />
          <p class="lecture-title -small" v-html="title4"></p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      title2: String,
      title3: String,
      title4: String,
      text: String,
      text2: String,
      imagePath: String,
      imagePath2: String,
    },
  };
</script>

<style lang="scss" scoped>
  .lecture {
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    font-family: "メイリオ", sans-serif;
  }
  .lecture-inner {
    max-width: 1170px;
    width: 100%;
    padding: 30px 0;
    margin: 0 auto;
  }

  .lecture-section {
    display: flex;
    justify-content: space-between;
  }

  .lecture-section.-bottom {
    flex-direction: row-reverse;
    margin-top: 40px;
    .lecture-description {
      margin-left: 40px;
      padding-right: 0;
    }
    .lecture-image {
      width: 38%;
      img {
        width: 50%;
        margin-left: 100px;
      }
    }
  }

  .lecture-image {
    width: 48%;
  }

  .lecture-description {
    width: 48%;
    padding-right: 20px;
  }

  .lecture-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .lecture-title.-small {
    font-size: 16px;
    line-height: 2;
    text-align: left;
  }

  .lecture-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
  }

  .lecture-text {
    font-size: 16px;
    line-height: 2;
    margin-top: 0;
  }

  .add {
    padding: 10px 30px;
  }
  .add-wrapper {
    max-width: 755px;
    margin: 0 auto;
  }
  .add-text1 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  .add-text2 {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
  .add-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #000;
    border: 2px solid #1da1f2;
    padding: 8px 0;
    margin: 36px 0 12px;
  }

  @media print, screen and (max-width: 1000px) {
    .lecture-section {
      flex-wrap: wrap;
    }

    .lecture-section.-bottom {
      justify-content: center;
      .lecture-description {
        margin-left: auto;
      }
      .lecture-image {
        width: 50%;
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }

    .lecture-image {
      width: 100%;
    }

    .lecture-description {
      width: 90%;
      margin-top: 20px;
      padding-right: 0;
      margin: 0 auto;
    }

    .lecture-title {
      font-size: 24px;
    }
    .lecture-title.-small {
      font-size: 16px;
      line-height: 1.6;
    }
    .lecture-text {
      font-size: 16px;
      line-height: 1.6;
    }
    .add {
      padding: 0 20px;
    }
  }
</style>
