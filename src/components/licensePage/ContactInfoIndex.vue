<template>
  <div class="contactInfo">
    <div class="contactInfo-inner">
      <p class="contactInfo-title -red" v-html="title"></p>
      <p class="contactInfo-title">
        【お電話】【フォーム】【オンライン】
        <br />
        お気軽にお問い合わせください。
      </p>
      <img class="contactInfo-icon" src="../../assets/img/icon/note.svg" />
      <div class="contactInfo-link -tel">
        <a href="tel:012054728">
          <img src="../../assets/img/icon/contactInfo_tel.svg" />
        </a>
      </div>
      <div class="contactInfo-link">
        <a href="https://www.nouryoku.com/contact/" target="_blank">
          📧 無料お問い合わせフォーム
        </a>
      </div>
      <div class="contactInfo-link">
        <a href="https://timerex.net/s/a4b3c5d67_73c6/9aab6876" target="_blank">
          💻 無料オンライン相談
        </a>
      </div>
      <p class="contactInfo-title">資格取得アドバイザーがいつでもサポート！</p>
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
  .contactInfo {
    width: 680px;
    background-color: #fff;
    border: 4px solid #f4891e;
    border-radius: 12px;
    font-family: メイリオ, sans-serif;
    margin: 40px auto 250px;
    @media print, screen and (max-width: 1000px) {
      margin-bottom: 50px;
    }
  }
  .contactInfo-inner {
    position: relative;
    padding: 1.2em 2.4em;
  }
  .contactInfo-title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 1.7;
  }
  .contactInfo-title.-red {
    color: red;
  }
  .contactInfo-icon {
    position: absolute;
    z-index: 0;
    top: -18px;
    left: -43px;
    width: 54px;
  }

  .contactInfo-link {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #000;
    border: 2px solid #f4891e;
    margin: 10px auto;
    width: 68%;
    border-radius: 8px;
  }
  .contactInfo-link.-tel {
    border: none;
    width: 40%;
  }
  .contactInfo-link a {
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
  }
  .contactInfo-link:hover {
    opacity: 0.8;
  }
  @media print, screen and (max-width: 768px) {
    .contactInfo {
      width: 90%;
      margin: 40px auto 30px;
    }
    .contactInfo-inner {
      padding: 0.8em;
    }
    .contactInfo-title {
      font-size: 15px;
    }
    .contactInfo-icon {
      display: none;
    }

    .contactInfo-link {
      width: 80%;
      font-size: 15px;
    }
  }
  @media print, screen and (max-width: 480px) {
    .contactInfo-link.-tel {
      width: 50%;
    }
  }
</style>
