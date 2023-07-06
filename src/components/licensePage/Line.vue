<template>
  <div class="line">
      <div class="line-inner">
          <figure class="line-image">
              <a href="https://line.me/R/ti/p/@947ygtge">
                  <img src="../../assets/img/license_page/line.jpg">
              </a>
          </figure>
          <p class="line-text">
              能センLINE公式アカウント開設しました。<br>
              只今『お友達登録キャンペーン』で全講座に使える5000円割引キャンペーンコードをプレゼント！<br>
              期間限定ですのでお早めにご使用ください。（他の割引と併用可）
          </p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
  } 
}

</script>

<style lang="scss" scoped>
.line {
  max-width: 970px;
  width: 100%;
  background-color: #fff;
  margin: 20px auto;
  z-index: 0;
  position: relative;
}
.line-inner {
  padding: 20px 40px 40px;
}
.line-image {
  width: 80%;
  margin: 30px auto 20px
}

.line-text {
  font-size: 20px;
  line-height: 1.8;
  font-weight: 700;
  text-align: center;
}


@media print, screen and (max-width: 1000px) {
  .line {
      width: 90%;
  }

  .line-image {
  width: 90%;
  }
  .line-text {
  font-size: 18px;
  }
}

@media print, screen and (max-width: 560px) {
  .line-inner {
  padding: 20px;
  }

  .line-image {
  width: 100%;
  }

  .line-text {
  font-size: 14px;
  line-height: 1.6;
  }
}

</style>
