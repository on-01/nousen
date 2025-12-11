<template>
  <Layout>
    <div id="js-scroll_hidden" class="fixed-note" v-show="isShow">
      <div class="fixed-note-inner">
        <p class="fixed-note-text">
          令和7年度 下期 電験三種オンライン講座✍️
          <br />
          内容を見直して、より充実・よりお得に受付中！
        </p>
        <img
          class="fixed-note-icon"
          src="../assets/img/icon/note.svg"
          alt="電験三種 講習会 通信講座"
          width="64"
          height="36"
        />
        <button class="fixed-note-close" @click="closeNote">
          <img
            src="../assets/img/icon/plus.svg"
            alt="電験三種 講習会 通信講座"
            width="25"
            height="25"
          />
        </button>
      </div>
    </div>
    <div class="home">
      <section class="section01 hero-inner">
        <div class="top-mv">
          <img src="../assets/img/front/section01/mv.jpg" alt="" />
        </div>
        <div class="qualification-list-wrapper">
          <!-- <figure class="top_left">
            <img
              src="../assets/img/common/top-left.jpg"
              alt="電験三種 講習会 通信講座"
            />
          </figure> -->
          <transition-group
            v-if="afterImgLoad"
            appear
            name="appear-animation"
            tag="div"
            class="qualification-list-wrap"
          >
            <div class="item item01 denken" key="item01">
              <g-link to="/denken3">
                <!-- <span>電験</span>
                <br /> -->
                第三種
                <br />
                電気主任技術者
                <!-- 202101 -->
                <IconOnline iconClass="online_icon_index" />
              </g-link>
            </div>
            <!-- <div class="item item02 denkikouji" key="item02">
              <div class="link-none">
                第一種
                <br />
                電気工事士
                <IconOnline iconClass="online_icon_index" />
              </div>
            </div>
            <div class="item item03 denkikouji" key="item03">
              <div class="link-none">
                第二種
                <br />
                電気工事士
                <IconOnline iconClass="online_icon_index" />
              </div>
            </div> -->
            <div class="item item02 denkikoujisekou" key="item02">
              <g-link to="/denkikouji-s">
                <!-- <span>施工管理技士</span>
                <br /> -->
                1・2級
                <br />
                電気工事施工管理技士
                <IconOnline iconClass="online_icon_index" />
                <!-- <br /> -->
                <!-- <span>令和６年度準備中</span> -->
              </g-link>
            </div>
            <div class="item item03 kenchiku" key="item03">
              <g-link to="/kenchiku-s">
                <!-- <span>施工管理技士</span>
                <br /> -->
                1・2級
                <br />
                建築施工管理技士
                <IconOnline iconClass="online_icon_index" />
              </g-link>
            </div>
            <div class="item item04 doboku" key="item04">
              <g-link to="/doboku-s">
                <!-- <span>施工管理技士</span>
                <br /> -->
                1・2級
                <br />
                土木施工管理技士
                <IconOnline iconClass="online_icon_index" />
              </g-link>
            </div>
            <div class="item item05 kankouji" key="item05">
              <g-link>
                <!-- <span>施工管理技士</span>
                <br /> -->
                1・2級
                <br />
                管工事施工管理技士
                <IconOnline iconClass="online_icon_index" />
                <!-- <br /> -->
                <!-- <span>令和６年度準備中</span> -->
              </g-link>
            </div>
            <div class="item item06 contact" key="item06">
              <g-link to="/contact">
                <!-- <span>施工管理技士</span>
                <br /> -->
                お問い合わせ
                <br />
                資料請求
                <!-- <IconOnline iconClass="online_icon_index" /> -->
                <!-- <br /> -->
                <!-- <span>令和６年度準備中</span> -->
              </g-link>
            </div>
            <div class="item item07 online" key="item07">
              <g-link to="https://timerex.net/s/a4b3c5d67_73c6/9aab6876/">
                <!-- <span>施工管理技士</span>
                <br /> -->
                <br />
                オンライン相談
                <IconOnline iconClass="online_icon_index" />
                <!-- <br /> -->
                <!-- <span>令和６年度準備中</span> -->
              </g-link>
            </div>
            <div class="item item08 kyuusui" key="item08">
              <g-link>
                <!-- <span>給水装置工事</span>
                <br /> -->
                給水装置工事
                <br />
                主任技術者
                <IconOnline iconClass="online_icon_index" />
                <!-- <br /> -->
                <!-- <span>令和６年度準備中</span> -->
              </g-link>
            </div>
            <!-- <div class="item item09" key="item09">
              <picture>
                <source
                  media="(min-width: 1001px)"
                  srcset="../assets/img/front/section01/main_catch4.svg"
                  alt="電験三種 講習会 通信講座"
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="../assets/img/front/section01/main_catch_sp4.svg"
                  alt="電験三種 講習会 通信講座"
                />
                <img
                  src="../assets/img/front/section01/main_catch4.svg"
                  alt="電験三種 講習会 通信講座"
                />
              </picture>
            </div> -->
          </transition-group>
          <!-- <figure class="top_right">
            <img
              src="../assets/img/common/top-right1.jpg"
              alt="電験三種 講習会 通信講座"
            />
          </figure> -->
        </div>
        <!-- <div class="scroll_top" id="js-scroll_top">
          <img src="../assets/img/front/scroll.svg" alt="scroll" />
        </div> -->
        <img
          class="top-map"
          src="../assets/img/front/section01/top-map.png"
          alt=""
        />
        <div class="more_qualification">
          <!-- <g-link to="/licenses">
            資格一覧はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link> -->
        </div>
      </section>
      <section class="section02">
        <p class="section-name">News</p>
        <News />
      </section>
      <section class="section03">
        <h2 class="section-title">
          <img
            src="../assets/img/front/reason_main_headline2-2.svg"
            alt="電験三種 講習会 通信講座"
          />
        </h2>
        <NewReason />
      </section>

      <ReasonLink
        moreLinkCheck="1"
        moreLink="https://timerex.net/s/a4b3c5d67_73c6/9aab6876"
        moreText="オンライン相談はこちら"
      />

      <div class="top-ctaFlex">
        <div class="top-youtube">
          <!-- <p>【 全ての受験生へ 】</p> -->
          <iframe
            class="top-youtube-movie"
            width="700"
            height="420"
            src="https://www.youtube.com/embed/8yHo3GBoZrk?si=0pgT5Zkw8YDRqj4X"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="top-banner">
          <a href="https://nousen.blog/mangadayo/">
            <img
              src="../assets/img/front/front-banner1.jpg"
              alt="電験三種 講習会 通信講座"
            />
          </a>
        </div>
      </div>

      <section class="voice">
        <div class="voice-image">
          <img
            src="../assets/img/front/voice-img.jpg"
            alt="電験三種 講習会 通信講座"
          />
        </div>
        <!-- <div class="voice-inner">
          <div class="voice-content">
            <p class="voice-head">＼ アンケートによる受講生満足度９７％ ／</p>
            <h3 class="voice-title">受講生の声</h3>
            <div class="voice-topic">
              <div class="voice-flex">
                <div class="voice-box">
                  <figure>
                    <img
                      src="../assets/img/license_page/denken3/denken3_voice_3.jpg"
                      alt="電験三種 講習会 通信講座"
                    />
                  </figure>
                  <p>
                    授業がとにかく
                    <br />
                    分かりやすかった！
                  </p>
                </div>
                <div class="voice-box">
                  <figure>
                    <img
                      src="../assets/img/license_page/denken3/denken3_voice_2.jpg"
                      alt="電験三種 講習会 通信講座"
                    />
                  </figure>
                  <p>
                    質問にも丁寧に
                    <br />
                    対応してくれた。
                  </p>
                </div>
              </div>
              <div class="voice-flex">
                <div class="voice-box">
                  <figure>
                    <img
                      src="../assets/img/license_page/denken3/denken3_voice_1.jpg"
                      alt="電験三種 講習会 通信講座"
                    />
                  </figure>
                  <p>
                    教材・資料が
                    <br />
                    充実している。
                  </p>
                </div>
                <div class="voice-box">
                  <figure>
                    <img
                      src="../assets/img/license_page/denken3/denken3_voice_4.jpg"
                      alt="電験三種 講習会 通信講座"
                    />
                  </figure>
                  <p>
                    話し方が丁寧で
                    <br />
                    聞きやすかった。
                  </p>
                </div>
              </div>
            </div>
            <div class="voice-comment">
              <div class="voice-item">
                <h4>【能センについて】</h4>
                <p>
                  ・講習会を実際に受けて見たらかなり良くて、スタッフの対応も丁寧で安心しました！
                  <br />
                  ・講習会や講座を受けるのって少し敷居が高いイメージでしたが、お問い合わせしたら試験の事など色々と丁寧に教えてくれました。
                </p>
              </div>
            </div>
          </div>
        </div> -->
      </section>
      <section class="section03">
        <div class="public-media">
          <h2 class="section-title">
            <img
              src="../assets/img/front/reason_main_headline4-2.svg"
              alt="電験三種 講習会 通信講座"
            />
          </h2>
          <div class="public-media-flex">
            <figure>
              <a
                href="https://www.kentsu.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_1.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image -type1"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.ohmsha.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_2.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image -type2"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://kigyo.gmo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_3.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.innovations-i.com/release/1497812.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_10.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
          </div>
          <div class="public-media-flex">
            <figure>
              <img
                src="../assets/img/common/public_media_4.png"
                alt="電験三種 講習会 通信講座"
                class="public-media-flex-image"
              />
            </figure>
            <figure>
              <a
                href="https://context-japan.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_5.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://news.mynavi.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_6.png"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://context-japan.co.jp/ryokin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/banner3.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
          </div>
          <div class="public-media-flex">
            <figure>
              <a
                href="https://denkikoujishi-goukaku.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_7.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://x-work.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_8.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://shikakutimes.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_9.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="#"
                @click.prevent="openExternal('https://ecnavi.jp/')"
                rel="noopener noreferrer"
                class="public-media-flex-image-link"
              >
                <img
                  src="../assets/img/common/public_media_11.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
          </div>
          <div class="public-media-flex">
            <figure>
              <a
                href="https://www.iid.co.jp/contents-education/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_12.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.brush-up.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/common/public_media_13.jpg"
                  alt="電験三種 講習会 通信講座"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="#"
                @click.prevent="openExternal('https://sakufuri.jp/media/')"
                rel="noopener noreferrer"
                class="public-media-flex-image-link"
              >
                <img
                  src="../assets/img/common/public_media_14.jpg"
                  alt="サクフリブログ"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="#"
                @click.prevent="openExternal('https://shop.deliveru.jp/')"
                rel="noopener noreferrer"
                class="public-media-flex-image-link"
              >
                <img
                  src="../assets/img/common/public_media_15.png"
                  alt="デリバル"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
          </div>
          <div class="public-media-flex -bottom">
            <figure>
              <a
                href="#"
                @click.prevent="
                  openExternal(
                    'https://jinjib.co.jp/certification/denken3-osusume'
                  )
                "
                rel="noopener noreferrer"
                class="public-media-flex-image-link"
              >
                <img
                  src="../assets/img/common/public_media_16.png"
                  alt="ジンジブ"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="#"
                @click.prevent="
                  openExternal('https://gooschool.jp/online/denken-tsushin/')
                "
                rel="noopener noreferrer"
                class="public-media-flex-image-link"
              >
                <img
                  src="../assets/img/common/public_media_17.jpg"
                  alt="グッドスクール"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
            <figure>
              <a
                href="#"
                @click.prevent="
                  openExternal('https://www.best-shingaku.net/etc/school20441/')
                "
                rel="noopener noreferrer"
                class="public-media-flex-image-link"
              >
                <img
                  src="../assets/img/common/public_media_18.jpg"
                  alt="ベスト進学ネット"
                  class="public-media-flex-image"
                />
              </a>
            </figure>
          </div>
        </div>
      </section>

      <section class="section03">
        <h2 class="section-title">
          <img
            src="../assets/img/front/reason_main_headline5-2.svg"
            alt="電験三種 講習会 通信講座"
          />
        </h2>
        <div class="careerSupport">
          <div class="careerSupport-inner">
            <div class="careerSupport-flex">
              <figure class="careerSupport-img">
                <img
                  src="../assets/img/front/career1.jpg"
                  alt="電験三種 講習会 通信講座"
                />
              </figure>
              <div class="careerSupport-wrap">
                <p class="careerSupport-title">資格取得後のキャリアサポート</p>
                <p class="careerSupport-text">
                  能センでは、資格取得後の就職活動をサポートするため、求人相談サービスを提供しています。電験三種や施工管理技士など、取得した資格に応じて、個々のスキルや希望に合った職場を見つけるお手伝いをいたします。最新の転職サイト求人情報や業界の動向を基に、キャリアアップを目指す方のご相談にも応じます。資格を活かした新しいキャリアの第一歩を、サポートいたします。
                </p>
                <div class="careerSupport-link">
                  <a href="https://www.birumen-navi.com/">
                    <img
                      src="../assets/img/front/career2.jpg"
                      alt="電験三種 講習会 通信講座"
                    />
                  </a>
                  <a href="https://denken.birumen-navi.com/">
                    <img
                      src="../assets/img/front/career3.jpg"
                      alt="電験三種 講習会 通信講座"
                    />
                  </a>
                  <a href="https://sekou.birumen-navi.com/">
                    <img
                      src="../assets/img/front/career4.jpg"
                      alt="電験三種 講習会 通信講座"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="careerSupport-flex -middle">
              <a
                href="https://denkiworks.com/533/chief-electrical-engineer-v26-t1/?utm_source=affiliates&adgroup=nousen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure class="careerSupport-img">
                  <img
                    src="../assets/img/front/career7.jpg"
                    alt="電験三種 講習会 通信講座"
                  />
                </figure>
              </a>
              <div class="careerSupport-wrap">
                <p class="careerSupport-title">
                  電気主任技術者の転職はPLEX JOB
                </p>
                <p class="careerSupport-text">
                  <span>電気主任技術者を、もっと活かせる職場があります。</span>
                  <br />
                  Plex
                  Job（プレックスジョブ）は、電気主任技術者・電気設備保安業に特化した無料の転職支援サイトです。
                  <br />
                  高圧・特高の選任経験が積める求人を多数保有し、業界に詳しい専任コンサルタントが、あなたの希望に沿って最適な求人をご提案します。
                  <br />
                  <br />
                  「給料を上げたい」「働き方を改善したい」「長く安心して働きたい」そんな想いに、業界特化のサポートでお応えします。
                  <br />
                  <br />
                  ・電験1〜3種歓迎の求人を多数掲載
                  <br />
                  ・高圧・特高選任など希少案件も豊富
                </p>
                <p class="careerSupport-text -bold">
                  技術と経験を次のキャリアにつなげませんんか？
                  <br />
                  <a
                    href="https://denkiworks.com/533/chief-electrical-engineer-v26-t1/?utm_source=affiliates&adgroup=nousen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 [今すぐ無料登録する（1分で完了）]
                  </a>
                </p>
              </div>
            </div>
            <div class="careerSupport-flex -reverse">
              <figure class="careerSupport-img">
                <img
                  src="../assets/img/front/career5.jpg"
                  alt="電験三種 講習会 通信講座"
                />
                <a
                  href="https://forms.gle/8yh77CvPD4Sc4KU7A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../assets/img/front/career6.jpg"
                    alt="電験三種 講習会 通信講座"
                  />
                </a>
              </figure>
              <div class="careerSupport-wrap">
                <p class="careerSupport-title">転職支援サービスMyStyle</p>
                <p class="careerSupport-text">
                  <span>施工管理技士や電験三種の資格を生かそう！</span>
                  <br />
                  【MyStyle転職】では資格を活かせる職場の紹介や求人情報の提供に加え、独自のワークシートを使った自己理解のサポートも行っています。これにより、転職をゴールとせず、その後のキャリアプランまで見据えた総合的な支援を実現しています。
                </p>
              </div>
            </div>
            <p class="careerSupport-bottomText">
              【 MyStyle転職の特徴 】
              <br />
              ・「履歴書」や「職務経歴書」の添削だけでなく、応募先企業に合わせた面接対策も丁寧にサポート
              <br />
              ・常時11万件以上の求人情報から、ご希望に合ったお仕事をご紹介します
              <br />
              ・独自のワークシートで自己理解を深め、理想のキャリア像を明確に。自信を持って強みを伝えられるようサポートします
            </p>
          </div>
        </div>
      </section>

      <section class="section03 -bottom">
        <!--
  <h2 class="section-title">
    <img
      src="../assets/img/front/reason_main_headline3-2.svg"
      alt="電験三種 講習会 通信講座"
    />
  </h2>
  <div class="last-message">
    <div class="last-message-flex">
      <div class="last-message-flex-box">
        <p class="last-message-flexTitle">こどもの未来応援基金への寄付</p>
        <img
          src="../assets/img/common/social_image1-1.jpg"
          alt="電験三種 講習会 通信講座"
        />
        <p class="last-message-flexText-bold">
          日本を元気に！
          <br />
          子どもたちが夢と希望を持って働ける世の中へ。
        </p>
        <p class="last-message-flexText">
          能センでは、
          <span>受講生1名につき100円</span>
          を「こどもの未来応援基金」へ寄付いたします。
          <br />
          「こどもの未来応援基金」は、子どもの貧困対策を進めるための
          <br />
          官民連携プロジェクトの一環として、2015年に創設されました。
        </p>
        <p class="last-message-flexText">
          こどもの未来応援基金についての詳細は、以下のリンクをご参照ください。
          <br />
          [
          <a href="https://kodomohinkon.go.jp/">
            https://kodomohinkon.go.jp/
          </a>
          ]
        </p>
      </div>
      <div class="last-message-flex-box">
        <p class="last-message-flexTitle">
          環境への配慮～持続可能なミライへ～
        </p>
        <img
          src="../assets/img/common/social_image2.jpg"
          alt="電験三種 講習会 通信講座"
        />
        <p class="last-message-flexText-bold">
          能センでは、すべてのプリントや資料に
          <br />
          FSC認証を受けたエコペーパーを使用しております。
        </p>
        <p class="last-message-flexText">
          FSC認証とは、持続可能な森林の活用・保全を目的とし、
          <br />
          「適切な森林管理」を認証する国際的な制度です。
        </p>
        <p class="last-message-flexText">
          FSC認証についての詳細は、以下のリンクをご参照ください。
          <br />
          [
          <a href="https://shitte-erabo.net/aboutfsc/certification/">
            https://shitte-erabo.net/aboutfsc/certification/
          </a>
          ]
        </p>
      </div>
    </div>
    <div class="last-message-flex -bottom">
      <div class="last-message-flex-box">
        <p class="last-message-flexTitle">
          建設業の発展と新規企業の成長をサポート！
        </p>
        <img
          src="../assets/img/common/social_image3.jpg"
          alt="電験三種 講習会 通信講座"
        />
        <p class="last-message-flexText-bold">
          建設業界の発展と新規企業の成長をサポート!
          <br />
          ミライを創ろう【創業支援制度】
        </p>
        <p class="last-message-flexText">
          建設業界の発展と新規企業の成長を支援するため、
          <br />
          創業2年以内の個人事業主および法人企業様向けに
          <span class="red">受講料を20％割引</span>
          でご提供します。
        </p>
        <p class="last-message-flexText -center">
          <span>必要事項:&nbsp;</span>
          特に提出書類は不要ですが、以下の情報が必要となります。
        </p>
        <p class="last-message-flexText">
          <span>・本社住所 ・代表電話番号　・代表者氏名</span>
        </p>
        <p class="last-message-flexText">
          能センは、このプログラムを通じて、建設業界の新しい担い手を応援し、
          <br />
          業界全体の持続的な発展に貢献したいと考えています。
          <br />
          皆様の挑戦を、私たちも全力でサポートさせていただきます。
        </p>
      </div>
    </div>
  </div>
  -->

        <ContactInfoIndex title="受講に関するご相談・資料請求は" />

        <div class="btn__apply __bottom">
          <a @click="openModal">
            <span>お申込みはこちら</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
              aria-labelledby="box"
              role="presentation"
              class="icon"
              data-v-2d92a3c2=""
              data-v-0aac86ab=""
            >
              <title id="box" lang="en" data-v-2d92a3c2="">box icon</title>
              <g fill="currentColor" data-v-2d92a3c2="">
                <g data-v-0aac86ab="" data-v-2d92a3c2="">
                  <path
                    d="M.17,8A5.06,5.06,0,0,1,5.23,2.94a5.11,5.11,0,0,1,4,1.89h4.22a2.43,2.43,0,0,1,0,4.85H10A5.07,5.07,0,0,1,.17,8ZM8.94,6.44H8.85a.79.79,0,0,1-.73-.36,3.47,3.47,0,1,0,.52,2.6A.8.8,0,0,1,9.42,8h4a.8.8,0,1,0,0-1.6H8.94Z"
                  ></path>
                  <path
                    d="M7.74,5.65V7.19a2.54,2.54,0,0,1-5.08,0V5.65a2.54,2.54,0,0,1,5.08-.23A.89.89,0,0,1,7.74,5.65ZM4.27,7.19a.94.94,0,0,0,1.87.14V5.65a.94.94,0,0,0-1.87-.14V7.19Z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </section>
    </div>
    <MyModal @close="closeModal" v-if="modal">
      <!-- default スロットコンテンツ -->
      <div class="modal-application">
        <div class="form item">
          <img
            src="../assets/img/common/session.svg"
            alt="電験三種 講習会 通信講座"
          />
        </div>
        <ul>
          <li class="denken">
            <p class="title">
              第三種
              <br class="overdisplay" />
              電気主任技術者
            </p>
            <g-link to="/denken3-application" class="application-form-link">
              お申し込みフォーム
            </g-link>
            <br />
            <!-- <a
              href="/3_denken_tuugaku_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 通学・オンライン(PDF)
            </a>
            <br />
            <a
              href="/3_denken_tuushin_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 通信(PDF)
            </a> -->
            <a
              href="/3_denken_FAX_2022_after.pdf"
              target="_blank"
              class="application-fax-link"
            >
              FAX用紙(PDF)
            </a>
          </li>
          <!-- <li class="denkikouji">
            <p class="title">第一種<br class="overdisplay" />電気工事士</p>
            <g-link to="/koujishi-application" class="application-form-link">
              お申し込みフォーム </g-link
            ><br />
            <a
              href="/1_denki_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙(PDF)
            </a>
          </li> -->
          <!-- <li class="denkikouji">
            <p class="title">
              第二種
              <br class="overdisplay" />
              電気工事士
            </p>
            <g-link to="/koujishi-application" class="application-form-link">
              お申し込みフォーム
            </g-link>
            <br />
            <a
              href="/2_denki_FAX_2022year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙(PDF)
            </a>
          </li> -->
          <!-- <li class="denkikoujisekou">
            <p class="title">
              1・2級<br class="overdisplay" />電気工事施工管理技士
            </p>
            <g-link
              to="/denkikouji-s-application"
              class="application-form-link"
            >
              お申し込みフォーム </g-link
            ><br />
            <a
              href="/denkikouji_1_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 1級(PDF) </a
            ><br />
            <a
              href="/denkikouji_2_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 2級(PDF)
            </a>
          </li> -->
          <li class="kenchiku">
            <p class="title">
              1・2級
              <br class="overdisplay" />
              建築施工管理技士
            </p>
            <g-link to="/kenchiku-s-application" class="application-form-link">
              お申し込みフォーム
            </g-link>
            <br />
            <!-- <a
              href="/kenchiku_1_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 1級(PDF) </a
            ><br />
            <a
              href="/kenchiku_2_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 2級(PDF)
            </a> -->
            <a
              href="/kenchiku_FAX_2022year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙(PDF)
            </a>
          </li>
          <!-- <li class="kankouji">
            <p class="title">
              1・2級<br class="overdisplay" />管工事施工管理技士
            </p>
            <g-link to="/kankouji-s-application" class="application-form-link">
              お申し込みフォーム </g-link
            ><br />
            <a
              href="/kankouji_1_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 1級(PDF) </a
            ><br />
            <a
              href="/kankouji_2_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 2級(PDF)
            </a>
          </li> -->
          <li class="doboku">
            <p class="title">
              1・2級
              <br class="overdisplay" />
              土木施工管理技士
            </p>
            <g-link to="/doboku-s-application" class="application-form-link">
              お申し込みフォーム
            </g-link>
            <br />
            <!-- <a
              href="/doboku_1_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 1級(PDF) </a
            ><br />
            <a
              href="/doboku_2_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 2級(PDF)
            </a> -->
            <a
              href="/doboku_FAX_2022year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙(PDF)
            </a>
          </li>
          <!-- <li class="kyuusui">
            <p class="title">
              給水装置工事<br class="overdisplay" />主任技術者
            </p>
            <g-link to="/kyuusui-application" class="application-form-link">
              お申し込みフォーム </g-link
            ><br />
            <a
              href="/kyuusui_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 (PDF)
            </a>
          </li> -->
        </ul>
      </div>
      <!-- /default -->
    </MyModal>
  </Layout>
