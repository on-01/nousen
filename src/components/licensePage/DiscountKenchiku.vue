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
            alt="2級建築施工管理技士 講習会 通信講座 web講座"
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
          <p class="discount-note-title">❗ 割引利用時のご注意</p>
          <g-link to="/go-kakuouen" class="discount-detail-link">
            詳しい利用条件を見る
            <span class="arrow">→</span>
          </g-link>
        </div>
        <ul>
          <li>割引の併用不可（キャンペーンコードは別）</li>
          <li>再受講割引は、同じ科目・コースが対象</li>
          <li>団体割は新規のお申込みが対象</li>
          <li>経験記述の添削のみは対象外</li>
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
    max-width: 1070px;
    width: 100%;
    margin: 0 auto;
    font-family: "Meiryo", sans-serif;
  }
  .discount-inner {
    background: #fff;
    border-radius: 24px;
    padding: 24px;
  }
  .discount-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: #1262b2;
    border-radius: 20px;
    padding: 28px 32px;
    color: #fff;
  }
  .discount-header-text {
    flex: 1;
  }
  .discount-badge {
    display: inline-block;
    background: #fff;
    color: #1262b2;
    font-weight: 700;
    font-size: 14px;
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 14px;
  }
  .discount-title {
    font-size: 30px;
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
    right: -10px;
    bottom: -14px;
    background: #ed6c00;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
    padding: 8px 12px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
  }
  .discount-image-badge-strong {
    font-size: 15px;
  }
  .discount-section-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #005a9e;
    margin: 28px 0 16px;
  }
  .discount-bar {
    display: inline-block;
    width: 8px;
    height: 22px;
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
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 6px;
  }
  .discount-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #eaf7ff;
    color: #005a9e;
    font-size: 13px;
    font-weight: 700;
    flex-shrink: 0;
  }
  .discount-card-desc {
    font-size: 14px;
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
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
  }
  .discount-note ul {
    margin: 0;
    padding-left: 18px;
  }
  .discount-note li {
    font-size: 13px;
    color: #555;
    line-height: 1.8;
  }
  .discount-detail-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #1262b2;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    padding: 8px 18px;
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
      flex-direction: column;
      align-items: flex-start;
      padding: 24px;
    }
    .discount-image {
      align-self: center;
    }
  }

  @media print, screen and (max-width: 768px) {
    .discount-title {
      font-size: 22px;
    }
    .discount-badge {
      font-size: 12px;
    }
    .discount-grid {
      grid-template-columns: 1fr;
    }
    .discount-note-head {
      flex-direction: column;
      align-items: flex-start;
    }
    .discount-detail-link {
      width: 100%;
      padding: 10px;
    }
    .discount-image img {
      width: 160px;
      height: 100px;
    }
    .discount-card-price span {
      font-size: 28px;
    }
  }
</style>
