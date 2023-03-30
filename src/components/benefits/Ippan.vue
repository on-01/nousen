<template>
  <div class="content">
    <header class="header">
      <h3 class="title">一般教育訓練給付金</h3>
      <p class="sub-title">
        資格取得やスキルアップのため、受講費用の一部が給付される制度です。
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
          >受講料の20％が支給されます
        </p>
        <p class="point">
          <IconBase class="icon" width="30" height="30"
            ><IconFingerDiagonallyUp /></IconBase
          >何度でも利用できます(過去に給付を受けられた方は支給されてから3年以上経過していること)
        </p>
        <p class="point">
          <IconBase class="icon" width="30" height="30"
            ><IconFingerDiagonallyUp /></IconBase
          >試験の受験有無・合否に関係なく、申請することができます
        </p>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">対象者の条件は？</h4>
        </div>
        <p>1～3の要件全てに当てはまる方が対象です。</p>
        <dl class="check">
          <dt>
            <IconBase class="icon"><IconCheck /></IconBase>その1
          </dt>
          <dd>雇用保険に3年以上加入している</dd>
        </dl>
        <p>
          (※初めて給付を受ける方は1年以上の加入でOK！また、離職者の場合は、退職するまでの雇用保険加入期間が3年以上で、退職の翌日から受講開始までが1年以内の方が対象です。)
        </p>
        <dl class="check">
          <dt>
            <IconBase class="icon"><IconCheck /></IconBase>その2
          </dt>
          <dd>
            受講する講座の課題で定められた基準点以上の成績をクリアすること
          </dd>
        </dl>
        <dl class="check">
          <dt>
            <IconBase class="icon"><IconCheck /></IconBase>その3
          </dt>
          <dd>受講費用を自己負担でお支払いされた方(会社の経費等は対象外)</dd>
        </dl>
      </section>
      <section class="section">
        <div class="section-title">
          <h4 class="section-title-inner">どの講座で利用できるの？</h4>
        </div>
        <p>能センでは下記が対象講座になっています。</p>
        <ul class="list">
          <li>
            第三種電気主任技術者 早期スタート基礎付
            全科目コース[指定番号：134851010014]
          </li>
          <li>
            第三種電気主任技術者 基礎付 全科目コース[指定番号：134851220027]
          </li>
          <li>
            第三種電気主任技術者 合格のための受験指導
            通信講座6ヶ月コース[指定番号：134851110014]
          </li>
          <li>
            第三種電気主任技術者 合格のための受験指導
            通信講座3ヶ月コース[指定番号 134851910014]
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
            受講スタート！<br />
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
          class="link"
          >厚生労働省の教育訓練給付制度に関するホームページへ</a
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
  @media print, screen and (max-width: 1000px) {
    display: block;
  }
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
