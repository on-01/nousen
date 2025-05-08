<template>
  <!-- 1 -->
  <div class="index-wrapper">
    <div class="index-content">
      <p class="index-title">
        <span>1</span>
        わかりやすい講習
      </p>
      <figure class="index-img">
        <img
          src="../../assets/img/front/section01_background-1.jpg"
          alt="電験三種 講習会 通信講座"
        />
      </figure>
      <div class="index-topContent">
        <p>
          <i class="scroll-animation-item">
            必要なことだけ、
            <br />
            「合格」に近づきます。
          </i>
        </p>
      </div>
      <div class="index-boxContent">
        <p class="boxContent-bold">スーパー講師陣が合格支援</p>
        <p>
          講師の全員が、建設・電気・設備等、現場で
          長いキャリアをもつ現役及び元技術者。
          <br />
          豊富な現場経験のもと、みなさんが
          共感できるエピソードを盛り込んだ講習が特徴。
          <br />
          <br />
          近年の出題傾向、関連業種の現況、法制度の変更などもしっかりサポート。
          <br />
          「試験までに特に学習すべき項目」「捨てるべき項目」を明確にお伝えします。
          <br />
          それが、合格への近道です！
        </p>
      </div>
    </div>
    <!-- 2 -->
    <div class="index-content -second">
      <p class="index-title">
        <span>2</span>
        えらべる学習スタイル
      </p>
      <figure class="index-img">
        <img
          src="../../assets/img/front/section05_background-1.jpg"
          alt="電験三種 講習会 通信講座"
        />
      </figure>
      <div class="index-topContent">
        <p>
          <i class="scroll-animation-item">
            間近で学べる通学講座
            <br />
            いつでも手元でオンライン講座
          </i>
        </p>
      </div>

      <div class="index-boxContent -center">
        <figure class="index-textImg">
          <img
            src="../../assets/img/front/section05_title1.svg"
            alt="電験三種 講習会 通信講座"
          />
        </figure>
        <p>
          「100回同じ質問をしても、100回笑顔でお答えします。」
          <br />
          分からないことを聞くことが、合格への近道です。
          <br />
          <br />
          同じ目的をもった受講生たちと、生の講義を受けることで、
          <br />
          集中して学ぶことができます。
          <br />
          自主的に勉強が始められない・・・という方は是非！
        </p>
      </div>
      <div class="index-boxContent -center">
        <figure class="index-textImg -bottom">
          <img
            src="../../assets/img/front/section05_title2.svg"
            alt="電験三種 講習会 通信講座"
          />
        </figure>
        <p>
          『スマホの中の先生は、２４時間授業中』
          <br />
          スマホがあれば、電車の中や職場など場所を選ばず何度でも動画を見て勉強が可能！
          <br />
          短時間でも学習でき、時間をおいて続きから、学びたい項目だけ視聴できます。
        </p>
      </div>
    </div>
    <!-- 3 -->
    <div class="index-content -third">
      <p class="index-title">
        <span>3</span>
        信頼の実績と歴史
      </p>
      <figure class="index-img">
        <img
          src="../../assets/img/front/section03_background-1.jpg"
          alt="電験三種 講習会 通信講座"
        />
      </figure>
      <div class="index-topContent">
        <p>
          <i class="scroll-animation-item">40年で10万人以上の受講生。</i>
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
          <span class="boxContent-bold -right">受講生の皆さまへ</span>
          <br />
          <br />
          皆さまが無事に合格できるよう、私たちは最大限のサポートを提供し続けます。
          <br />
          疑問や不安がございましたら、どうぞいつでもお気軽にご相談ください。
          <br />
          共に目標を達成するために、私たちは全力でお手伝いさせていただきます。
          <br />
          <br />
          能セン事務局 一同
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import IconBase from "@/components/IconBase.vue";
  import IconFingerRight from "@/components/icons/IconFingerRight.vue";

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
      this.setupScrollAnimation();
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
      setupScrollAnimation() {
        const scrollItems = document.querySelectorAll(".scroll-animation-item");

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-show");
              }
            });
          },
          { threshold: 0.5 }
        );

        scrollItems.forEach((item) => observer.observe(item));
      },
    },
  };
</script>

<style lang="scss" scoped>
  .index-wrapper {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    padding: 0 20px;
    font-family: メイリオ, sans-serif;
    @media print, screen and (max-width: 1142px) {
      flex-direction: column;
    }
  }

  .index-content {
    width: calc(100% / 3);
    @media print, screen and (max-width: 1142px) {
      width: 100%;
    }
  }
  .index-content.-third {
    @media print, screen and (max-width: 1142px) {
      margin-bottom: 40px;
    }
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
    }
  }

  .index-topContent {
    background-color: #fff;
    // border-top: 5px solid #000;
    // border-bottom: 5px solid #000;
    display: block;
    padding: 20px;
    max-width: 330px;
    width: 100%;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-align: center;
    // margin: 30px auto 0;
    margin: 0 auto;
    @media print, screen and (max-width: 1142px) {
      margin-top: 0;
    }
    p {
      line-height: 1.7;
      margin-top: 1.5em;
      font-size: 20px;
      @media print, screen and (max-width: 768px) {
        font-size: 16px;
      }
      span {
        font-size: 10px;
        display: block;
      }
    }
  }

  .index-boxContent {
    padding: 30px 10px;
    font-size: 18px;
    border: 4px solid #000;
    margin: 30px auto 0;
    font-weight: 700;
    text-align: center;
    position: relative;
    .boxContent-bold {
      font-size: 23px;
      color: #f4881e;
      font-weight: 700;
      line-height: 1;
      margin: 0 0 10px;
    }
    .boxContent-bold.-right {
      margin: 0;
    }
    @media print, screen and (max-width: 1142px) {
      max-width: 600px;
      margin-top: 30px;
    }
    p {
      margin: 0;
      font-size: 15px;
      font-weight: 500;
      @media print, screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
    span {
      font-size: 19px;
      font-weight: 700;
    }
  }

  .index-boxContent.-center {
    margin-top: 30px;
    padding-top: 20px;
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

  .index-img {
    margin: 0;
    height: 250px;
    @media print, screen and (max-width: 1142px) {
      height: auto;
    }
    img {
      object-fit: cover;
      height: 100%;
      width: 75%;
      display: block;
      margin: 0 auto;
      @media print, screen and (max-width: 1142px) {
        width: 100%;
        max-width: 500px;
      }
    }
  }

  .index-textImg {
    max-width: 150px;
    margin: 0 auto 10px;
  }

  .index-textImg.-bottom {
    max-width: 220px;
    margin: 0 auto 10px;
  }

  .reason-contents + .reason-contents {
    margin-top: 300px;
    @media print, screen and (max-width: 1000px) {
      margin-top: 200px;
    }
  }
  .reason-contents3 {
    margin-top: 100px;
    @media print, screen and (max-width: 1000px) {
      margin-top: 50px;
    }
  }

  /* Updated styles for scroll animation */
  .scroll-animation-item {
    background: linear-gradient(to right, #f4b073 50%, transparent 50%);
    background-repeat: no-repeat;
    background-size: 200% 1em;
    background-position: 100% 0.5em;
    transition: background-position 0.5s ease-in-out;
  }

  .scroll-animation-item.is-show {
    background-position: 0% 5px;
  }
</style>
