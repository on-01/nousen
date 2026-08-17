<template>
  <div class="discount">
    <div class="discount-inner">
      <div class="discount-header">
        <div class="discount-header-text">
          <span class="discount-badge">🎓 GO!資格 合格応援制度</span>
          <p class="discount-title">
            学びたい気持ちを、<br />
            6つの割引で応援。
          </p>
        </div>
        <figure class="discount-image">
          <img
            src="../../assets/img/license_page/discount.jpeg"
            alt="2級電気工事施工管理技士 講習会 通信講座 web講座"
          />
          <span class="discount-image-badge">
            団体のお申込みなら<br />
            <span class="discount-image-badge-strong">最大15%OFF</span>
          </span>
        </figure>
      </div>

      <p class="discount-section-title">
        <span class="discount-bar"></span>
        あなたに合う割引をチェック
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
        <div class="discount-card-wrap -groupMax">
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
          <g-link to="/go-kakuouen" class="discount-detail-link">
            詳しい利用条件を見る
            <span class="arrow">→</span>
          </g-link>
        </div>
        <ul>
          <li class="-blue">割引の併用不可（キャンペーンコードは別）</li>
          <li class="-blue">再受講割引は、同じ科目・コースが対象</li>
          <li class="-orange">団体割は新規のお申込みが対象</li>
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
    max-width: 870px;
    width: 100%;
    margin: 0 auto;
    font-family: "Meiryo", sans-serif;
  }
  .discount-inner {
    background: #fff;
    border-radius: 24px;
    padding: 42px;
  }
  .discount-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    background: linear-gradient(90deg, #1262b2, #249ef0);
    border-radius: 20px;
    padding: 28px 32px;
    color: #fff;
  }
  .discount-header-text {
    flex: 1;
  }
  .discount-badge {
    display: inline-block;
    background: rgba(69, 154, 216, 0.5);
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    padding: 6px 16px;
    border-radius: 40px;
    margin-bottom: 14px;
  }
  .discount-title {
    font-size: 38px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
  }
  .discount-image {
    position: relative;
    flex-shrink: 0;
    margin: 0;
  }
  .discount-image img {
    width: 220px;
    height: 140px;
    object-fit: cover;
    border-radius: 16px;
    display: block;
  }
  .discount-image-badge {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    background: linear-gradient(90deg, #ed6c00, #f4891e);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
    padding: 8px 18px;
    border-radius: 40px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
  }
  .discount-image-badge-strong {
    font-size: 20px;
  }
  .discount-section-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 28px;
    font-weight: 700;
    color: #005a9e;
    margin: 28px 0 16px;
  }
  .discount-bar {
    display: inline-block;
    width: 8px;
    height: 28px;
    background: #249ef0;
    border-radius: 4px;
  }
  .discount-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .discount-card-wrap {
    display: flex;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
  }
  .discount-card-bar {
    width: 8px;
    flex-shrink: 0;
    background: #249ef0;
    border-radius: 16px 0 0 16px;
  }
  .discount-card {
    flex: 1;
    min-width: 0;
    background: #fff;
    border: 2px solid #249ef0;
    border-left: none;
    border-radius: 0 16px 16px 0;
    padding: 20px;
  }
  .discount-card-wrap.-group .discount-card-bar {
    background: #f4891e;
  }
  .discount-card-wrap.-group .discount-card {
    border-color: #f4891e;
  }
  .discount-card-wrap.-group .discount-number {
    background: #fdeee0;
    color: #f4891e;
  }
  .discount-card-wrap.-groupMax .discount-card-bar {
    background: #ed6c00;
  }
  .discount-card-wrap.-groupMax .discount-card {
    border-color: #ed6c00;
    background: #fdeee0;
  }
  .discount-card-wrap.-groupMax .discount-number {
    background: #fff;
    color: #ed6c00;
  }
  .discount-card-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 6px;
  }
  .discount-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #eaf7ff;
    color: #005a9e;
    font-size: 16px;
    font-weight: 700;
    flex-shrink: 0;
  }
  .discount-card-desc {
    font-size: 16px;
    font-weight: 700;
    color: #666;
    margin: 0 0 12px;
  }
  .discount-card-price {
    font-size: 16px;
    font-weight: 700;
    color: #ff0000;
    margin: 0;
  }
  .discount-card-price span {
    font-size: 36px;
    margin: 0 2px;
  }
  .discount-card-price em {
    font-style: normal;
    font-size: 16px;
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
      padding: 20px;
      gap: 16px;
    }
  }

  @media print, screen and (max-width: 768px) {
    .discount-inner {
      padding: 16px 20px;
    }
    .discount-header {
      gap: 10px;
      padding: 16px;
    }
    .discount-title {
      font-size: 20px;
    }
    .discount-badge {
      font-size: 11px;
      padding: 4px 10px;
      margin-bottom: 8px;
    }
    .discount-grid {
      grid-template-columns: 1fr;
    }
    .discount-section-title {
      font-size: 20px;
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
    .discount-image img {
      width: 96px;
      height: 64px;
    }
    .discount-image-badge {
      font-size: 9px;
      padding: 5px 8px;
    }
    .discount-image-badge-strong {
      font-size: 11px;
    }
    .discount-card-price span {
      font-size: 28px;
    }
  }
</style>
