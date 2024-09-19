<template>
  <!-- 1 -->
  <div class="index-wrapper scroll-animation-item">
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
    <div class="index-content -second">
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
      <div class="index-boxContent -center">
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
          <i class="scroll-animation-item">自主的に勉強が始められない・・・</i>
          という方は是非！
        </p>
      </div>
      <figure class="index-textImg -bottom">
        <img src="../../assets/img/front/section05_title2.svg" />
      </figure>
      <div class="index-boxContent -center">
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
    <!-- 3 -->
    <div class="index-content -third">
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
    @media print, screen and (max-width: 1142px) {
      flex-direction: column;
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
    border-top: 5px solid #000;
    border-bottom: 5px solid #000;
    display: block;
    padding: 20px;
    max-width: 300px;
    width: 100%;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-align: center;
    margin: 30px auto 0;
    p {
      line-height: 1.7;
      margin-top: 1.5em;
      font-size: 16px;
      span {
        font-size: 9px;
        display: block;
      }
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
      font-size: 10px;
    }
  }

  .index-boxContent.-center {
    margin-top: 20px;
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
    img {
      object-fit: cover;
      height: 100%;
    }
  }

  .index-textImg {
    max-width: 150px;
    margin: 20px auto 0;
  }

  .index-textImg.-bottom {
    max-width: 220px;
    margin: 20px auto 0;
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
    background-position: 0% 0;
  }
</style>
