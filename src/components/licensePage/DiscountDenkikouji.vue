<template>
  <div class="discount">
    <div class="discount-inner">
      <div class="discount-header">
        <div class="discount-header-text">
          <span class="discount-badge">🎓 GO!資格 合格応援制度</span>
          <p class="discount-title">
            学びたい気持ちを、<br />
            <span class="discount-title-num">6</span>つの割引で応援。
          </p>
        </div>
        <figure class="discount-image">
          <img
            src="../../assets/img/license_page/discount.jpeg"
            alt="2級電気工事施工管理技士 講習会 通信講座 web講座"
          />
          <span class="discount-image-badge">
            団体のお申し込みなら<br />
            <span class="discount-image-badge-strong">最大15%OFF</span>
          </span>
        </figure>
      </div>

      <p class="discount-section-title">
        <span class="discount-section-title-text">あなたに合う割引をチェック</span>
      </p>

      <div class="discount-grid">
        <div class="discount-card-wrap">
          <span class="discount-card-bar"></span>
          <div class="discount-card">
            <p class="discount-card-title">
              <span class="discount-number">01</span>
              再受講割
            </p>
            <p class="discount-card-desc">同じ科目・コースの再受講</p>
            <p class="discount-card-price">
              各<span>5,000</span>円<em>OFF</em>
            </p>
          </div>
        </div>
        <div class="discount-card-wrap">
          <span class="discount-card-bar"></span>
          <div class="discount-card">
            <p class="discount-card-title">
              <span class="discount-number">02</span>
              若チャレ割
            </p>
            <p class="discount-card-desc">20歳以下</p>
            <p class="discount-card-price">
              各<span>5,000</span>円<em>OFF</em>
            </p>
          </div>
        </div>
        <div class="discount-card-wrap">
          <span class="discount-card-bar"></span>
          <div class="discount-card">
            <p class="discount-card-title">
              <span class="discount-number">03</span>
              女子応援割
            </p>
            <p class="discount-card-desc">女性の受講を応援</p>
            <p class="discount-card-price">
              各<span>2,000</span>円<em>OFF</em>
            </p>
          </div>
        </div>
        <div class="discount-card-wrap">
          <span class="discount-card-bar"></span>
          <div class="discount-card">
            <p class="discount-card-title">
              <span class="discount-number">04</span>
              シニア応援割
            </p>
            <p class="discount-card-desc">60歳以上</p>
            <p class="discount-card-price">
              各<span>2,000</span>円<em>OFF</em>
            </p>
          </div>
        </div>
        <div class="discount-card-wrap -group">
          <span class="discount-card-bar"></span>
          <div class="discount-card">
            <p class="discount-card-title">
              <span class="discount-number">05</span>
              団体割
            </p>
            <p class="discount-card-desc">5名以上</p>
            <p class="discount-card-price">
              全員<span>10%</span><em>OFF</em>
            </p>
          </div>
        </div>
        <div class="discount-card-wrap -group -groupMax">
          <span class="discount-card-bar"></span>
          <div class="discount-card">
            <p class="discount-card-title">
              <span class="discount-number">06</span>
              超団体割
            </p>
            <p class="discount-card-desc">10名以上</p>
            <p class="discount-card-price">
              全員<span>15%</span><em>OFF</em>
            </p>
          </div>
        </div>
      </div>

      <div class="discount-note">
        <div class="discount-note-head">
          <p class="discount-note-title">
            <span class="discount-note-icon">!</span>
            割引利用時のご注意
          </p>
          <g-link to="/go-kakuouen/" class="discount-detail-link">
            詳しい利用条件を見る
            <span class="arrow">→</span>
          </g-link>
        </div>
        <ul>
          <li class="-blue">割引の併用不可（キャンペーンコードは別）</li>
          <li class="-blue">再受講割引は、同じ科目・コースが対象</li>
          <li class="-orange">団体割は新規のお申し込みが対象</li>
          <li class="-orange">経験記述の添削のみは対象外</li>
        </ul>
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
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    font-family: "Meiryo", sans-serif;
  }
  .discount-inner {
    background: #fff;
    border-radius: 24px;
    padding: 24px;
  }

  // ヘッダー（青帯＋写真）
  .discount-header {
    display: flex;
    align-items: stretch;
    gap: 20px;
    background-color: #1262b2;
    background-image: radial-gradient(
        rgba(255, 255, 255, 0.12) 1px,
        transparent 1px
      ),
      linear-gradient(120deg, #0f56a8 0%, #1a75cf 55%, #2b93e6 100%);
    background-size: 12px 12px, 100% 100%;
    border-radius: 20px;
    padding: 20px 20px 56px 28px;
    color: #fff;
  }
  .discount-header-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .discount-badge {
    align-self: flex-start;
    background: #fff;
    color: #0d3b7a;
    font-weight: 700;
    font-size: 16px;
    padding: 6px 16px;
    border-radius: 40px;
    margin-bottom: 14px;
  }
  .discount-title {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.02em;
    margin: 0;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
  .discount-title-num {
    color: #ffd84d;
    font-size: 1.3em;
    line-height: 1;
  }
  .discount-image {
    position: relative;
    flex: 0 0 44%;
    margin: 0;
  }
  .discount-image img {
    width: 100%;
    height: 100%;
    min-height: 170px;
    object-fit: cover;
    border-radius: 14px;
    display: block;
  }
  .discount-image-badge {
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #f7931e, #ed6c00);
    border: 2px solid #fff;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
    padding: 6px 16px 8px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    white-space: nowrap;
  }
  .discount-image-badge-strong {
    font-size: 22px;
  }

  // 「＼ あなたに合う割引をチェック ／」
  .discount-section-title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: #0d3b7a;
    margin: 28px 0 16px;
  }
  .discount-section-title-text {
    position: relative;
    display: inline-block;
    padding: 0 34px;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 3px;
      height: 22px;
      margin-top: -11px;
      border-radius: 2px;
      background: #249ef0;
    }
    &::before {
      left: 10px;
      transform: rotate(-30deg);
      box-shadow: -7px 0 0 #249ef0;
    }
    &::after {
      right: 10px;
      transform: rotate(30deg);
      box-shadow: 7px 0 0 #249ef0;
    }
  }

  // 割引カード
  .discount-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .discount-card-wrap {
    display: flex;
    box-shadow: 0 4px 12px rgba(18, 98, 178, 0.1);
    border-radius: 14px;
  }
  .discount-card-bar {
    width: 8px;
    flex-shrink: 0;
    background: linear-gradient(180deg, #249ef0, #1262b2);
    border-radius: 14px 0 0 14px;
  }
  .discount-card {
    flex: 1;
    min-width: 0;
    background: #fff;
    border: 2px solid #5aaef0;
    border-left: none;
    border-radius: 0 14px 14px 0;
    padding: 16px 18px;
  }
  .discount-card-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #0d2a55;
    margin: 0 0 4px;
  }
  .discount-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(180deg, #3aa3f2, #1262b2);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    flex-shrink: 0;
  }
  .discount-card-desc {
    font-size: 14px;
    font-weight: 700;
    color: #555;
    margin: 0 0 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #c5d6ea;
  }
  .discount-card-price {
    font-size: 20px;
    font-weight: 700;
    color: #e60012;
    line-height: 1.2;
    margin: 0;
    white-space: nowrap;
  }
  .discount-card-price span {
    font-size: 44px;
    letter-spacing: 0.01em;
    margin: 0 4px;
  }
  .discount-card-price em {
    font-style: normal;
    font-size: 18px;
  }

  // 団体割（05・06）はオレンジ
  .discount-card-wrap.-group {
    box-shadow: 0 4px 12px rgba(237, 108, 0, 0.12);
    .discount-card-bar {
      background: linear-gradient(180deg, #f7a54a, #ed6c00);
    }
    .discount-card {
      border-color: #f4a14e;
    }
    .discount-number {
      background: linear-gradient(180deg, #f7a54a, #ed6c00);
    }
    .discount-card-desc {
      border-bottom-color: #f2cfa8;
    }
  }
  .discount-card-wrap.-groupMax .discount-card {
    border-color: #ed6c00;
  }

  .discount-note {
    background: #eaf7ff;
    border-radius: 16px;
    padding: 16px 20px;
    margin-top: 24px;
  }
  .discount-note-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  .discount-note-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
  }
  .discount-note-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #249ef0;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    flex-shrink: 0;
  }
  .discount-note ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  .discount-note li {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    line-height: 1.8;
  }
  .discount-note li::before {
    content: "・";
    display: inline-block;
    width: 20px;
    flex-shrink: 0;
    font-size: 22px;
    line-height: 1;
    font-weight: 700;
  }
  .discount-note li.-blue::before {
    color: #249ef0;
  }
  .discount-note li.-orange::before {
    color: #ed6c00;
  }
  .discount-detail-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #249ef0;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    border-radius: 40px;
    text-decoration: none;
    text-align: center;
    padding: 20px 40px;
    white-space: nowrap;
  }
  .discount-detail-link .arrow {
    margin-left: 6px;
  }

  @media print, screen and (max-width: 1000px) {
    .discount-inner {
      padding: 16px;
    }
    .discount-header {
      padding: 18px 16px 56px 20px;
      gap: 16px;
    }
  }

  @media print, screen and (max-width: 768px) {
    .discount-inner {
      padding: 16px 12px;
    }
    .discount-header {
      gap: 10px;
      padding: 14px 12px 36px 14px;
      border-radius: 14px;
    }
    .discount-title {
      font-size: 19px;
    }
    .discount-badge {
      font-size: 11px;
      padding: 4px 10px;
      margin-bottom: 8px;
    }
    .discount-image {
      flex-basis: 40%;
    }
    .discount-image img {
      min-height: 100px;
      border-radius: 10px;
    }
    .discount-image-badge {
      bottom: -22px;
      font-size: 8px;
      padding: 3px 8px 4px;
      border-radius: 8px;
      border-width: 1px;
    }
    .discount-image-badge-strong {
      font-size: 13px;
    }
    .discount-section-title {
      font-size: 17px;
      margin: 20px 0 12px;
    }
    .discount-section-title-text {
      padding: 0 26px;
      &::before,
      &::after {
        height: 16px;
        margin-top: -8px;
      }
      &::before {
        left: 8px;
        box-shadow: -5px 0 0 #249ef0;
      }
      &::after {
        right: 8px;
        box-shadow: 5px 0 0 #249ef0;
      }
    }
    // SP も2列で表示
    .discount-grid {
      gap: 8px;
    }
    .discount-card-wrap {
      border-radius: 10px;
    }
    .discount-card-bar {
      width: 5px;
      border-radius: 10px 0 0 10px;
    }
    .discount-card {
      padding: 10px 8px 10px 10px;
      border-radius: 0 10px 10px 0;
    }
    .discount-card-title {
      gap: 5px;
      font-size: 15px;
      letter-spacing: -0.02em;
    }
    .discount-number {
      width: 22px;
      height: 22px;
      font-size: 10px;
    }
    .discount-card-desc {
      font-size: 10px;
      margin-bottom: 6px;
      padding-bottom: 6px;
    }
    .discount-card-price {
      font-size: 12px;
    }
    .discount-card-price span {
      font-size: 24px;
      margin: 0 2px;
    }
    .discount-card-price em {
      font-size: 11px;
    }
    .discount-note {
      display: flex;
      flex-direction: column;
    }
    .discount-note-head {
      display: contents;
    }
    .discount-note-title {
      order: 1;
    }
    .discount-note ul {
      order: 2;
    }
    .discount-detail-link {
      order: 3;
      width: 100%;
      padding: 10px;
      margin-top: 16px;
      box-sizing: border-box;
    }
  }

  // 極小画面は1列
  @media print, screen and (max-width: 340px) {
    .discount-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
