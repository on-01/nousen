<template>
  <div class="content">
    <header class="header">
      <h3 class="title">一般教育訓練給付金</h3>
      <p class="sub-title">
        資格取得やスキルアップのために、受講費用の一部が支給される制度です。<br />
        能センの対象講座を修了し、一定の条件を満たした方は、一般教育訓練給付金を申請できます。
      </p>
      <iframe
        src="https://www.youtube.com/embed/YsTjofwvi1k?si=iDnQtH0oqxoIwIXr"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </header>
    <div class="content-inner">
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">どんな制度？特徴は？</h4>
        </div>
        <p class="point">
          <IconBase class="icon" width="30" height="30">
            <IconFingerDiagonallyUp />
          </IconBase>
          受講費用の20％（上限10万円）が支給されます
        </p>
        <p class="point">
          <IconBase class="icon" width="30" height="30">
            <IconFingerDiagonallyUp />
          </IconBase>
          初めて利用する方は、雇用保険の加入期間が1年以上で対象となります
        </p>
        <p class="point">
          <IconBase class="icon" width="30" height="30">
            <IconFingerDiagonallyUp />
          </IconBase>
          過去に給付を受けたことがある方も、一定の条件を満たせば再度利用できます
        </p>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">対象となる方</h4>
        </div>
        <dl class="check">
          <dt>
            <IconBase class="icon"><IconCheck /></IconBase>
            その1　雇用保険の加入条件を満たしている方
          </dt>
          <dd>
            ・受講開始日時点で、雇用保険の加入期間が<strong>原則3年以上</strong>ある方
            <br />
            ・離職中の方は、離職日の翌日から受講開始日までが<strong>1年以内</strong>であること
            <br />
            <strong>・初めて教育訓練給付金を利用する方は、加入期間1年以上で可</strong>
            <br />
            ※ 受給資格の詳細は、ハローワークで事前照会することができます
          </dd>
        </dl>
        <dl class="check">
          <dt>
            <IconBase class="icon"><IconCheck /></IconBase>
            その2　講座の修了認定基準を満たした方
          </dt>
          <dd>
            給付金の申請には、講座で定める修了認定基準を満たし、修了していることが必要です。
            <br />
            修了認定基準は、出席率（視聴率）や修了試験などの客観的な基準に基づいて定められます。
          </dd>
        </dl>
        <dl class="check">
          <dt>
            <IconBase class="icon"><IconCheck /></IconBase>
            その3　受講費用を自己負担で支払った方
          </dt>
          <dd>
            受講費用を本人が自己負担で支払っていることが必要です。
            <br />
            会社負担分がある場合は、その分は対象外となります
          </dd>
        </dl>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">どの講座で利用できるの？</h4>
        </div>
        <p>
          能センでは下記が対象講座になります。（令和７年度後期から対応予定）
        </p>
        <ul class="list">
          <li>
            第三種電気主任技術者【オンライン全科目】完全制覇コース[指定番号：1322083-2610012-1]
          </li>
          <li>
            第三種電気主任技術者【オンライン4科目】完全制覇コース[指定番号：1322083-2610022-4]
          </li>
        </ul>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">手続きの流れは？</h4>
        </div>
        <div class="flow">
          <p>最初に自分と受講講座が制度の対象かを確認します。</p>
          <p>給付制度を利用したい旨を講座申込書に記載します。</p>
          <p>
            受講スタート！
            <br />
            必須課題を期間内に提出、修了課題で基準点(60点)以上の獲得が給付を受ける条件のひとつとなっています。
          </p>
          <p>
            無事受講を修了しましたら申請に必要な書類一式をお送りいたします。ハローワークへご提出ください。(※申請可能なのは講座修了日の翌日から1か月以内となります。提出のお忘れにご注意ください)
          </p>
          <p>
            申請後、ハローワークから「教育訓練給付金
            支給・不支給決定通知書」が届きます。1か月以内に入金される予定です。
          </p>
        </div>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">お問い合わせ先</h4>
        </div>
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html"
          target="_blank"
          class="link -bold"
        >
          厚生労働省の教育訓練給付制度に関するホームページへ
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
    font-weight: normal;
    font-family: "メイリオ", sans-serif;
    text-align: center;
  }

  iframe {
    display: block;
    width: 100%;
    max-width: 590px;
    height: auto;
    margin: 20px auto 0;
    aspect-ratio: 16 / 9;
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
    @media print, screen and (max-width: 1000px) {
      display: block;
    }
    .icon {
      color: #ed6c00;
      margin-right: 5px;
    }
    dd {
      margin-left: 30px;
      font-family: "メイリオ", sans-serif;
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
  .link.-bold {
    font-weight: 700;
  }
  .content-inner {
    border-top: 1px dotted #000;
  }
  .section {
    border-bottom: 1px dotted #000;
    padding: 50px 0;
  }
</style>