</template>

<page-query>
query Index {
  allContentfulNewsPost(limit:5) {
    edges {
      node {
        date
        createdAt
        updatedAt
        article
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
  // @ is an alias to /src
  import IconBase from "@/components/IconBase.vue";
  import IconDoubleArrowRight from "@/components/icons/IconDoubleArrowRight.vue";
  import Reason from "@/components/home/Reason.vue";
  import News from "@/components/home/News.vue";
  import IconOnline from "@/components/icons/IconOnline.vue";
  import MyModal from "@/components/MyModal.vue";
  import ReasonLink from "../components/home/ReasonLink.vue";
  import NewReason from "../components/home/NewReason.vue";
  import ContactInfoIndex from "../components/licensePage/ContactInfoIndex.vue";

  export default {
    name: "home",
    components: {
      IconBase,
      IconDoubleArrowRight,
      Reason,
      ReasonLink,
      News,
      IconOnline,
      MyModal,
      NewReason,
      ContactInfoIndex,
    },
    metaInfo() {
      return {
        titleTemplate: `能セン｜合格への近道 受験対策講習会`,
        meta: [
          {
            name: "description",
            content:
              "通学・オンライン・通信講座とご自身に合った学習スタイルを選べる講習会です。合格応援割引制度や合格応援キャンペーンもご用意。",
          },
          {
            key: `og:title`,
            property: `og:title`,
            // content: `TOP | ${this.$static.metadata.siteName}`,
            content: `能セン｜合格への近道 受験対策講習会`,
          },
          {
            key: `og:url`,
            property: `og:url`,
            content: this.$static.metadata.siteUrl,
          },
        ],
      };
    },
    data() {
      return {
        afterImgLoad: false,
        modal: false,
        isShow: true,
      };
    },
    mounted() {
      //トップの背景の読み込みが終わってからアニメーションさせる
      var image = new Image();
      image.onload = () => {
        this.afterImgLoad = true;
      };
      image.src = require("../assets/img/front/section01/main_background.jpg");

      //スクロールしたらスクロールimg非表示
      window.addEventListener("scroll", this.onScroll);
      // window.addEventListener('load', this.youtubeInit);
    },
    destroyed() {
      window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
      closeNote: function () {
        this.isShow = !this.isShow;
      },
      //スクロールしたらスクロールimg非表示
      onScroll() {
        const moveScroll = window.pageYOffset;
        const target = document.getElementById("js-scroll_top");
        const note = document.getElementById("js-scroll_hidden");
        if (200 < moveScroll) {
          target.classList.add("display_none");
          note.classList.add("is-hidden");
        } else {
          target.classList.remove("display_none");
          note.classList.remove("is-hidden");
        }
      },
      openModal() {
        this.modal = true;
      },
      closeModal() {
        this.modal = false;
      },
      // youtubeInit() {
      //   var vidDefer = document.getElementsByTagName('iframe');
      //   for (var i = 0; i <script vidDefer.length; i++) {
      //     if (vidDefer[i].getAttribute('data-src')) {
      //       vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
      //     }
      //   }
      // },
      openExternal(url) {
        window.open(url, "_blank");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .top-mv {
    img {
      width: 100%;
      object-fit: cover;
      @media print, screen and (min-width: 1441px) {
        width: 95%;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .reason-link {
    display: block;
    text-align: center;
    margin: 0;
    font-family: メイリオ, sans-serif;
    a {
      border-radius: 10px;
      width: 375px;
      background-color: #1262b2;
      display: inline-block;
      color: #fff;
      text-align: center;
      padding: 10px 0;
      font-weight: 700;
      font-size: 20px;
      @media print, screen and (max-width: 375px) {
        width: 100%;
      }
    }
    @media print, screen and (max-width: 1170px) {
      margin-bottom: 40px;
    }
  }
  .top-ctaFlex {
    display: flex;
    align-items: center;
    padding: 0 20px;
    @media print, screen and (max-width: 1150px) {
      flex-direction: column;
    }
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }
  .top-banner {
    // max-width: 600px;
    margin: 0 auto;
    width: 50%;
    @media print, screen and (max-width: 1150px) {
      margin-bottom: 40px;
      width: 100%;
    }
    img {
      display: block;
      margin: 56px 0 0 50px;
      width: 75%;
      @media print, screen and (max-width: 1300px) {
        margin-left: 130px;
      }
      @media print, screen and (max-width: 1210px) {
        margin-left: auto;
      }
      @media print, screen and (max-width: 1150px) {
        width: 70%;
        margin: 0 auto;
      }
    }
  }
  .home {
    margin-bottom: -200px;
    overflow-x: hidden;
    @media print, screen and (max-width: 1000px) {
      margin-bottom: 0;
    }
  }
  .section01 {
    background-image: url("../assets/img/front/section01/main_background.jpg");
    background-size: cover;
    @media print, screen and (min-width: 1001px) {
      padding-top: 160px;
      padding-bottom: 0;
    }
    @media print, screen and (max-width: 1000px) {
      padding-top: 105px;
    }
  }
  .qualification-list-wrap {
    display: grid;
    display: -ms-grid;
    margin: 0 auto;
    @media print, screen and (min-width: 1001px) {
      grid-template-columns: 150px 150px 150px 150px;
      -ms-grid-columns: 150px 150px 150px 150px;
      grid-template-rows: 200px 200px;
      -ms-grid-rows: 200px 200px;
      grid-gap: 60px 50px; /* 202101 */
      justify-content: center; /* 横方向は中央に */
      align-content: center; /* 縦方向は下端に */
      width: 900px;
    }
    @media print, screen and (max-width: 1000px) {
      grid-template-columns: 150px 150px;
      grid-template-rows: 120px 180px 180px 180px 180px; /* 202101 */
      justify-content: center; /* 横方向は中央に */
    }
  }
  .item {
    position: relative; //202101
    font-weight: bold;
    font-size: 15px;
    line-height: 1.5em;
    font-family: メイリオ, sans-serif;
    @media print, screen and (max-width: 1000px) {
      text-align: center;
    }
    span {
      font-size: 15px;
      color: #fff;
      padding: 0px 2px;
      @media print, screen and (max-width: 1000px) {
        font-size: 13px;
      }
    }
    a {
      display: block;
      &:before {
        height: 70px;
        width: 70px;
        display: block;
        margin-bottom: 10px;
        @media print, screen and (max-width: 1000px) {
          height: 50px;
          width: 50px;
          margin: 0 auto;
          margin-bottom: 10px;
        }
      }
    }
  }
  .item01 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: end;
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    @media print, screen and (max-width: 1000px) {
      grid-column: 1/2;
      grid-row: 2/3;
      -ms-grid-column: 1;
      -ms-grid-row: 2;
    }
  }
  .item02 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 2/2;
      grid-row: 1/2;
      align-self: end;
      -ms-grid-column: 2;
      -ms-grid-row: 1;
      // opacity: 0.2;
    }
    @media print, screen and (max-width: 1000px) {
      // display: none;
      grid-column: 2/3;
      grid-row: 2/3;
      -ms-grid-column: 2;
      -ms-grid-row: 2;
      // opacity: 0.2;
    }
  }
  .item03 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 3/4;
      grid-row: 1/2;
      align-self: end;
      -ms-grid-column: 3;
      -ms-grid-row: 1;
      // opacity: 0.2;
    }
    @media print, screen and (max-width: 1000px) {
      // display: none;
      grid-column: 1/2;
      grid-row: 3/4;
      -ms-grid-column: 1;
      -ms-grid-row: 3;
      // opacity: 0.2;
    }
  }
  .item04 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 4/4;
      grid-row: 1/2;
      align-self: end;
      -ms-grid-column: 4;
      -ms-grid-row: 1;
    }
    @media print, screen and (max-width: 1000px) {
      grid-column: 2/3;
      grid-row: 3/4;
      // grid-column: 2/3;
      // grid-row: 2/3;
      -ms-grid-column: 2;
      -ms-grid-row: 3;
    }
  }
  .item05 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 1/2;
      grid-row: 2/3;
      align-self: start;
      -ms-grid-column: 1;
      -ms-grid-row: 2;
    }
    @media print, screen and (max-width: 1000px) {
      grid-column: 1/2;
      grid-row: 4/5;
      // grid-column: 1/2;
      // grid-row: 3/4;
      -ms-grid-column: 1;
      -ms-grid-row: 4;
    }
  }
  .item06 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 2/2;
      grid-row: 2/3;
      align-self: start;
      -ms-grid-column: 2;
      -ms-grid-row: 2;
    }
    @media print, screen and (max-width: 1000px) {
      grid-column: 2/3;
      grid-row: 4/5;
      // grid-column: 2/3;
      // grid-row: 3/4;
      -ms-grid-column: 2;
      -ms-grid-row: 4;
    }
  }
  .item07 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 3/4;
      grid-row: 2/3;
      align-self: start;
      -ms-grid-column: 3;
      -ms-grid-row: 2;
    }
    @media print, screen and (max-width: 1000px) {
      grid-column: 1/2;
      grid-row: 5/6;
      // grid-column: 1/2;
      // grid-row: 4/5;
      -ms-grid-column: 1;
      -ms-grid-row: 5;
    }
  }
  .item08 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 4/4;
      grid-row: 2/3;
      align-self: start;
      -ms-grid-column: 4;
      -ms-grid-row: 2;
    }
    @media print, screen and (max-width: 1000px) {
      grid-column: 2/3;
      grid-row: 5/6;
      // grid-column: 2/3;
      // grid-row: 4/5;
      -ms-grid-column: 2;
      -ms-grid-row: 5;
    }
  }
  .item09 {
    @media print, screen and (min-width: 1001px) {
      grid-column: 3/4;
      grid-row: 1/3;
      -ms-grid-column: 3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 2;
      padding-right: 20px;
    }
    @media print, screen and (max-width: 1000px) {
      grid-column: 1/3;
      grid-row: 1/2;
      align-self: center;
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      -ms-grid-row: 1;
    }
    img {
      @media print, screen and (min-width: 1001px) {
        max-height: 100%;
      }
    }
  }
  .denken {
    // color: #1262b2;
    span {
      background-color: #1262b2;
    }
  }
  .denkikouji {
    // color: #b60081;
    span {
      background-color: #b60081;
    }
  }
  .denkikoujisekou,
  .kankouji {
    // color: #00a73c;
    span {
      background-color: #00a73c;
    }
  }

  .kenchiku,
  .doboku {
    // color: #ed7d31;
    span {
      background-color: #ed7d31;
    }
  }
  .kyuusui {
    // color: #00afcc;
    span {
      background-color: #00afcc;
    }
  }
  .denken a:before {
    content: url("../assets/img/icon/qualification/denken.svg");
  }
  .denkikouji .link-none:before {
    // content: url("../assets/img/icon/qualification/denkikouji.svg");
    content: "";
    display: block;
    width: 70px;
    height: 70px;
    background-image: url("../assets/img/icon/qualification/denkikouji.svg");
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 10px;
    @media print, screen and (max-width: 1000px) {
      width: 50px;
      height: 50px;
      margin: 0 auto 10px;
    }
  }

  .denkikoujisekou a:before {
    content: url("../assets/img/icon/qualification/denkikoujisekou.svg");
  }
  .doboku a:before {
    content: url("../assets/img/icon/qualification/doboku.svg");
  }
  .kankouji a:before {
    content: url("../assets/img/icon/qualification/kankouji.svg");
  }
  .kenchiku a:before {
    content: url("../assets/img/icon/qualification/kenchiku.svg");
  }
  .kyuusui a:before {
    content: url("../assets/img/icon/qualification/kyuusui.svg");
  }
  .contact a:before {
    content: url("../assets/img/icon/qualification/contact.svg");
  }
  .online a:before {
    content: url("../assets/img/icon/qualification/online.svg");
  }
  .more_qualification {
    font-weight: bold;
    text-align: center;
    margin-top: 80px;
    padding-bottom: 100px;
    font-family: メイリオ, sans-serif;
    @media print, screen and (max-width: 1000px) {
      margin-top: 0;
    }
    a {
      border: 5px solid #000;
      padding: 10px 15px;
    }
    .icon {
      margin-left: 10px;
      vertical-align: text-bottom;
    }
  }

  .top-map {
    display: block;
    margin: 80px auto 0 auto;
    max-width: 1024px;
    width: 90%;
    @media print, screen and (max-width: 1000px) {
      margin-top: 20px;
    }
  }

  .section02 {
    margin: 0 auto;
    padding-bottom: 280px;
    @media print, screen and (max-width: 1000px) {
      max-width: 90%;
      padding-bottom: 110px;
    }
    @media print, screen and (min-width: 1001px) {
      background-color: #ffffff;
    }
    .section-name {
      color: #f4891e;
      font-weight: bold;
      position: relative;
      text-align: center;
      margin-top: -50px;
      margin-bottom: 0;
      padding: 5px 0;
      font-family: メイリオ, sans-serif;
      // &:after {
      //   content: "";
      //   height: 200px;
      //   width: 5px;
      //   background-color: #000;
      //   display: block;
      //   position: relative;
      //   top: 0px;
      //   left: 0;
      //   right: 0;
      //   margin: auto;
      // }
    }
  }
  .section03 {
    position: relative;
    margin-top: -225px;
    // z-index: -1;
    @media print, screen and (max-width: 1000px) {
      margin-top: -55px;
    }
    &:before {
      content: "";
      // height: 500px;
      height: 305px;
      width: 5px;
      background-color: #000;
      display: block;
      position: relative;
      top: 5px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: -2;
      @media print, screen and (max-width: 1000px) {
        // height: 300px;
        height: 220px;
      }
    }
    &:after {
      content: "";
      height: 30px;
      width: 5px;
      background-color: #000;
      display: block;
      position: absolute;
      // top: 473px;
      top: 283px;
      left: -20px;
      right: 0;
      margin: auto;
      transform: rotate(-45deg);
      @media print, screen and (max-width: 1000px) {
        // top: 274px;
        top: 196px;
      }
    }
    .section-title {
      max-width: 330px;
      width: 100%;
      margin: 0 auto;
      background-color: #fff;
      position: absolute;
      // top: 200px;
      top: 0;
      left: 0;
      right: 0;
      padding: 50px 0;
      @media print, screen and (max-width: 1000px) {
        width: 90%;
        top: 0;
        max-width: 250px;
        padding: 20px 0;
      }
      &:before {
        content: url("../assets/img/icon/finger_top_brown.svg");
        width: 30px;
        height: 50px;
        display: block;
        margin: 0 auto;
        background-color: #fff;
        padding: 10px;
      }
    }
    .reason-wrapper {
      margin-top: 100px;
      .btn__apply {
        width: 100%;
        text-align: center;
        margin: 100px auto 200px;
        @media print, screen and (max-width: 1000px) {
          margin: 100px auto 150px;
        }

        a {
          // 非表示に
          display: none;
          // display: inline-block;
          background-color: #f4891e;
          color: #fff;
          padding: 10px 3em;
          font-weight: bold;
          font-size: 20px;
          width: 375px;
          box-sizing: border-box;
        }
        svg {
          margin-left: 10px;
        }
      }
    }
    .btn__apply.__bottom {
      width: 100%;
      text-align: center;
      margin: 100px auto 0;
      // 非表示に
      display: none;

      a {
        display: inline-block;
        background-color: #f4891e;
        color: #fff;
        padding: 10px 3em;
        font-weight: bold;
        font-size: 20px;
        width: 375px;
        box-sizing: border-box;
      }
      svg {
        margin-left: 10px;
      }
    }
    .last-message {
      // max-width: 970px;
      max-width: 1300px;
      padding: 0 20px;
      // width: 100%;
      margin: 0 auto 60px auto;
      overflow: hidden;
      font-family: メイリオ, sans-serif;
      // @media print, screen and (max-width: 1000px) {
      //   width: 90%;
      // }
      @media print, screen and (max-width: 1000px) {
        margin-bottom: 40px;
      }
      .under_display {
        @media print, screen and (min-width: 1001px) {
          display: none;
        }
      }
      // &:before {
      //   content: "";
      //   height: 200px;
      //   width: 5px;
      //   background-color: #000;
      //   display: block;
      //   position: relative;
      //   left: 0;
      //   right: 0;
      //   margin: auto;
      //   margin-top: 30px;
      //   @media print, screen and (max-width: 1000px) {
      //     height: 100px;
      //   }
      // }
    }
  }
  .section03.-bottom {
    margin-top: 80px;
    @media print, screen and (max-width: 1000px) {
      margin-top: -160px;
    }
    &:before {
      display: none;
    }
    &::after {
      display: none;
    }
  }

  .last-message-flex {
    display: flex;
    margin: 80px auto 0;
    // align-items: center;
    justify-content: space-between;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
      row-gap: 40px;
    }

    .last-message-flex-box {
      width: 50%;
      @media print, screen and (max-width: 1000px) {
        width: 100%;
      }
      img {
        width: 63%;
        display: block;
        margin: 20px auto 10px;
      }
    }
    .last-message-flexTitle {
      font-size: 24px;
      padding: 0 40px;
      text-align: center;
      color: white;
      font-weight: 700;
      margin: 0 auto;
      border: solid 2px #333333;
      background-color: #00af50;
      width: 75%;
      @media print, screen and (max-width: 570px) {
        font-size: 20px;
        padding: 0 20px;
        width: 85%;
      }
    }
    .last-message-flexText-bold {
      text-align: center;
      font-size: 15px;
      font-weight: 700;
      margin: 0;
      line-height: 1.5;
    }
    .last-message-flexText {
      text-align: center;
      font-size: 15px;
      margin: 10px 0 0;
      line-height: 1.5;

      span {
        font-weight: 700;
      }
    }
  }

  .last-message-flex.-bottom {
    justify-content: center;
    @media print, screen and (max-width: 1000px) {
      margin-top: 40px;
    }

    .last-message-flex-box {
      img {
        width: 80%;
        @media print, screen and (max-width: 1000px) {
          width: 63%;
        }
      }
    }

    .last-message-flexText-bold {
      font-size: 17px;
      @media print, screen and (max-width: 1000px) {
        font-size: 15px;
      }
    }

    .last-message-flexTitle {
      background-color: #ed6c00;
      padding: 10px 90px 10px 100px;
      @media print, screen and (max-width: 1000px) {
        padding: 0 40px;
      }
      @media print, screen and (max-width: 570px) {
        padding: 0 20px;
      }
    }
    .red {
      color: red;
    }
    .last-message-flexText.-center {
      text-align: left;
      margin: 10px auto 0;
      max-width: 500px;
    }
  }

  .last-message-flex p {
    margin: 0;
  }
  .last-message-logo {
    width: 45%;
  }
  .last-message-description {
    width: 55%;
    // background: #fff8cc;
    padding-left: 8%;
    position: relative;
  }
  .last-message-description::after {
    content: "";
    position: absolute;
    left: -322px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 548px solid transparent;
    border-top: 96px solid #fff8cc;
    transform: rotate(90deg);
  }
  .last-message-text1 {
    color: #0071bb;
    font-size: 28px;
    font-weight: 700;
    padding-top: 10px;
    line-height: 1.8;
    letter-spacing: 0.1em;
  }
  .last-message-text2 {
    font-size: 15px;
    font-weight: 700;
    padding-top: 10px;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }
  .last-message-text3 {
    font-size: 14px;
    font-weight: 500;
    padding-top: 10px;
    padding-bottom: 8px;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }
  .last-message-text3 a {
    text-decoration: underline;
  }

  .careerSupport {
    max-width: 1060px;
    padding: 0 20px;
    margin: 60px auto 80px;
    font-family: メイリオ, sans-serif;
    @media print, screen and (max-width: 1000px) {
      margin-top: 40px;
      margin-bottom: 210px;
    }
  }

  .careerSupport-flex {
    display: flex;
    justify-content: space-between;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column;
      row-gap: 20px;
    }
  }

  .careerSupport-flex.-middle {
    margin-top: 190px;
    @media print, screen and (max-width: 1000px) {
      margin-top: 220px;
    }
  }

  .careerSupport-flex.-reverse {
    flex-direction: row-reverse;
    margin-top: 40px;
    @media print, screen and (max-width: 1000px) {
      flex-direction: column-reverse;
      margin-top: 220px;
    }

    .careerSupport-img {
      max-width: 450px;
      margin: 0 auto;

      a {
        display: block;
        margin: 30px auto 0;
        max-width: 230px;
      }
    }
  }

  .careerSupport-bottomText {
    max-width: 950px;
    margin: 0 auto;
    font-family: メイリオ, sans-serif;
    @media print, screen and (max-width: 1000px) {
      max-width: 580px;
    }

    span {
      font-weight: 700;
    }
  }

  .careerSupport-img {
    margin: 0;
    width: 50%;
    @media print, screen and (max-width: 1000px) {
      margin: 0 auto;
      width: 70%;
    }
  }

  .careerSupport-wrap {
    width: 50%;
    position: relative;
    font-family: メイリオ, sans-serif;
    @media print, screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  .careerSupport-title {
    margin: 0 auto;
    border: solid 2px #000;
    padding: 2px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    max-width: 400px;
  }
  .careerSupport-text {
    margin: 20px auto 0;
    font-size: 15px;
    max-width: 400px;
    @media print, screen and (max-width: 1000px) {
      max-width: 560px;
    }
    span {
      font-weight: 700;
      font-size: 17px;
    }
  }

  .careerSupport-text.-bold {
    font-weight: 700;
  }
  .careerSupport-link {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    bottom: -110px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    @media print, screen and (max-width: 1000px) {
      width: 35%;
      bottom: -190px;
      row-gap: 10px;
    }
  }

  @media print, screen and (max-width: 1000px) {
    .last-message-description::after {
      display: none;
    }
    // .last-message-flex {
    //   width: 100%;
    //   max-width: 560px;
    //   flex-wrap: wrap;
    // }
    .last-message-logo {
      width: 100%;
    }
    .last-message-description {
      width: 100%;
      padding-left: 0;
    }
    .last-message-text1 {
      text-align: center;
      font-size: 20px;
    }
    .last-message-text2 {
      text-align: center;
      font-size: 13px;
    }
    .last-message-text3 {
      text-align: center;
      font-size: 12px;
    }
  }

  // .appear-animation-enter-active {
  //   opacity: 1;
  //   transition: all 0.8s ease-out 1s;
  // }
  // // leave の継続状態。トランジションが終わるフェーズ中に適用
  // // leave がトリガされるとき追加され、トランジション/アニメーションが終了すると削除
  // // 削除シーンの期間、遅延、イージングを定義
  // .appear-animation-leave-active {
  // }

  // //  enter の開始状態。
  // //  要素が挿入される前に適用され、要素が挿入された 1 フレーム後に削除
  // //  要素の登場シーンのスタイルがここ
  // .appear-animation-enter {
  //   opacity: 0;
  //   transform: translateY(50px);
  // }

  // // leave の終了状態
  // // トランジションの終了がトリガされた後に (同時に v-leave 削除) 1フレーム追加
  // // トランジション/アニメーションが終了すると削除
  // // 要素の削除シーンのスタイルがここ
  // .appear-animation-leave-to {
  //   transform: translateY(0px);
  // }
  @for $i from 1 through 9 {
    $enter-delay: 200ms;
    .appear-animation-enter-active {
      opacity: 0;
      animation: fade-in 1s;

      &.item0#{$i} {
        animation-delay: #{200ms * $i + $enter-delay};
      }
      @media print, screen and (max-width: 1000px) {
        &.item09 {
          //スマホのときは「勉強の時間がないという問題を~...を最初に出現させる」
          animation-delay: 200ms;
        }
      }
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .scroll_top {
    transition: all 0.3s;
    @media print, screen and (min-width: 1000px) {
      position: fixed;
      right: 2rem;
      bottom: 2rem;
    }
  }
  .display_none {
    transition: all 0.3s;
    display: none;
  }
  .modal-application {
    font-size: 14px;
    width: 100%;
    left: 0;
    background-color: #fff;
    z-index: 0;
    font-weight: bold;
    .item {
      text-align: center;
      margin-top: 30px;
    }
    ul {
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
      padding-bottom: 30px;
      @media print, screen and(min-width: 1001px) {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: center;
      }
      @media print, screen and(max-width: 1000px) {
        margin-left: 1em;
      }
      @media print, screen and(max-width: 321px) {
        margin-left: 0;
      }
      li {
        position: relative; //202101 for online
        text-align: left;
        // display: flex;
        align-items: center;
        @media print, screen and(min-width: 1001px) {
          width: 210px;
          margin-top: 30px;
        }
        .application-form-link {
          &:after {
            content: url("../assets/img/icon/double_arrow_right_orange.svg");
            height: 1.2em;
            width: 1.2em;
            display: inline-block;
            margin-left: 20px;
            vertical-align: sub;
          }
        }
        &.denken {
          .application-form-link,
          .application-fax-link {
            color: #1d9bf0;
            &::before {
              content: none;
            }
          }
          .title:before {
            content: url("../assets/img/icon/qualification/denken.svg");
          }
        }
        &.denkikouji {
          .application-form-link,
          .application-fax-link {
            color: #b60081;
            &::before {
              content: none;
            }
          }
          .title:before {
            content: url("../assets/img/icon/qualification/denkikouji.svg");
          }
        }
        &.denkikoujisekou {
          .application-form-link,
          .application-fax-link {
            color: #00a73c;
            &::before {
              content: none;
            }
          }
          .title:before {
            content: url("../assets/img/icon/qualification/denkikoujisekou.svg");
          }
        }
        &.doboku {
          .application-form-link,
          .application-fax-link {
            color: #ed7d31;
            &::before {
              content: none;
            }
          }
          .title:before {
            content: url("../assets/img/icon/qualification/doboku.svg");
          }
        }
        &.kankouji {
          .application-form-link,
          .application-fax-link {
            color: #00a73c;
            &::before {
              content: none;
            }
          }
          .title:before {
            content: url("../assets/img/icon/qualification/kankouji.svg");
          }
        }
        &.kenchiku {
          .application-form-link,
          .application-fax-link {
            color: #ed7d31;
            &::before {
              content: none;
            }
          }
          .title:before {
            content: url("../assets/img/icon/qualification/kenchiku.svg");
          }
        }
        &.kyuusui {
          .application-form-link,
          .application-fax-link {
            color: #00afcc;
            &::before {
              content: none;
            }
          }
          .title:before {
            content: url("../assets/img/icon/qualification/kyuusui.svg");
          }
        }
      }
      .title {
        color: #000;
        display: flex;
        &:before {
          height: 50px;
          width: 50px;
          display: inline-block;
          margin-right: 20px;
          @media print, screen and(max-width: 1000px) {
            height: 1.2em;
            width: 1.2em;
          }
          @media print, screen and(max-width: 321px) {
            margin-right: 10px;
          }
        }
        .overdisplay {
          @media print, screen and(max-width: 1000px) {
            display: none;
          }
        }
      }
    }
  }

  .fixed-note {
    position: fixed !important;
    bottom: 40px;
    left: 50%;
    z-index: 100;
    width: 680px;
    transform: translateX(-50%);
    box-shadow: 5px 5px 10px rgba(#000000, 0.3);
    background-color: #fff;
    border: 4px solid #ed6c00;
    border-radius: 12px;
    transition: all 0.2s ease;

    @media screen and(max-width: 1000px) {
      bottom: 20px;
      width: 83%;
      border-width: 2px;
      border-radius: 6px;
    }
    &.is-hidden {
      opacity: 0;
      visibility: hidden;
    }
  }

  .fixed-note-inner {
    position: relative;
    z-index: 0;
    // padding: 0.8em 3em;
    padding: 0.8em 2em;

    @media screen and(max-width: 1000px) {
      padding: 0.9em 1.5em 0.7em;
    }
  }

  .fixed-note-text {
    position: relative;
    z-index: 0;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #3b241a;
    text-align: center;
    text-justify: inter-ideograph;
    text-justify: inter-character;
    line-height: 1.7;
    font-family: メイリオ, sans-serif;
    @media screen and(max-width: 1000px) {
      line-height: 1.5;
      font-size: 12px;
    }
  }
  .fixed-note-icon {
    position: absolute;
    z-index: 10;
    top: -18px;
    left: -43px;
    width: 54px;
    @media screen and(max-width: 1000px) {
      top: -8px;
      left: -22px;
      width: 32px;
    }
  }

  .fixed-note-close {
    position: absolute;
    z-index: 20;
    top: 9px;
    right: 2px;
    width: 1em;
    padding: 0.5em;
    box-sizing: content-box;
    border: none;
    background-color: transparent;
    @media screen and(max-width: 1000px) {
      top: -5px;
      right: 2px;
      width: 0.7em;
    }
    img {
      transform: rotate(45deg);
      transform-origin: center center;
    }
  }
  .link-none {
    background-color: rgba(0, 0, 0, 0);
    color: inherit;
    text-decoration: none;
  }

  .qualification-list-wrapper {
    display: flex;
    align-items: end;
    margin-top: -4rem;
    @media print, screen and (max-width: 1000px) {
      margin-top: -8rem;
    }
  }
  @media print, screen and (max-width: 1300px) {
    .qualification-list-wrapper {
      display: block;
    }
  }
  .top_right,
  .top_left {
    transform: translateY(145px);
  }
  @media print, screen and (max-width: 1300px) {
    .top_right,
    .top_left {
      display: none;
    }
  }
  .top-youtube {
    text-align: center;
    margin-top: 30px;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 28px;
    font-family: "メイリオ", sans-serif;
    width: 50%;
    margin-left: 50px;
    @media print, screen and (max-width: 1150px) {
      width: 100%;
      margin-left: 0;
    }
  }

  .top-youtube p {
    margin: 0;
  }

  .top-youtube-movie {
    margin: 10px auto;
  }

  @media print, screen and (max-width: 800px) {
    .top-youtube {
      max-width: 90%;
      margin-top: 20px;
      margin-right: auto;
      margin-left: auto;
      font-size: 24px;
    }

    .top-youtube-movie {
      margin: 10px auto;
      width: 100%;
      height: 315px;
    }
  }
  .public-media {
    margin: 50px auto 225px;
    max-width: 800px;
    background: #fff;
    @media print, screen and (max-width: 1000px) {
      margin-bottom: 100px;
    }
  }
  .public-media p {
    margin: 0 0 20px 0;
    text-align: center;
    font-family: "メイリオ", sans-serif;
    font-size: 28px;
    font-weight: bold;
  }
  .public-media-flex {
    display: flex;
    margin: 12px 0;
  }
  .public-media-flex.-bottom {
    width: 75%;
    @media print, screen and (max-width: 800px) {
      margin: 0 auto;

      width: 100%;
    }
  }
  .public-media-flex figure {
    margin: 0;
    width: 33.33%;
    display: flex;
    justify-content: center;
  }
  .public-media-flex figure a {
    position: relative;
    z-index: 1;
  }

  .public-media-flex-image {
    width: 80%;
    display: block;
    margin: auto;
  }

  .public-media-flex-image.-type2 {
    width: 100%;
  }
  @media print, screen and (max-width: 800px) {
    .public-media p {
      font-size: 24px;
    }
    .public-media-flex {
      flex-flow: wrap;
      margin: 0;
    }
    .public-media-flex figure {
      width: 50%;
      margin: 12px 0;
    }
    .public-media-flex-image {
      width: 80%;
      display: block;
      margin: auto;
    }

    .public-media-flex-image.-type1 {
      transform: none;
    }
    .public-media-flex-image.-type2 {
      width: 80%;
      display: block;
      margin: auto;
    }
  }

  /* voiceセクションのスタイル */
  .voice {
    background-color: #fff;
    width: 100%;
    padding: 40px 0;
    margin-bottom: 190px;
    @media print, screen and (max-width: 1170px) {
      margin-bottom: 235px;
    }
    @media print, screen and (max-width: 1000px) {
      margin-bottom: 65px;
    }
  }

  .voice-image {
    max-width: 1250px;
    margin: 0 auto;
  }
  .voice-inner {
    max-width: 1090px;
    width: 100%;
    background-color: #d8efff;
    margin: 0 auto;
    font-family: メイリオ, sans-serif;
    padding: 20px 40px;
  }
  .voice-content {
    max-width: 870px;
    margin: 0 auto;
  }
  .voice-head {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    padding-bottom: 10px;
    color: #000;
    margin: 0;
  }
  .voice-title {
    font-weight: 700;
    text-align: center;
    font-size: 32px;
    color: #0071bb;
    margin: 0;
  }
  .voice-topic {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .voice-flex {
    display: flex;
    justify-content: space-between;
  }
  .voice-box {
    width: 46%;
    border: 4px solid #0071bb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    padding: 10px;
    background-color: #fff;
  }
  .voice-box figure {
    width: 30%;
    margin: 0;
  }
  .voice-box p {
    width: 70%;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #0071bb;
  }
  .voice-item {
    width: auto;
    border: 4px solid #0071bb;
    margin-top: 16px;
    padding: 20px;
    background-color: #fff;
  }
  .voice-item h4 {
    font-weight: 700;
    font-size: 20px;
    color: #000;
    margin: 0;
  }
  .voice-item-flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .voice-item figure {
    width: 16%;
    margin: 8px 0 0;
    border: 1px solid #000;
    cursor: pointer;
  }
  .voice-item figure:hover {
    opacity: 0.6;
  }
  .voice-item p {
    font-size: 16px;
    line-height: 1.8;
    font-weight: 600;
    margin-top: 16px;
    width: 70%;
  }
  .voice-item:first-of-type p {
    width: 100%;
    font-weight: 500;
  }
  .voice-upImage img {
    margin: 20px auto 0;
    border: 1px solid #000;
    display: block;
  }

  @media print, screen and (max-width: 1170px) {
    .voice {
      padding: 0;
    }
    .voice-inner {
      width: auto;
    }
  }
  @media print, screen and (max-width: 1000px) {
    .voice-inner {
      width: auto;
    }
    .voice-head {
      font-size: 15px;
    }
    .voice-title {
      font-size: 28px;
    }
    .voice-topic {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    .voice-flex {
      flex-wrap: wrap;
    }
    .voice-box {
      width: 100%;
    }
    .voice-box figure {
      width: 30%;
    }
    .voice-box p {
      font-size: 18px;
    }
    .voice-item {
      width: auto;
      padding: 10px 20px;
    }
    .voice-item h4 {
      font-size: 18px;
    }
    .voice-item-flex {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .voice-item figure {
      width: 40%;
      margin: 8px 0 0;
    }
    .voice-item p {
      font-size: 14px;
      line-height: 1.7;
      width: 100%;
    }
  }
  // voiceセクションここまで
</style>
