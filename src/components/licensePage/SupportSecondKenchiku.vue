<template>
  <section>
    <!-- <div class="support-wrap">
      <p class="support-title">{{ title }}</p>
      <div class="support">
        <div class="support-description">
          <p>建設業を知ってもらうために！</p>
          <p>
            受講生・企業採用担当者様・建設業に興味がある学生の方に進呈します。
          </p>
        </div>
        <div class="support-flex">
          <figure class="support-image">
            <img
              src="../../assets/img/license_page/support_1.jpg"
              alt="みんなの建設業Q&A50"
            />
          </figure>
          <figure class="support-image">
            <img
              src="../../assets/img/license_page/support_2.png"
              alt="建設業ウエルカム"
            />
          </figure>
          <figure class="support-image">
            <img
              src="../../assets/img/license_page/support_3.png"
              alt="建設産業ガイドブック"
            />
          </figure>
        </div>
        <ul class="support-list">
          <li>■みんなの建設業Q&A50　一般社団法人東京建設業協会　人材支援課</li>
          <li>
            ■建設産業ガイドブック　建設産業人材確保・育成推進協議会（人材協）
          </li>
          <li>■建設業ウエルカム(最新号)　厚生労働省 建設労働者育成支援事業</li>
        </ul>
        <div class="support-notes">
          <p>※新規お申込みの方は教材と一緒にお送りいたします。</p>
          <p>
            ※企業採用担当者
            様・学生の方は能セン事務局までご連絡ください。無料でお送りいたします。
          </p>
        </div>
      </div>
    </div> -->
    <div class="support-wrap -second">
      <p class="support-title">ミライを創ろう【創業支援割引制度】</p>
      <div class="support">
        <div class="support-description -second">
          <!-- <p>ミライを創る【創業支援割引制度】</p> -->
        </div>
        <figure class="support-figure">
          <img
            src="../../assets/img/license_page/support_4.jpg"
            alt="建築施工管理技士 講習会 通信講座 web講座"
          />
        </figure>
        <div class="support-notes -second">
          <p>
            能センでは建設業発展の為、創業支援として
            <br class="-pc-only" />
            創業２年以内の個人事業主、及び法人企業従業員様全ての方を対象に
            <br class="-pc-only" />
            受講料を２０％割引でご提供いたします。
            <br />
            特に提出書類はございませんが、本社住所・代表電話番号・代表者氏名が必要になります。
          </p>
          <br />
          <div class="center">
            <p class="strong">
              能センは建設業の発展に微力ながら尽力させていただきます！
            </p>
            <br />
            <p>※創業日から数えて２年以内の企業が対象になります</p>
            <p>※他の割引とは併用できません</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: String,
    },
  };
</script>

<style lang="scss" scoped>
  .support-wrap {
    max-width: 100%;
    // max-width: 1170px;
    width: 100%;
    font-family: "Meiryo", sans-serif;
    background-color: #fff;
    margin: 20px auto 0;
    z-index: 0;
    position: relative;
  }
  .support-wrap.-second {
    margin-top: 50px;
  }
  .support-wrap p {
    margin: 0;
  }
  .support-title {
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
      font-size: 16px;
    }
  }
  .support {
    margin: 0 auto;
    padding: 1em 4rem 2rem;
    max-width: 1170px;
    @media print, screen and (max-width: 1000px) {
      padding: 1rem 2rem;
    }
  }
  .support-flex {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
    @media print, screen and (max-width: 768px) {
      flex-flow: wrap;
    }
  }
  .support-image {
    width: 30%;
    max-height: 400px;
    transform: scale(0.9);

    @media print, screen and (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
    }
  }

  .support-image img {
    width: 100%;
    height: 100%;
    display: block;
    @media print, screen and (max-width: 768px) {
      width: 250px;
      margin: 0 auto;
    }
  }

  .support-description {
    font-size: 20px;
    line-height: 1.8;
    font-weight: 700;
    text-align: center;
    @media print, screen and (max-width: 560px) {
      font-size: 16px;
      line-height: 1.6;
    }
  }
  .support-description.-second {
    font-size: 22px;
    padding-bottom: 20px;
    @media print, screen and (max-width: 560px) {
      font-size: 18px;
      padding-bottom: 10px;
    }
  }

  .support-list {
    margin: 10px auto 0;
    text-align: center;
    max-width: 560px;
    @media print, screen and (max-width: 600px) {
      max-width: 100%;
    }
    li {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.8;
      text-align: left;
      @media print, screen and (max-width: 560px) {
        font-size: 14px;
        line-height: 1.6;
      }
    }
  }

  .support-notes {
    margin: 30px auto 0;
    text-align: center;
    max-width: 700px;
    @media print, screen and (max-width: 768px) {
      max-width: 100%;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.8;
      text-align: left;
      @media print, screen and (max-width: 560px) {
        font-size: 14px;
        line-height: 1.6;
      }
    }
    .strong {
      font-size: 18px;
      font-weight: 700;
    }
    .center {
      display: inline-block;
    }
  }

  .support-notes.-second {
    max-width: 620px;
    p {
      white-space: nowrap;
      @media print, screen and (max-width: 768px) {
        white-space: normal;
      }
    }
  }

  .support-figure {
    width: 60%;
    margin: 0 auto;
    @media print, screen and (max-width: 1000px) {
      width: 80%;
    }
  }

  .-pc-only {
    @media print, screen and (max-width: 768px) {
      display: none;
    }
  }
</style>
