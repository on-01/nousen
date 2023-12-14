<template>
  <div class="contactInfo">
      <div class="contactInfo-inner">
          <p class="contactInfo-title" v-html="title"></p>
          <img class="contactInfo-icon" src="../../assets/img/icon/note.svg">
          <div class="contactInfo-link -tel">
              <a href="tel:012054728">📞 0120-547-284</a>
          </div>
          <div class="contactInfo-link">
              <a href="https://www.nouryoku.com/contact/" target="_blank">📧 無料お問い合わせフォーム</a>
          </div>
          <div class="contactInfo-link">
              <a href="https://timerex.net/s/a4b3c5d67_73c6/9aab6876" target="_blank">💻 無料オンライン相談</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  } 
}
</script>

<style lang="scss" scoped>
.contactInfo {
    width: 680px;
    background-color: #fff;
    border: 4px solid #f4891e;
    border-radius: 12px;
    font-family: メイリオ,sans-serif;
    margin: 0 auto;
}
.contactInfo-inner {
    position: relative;
    padding: 0.8em 2.4em;
}
.contactInfo-title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 1.7;
}
.contactInfo-icon {
    position: absolute;
    z-index: 10;
    top: -18px;
    left: -43px;
    width: 54px
}

.contactInfo-link {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: red;
    border: 2px solid red;
    margin: 10px auto;
    width: 80%;
}
.contactInfo-link.-tel {
    border: none;
}
.contactInfo-link a {
    width: 100%;
    height: 100%;
    display: block;
}
.contactInfo-link:hover {
    opacity: .8;
}
@media print, screen and (max-width: 768px) {
.contactInfo {
    width: 90%;
    margin: 0 auto;
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
    font-size: 15px;
}
}
</style>
