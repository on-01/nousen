<template>
  <div class="campaign">
    <p class="campaign-title">合格応援キャンペーン(受講者特典)</p>
    <div class="campaign-inner">
      <div class="campaign-section">
        <figure class="campaign-image">
          <img
            src="../../assets/img/license_page/campaign_1-1.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
        </figure>
        <div class="campaign-description">
          <p class="campaign-topic">旧テキストを進呈</p>
          <ul class="campaign-content">
            <li>・令和６年度から一次・二次のテキストが新しくなります！</li>
            <li>
              ・今まで使用していたテキストは受講生全員にプレゼントいたします
            </li>
          </ul>
        </div>
      </div>
      <div class="campaign-section">
        <figure class="campaign-image">
          <img
            src="../../assets/img/license_page/campaign_2.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
        </figure>
        <div class="campaign-description">
          <p class="campaign-topic">過去の試験問題を進呈</p>
          <ul class="campaign-content">
            <!-- <li>・過去の試験問題を進呈します。</li> -->
            <li>・【通学】過去５年分を印刷して進呈</li>
            <li>・【オンライン】過去５年分をダウンロード</li>
            <li>一次・二次共に問題と解答になります。</li>
          </ul>
        </div>
      </div>
      <div class="campaign-section">
        <figure class="campaign-image">
          <img
            src="../../assets/img/license_page/campaign_3.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
        </figure>
        <div class="campaign-description">
          <p class="campaign-topic">願書取り寄せサービス</p>
          <p class="campaign-summary">
            受験願書（一次二次用・二次用）を無料でお送りいたします。
          </p>
          <ul class="campaign-content">
            <li>
              ・２種類ありますので、申込みの際にお間違えのない様にして下さい
            </li>
            <li>
              ・願書提出期日{{ day }}日前
              <span>【{{ date }}】</span>
              までに講座をお申込みの方が対象となります
              <br />
              ※【経験記述の添削のみ】の方は対象外になります
            </li>
          </ul>
        </div>
      </div>
      <div class="campaign-section">
        <figure class="campaign-image">
          <img
            src="../../assets/img/license_page/campaign_4.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
        </figure>
        <div class="campaign-description">
          <p class="campaign-topic">施工経験記述添削サービス</p>
          <p class="campaign-summary">
            専門講師が記述式の第二次検定を添削指導します。
          </p>
          <ul class="campaign-content">
            <li>
              ・【一次・二次】【二次のみ】受験対策講座をお申込みの方が対象です
            </li>
            <li>
              ・添削は受講料金に1回分含まれています。追加は1回につき2,750円で何回でも可能です
            </li>
            <li>・添削のみのサービスも提供しております</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      day: String,
      date: String,
    },
  };
</script>

<style lang="scss" scoped>
  .campaign {
    // max-width: 1170px;
    width: 100%;
    background-color: #fff;
    // margin: 40px auto;
    // margin: 40px auto 0;
    margin: 0 auto 0;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
  }
  .campaign-inner {
    padding: 20px;
    max-width: 1210px;
    margin: 0 auto;
  }

  .campaign-title {
    line-height: 1.3;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    background-color: #ed6c00;
    padding: 1rem;
    text-align: center;
    margin: 0;
    box-shadow: 0px 5px 1px rgba(161, 73, 0, 1);
    @media print, screen and (max-width: 560px) {
      font-size: 20px;
    }
  }
  .campaign-section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .campaign-image {
    width: 25%;
  }
  .campaign-description {
    width: 70%;
    line-height: 2;
  }
  .campaign-topic {
    font-weight: bold;
    font-size: 20px;
    color: #005a9e;
    margin: 10px 0 0;
  }
  .campaign-summary {
    font-weight: medium;
    font-size: 16px;
    color: #005a9e;
    margin: 0;
  }

  .campaign-content {
    font-weight: normal;
    font-size: 16px;
  }
  .campaign-content li span {
    color: #ff0000;
  }

  @media print, screen and (max-width: 1000px) {
    .campaign {
      width: 100%;
    }
    .campaign-section {
      flex-flow: wrap;
      margin: 0 auto;
    }
    .campaign-image {
      width: 90%;
      margin: 0 auto;
    }

    .campaign-description {
      width: 100%;
      margin-top: 20px;
    }
  }

  @media print, screen and (max-width: 560px) {
    .campaign-description {
      margin-top: 10px;
      line-height: 1.8;
    }
    .campaign-topic {
      font-size: 18px;
    }
    .campaign-summary {
      font-size: 14px;
    }
    .campaign-content {
      font-size: 14px;
    }
  }
</style>
