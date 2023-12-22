<template>
  <div class="discount">
      <div class="discount-inner">
          <p class="discount-title">{{ title }}</p>
          <figure class="discount-image">
              <img src="../../assets/img/license_page/discount.jpeg">
          </figure>
          <div class="discount-flex">
              <p class="discount-flex-left">再受講割引<span>▶︎</span></p>
              <p class="discount-flex-right">
                  受講料<br>
                  各<span>5000</span>円割引！
              </p>
          </div>
          <div class="discount-flex">
              <p class="discount-flex-left">女子・学生<br>応援割引<span>▶︎</span></p>
              <p class="discount-flex-right">
                  受講料<br>
                  <span>2000</span>円割引！
              </p>
          </div>
          <div class="discount-flex">
              <p class="discount-flex-left">団体援割<br>（5名）<span>▶︎</span></p>
              <p class="discount-flex-right">
                  受講料<br>
                  <span>全員10%OFF</span>
              </p>
          </div>
          <div class="discount-flex">
              <p class="discount-flex-left">超団体援割<br>（10名）<span>▶︎</span></p>
              <p class="discount-flex-right">
                  受講料<br>
                  <span>全員15%OFF</span>
              </p>
          </div>
          <div class="discount-note">
              <p>※割引の併用はできません。（キャンペーンコードは別）</p>
              <p>※再受講割引は過去に受講された方（同一科目・同一コースが対象）。</p>
              <p>※学割の方はお問い合わせフォームから学生証の画像を送付していただきます。</p>
              <p>※団体割は新規のお申込みが対象になります。</p>
              <p>※模擬試験は再受講割の対象外になります。</p>

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
.discount {
    max-width: 1170px;
    width: 100%;
    background-color: #1da1f2;
    margin: 40px auto 20px;
    z-index: 0;
    position: relative;
    font-family: 'Meiryo', sans-serif;
}
.discount-inner {
    padding: 40px 160px;
}
.discount-title {
    line-height: 1.3;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin: 0;
    text-shadow: 5px 5px 5px #000;
}
.discount-image {
    margin: 30px auto;
}
.discount-image img {
    margin: 0 auto;
    display: block;
}
.discount-flex {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 16px;
    padding: 12px 24px;
    margin-top: 20px;
}
.discount-flex-left {
    width: 50%;
    font-size: 28px;
    font-weight: 700;
    position: relative;
}
.discount-flex-left span {
    color: #ed6c00;
    font-size: 18px;
    position: absolute;
    right: 0;
}
.discount-flex-left br {
    display: none;
}
.discount-flex-right {
    width: 50%;
    font-size: 20px;
    color: red;
    font-weight: 700;
    padding-left: 4%;
}
.discount-flex-right span {
    font-size: 44px;
}
.discount-note {
    background: #fff;
    border-radius: 20px;
    padding: 12px;
    margin-top: 30px;
}

.discount-note p {
    font-size: 16px;
    line-height: 1.8;
}

@media print, screen and (max-width: 1000px) {
.discount-inner {
    padding: 40px;
}
}


@media print, screen and (max-width: 768px) {
.discount-title {
    font-size: 36px;
}

.discount-inner {
    padding: 12px;
}

.discount-flex {
    padding: 12px ;
}
.discount-flex-left {
    font-size: 22px;
}
.discount-flex-left span {
    font-size: 12px;
}

.discount-flex-left br {
    display: block;
}
.discount-flex-right {
    font-size: 12px;
    padding-left: 2%;
}
.discount-flex-right span {
    font-size: 28px;
}
.discount-note p {
    font-size: 12px;
}

}



</style>
