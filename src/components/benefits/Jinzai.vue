<template>
  <div class="content">
    <header class="header">
      <h3 class="title">
        人材開発支援助成金
        <span>（人材育成支援コース）</span>
      </h3>
      <p class="sub-title">
        人材開発支援助成金は、事業主が労働者に専門知識や技能を習得させる職業訓練を計画的に実施した場合、訓練費や賃金の一部を助成する制度です。
        <br />
        事業者様が利用できます。
      </p>
    </header>
    <div class="content-inner">
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">助成金額は？</h4>
        </div>
        <p class="point">
          <IconBase class="icon" width="30" height="30">
            <IconFingerDiagonallyUp />
          </IconBase>
          中小企業：受講料の45% が支給されます
          <br />
          <IconBase class="icon" width="30" height="30">
            <IconFingerDiagonallyUp />
          </IconBase>
          中小企業以外：受講料の30%が支給されます
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
          <dd>
            対象者は、雇用保険の被保険者であることが原則です。
            <br />
            （正社員や一定の要件を満たすパート・アルバイトも含む場合があります。）
          </dd>
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
          1講座あたりの学習時間が10時間以上のものが、対象講座となっています。
        </p>
        <ul class="list">
          <li>第三種電気主任技術者 全科目セット</li>
          <li>第三種電気主任技術者 4科目セット</li>
          <li>第三種電気主任技術者 理論</li>
          <li>第三種電気主任技術者 電力</li>
          <li>第三種電気主任技術者 機械</li>
          <li>第三種電気主任技術者 法規</li>
          <li>2級土木施工管理技士 一次コース</li>
          <li>2級建築施工管理技士 一次コース</li>
        </ul>
        <p>※各講座の通学講座・オンライン講座・通信講座 全てが対象になります</p>
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
        >
          厚生労働省の人材開発支援助成金に関するホームページへ
        </a>
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
  import IconBase from "@/components/IconBase.vue";
  import IconFingerDiagonallyUp from "@/components/icons/IconFingerDiagonallyUp.vue";
  import IconCheck from "@/components/icons/IconCheck.vue";
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
    a {
      font-weight: 700;
    }
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
        content: "●";
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
        content: "▼";
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
