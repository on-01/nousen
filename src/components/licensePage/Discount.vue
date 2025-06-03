<template>
  <div class="discount">
    <div class="discount-inner">
      <p class="discount-title">{{ title }}</p>
      <figure class="discount-image">
        <img
          src="../../assets/img/license_page/discount.jpeg"
          alt="電験三種 第三種電気主任技術者"
        />
      </figure>
      <div class="discount-note">
        <p class="fw700">🎓 GO!資格 合格応援制度とは？</p>
        <p>
          資格取得を目指すあなたを全力でサポートするための特別プログラムです。
        </p>
        <p>
          学習を続けるモチベーションを保ちながら、合格を確実に引き寄せるための“応援特典”をご用意しました！
        </p>
        <p>※本制度は一定の条件を設けております。</p>
      </div>
      <div class="discount-flex">
        <p class="discount-flex-left">
          再受講割引
          <span class="arrow">▶︎</span>
        </p>
        <p class="discount-flex-right">
          受講料
          <br />
          各
          <span>5000</span>
          円割引！
          <br />
        </p>
      </div>
      <div class="wrapper">
        <div class="discount-flex">
          <div class="discount-flex-left">
            若チャレ割
            <br />
            <p class="discount-small">（若者チャレンジ応援割！20歳以下）</p>
            <span class="arrow -waka">▶︎</span>
          </div>
          <p class="discount-flex-right">
            受講料
            <br />
            <span>5000</span>
            円割引！
          </p>
        </div>
        <div class="discount-flex -nomt">
          <p class="discount-flex-left -sp">
            女子応援割
            <span class="arrow">▶︎</span>
          </p>
          <p class="discount-flex-right">
            受講料
            <br />
            <span>2000</span>
            円割引！
          </p>
        </div>
        <div class="discount-flex -nomt">
          <div class="discount-flex-left">
            シニア応援割
            <br />
            <p class="discount-small">（60歳以上対象）</p>
            <span class="arrow -waka">▶︎</span>
          </div>
          <p class="discount-flex-right">
            受講料
            <br />
            <span>2000</span>
            円割引！
          </p>
        </div>
      </div>
      <div class="wrapper">
        <div class="discount-flex">
          <p class="discount-flex-left -sp">
            団体割
            <br />
            <span class="number">（5名以上）</span>
            <span class="arrow">▶︎</span>
          </p>
          <p class="discount-flex-right">
            受講料
            <br />
            <span>全員10%OFF</span>
          </p>
        </div>
        <div class="discount-flex -nomt">
          <p class="discount-flex-left -sp">
            超団体割
            <br />
            <span class="number">（10名以上）</span>
            <span class="arrow">▶︎</span>
          </p>
          <p class="discount-flex-right">
            受講料
            <br />
            <span>全員15%OFF</span>
          </p>
        </div>
      </div>
      <div class="discount-note">
        <p>※割引の併用はできません（キャンペーンコードは別）</p>
        <p>※再受講割引は過去に受講された方（同じ科目が対象）</p>
        <p>※団体割は新規のお申込みが対象になります</p>
        <p>※模擬試験は再受講割の対象外になります</p>
      </div>
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
  .discount {
    max-width: 1070px;
    width: 100%;
    background-color: #1da1f2;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
  }
  .discount-inner {
    padding: 40px 190px;
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
  .discount-flex.-nomt {
    margin-top: 0;
  }

  .discount-flex-left {
    width: 50%;
    font-size: 28px;
    font-weight: 700;
    position: relative;
    margin: 0;
  }
  .number {
    font-size: 24px;
  }
  .discount-flex-left .arrow {
    color: #ed6c00;
    font-size: 18px;
    position: absolute;
    right: 0;
  }
  .discount-flex-left .arrow.-waka {
    top: 25px;
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
    margin: 0;
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
    margin: 0;
  }

  .fw700 {
    font-weight: 700;
  }

  .discount-small {
    margin: 0;
    font-size: 16px;
  }

  @media print, screen and (max-width: 1000px) {
    .discount-inner {
      padding: 40px;
    }
    .discount-small {
      font-size: 12px;
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
      padding: 12px;
    }
    .discount-flex-left {
      font-size: 22px;
    }
    .number {
      font-size: 22px;
    }
    .discount-flex-left .arrow {
      font-size: 12px;
    }

    .discount-flex-left.-sp .arrow {
      top: 24px;
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

  .wrapper {
    background: #fff;
    border-radius: 16px;
  }
</style>
