<template>
  <article :class="['reason-contents', `reason-contents${reasonNumber}`]">
    <h3 class="reason-title">
      <p>
        <i>{{ reasonNumber }}</i>
        <span>{{ myTitle }}</span>
        <!-- わかりやすい講習 -->
      </p>
    </h3>
    <div class="reason-catch-set scroll-animation-item">
      <g-image
        :src="require(`!!assets-loader!@images/${myImageSp}`)"
        alt=""
        class="under_display"
      />
      <g-image
        :src="require(`!!assets-loader!@images/${myImage}`)"
        alt=""
        class="over_display"
      />
      <div class="reason-catch">
        <p v-html="myCatch">
          <!-- 必要なことだけ、<br>
          「学び方」を学べます。 -->
        </p>
      </div>
    </div>
    <!-- explain 小タイトルがあるとき用(2 えらべる学習スタイル) -->
    <div class="reason-explain-contents" v-if="explanationGroup">
      <div
        class="reason-explanationGroup"
        v-for="(explanation, index) in explanationGroup"
        :key="index"
      >
        <div class="reason-explanationGroup-title">
          <img :src="require(`@/assets/img/${explanation.title}`)" alt="" />
        </div>
        <div
          v-for="(text, index) in explanation.texts"
          :key="index"
          class="reason-explanation"
        >
          <p v-html="text"></p>
        </div>
        <!-- <div class="reason-explanationGroup-movie" v-if="explanation.movieSrc">
          <div class="reason-explanationGroup-movie_inner">
            <iframe
              width="560"
              height="315"
              :src="explanation.movieSrc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p class="attention">{{ explanation.movieText }}</p>
        </div> -->
        <div class="reason-explanationGroup-movie" v-if="explanation.movieSrc">
          <div class="reason-explanationGroup-movie_inner youtube">
            <iframe
              width="560"
              height="315"
              :data-src="explanation.movieSrc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p class="attention">{{ explanation.movieText }}</p>
        </div>
      </div>
    </div>
    <!--explain 通常 -->
    <div class="reason-explain-contents" v-else>
      <div
        v-for="(explain, index) in explanation"
        :key="index"
        class="reason-explanation"
      >
        <p v-html="explain"></p>
      </div>
      <div class="reason-more" v-if="moreLink">
        <g-link :to="moreLink" class="reason-more-inner">
          <span v-html="moreText">
            <!-- 詳しい講師紹介はこちら -->
          </span>
          <IconBase class="icon" width="25" height="25"
            ><IconFingerRight
          /></IconBase>
        </g-link>
      </div>
    </div>
  </article>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
import IconFingerRight from '@/components/icons/IconFingerRight.vue';
// import $ from 'jquery';
export default {
  name: 'reason',
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
    explanation: Array,
    moreLink: String,
    moreText: String,
    explanationGroup: Array,
  },
  mounted() {
    window.addEventListener('load', this.youtubeInit);
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
      var vidDefer = document.getElementsByTagName('iframe');
      for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
          vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reason-contents + .reason-contents {
  margin-top: 400px;
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
    content: '';
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
    content: url('../../assets/img/icon/finger_diagonallyright_orange.svg');
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
      content: '';
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
  .reason-explanation:last-child {
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
    text-align: right;
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
</style>
