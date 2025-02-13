<template>
  <div class="test">
    <div class="test-inner">
      <div class="study-title-img"></div>
      <p class="test-heading">電験三種の勉強時間は？</p>
      <div class="test-wrap -white">
        <p class="test-text-yellow">
          電験三種の合格に必要な勉強時間 約1,000時間
        </p>
        <p class="test-text">
          勉強時間は個人の前提知識や学習スピードによって異なりますが、全科目合格するには
          <span>通常は約1000時間の学習</span>
          が必要とされています。
          <br />
          <br />
          例えば、毎日3時間ずつ勉強すれば、約9ヶ月から1年かかるでしょう。
          <br />
          ただし、1000時間は目安であり自身の進捗状況や理解度に合わせて柔軟にスケジュールを調整することが重要です。
          <br />
          <br />
          また、定期的な復習や自己評価も忘れずに行い、学習効果を高めることを意識しましょう。特に理系の科目が多いため理系出身かどうかや、計算問題の得意不得意も影響を与えます。
        </p>
      </div>
      <p class="test-heading">電験三種の勉強方法は？</p>
      <div class="test-wrap -white">
        <p class="test-text">
          電験三種の勉強方法は、
          <span>最初に理論、電力または機械、法規の順番</span>
          で進めると効果的です。初心者の方は基礎数学（電気数学）から始めることが重要です。
          <br />
          <br />

          まずは礎となる理論を理解し、その後に電力や機械といった実践的な科目を習得します。
          <br />
          電力と機械はどちらから先に学んでも問題ありません。
          法規はそれまで勉強してきた科目の集大成として考えましょう。
          <br />
          電気工学や電力系統に関する基本的な知識を得るために、
          <span>教科書や参考書、オンライン学習、講習会</span>
          を利用することをおすすめします。
          <br />
          <br />

          <span>
            ①試験範囲の確認:
            受験要項や過去の試験問題を調べ、出題範囲や試験形式を把握
          </span>
          <br />
          <span>
            ② 教科書や参考書の学習:
            電気工学や電力系統に関する基礎知識を身につけるため、教科書や参考書を順番に学習
          </span>
          <br />
          <span>
            ③ 過去の試験問題の解答:
            過去の試験問題を解くことで、実際の試験形式や問題の傾向を把握し、対策を練ることができます
          </span>
          <br />
          <span>
            ④ 模擬試験の受験:
            本番の試験に近い環境で、模擬試験を受けることで実践力を養います
          </span>
          <br />
          <br />

          また、独学の方は講習会やオンライン講座に参加することも有益です。他の受験生と情報交換や質問をすることで学習の効率が上がるでしょう。
          <br />
          最終的には、自身の学習スタイルやペースに合わせて計画を立て、着実に進めることが重要です。
          <br />
          また、継続的な努力と忍耐力を持ちながら定期的に自己評価を行い、必要な修正を加えることも大切です。
        </p>
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
  .test {
    width: 100%;
    background-color: #eaf7ff;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
    font-size: 16px;
    @media print, screen and (max-width: 1110px) {
      width: 90%;
    }
  }

  .test-inner {
    position: relative;
    padding: 100px 50px 40px;
    max-width: 927px;
    margin: 0 auto;
    background-color: #fff;
    @media print, screen and (max-width: 1110px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .test-title {
    font-size: 28px;
    color: white;
    text-align: center;
    background-color: #1da1f2;
    padding: 1rem;
    line-height: 1.3;
    margin: 0 auto 40px;
    max-width: 980px;
    font-weight: 700;
  }

  .test-wrap {
    margin: 0 auto;
    max-width: 980px;
  }

  .test-wrap.-white {
    padding: 30px 0;
  }

  .test-wrap.-orange {
    position: relative;
    border: solid 2px #f4891e;
    background-color: #eae3db;
    background-color: rgba(244, 137, 30, 0.1);
    padding: 30px 45px;
    margin-top: 20px;

    a {
      color: #1da1f2;
    }
  }

  .test-wrap.-orange.-pt10 {
    padding-top: 10px;
  }

  .test-wrap.-orange::after,
  .test-wrap.-orange::before {
    position: absolute;
  }

  .test-wrap.-orange::after {
    content: "”";
    color: #f4891e;
    font-size: 60px;
    line-height: 1;
    right: 20px;
    bottom: -30px;
  }
  .test-wrap.-orange::before {
    content: "“";
    color: #f4891e;
    font-size: 60px;
    line-height: 1;
    left: 20px;
    top: 5px;
  }

  .test-text {
    line-height: 1.5;
    margin: 0;

    span {
      font-weight: 700;
    }
  }

  .test-text.-fz18 {
    font-size: 18px;
    font-weight: 700;
  }

  .test-flex {
    display: flex;
    align-items: baseline;
  }

  .test-text-yellow {
    position: relative;
    display: inline;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 700;
    margin: 30px 0 0;
    z-index: 3;
    background: linear-gradient(transparent 60%, #ffff8d 0%);
  }

  .test-heading {
    font-size: 28px;
    color: black;
    text-align: center;
    background-color: white;
    border: solid 3px #1da1f2;
    padding: 10px;
    line-height: 1.3;
    margin: 0 auto;
    max-width: 980px;
    font-weight: 700;
    @media print, screen and (max-width: 1110px) {
      font-size: 24px;
      padding: 8px;
    }
  }

  .test-index {
    font-size: 18px;
    line-height: 1.5;
    margin: 0 0 10px;
    font-weight: 700;
    border-bottom: solid 2px #f4891e;
    display: inline-block;
  }

  .test-other {
    margin-top: 30px;
    padding: 20px;
    border: solid 2px gray;
    border-radius: 12px;
  }

  .test-other.-bottom {
    margin-bottom: 30px;
  }

  .test-other-text {
    line-height: 1.5;
    margin: 0;
    span {
      display: inline;
      position: relative;
      z-index: 3;
      background: linear-gradient(transparent 60%, #ffff8d 0%);
    }
  }

  .test-table {
    border-top: #f4891e solid 1px;
    border-left: #f4891e solid 1px;
    border-right: #f4891e solid 1px;
    width: 90%;
    margin: 0 auto;

    tr {
      display: flex;
    }

    th {
      border-right: #f4891e solid 1px;
      border-bottom: #f4891e solid 1px;
      width: 20%;
      padding: 8px;
      font-weight: 700;
      display: flex;
      align-items: center;
    }

    td {
      border-bottom: #f4891e solid 1px;
      width: 80%;
      padding: 5px 0;
      padding: 8px;
      display: flex;
      align-items: center;
    }
  }

  .test-table:not(:first-of-type) {
    margin-top: 30px;
  }

  .-mt20 {
    margin-top: 20px;
  }
  .-mt40 {
    margin-top: 40px;
  }
  .-ml10 {
    margin-left: 10px;
  }

  .-first {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .study-title-img {
    position: absolute;
    width: 140px;
    margin-right: 0;
    margin-left: auto;
    display: block;
    height: auto;
    right: 30px;
    top: 10px;
    &:before {
      width: 100%;
      height: 100%;
      display: block;
    }
    @media print, screen and (max-width: 560px) {
      margin-bottom: 20px;
    }
  }

  .test {
    .study-title-img {
      &:before {
        content: url("../../assets/img/license_page/study_denken.svg");
      }
    }
  }

  @media print, screen and (max-width: 1000px) {
  }
</style>
