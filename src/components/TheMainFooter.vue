<template>
  <div class="main-footer">
    <div class="main-footer-inner">
      <div class="main-footer-top">
        <div class="main-footer-top-inner">
          <div class="logo">
            <div class="logo-inner">
              <img
                src="../assets/img/common/main_logo.svg"
                alt="能セン 合格への近道"
                width="174"
                height="93"
                decoding="async"
              />
            </div>
            <div class="logo-text">
              <p class="logo-text_logo">株式会社ＮＯＵＳＥＮ</p>
              <a href="https://jeea.or.jp/" target="_blank" class="jeea-link">
                (社) 日本電気技術者協会 維持会員
              </a>
            </div>
          </div>

          <div class="SDGs_image">
            <figure><a href="https://www.mofa.go.jp/mofaj/gaiko/oda/sdgs/index.html" target="_blank">
              <img src="../assets/img/common/SDGs.jpg" alt="SDGs">
            </a></figure>
          </div>

          <div class="wrapper-information">
            <div class="information">
              <p class="information_list">
                <g-link to="/company">会社概要</g-link>
              </p>
              <p class="information_list">
                <g-link to="/benefits">給付制度</g-link>
              </p>
              <p class="information_list">
                <g-link to="/guide">特定商取引法に基づく表記</g-link>
              </p>
              <p class="information_list">
                <g-link to="/privacy">プライバシーポリシー</g-link>
              </p>
            </div>
            <!-- <div class="sns-link twitter-link">
              <a href="https://twitter.com/nouryoku1983" target="_blank">
                <p>公式 Twitter</p>
                <img
                  src="../assets/img/common/twitter.svg"
                  alt="twitter"
                  width="37"
                  height="30"
                />
              </a>
              <a href="https://line.me/R/ti/p/@947ygtge" target="_blank" class="line-link">
                <p>公式 LINE</p>
                <img
                  src="../assets/img/common/lineIcon.jpg"
                  alt=""
                  width="37"
                  height="30"
                />
              </a>
            </div> -->
            <div class="eco-image">
                <img src="../assets/img/common/eco.jpg"  width="70" height="70" alt="eco" />
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer-bottom">
        <div class="application">
          <p class="message">
            ご質問・ご相談など、お気軽にお問い合わせください
          </p>
          <a href="tel:0120547284" class="tel">
            <img
              src="../assets/img/common/tel.svg"
              alt="0120-547-284（平日土日9:00~19:00）"
              width="621"
              height="38"
            />
          </a>
          <figure class="credit"><img src="../assets/img/common/credit.jpg"></figure>
          <figure class="sp_SDGs_image"><a href="https://www.mofa.go.jp/mofaj/gaiko/oda/sdgs/index.html" target="_blank">
            <img src="../assets/img/common/SDGs.jpg" alt="SDGs">
          </a></figure>
        </div>
        <div class="banner">
          <div class="column">
            <a href="https://www.tokyo-cci.or.jp/" target="_blank">
              <g-image
                src="../assets/img/common/banner1.jpg"
                alt="バナー 東京商工会議所"
                width="200px"
              />
            </a>
            <a href="https://context-japan.co.jp/ryokin/" target="_blank">
              <g-image
                src="../assets/img/common/banner3.jpg"
                alt="料金相場.jp"
                width="200px"
                class="banner3"
              />
            </a>
          </div>
          <a href="https://www.birumen-navi.com/" target="_blank">
            <g-image
              src="../assets/img/common/banner2.jpg"
              alt="バナー ビルメン転職ナビ 電験転職ナビ 施工管理転職ナビ"
              width="140px"
            />
          </a>
        </div>
      </div>

      <div class="sns">
        <a href="https://www.facebook.com/nousen2023" target="_blank">
            <img src="../assets/img/common/FB.jpg" width="60" height="60" alt="FB" />
        </a>
        <a href="https://page.line.me/947ygtge?openQrModal=true" target="_blank">
            <img src="../assets/img/common/LINE.jpg"  width="60" height="60" alt="LINE" />
        </a>
        <a href="https://twitter.com/nouryoku1983" target="_blank">
            <img src="../assets/img/common/Twitter.jpg"  width="60" height="60" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/channel/UCxEEViJd9b6s4fhZeg0dleQ" target="_blank">
            <img src="../assets/img/common/YouTube.jpg"  width="60" height="60" alt="Youtube" />
        </a>
    </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-footer {
  border-top: 2px solid #f4f0ed;
  margin-bottom: 20px;
  position: relative;
}
.main-footer-inner {
  padding: 10px 0 110px;
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  @media print, screen and(max-width: 1000px) {
    padding: 10px 0 100px;
    width: 90%;
  }
}
.main-footer-top {
  .logo {
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    &-text {
      margin-left: 2em;
      margin-top: 1.5em;

      &_logo {
        font-size: 15px;
        margin: 0;
        font-weight: bold;
        font-family: 'メイリオ', sans-serif;
        @media print, screen and(max-width: 1000px) {
          font-size: 12px;
        }
      }
    }
  }
  .logo-inner {
    width: 100%;
    max-width: 130px;
    margin-top: 10px;
    @media print, screen and(max-width: 1000px) {
      max-width: 100px;
    }
  }
  .under_display {
    @media print, screen and(min-width: 1001px) {
      display: none;
    }
  }
  .jeea-link {
    font-size: 13px;
    line-height: 1.5em;
    display: block;
    font-family: 'メイリオ', sans-serif;
    @media print, screen and(max-width: 1000px) {
      font-size: 10px;
      transform: scale(0.9);
      transform-origin: left center;
    }
  }
  .wrapper-information {
    @media print, screen and(max-width: 1000px) {
      display: flex;
      margin-top: 2em;
      width: 100%;
      justify-content: space-between;
    }
  }
  .information {
    font-weight: bold;
    max-width: 750px;
    font-family: 'メイリオ', sans-serif;
    @media print, screen and(min-width: 1001px) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      width: 420px;
      margin-top: 1em;
    }
    p {
      margin: 0;
      font-size: 15px;
      @media print, screen and(max-width: 1000px) {
        display: block;
        text-align: left;
        margin-top: 0.5em;
        font-size: 12px;
      }
      @media print, screen and(min-width: 1001px) {
        &:nth-child(1),
        &:nth-child(3) {
          width: 232px;
        }
      }
    }
  }
}
.information_list::after {
  content: url("../assets/img/icon/double_arrow_right_orange.svg");
  height: 1.2em;
  width: 1.2em;
  display: inline-block;
  vertical-align: sub;
  position: relative;
  margin-left: 7px;
  @media print, screen and(min-width: 1001px) {
    margin-left: 7px;
  }
}
.main-footer-top-inner {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media print, screen and(max-width: 1000px) {
    align-items: flex-start;
    flex-direction: column;
  }
}
.main-footer-bottom {
  margin-top: 40px;
  @media print, screen and(min-width: 1001px) {
    display: flex;
    justify-content: space-between;
  }
  .message {
    // font-family: serif;
    font-family: 'メイリオ', sans-serif;
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 0;
    @media print, screen and(max-width: 1000px) {
      font-size: 11px;
    }
  }
}

