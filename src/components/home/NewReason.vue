<template>
  <!-- 1 -->
  <div class="index-wrapper">
    <div class="index-content">
      <p class="index-title">
        <span>1</span>
        わかりやすい講習
      </p>
      <figure class="index-img">
        <img src="../../assets/img/front/section01_background.jpg" />
      </figure>
      <div class="index-topContent">
        <p>
          必要なことだけ、
          <br />
          「合格」に近づきます。
        </p>
      </div>
      <div class="index-boxContent">
        <p>
          講師の全員が、建設・電気・設備等さまざまな現場で
          <i class="scroll-animation-item">
            長いキャリアをもつ現役及び元技術者
          </i>
          です。
          <br />
          豊富な現場経験のもと、みなさんが
          <i class="scroll-animation-item">共感できるエピソード</i>
          を盛り込んだ講習が特徴。
        </p>
      </div>
      <div class="index-boxContent">
        <p>
          近年の出題傾向、関連業種の現況、法制度の変更などもしっかりサポート。
          <br />
          「試験までに特に学習すべき項目」「捨てるべき項目」を明確にお伝えします。
          <br />
          それが、
          <i class="scroll-animation-item">合格への近道です！</i>
        </p>
      </div>
    </div>
    <!-- 2 -->
    <div class="index-wrapper -second">
      <div class="index-content">
        <p class="index-title">
          <span>2</span>
          えらべる学習スタイル
        </p>
        <figure class="index-img">
          <img src="../../assets/img/front/section05_background.jpg" />
        </figure>
        <div class="index-topContent">
          <p>
            間近で学べる通学講座
            <br />
            いつでも手元でオンライン講座
          </p>
        </div>

        <figure class="index-textImg">
          <img src="../../assets/img/front/section05_title1.svg" />
        </figure>
        <div class="index-boxContent">
          <p>
            <i class="scroll-animation-item">
              「100回同じ質問をしても、100回笑顔でお答えします。」
            </i>
            <br />
            分からないことを聞くことが、合格への近道です。
            <br />
            <br />
            同じ目的をもった受講生たちと、生の講義を受けることで、
            <br />
            集中して学ぶことができます。
            <br />
            <i class="scroll-animation-item">
              自主的に勉強が始められない・・・
            </i>
            という方は是非！
          </p>
        </div>
        <figure class="index-textImg">
          <img src="../../assets/img/front/section05_title2.svg" />
        </figure>
        <div class="index-boxContent">
          <p>
            『スマホの中の先生は、２４時間授業中』
            <br />
            スマホがあれば、電車の中や職場など場所を選ばず
            <i class="scroll-animation-item">何度でも動画を見て勉強が可能！</i>
            <br />
            短時間でも学習でき、時間をおいて続きから、または学びたい項目だけ視聴できます。
          </p>
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="index-wrapper -third">
      <div class="index-content">
        <p class="index-title">
          <span>3</span>
          信頼の実績と歴史
        </p>
        <figure class="index-img">
          <img src="../../assets/img/front/section03_background.jpg" />
        </figure>
        <div class="index-topContent">
          <p>
            40年で10万人以上の受講生。
            <br />
            <span>
              （旧能力開発研修センターとノウハウを全て引き継いだ
              <br />
              現(株)NOUSENとの累計になります。）
            </span>
          </p>
        </div>

        <div class="index-boxContent">
          <p>
            受講生の皆さまが合格できるよう、最大限のサポートを続けていきます！
            <br />
            疑問や不安があれば、いつでも気軽にご相談ください。
            <br />
            共に目標を達成するため、私たちは全力で支えます！
            <br />
            <br />
            能セン事務局 一同
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IconBase from "@/components/IconBase.vue";
  import IconFingerRight from "@/components/icons/IconFingerRight.vue";
  // import $ from 'jquery';
  export default {
    name: "NewReason",
    components: {
      IconBase,
      IconFingerRight,
    },
    props: {
      reasonNumber: String,
      myTitle: String,
      myImage: String,
      myImageSp: String,
      myCatch: String,
      myCatchSmall: String,
      mySmall: String,
      smallText: String,
      explanation: Array,
      moreLink: String,
      moreLinkCheck: String,
      moreText: String,
      explanationGroup: Array,
    },
    mounted() {
      window.addEventListener("load", this.youtubeInit);
      // 		$(function(){
      //   $('.youtube').each(function() {
      //     var iframe = $(this).children('iframe');
      //     var url = iframe.attr('data-src');
      //     var id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
      //     iframe.before('<img src="http://img.youtube.com/vi/'+id+'/mqdefault.jpg" />').remove();
      //     $(this).on('click', function() {
      //       $(this).after('<div class="reason-explanationGroup-movie_inner youtube"><iframe src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>').remove();
      //     });
      //   });
      // });
    },
    methods: {
      youtubeInit() {
        var vidDefer = document.getElementsByTagName("iframe");
        for (var i = 0; i < vidDefer.length; i++) {
          if (vidDefer[i].getAttribute("data-src")) {
            vidDefer[i].setAttribute(
              "src",
              vidDefer[i].getAttribute("data-src")
            );
          }
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .index-wrapper {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    padding: 0 20px;
  }

  .index-title {
    font-size: 27px;
    color: #ed6c00;
    letter-spacing: 0.2em;
    position: relative;
    text-align: center;
    font-weight: 700;

    span {
      color: #ed6c00;
      font-size: 45px;
      margin-right: 0.5em;
    }
  }

  .index-topContent {
    background-color: #fff;
    border-top: 5px solid #000;
    border-bottom: 5px solid #000;
    display: inline-block;
    padding: 20px;
    max-width: 600px;
    width: 100%;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 0.18em;
    text-align: center;
    p {
      line-height: 2em;
      margin-top: 1.5em;
    }
  }

  .index-boxContent {
    padding: 30px 10px;
    font-size: 18px;
    border: 4px solid #000;
    margin: 50px auto 0;
    font-weight: 700;
    text-align: center;
    position: relative;
    p {
      margin: 0;
    }
  }

  .index-boxContent::before {
    content: url("../../assets/img/icon/finger_diagonallyright_orange.svg");
    position: absolute;
    left: -10px;
    top: -20px;
    width: 20px;
    height: 25px;
    display: block;
    background-color: #fff;
    padding: 8px 3px;
  }

  .index-textImg {
    max-width: 150px;
    margin: 0 auto;
  }

  .reason-contents + .reason-contents {
    margin-top: 300px;
    @media print, screen and (max-width: 1000px) {
      margin-top: 200px;
    }
  }
  .reason-contents3 {
    margin-top: 300px;
    @media print, screen and (max-width: 1000px) {
      margin-top: 200px;
    }
  }

  .reason-title {
    font-size: 27px;
    color: #ed6c00;
    letter-spacing: 0.2em;
    position: relative;
    text-align: center;
    @media print, screen and (max-width: 1000px) {
      font-size: 18px;
    }
    p {
      background-color: #fff;
      padding: 0.5em 0;
    }
    i {
      font-size: 45px;
      margin-right: 0.5em;
      @media print, screen and (max-width: 1000px) {
        font-size: 20px;
      }
    }
  }
  .reason-catch-set {
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;
    filter: grayscale(100%);
    transition: filter 1s;
    &.is-show {
      filter: grayscale(0%);
    }
    .over_display {
      @media print, screen and (max-width: 414px) {
        display: none;
      }
    }
    .under_display {
      @media print, screen and (min-width: 415px) {
        display: none;
      }
    }
  }
  .reason-catch {
    background-color: #fff;
    border-top: 5px solid #000;
    border-bottom: 5px solid #000;
    display: inline-block;
    padding: 20px;
    max-width: 600px;
    width: 100%;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0.18em;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media print, screen and (max-width: 1000px) {
      width: 80%;
      font-size: 18px;
      padding: 0 10px;
    }
    &:after {
      content: "";
      height: 500px;
      width: 5px;
      background-color: #000;
      display: block;
      position: absolute;
      top: -500px;
      left: 0;
      right: 0;
      margin: auto;
      @media print, screen and (max-width: 1000px) {
        height: 300px;
        top: -300px;
      }
    }
  }
  .reason-explain-contents {
    max-width: 830px;
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
  }
  .reason-explanation {
    padding: 30px 10px;
    font-size: 18px;
    border: 4px solid #000;
    margin: 0 auto;
    margin-top: 50px;
    font-weight: bold;
    text-align: center;
    position: relative;
    @media print, screen and (max-width: 1000px) {
      padding: 10px 20px;
      width: 80%;
      font-size: 16px;
      margin-top: 30px;
    }
    @media print, screen and (max-width: 767px) {
      width: 75%;
      text-align: left;
      padding: 10px 15px 10px 20px;
    }
    &:before {
      content: url("../../assets/img/icon/finger_diagonallyright_orange.svg");
      position: absolute;
      left: -10px;
      top: -20px;
      width: 20px;
      height: 25px;
      display: block;
      background-color: #fff;
      padding: 8px 3px;
    }
    p {
      margin: 0;
    }
  }

  .reason-explanation::v-deep i {
    background: -webkit-linear-gradient(to right, #f4b073 50%, transparent 50%);
    background: -moz-linear-gradient(to right, #f4b073 50%, transparent 50%);
    background: linear-gradient(to right, #f4b073 50%, transparent 50%);
    background-repeat: no-repeat;
    background-size: 200% 1em;
    background-position: 100% 0.5em;
    transition: background-position 0.5s ease-in-out;
    &.is-show {
      background-position: 0% 0;
    }
  }

  .reason-explanation::v-deep span {
    font-size: 13px;
    color: #4d4d4d;
    display: block;
    line-height: 1.6;
  }
  .reason-more {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
  .reason-more-inner {
    background-color: #f4891e;
    display: inline-block;
    color: #fff;
    text-align: center;
    padding: 10px 3em;
    font-weight: bold;
    margin-top: 100px;
    font-size: 20px;
    .icon {
      margin-left: 10px;
    }
  }

  .reason-contents1 {
    .reason-catch {
      &:after {
        content: "";
        height: 300px;
        top: -300px;
        @media print, screen and (max-width: 1000px) {
          height: 200px;
          top: -200px;
        }
      }
    }
  }
  .reason-contents5 {
    .reason-explain-contents {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .reason-explanation {
      @media print, screen and (min-width: 1001px) {
        width: calc(50% - (30px * 2) - 20px);
        margin-top: 30px;
      }
    }
    .reason-explanation:first-child {
      @media print, screen and (min-width: 1001px) {
        width: 100%;
      }
    }
  }

  /* 202104追加 */
  .reason-explanationGroup-movie {
    width: 85%;
    margin: 4em auto 0;
    @media print, screen and (min-width: 1001px) {
      max-width: 630px;
    }
    .attention {
      margin: 0;
      padding-top: 0.3em;
      font-size: 13px;
      // text-align: right;
      @media print, screen and (min-width: 1001px) {
        font-size: 15px;
        white-space: nowrap;
      }
    }
  }
  .reason-explanationGroup-movie_inner {
    position: relative;
    width: 100%;
    height: 0px;
    padding-top: 56.25%;
  }
  .reason-explanationGroup-movie_inner iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .reason-explanationGroup:not(:first-child) {
    .reason-explanationGroup-title {
      padding-top: 4.5em;
    }
  }

  .reason-explanationGroup-title {
    text-align: center;
    @media print, screen and (min-width: 1001px) {
      margin-bottom: -1em;
    }
    img {
      height: 16px;
      @media print, screen and (min-width: 1001px) {
        height: 21px;
      }
    }
  }
  .reason-catch {
    p + p {
      display: block;
      margin-top: -1em;
      font-size: 12px;
      letter-spacing: 0.1em;
      margin-bottom: 2em;
      @media print, screen and (min-width: 1001px) {
        margin-top: -2em;
        margin-bottom: 2.5em;
        font-size: 14px;
      }
    }
  }
  .teacher-image {
    width: 560px;
    height: 315px;
    margin: 40px auto 0;

    @media print, screen and (max-width: 767px) {
      width: 80%;
      height: auto;
    }
  }
</style>
