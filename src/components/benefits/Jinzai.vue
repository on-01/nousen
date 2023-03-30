<template>
  <div class="content">
    <header class="header">
      <h3 class="title">人材開発支援助成金<span>一般訓練コース</span></h3>
      <p class="sub-title">
        旧キャリア形成促進助成金。労働者の職業訓練開発にかかる経費や賃金の一部を助成する制度です。<br />
        事業者様が利用できます。
      </p>
    </header>
    <div class="content-inner">
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">どんな制度？特徴は？</h4>
        </div>
        <p class="point">
          <IconBase class="icon" width="30" height="30"
            ><IconFingerDiagonallyUp /></IconBase
          >受講料の30％が支給されます。(生産性要件を満たす場合は45％)
        </p>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">対象者の条件は？</h4>
        </div>
        <dl class="check">
          <dt>
            <IconBase class="icon"><IconCheck /></IconBase>
          </dt>
          <dd>雇用保険適用事業所の事業主であること</dd>
        </dl>
        <p>
          ※ほか、条件の詳細については下記厚生労働省のサイトでご確認ください。
        </p>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">どの講座で利用できるの？</h4>
        </div>
        <p>
          能センでは１講座あたり講習時間が２０時間以上の下記が対象講座になっています。
        </p>
        <ul class="list">
          <li>第一種電気工事士(筆記・技能セット)</li>
          <li>第二種電気工事士(筆記・技能セット)</li>
          <li>第三種電気主任技術者(※通学講座で合計4日以上ご参加頂いた場合)</li>
        </ul>
        <p>
          ※復職後、再就職後の方は10時間以上の講座(2日以上実施の全講座)が支給対象になる場合がありますのでお問い合わせください。
        </p>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">手続きの流れは？</h4>
        </div>
        <div class="flow">
          <p>
            企業が訓練計画を作成し、実施する1ヶ月前までに管轄都道府県の労働局にご提出ください。
          </p>
          <p>
            提出した訓練計画に則って、講習にご参加頂く等の訓練を実施していきます。
          </p>
          <p>訓練終了後、２ヶ月以内に支給申請書を労働局に提出します。</p>
          <p>審査を通過すると助成金が事業主の指定した口座に入金されます。</p>
        </div>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">お問い合わせ先</h4>
        </div>
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html"
          target="_blank"
          class="link"
          >厚生労働省の人材開発支援助成金に関するホームページへ</a
        >
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">ご注意</h4>
        </div>
        <p>
          審査通過による適用なので、必ずしも支給されるとは限りませんのでご注意下さい。
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
import IconFingerDiagonallyUp from '@/components/icons/IconFingerDiagonallyUp.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
export default {
  components: {
    IconBase,
    IconFingerDiagonallyUp,
    IconCheck,
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 70px;
}
.title {
  color: #ed6c00;
  text-align: center;
}
.sub-title {
  font-weight: bold;
  text-align: center;
}
.section-title-inner {
  font-size: 17px;
  display: inline-block;
  font-weight: bold;
  border-bottom: 2px solid #ed6c00;
  margin-top: 0;
}
.point {
  font-weight: bold;
  .icon {
    color: #ed6c00;
    vertical-align: bottom;
  }
}
.check {
  font-weight: bold;
  display: flex;
  .icon {
    color: #ed6c00;
    margin-right: 5px;
  }
  dd {
    margin-left: 30px;
    @media print, screen and (max-width: 1000px) {
      margin-left: 0px;
    }
  }
}
.list {
  li {
    font-weight: bold;
    &:before {
      content: '●';
      font-size: 0.8em;
      color: #ed6c00;
      margin-right: 5px;
    }
  }
}
.flow {
  font-weight: bold;
  p {
    margin: 0;
    &:not(:last-child):after {
      content: '▼';
      color: #ed6c00;
      margin-right: 5px;
      display: block;
    }
  }
}
.link {
  text-decoration: underline;
}
.content-inner {
  border-top: 1px dotted #000;
}
.section {
  border-bottom: 1px dotted #000;
  padding: 50px 0;
}
</style>
