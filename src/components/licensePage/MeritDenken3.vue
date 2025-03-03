<template>
  <div class="test">
    <div class="test-inner">
      <p class="test-title">電験三種を取得するメリット・デメリット</p>
      <div class="test-wrap -white">
        <p class="test-text">
          電験三種の取得メリットについては、細かく書くと沢山出てきます。
          <br />
          <br />
          給料が○千円以上アップ
          <br />
          勉強をする習慣ができる
          <br />
          学ぶことの大切さを知る
          <br />
          就職、転職、独立に有利
          <br />
          常に求人募集している
          <br />
          長期的に食べていける
          <br />
          将来的に人手不足が見込まれる
          <br />
          実務経験なしでも取得できる
          <br />
          定年後でも働きやすい
          <br />
          <br />
          取得するメリットは色々とありますが、
          <span class="line-yellow">
            「取ってもあまり意味がないのではないか？取る必要があるのか？」
          </span>
          と考える方も実際います。
          <br />
          しかし電験三種は非常に取得しがいのある国家資格だといえます。
          <span>その理由について解説します。</span>
        </p>
      </div>
      <p class="test-heading">電験三種をおすすめする最大のメリット</p>
      <div class="test-wrap -white">
        <p class="test-index">1.収入アップや、定年後でも働ける安定した職業！</p>
        <p class="test-text">
          電験三種の資格保持者は、電気に関わる業務を受け持つ多くの企業にとって、なくてはならない人材だといえます。
          <br />
          企業によっては、資格手当や電気主任技術者に指名されることで手当が支給される場合があります。同様に、ビルメンテナンス業や発電事業などでは電気主任技術者の確保が極めて重要であり、その需要は非常に高まっています。多くの場合、これらの分野では定年後にも経験豊富な専門家が活躍しています。そのため、これらの産業への就職や転職を有利に進めることができます。
        </p>
        <p class="test-index -mt20">2.独立開業ができる！</p>
        <p class="test-text">
          電気主任技術者として一定の実務経験を積み、法令に規定された複数の条件を満たすと、電気管理技術者としてビルオーナーから電気設備の管理を請け負う独立した事業を始めることができます。自己のビジネスを展開する場合、個人事業主として独立し、体力が続く限り仕事を続けることが可能です。
          <br />
          電気主任技術者の仕事は、「保安・維持・監督」です。体力や腕力を必要とする作業はあまりないので、年齢を重ねた後でもずっと働き続けることが可能です。
        </p>
        <p class="test-index -mt20">3.将来性のある資格！</p>
        <p class="test-text">
          AIに取って代わることのできない業務です！
          <br />
          電気は工場やビルなど様々な施設で、動力や照明・情報通信のインフラとして利用されています。近年ではオール電化住宅が普及したり、メガソーラーなど再生可能エネルギーの発電設備も大きく増加中です。また、爆発的に増加する情報通信量に伴うデータセンターの増加など、電気主任技術者の活躍する場所はますます拡大しています
        </p>
      </div>
      <p class="test-heading">電験三種を取得するデメリット</p>
      <div class="test-wrap -white">
        <p class="test-text">
          メリットがあれば、必ずデメリットもあります。
          <br />
          デメリットには、次のようなものがあります。
          <br />
          <br />
          ・取得するのに多くの時間がかかる
          <br />
          ・勉強途中で諦めてしまうこともある
          <br />
          ・試験の難易度が高い、科目が多い
          <br />
          ・重要な仕事、責任が増える
          <br />
          ・未経験だとはじめは厳しい
          <br />
          ・世の中の進歩と共に技術、法令が変わっていく
          <br />
          ・取得後も常に学ぶことが必要となる
          <br />
          <br />
          電験三種は電気の国家資格になります。簡単には取得できない資格になります。
          電気の保安などのお仕事は、人々の生活や生命に繋がるお仕事になるので、責任が増えるのは当然かもしれません。
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
    margin: 0 auto 40px;
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
    padding: 40px 50px;
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
    background-color: #1262b2;
    padding: 1rem;
    line-height: 1.3;
    margin: 0 auto;
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

  .test-img {
    text-align: center;
  }

  .test-img.-bottom {
    img {
      width: 50%;
    }
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
    border: solid 3px #1262b2;
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

  .c-blue {
    color: #1da1f2;
  }

  .study-title-img {
    position: absolute;
    width: 140px;
    margin-right: 0;
    margin-left: auto;
    display: block;
    height: auto;
    right: 30px;
    top: 30px;
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

  .line-yellow {
    display: inline;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0) 60%, #ffff8d 0);
  }

  @media print, screen and (max-width: 1000px) {
  }
</style>