.eco-image {
  display: block;
    @media print, screen and(min-width: 1001px) {
      position: absolute;
      z-index: 1;
      bottom: -10.8rem;
      left: 45%;
      font-size: 14px;
    }
    img {
      width: 130px;
      transform: translateX(-30px);
      @media print, screen and(max-width: 1000px) {
        margin-left: 1.2em;
        transform: translateX(0px);
      }
    }
}

.application {
  position: relative;
  font-size: 20px;
  width: 100%;
  @media print, screen and(min-width: 1001px) {
    max-width: 60%;
    & img {
      width: 385px;
    }
  }

  @media print, screen and(max-width: 1000px) {
    text-align: center;
    & img {
      width: 90%;
    }
  }
  .tel {
    line-height: 1.2em;
  }
}
.banner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media print, screen and(min-width: 1001px) {
    max-width: 40%;
  }
  @media print, screen and(max-width: 1000px) {
    margin-top: 30px;
  }
  a img {
    @media print, screen and(max-width: 1000px) {
      max-width: 160px;
    }
  }
}

.line-link {
  margin-top: 20px;
}

.column {
  display: flex;
  flex-direction: column;
}

.banner3 {
  margin-top: 20px;
  border: 1px solid rgba(0,0,0, 0.3);
}

.credit {
  width: 385px;
  margin-left: 0;
  @media print, screen and(max-width: 1000px) {
    margin-left: 40px;
    width: auto;
  }
}
.credit img {
  width: 220px;
  display: block;
  margin: 0 auto;
}
.SDGs_image {
  margin-right: 5px;
}
.SDGs_image figure {
  width: 70%;
  margin: 10px auto 0;
}

@media print, screen and(max-width: 1000px) {
  .SDGs_image  {
  display: none;
  }
}
.sp_SDGs_image {
  display:none;
}
@media print, screen and(max-width: 1000px) {
  .sp_SDGs_image  {
  display: block;
  width: 140px;
  margin: 0 auto;
  }
  .sp_SDGs_image img {
  width: 100%;
  height: 100%;
  display: block;
}
}

.sns {
    display: flex;
    @media print, screen and(max-width: 1000px) {
      justify-content: center;
    }
}

.sns a:hover {
    opacity: .8;
}

</style>
