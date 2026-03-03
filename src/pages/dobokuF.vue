<template>
  <div class="doboku-template">
    <Layout>
      <div class="doboku">
        <header class="header">
          <HeroDoboku
            :backImgOver="
              require('../assets/img/license_page/doboku_s/doboku_s_hero.jpg')
            "
            :backImgUnder="require('../assets/img/license_page/bg_white.jpg')"
            headTitle="令和8年度前期 / 令和8年度後期"
            title="2級 土木施工管理技士"
            :icon="require('../assets/img/icon/qualification/doboku.svg')"
          />
          <!-- <TimeCountDoboku /> -->
          <CheerDoboku
            text="能センは、<br>
    建設業で働く皆さまを<br>
    応援します！"
            :imagePath="
              require('../assets/img/license_page/doboku_s/doboku_point2.jpg')
            "
            altText="土木施工管理技士 講習会 通信講座 web講座"
          />

          <!-- トップ部分タブ切り替え -->
          <section class="tab-wrapper -top">
            <div
              :class="['tab', { active: isActiveTop === 1 }]"
              v-on:click="tabToggleTop(1)"
            >
              試験内容
              <IconBase class="icon"><IconArrowRight /></IconBase>
            </div>
            <div
              :class="['tab', { active: isActiveTop === 2 }]"
              v-on:click="tabToggleTop(2)"
            >
              講座情報
              <IconBase class="icon"><IconArrowRight /></IconBase>
            </div>
          </section>

          <!-- 試験情報 -->
          <div v-show="isActiveTop === 1">
            <Explanation
              title="土木施工管理技士とは"
              text="1・2級土木施工管理技士は、土木工事の施工管理や安全管理、品質管理などを行う国家資格です。<br><br>
                  1級土木施工管理技士は、土木工事に関する全ての分野で監理技術者や主任技術者として施工管理ができます。工事現場全体の責任者として工事に関わり、請負金額に制限がないため大規模な工事に携わることができます。<br><br>
                  2級土木施工管理技士は、中規模な土木工事プロジェクトを担当し、施工計画の作成や現場の安全管理、品質管理、進捗管理を行います。<br>
                  また、作業員の指揮命令や教育指導など、日常的な施工管理業務を遂行します。<br><br>
                  <span style='font-weight: 700;'>能センでは、受講生が業務の多忙さによる時間的制約の中、<br>
                    最小限の努力で最大の結果（合格）を得るための講座をご提供いたします。</span>"
              :imagePath="
                require('../assets/img/license_page/doboku_s/doboku_explain.jpg')
              "
              altText="土木施工管理技士 講習会 通信講座 web講座"
            />
            <div class="bg-lightBlue -pd100">
              <ScheduleDoboku title="令和8年度 土木施工管理技士 試験日程" />
              <TestOverviewDoboku />

              <!-- <QualityDoboku
              text_1="多くの合格者を輩出したベテラン講師陣が担当します。試験に出る範囲のポイントを絞った講義が特徴です。<br>
                    難解な内容もわかりやすいソフトな説明で理解することができます。"
              :imagePath_1="
                require('../assets/img/license_page/doboku_s/doboku_quality_1.jpg')
              "
              text_2="【一次】選択問題のある科目はより効率的な学習方法を伝授。「どこを優先的に覚え、何を関連付けて理解すべきか」を指導。<br>
                      【二次】工事件名の記述方法から、使うべき専門用語、文章の簡潔なまとめ方、得点アップ方法など、記述のテクニックを徹底解説。"
              :imagePath_2="
                require('../assets/img/license_page/doboku_s/doboku_quality_2.jpg')
              "
              text_3="受講生のライフスタイルに合った講座を選択可能。【通学】または【オンライン】講座。どちらも教材や講座内容は同じです。<br>
                    提出していただく経験記述の課題は講師自ら個別に添削し、高得点となるように直し、助言を入れてお返しいたします。"
              :imagePath_3="
                require('../assets/img/license_page/doboku_s/doboku_quality_3.jpg')
              "
            /> -->

              <div class="exam-link-wrapper -column">
                <!-- <g-link to="/licenses/#doboku" class="exam-link">
                  試験概要はこちら
                  <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
                </g-link> -->
                <g-link
                  to="https://timerex.net/s/a4b3c5d67_73c6/9aab6876"
                  class="online-link"
                >
                  オンライン相談はこちら
                  <IconBase class="icon" width="25" height="25">
                    <IconFingerRight />
                  </IconBase>
                </g-link>
                <g-link
                  to="https://business.form-mailer.jp/fms/e3140a33291788"
                  class="online-link"
                >
                  お問い合わせ / 資料請求
                  <IconBase class="icon" width="25" height="25">
                    <IconFingerRight />
                  </IconBase>
                </g-link>
              </div>

              <!-- <Support title="＼＼建設業を応援しよう／／" /> -->

              <!-- <NewPvMovie
            :movie="$static.dobokuOnline.mediaYoutube"
            :image="
              $static.dobokuOnline.mediaImg
                ? $static.dobokuOnline.mediaImg.file.url
                : ''
            "
            movieTitle="土木施工管理技士の講習会動画をご視聴ください"
            description="合格者を多数輩出！大嶋先生の無料動画です！"
          /> -->

              <!-- <NewPvMovieDoboku
              movieTitle="土木施工管理技士の講習会動画をご視聴ください"
              description="合格者を多数輩出！大嶋先生の無料動画です！"
            />

            <Lecture
              title="わかりやすい講義を提供します"
              title2="土木の講師歴３５年以上のスーパー講師！"
              text="長年土木の建設工事、設備保守に従事し、経験を踏まえて１級土木施工管理技士、電気主任技術者（３～１種）等多くの関連資格を取得。
                  東京電力で技能訓練センター所長として約４年間勤務後独立し、土木・電気関連の資格書籍の執筆や当センターをはじめとした受験対策講習で多数の講義を担当しています。
                  難解な内容もわかりやすいソフトな説明で理解させてくれるベテラン講師です。"
              :imagePath="
                require('../assets/img/license_page/doboku_s/doboku_lecture.jpg')
              "
            />

            <div class="bg-white">
              <SetCourse2 title="通学＋オンラインセット" />
            </div>

            <section class="voice">
              <div class="voice-inner">
                <div class="voice-content">
                  <p class="voice-head">
                    ＼ アンケートによる受講生満足度９７％ ／
                  </p>
                  <h3 class="voice-title">受講生の声</h3>
                  <div class="voice-topic">
                    <div class="voice-flex">
                      <div class="voice-box">
                        <figure>
                          <img
                            src="../assets/img/license_page/denken3/denken3_voice_3.jpg"
                            alt="土木施工管理技士 講座 講習会"
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
                            alt="土木施工管理技士 講座 講習会"
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
                            alt="土木施工管理技士 講座 講習会"
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
                            alt="土木施工管理技士 講座 講習会"
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
                </div>
              </div>
            </section> -->

              <Study
                studySlug="other"
                name1="1級土木施工管理技士"
                time1="100～400"
                name2="2級土木施工管理技士"
                time2="50～100"
                pc_text="1・2級土木施工管理技士の資格を取得するための勉強時間は個人によって異なりますが、一般的には数十時間から数百時間の学習が必要とされています。<br>
            1級土木施工管理技士の試験範囲は広く、施工計画、品質管理、安全管理、法令知識など多岐にわたります。これらの内容を十分に習得するためには、長期間にわたって学習を行う必要があります。<br>
            勉強時間は、学習の進め方や個人の学習スピードによっても異なります。講習会や教材の利用、過去の試験問題の解答など、効果的な学習方法を活用することも重要です。<br>
            2級の試験範囲は、1級に比べてより基礎的な内容ですが、それでも施工計画の作成や現場の安全管理、品質管理、進捗管理など多くの要素が含まれています。これらの内容を十分に理解し、適切に対応するためには、一定の学習時間を確保する必要があります。<br>
            また、一定の勉強時間だけでなく、定期的な復習も重要です。継続的な学習と復習を行いながら、理解を深めることが試験に合格するために役立ちます。<br>
            個々の学習スタイルや状況によっても異なるため、自分の目標に向けて効果的な学習プランを立て、着実に学習を進めていくことが重要です。"
              />

              <Method
                text="① 試験範囲の把握と参考書の選定<br>
                  　土木施工管理技士の試験範囲を確認し、公式の試験要綱やガイドラインを参照して、出題範囲や試験形式を把握しましょう。<br>
                  　信頼性のある参考書を選び、試験に合わせた資料を活用しましょう。<br>
                  ② 勉強計画の作成と実行<br>
                  　週次や月次の勉強計画を作成し、各範囲を均等にカバーするようにスケジュールを立てましょう。計画通りに学習を進めることが重要です。<br>
                  ③ 理論と実務の学習<br>
                  　理論的な知識と実務経験の両方が必要です。参考書や資料を活用して理論を学び、実務経験を通じて実践的な知識を身につけます。<br>
                  ④ ノート作成と過去問の解答<br>
                  　重要なポイントやキーワードをノートにまとめ、理解を深めます。過去の試験問題を解くことで、実際の試験形式や問題の傾向を把握し対策を練ります。<br>
                  ⑤ グループ勉強や相互学習の活用<br>
                  　同じ目標を持つ仲間と一緒に学習することで、理解が深まります。グループ勉強や相互学習を通じて、知識の共有や質問の解決に役立てましょう。<br>
                  ⑥ 定期的な復習と模擬試験<br>
                  　学習した内容を定期的に復習し長期的な記憶と理解を固めます。試験本番に近い環境で模擬試験を受けることで、試験の雰囲気に慣れることも重要です。<br><br>

                  また、独学だけでなく、講習会やオンライン講座に参加することも有益です。<br>
                  他の受験生との情報交換や質問をすることで学習の効率が上がるでしょう。"
              />

              <!-- <News :contents="richtextToHTML($static.news.newsField)" /> -->
              <!-- <figure class="point-image">
          <img src="../assets/img/license_page/doboku_s/doboku_point.jpg">
        </figure> -->

              <!-- <Point
              title="短期間で合格する５つのポイント"
              :points="[
                '『担当講師が土木のエキスパート！』<br>多くの合格者を輩出した大嶋先生が担当。難解な内容もわかりやすいソフトな説明で理解させてくれるベテラン講師です。',
                '『合格特化型の講座』<br>一次・二次共に合格点獲得に必要な学習項目を解説。',
                '『効率的な学習方法』<br>＜一次＞選択問題のある科目はより効率的な学習方法を伝授。「どこを優先的に覚え、何を関連付けて理解すべきか」を指導。',
                '『経験記述問題をしっかり対策』<br>＜二次＞工事件名の記述方法から使うべき言葉、専門用語、文章の簡潔なまとめ方、得点アップ方法など、記述のテクニックを徹底解説。',
                '『添削で合格の近道へ』<br>＜二次＞提出していただく経験記述の課題は講師自ら個別に添削。高得点となるように直し、助言を入れてお返しします。',
              ]"
            /> -->

              <!-- <CampaignDoboku day="2" date="7/15(祝)" /> -->
              <ContactInfo title="受講に関するご相談は" />

              <Linelink
                text="能センLINE公式アカウント開設しました。<br>
              只今『お友達登録キャンペーン』で500円割引キャンペーンコードをプレゼント！<br>
              期間限定ですのでお早めにご使用ください。（他の割引と併用可）"
              />
            </div>

            <!-- <div class="bg-white_type2">
              <Discount title="合格応援割START！" />

              <SupportSecond title="＼＼建設業を応援しよう／／" />

              <Fsc title="持続可能なミライへ" />

              <div class="exam-link-wrapper">
                <div class="exam-link-flex">
                  <g-link
                    to="/doboku-s-application"
                    class="application-form-link"
                  >
                    お申込みはこちら（個人）
                    <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
                  </g-link>
                  <g-link
                    to="/doboku-s-application-business"
                    class="application-form-link"
                  >
                    お申込みはこちら（法人）
                    <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
                  </g-link>
                </div>

                <figure class="credit-image">
                  <img src="../assets/img/common/credit.jpg" />
                </figure>
              </div>
            </div>
          </div>
 -->
          </div>
          <!-- 講座情報 -->
          <div v-show="isActiveTop === 2">
            <QualityDoboku
              text_1="多くの合格者を輩出したベテラン講師陣が担当します。試験に出る範囲のポイントを絞った講義が特徴です。<br>
                    難解な内容もわかりやすいソフトな説明で理解することができます。"
              :imagePath_1="
                require('../assets/img/license_page/doboku_s/doboku_quality_1.jpg')
              "
              text_2="【一次】選択問題のある科目はより効率的な学習方法を伝授。「どこを優先的に覚え、何を関連付けて理解すべきか」を指導。<br>
                      【二次】工事件名の記述方法から、使うべき専門用語、文章の簡潔なまとめ方、得点アップ方法など、記述のテクニックを徹底解説。"
              :imagePath_2="
                require('../assets/img/license_page/doboku_s/doboku_quality_2.jpg')
              "
              text_3="受講生のライフスタイルに合わせて【通学】または【オンライン】講座を選択可能。どちらも教材や講座内容は同じです。<br>提出いただく経験記述の課題は、講師が個別に添削し、高得点が狙えるよう修正とアドバイスを加えて<strong>最短1日</strong>でお返しいたします。"
              :imagePath_3="
                require('../assets/img/license_page/doboku_s/doboku_quality_3.jpg')
              "
            />

            <WorkshopDoboku />
            <NewPvMovieDoboku
              movieTitle="土木施工管理技士の講習会動画をご視聴ください"
              description="合格者を多数輩出！大嶋先生の無料動画です！"
            />

            <Lecture
              title="わかりやすい講義を提供します"
              title2="土木の講師歴３５年以上のスーパー講師！"
              text="大嶋先生は、長年土木の建設工事、設備保守に従事し、経験を踏まえて１級土木施工管理技士、電気主任技術者（３～１種）等多くの関連資格を取得。
                  東京電力で技能訓練センター所長として約４年間勤務後独立し、土木・電気関連の資格書籍の執筆や当センターをはじめとした受験対策講習で多数の講義を担当しています。
                  難解な内容もわかりやすいソフトな説明で理解させてくれるベテラン講師です。"
              :imagePath="
                require('../assets/img/license_page/doboku_s/doboku_lecture.jpg')
              "
              altText="土木施工管理技士 講習会 通信講座 web講座"
            />
            <div class="bg-white">
              <!-- <ExamDoboku title="一次検定完全攻略！予想模擬試験" /> -->
              <!-- <ExamSecond /> -->
              <FollowUpDoboku />
              <Gansho />
            </div>

            <div class="bg-white">
              <SetCourse2 title="通学＋オンラインセット" />
            </div>

            <section class="voice">
              <div class="voice-inner">
                <div class="voice-content">
                  <p class="voice-head">
                    ＼ アンケートによる受講生満足度９７％ ／
                  </p>
                  <h3 class="voice-title">受講生の声</h3>
                  <div class="voice-topic">
                    <div class="voice-flex">
                      <div class="voice-box">
                        <figure>
                          <img
                            src="../assets/img/license_page/denken3/denken3_voice_3.jpg"
                            alt="土木施工管理技士 講習会 通信講座 web講座"
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
                            alt="土木施工管理技士 講習会 通信講座 web講座"
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
                            alt="土木施工管理技士 講習会 通信講座 web講座"
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
                            alt="土木施工管理技士 講習会 通信講座 web講座"
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
                    <!-- <div class="voice-item">
                              <h4>【能センについて】</h4>
                              <p>
                                ・講習会を実際に受けて見たらかなり良くて、スタッフの対応も丁寧で安心しました！<br>
                                ・講習会や講座を受けるのって少し敷居が高いイメージでしたが、お問い合わせしたら試験の事など色々と丁寧に教えてくれました。
                              </p>
                          </div> -->
                    <div class="voice-item">
                      <h4>【一次コース】</h4>
                      <div class="voice-item-flex">
                        <figure v-on:click="toggleVoice(1)" class="-sp-none">
                          <img
                            src="../assets/img/license_page/doboku_s/doboku_voice_comment_1.jpg"
                            alt="土木施工管理技士 講習会 通信講座 web講座"
                          />
                        </figure>
                        <p>
                          ・わかり易く必要ポイントをまとめて教えてもらえた。
                          <br />
                          ・２日間で一通り学べるのでコストパフォーマンスが高いと感じだ。
                          <br />
                          ・オンラインは同じ内容みたいなので今後はオンラインでも受けてみたい
                          <br />
                          ・休憩中にも個別での質問に応じて下さったことが良かった。
                          <br />
                          ・重要なところだけをかいつまんで説明してくれたのでわかりやすかった
                        </p>
                      </div>
                      <div v-show="isVoice === 1" class="voice-upImage">
                        <img
                          src="../assets/img/license_page/doboku_s/doboku_voice_comment_1.jpg"
                          alt="土木施工管理技士 講習会 通信講座 web講座"
                        />
                      </div>
                    </div>
                    <div class="voice-item">
                      <h4>【二次コース】</h4>
                      <div class="voice-item-flex">
                        <figure v-on:click="toggleVoice(2)" class="-sp-none">
                          <img
                            src="../assets/img/license_page/doboku_s/doboku_voice_comment_2.jpg"
                            alt="土木施工管理技士 講習会 通信講座 web講座"
                          />
                        </figure>
                        <p>
                          ・NGな例、OKな例がわかりやすかった。
                          <br />
                          ・試験までの残り１ヶ月の取り組み方がはっきりとした。
                          <br />
                          ・記述内容の語句、数値などの具体的な表記について作文に役立てました。
                          <br />
                          ・要点がまとまっていて、理解しやすかった。講師の声も大きくはっきりしていて、ストレスなく受講できた。
                          <br />
                          ・必要な所、ポイントをわかりやすく教えて頂いた。仕事との両立で時間が無いため勉強するにあたりとても参考になった。
                        </p>
                      </div>
                      <div v-show="isVoice === 2" class="voice-upImage">
                        <img
                          src="../assets/img/license_page/doboku_s/doboku_voice_comment_2.jpg"
                          alt="土木施工管理技士 講習会 通信講座 web講座"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- <CampaignDoboku day="2" date="7/15(祝)" /> -->

            <div class="bg-white_type2">
              <DiscountDoboku title="🎓 GO!資格 合格応援制度 START！" />

              <SupportSecond title="ミライを創ろう" />
              <SupportDoboku title="＼＼建設業を応援しよう／／" />
              <MerumagaDoboku />

              <!-- <Fsc title="持続可能なミライへ" /> -->

              <div class="exam-link-wrapper -border">
                <div class="exam-link-flex">
                  <g-link
                    to="/doboku-s-application"
                    class="application-form-link"
                  >
                    お申込みはこちら（個人）
                    <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
                  </g-link>
                  <g-link
                    to="/doboku-s-application-business"
                    class="application-form-link"
                  >
                    お申込みはこちら（法人）
                    <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
                  </g-link>
                </div>

                <figure class="credit-image">
                  <img src="../assets/img/common/credit.jpg" />
                </figure>
              </div>
              <NewApplication faxLink="/doboku.pdf" />
              <ContactInfo title="受講に関するご相談・資料請求は" />
            </div>
            <!-- 
            <section class="tab-wrapper">
              <div
                :class="['tab', { active: isActive === 3 }]"
                v-on:click="tabToggle(3)"
              >
                オンライン
                <br class="underdisplay" />
                講座
                <IconBase class="icon"><IconArrowRight /></IconBase>
              </div>
              <div
                :class="['tab', { active: isActive === 2 }]"
                v-on:click="tabToggle(2)"
              >
                1級通学講座
                <IconBase class="icon"><IconArrowRight /></IconBase>
              </div>
              <div
                :class="['tab', { active: isActive === 1 }]"
                v-on:click="tabToggle(1)"
              >
                2級通学講座
                <IconBase class="icon"><IconArrowRight /></IconBase>
              </div>
            </section> -->
            <!-- <div class="body">
              <div v-show="isActive === 2">
                <h3 class="body-title">1級通学講座</h3>
                <h3 class="body-title">各会場の開催日程</h3>
                <Venue
                  v-for="(items, index) in $static.doboku1Venue.edges"
                  :key="index"
                  :city="items.node.city"
                  :period="items.node.period"
                  :hall="items.node.hall"
                  :details="items.node.details"
                  :address="items.node.address"
                  :map="items.node.map"
                />
                <Info
                  :tuitionFee="richtextToHTML($static.doboku1.tuitionFee)"
                  :capacity="$static.doboku1.capacity"
                  :benefits="richtextToHTML($static.doboku1.benefits)"
                  :cpds="richtextToHTML($static.doboku1.cpds)"
                />
                <NewApplication
                  personalFormLink="/doboku-s-application"
                  businessFormLink="/doboku-s-application-business"
                  faxLink="https://assets.ctfassets.net/smbvwwns0c77/7LbRQTOY4f0eTu4qFlnIBC/3b7b0bf112e2c69cce90f28d787db6ee/__________________FAX.pdf"
                />
              </div>
              <div v-show="isActive === 1">
                <h3 class="body-title">2級通学講座</h3>
                <h3 class="body-title">各会場の開催日程</h3>
                <VenueAddMap
                  v-for="(items, index) in $static.doboku2Venue.edges"
                  :key="index"
                  :city="items.node.city"
                  :period="items.node.period"
                  :hall="items.node.hall"
                  :details="items.node.details"
                  :address="items.node.address"
                  :map="items.node.map"
                />
                <Info
                  :tuitionFee="richtextToHTML($static.doboku2.tuitionFee)"
                  :capacity="$static.doboku2.capacity"
                  :benefits="richtextToHTML($static.doboku2.benefits)"
                  :cpds="richtextToHTML($static.doboku2.cpds)"
                />
                <NewApplication
                  personalFormLink="/doboku-s-application"
                  businessFormLink="/doboku-s-application-business"
                  faxLink="https://assets.ctfassets.net/smbvwwns0c77/7LbRQTOY4f0eTu4qFlnIBC/3b7b0bf112e2c69cce90f28d787db6ee/__________________FAX.pdf"
                />
              </div>
              <div v-show="isActive === 3">
                <h3 class="body-title">オンライン講座</h3>
                <Info
                  :courseOutline="
                    richtextToHTML($static.dobokuOnline.courseOutline)
                  "
                  :apply="richtextToHTML($static.dobokuOnline.apply)"
                />
                <NewApplication
                  personalFormText="オンライン講座へのお申込み（個人）"
                  personalFormLink="/doboku-s-application"
                  businessFormText="オンライン講座へのお申込み（法人）"
                  businessFormLink="/doboku-s-application-business"
                  faxLink="https://assets.ctfassets.net/smbvwwns0c77/7LbRQTOY4f0eTu4qFlnIBC/3b7b0bf112e2c69cce90f28d787db6ee/__________________FAX.pdf"
                />
              </div>

              <ContactInfo title="受講に関するご相談・資料請求は" />
            </div> -->
          </div>
        </header>
      </div>
    </Layout>
  </div>
</template>

<static-query>
  query Doboku {
    news:contentfulQualificationNews(id: "4hfHZ42FBwJYfv8FReqiFV") {
      newsField
    }
    doboku1:contentfulQualification(id:"1pwvOhHtaf3ykHUUwVOgys") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    doboku2:contentfulQualification(id:"2frd3fKgxZXU32RDgH5XxS") {
      tuitionFee
      capacity
      benefits
      cpds
    }
    dobokuOnline:contentfulQualificationOnline(id:"yOrlRRPoXrrsG40ksuU4u") {
      courseOutline
      apply
      mediaYoutube
      mediaImg {
        file { url }
      }
      mediaDescription
    }
    doboku1Venue:allContentfulDobokuSekou1Venue(order: ASC) {
      edges {
        node {
          city
          period
          hall
          details
          address
          map {
            lat
            lon
          }
        }
      }
    }
    doboku2Venue:allContentfulDobokuSekou2Venue(order: ASC) {
      edges {
        node {
          city
          period
          hall
          details
          address
          map {
            lat
            lon
          }
        }
      }
    }
    metadata {
      siteName
      siteUrl
    }
  }
</static-query>

<script>
  // import Hero from "@/components/Hero.vue";
  import HeroDoboku from "@/components/HeroDoboku.vue";
  import Point from "@/components/licensePage/Point.vue";
  import Explanation from "@/components/licensePage/Explanation.vue";
  import CampaignDoboku from "@/components/licensePage/CampaignDoboku.vue";
  import Study from "@/components/licensePage/Study.vue";
  import Linelink from "@/components/licensePage/Linelink.vue";
  // import NewPvMovie from "../components/licensePage/NewPvMovie.vue";
  import NewPvMovieDoboku from "../components/licensePage/NewPvMovieDoboku.vue";
  import Method from "../components/licensePage/Method.vue";
  import Support from "../components/licensePage/Support.vue";
  import SupportSecond from "../components/licensePage/SupportSecond.vue";
  import Lecture from "../components/licensePage/Lecture.vue";
  import CheerDoboku from "../components/licensePage/CheerDoboku.vue";
  // import News from "@/components/licensePage/News.vue";
  import Info from "@/components/licensePage/Info.vue";
  import Venue from "@/components/licensePage/Venue.vue";
  import VenueAddMap from "@/components/licensePage/VenueAddMap.vue";
  import Application from "@/components/licensePage/Application.vue";
  import NewApplication from "@/components/licensePage/NewApplication.vue";
  import IconBase from "@/components/IconBase.vue";
  import IconDoubleArrowRight from "@/components/icons/IconDoubleArrowRight.vue";
  import IconArrowRight from "@/components/icons/IconArrowRight.vue";
  import { INLINES } from "@contentful/rich-text-types";
  import { documentToHtmlString } from "../../node_modules/@contentful/rich-text-html-renderer";
  import ContactInfo from "../components/licensePage/ContactInfo.vue";
  import Discount from "../components/licensePage/Discount.vue";
  import Fsc from "../components/licensePage/Fsc.vue";
  import SetCourse2 from "../components/licensePage/SetCourse2.vue";
  import QualityDoboku from "../components/licensePage/QualityDoboku.vue";
  import WorkshopDoboku from "../components/licensePage/WorkshopDoboku.vue";
  import ScheduleDoboku from "../components/licensePage/ScheduleDoboku.vue";
  import ExamDoboku from "../components/licensePage/ExamDoboku.vue";
  import ExamKenchiku from "../components/licensePage/ExamKenchiku.vue";
  import SupportDoboku from "../components/licensePage/SupportDoboku.vue";
  import DiscountDoboku from "../components/licensePage/DiscountDoboku.vue";
  import ExamSecond from "../components/licensePage/ExamSecond.vue";
  import FollowUpDoboku from "../components/licensePage/FollowUpDoboku.vue";
  import TestOverviewDoboku from "../components/licensePage/TestOverviewDoboku.vue";
  import Gansho from "../components/licensePage/Gansho.vue";
  import MerumagaDoboku from "../components/licensePage/MerumagaDoboku.vue";
  import TimeCountDoboku from "../components/licensePage/TimeCountDoboku.vue";
  import IconFingerRight from "@/components/icons/IconFingerRight.vue";

  const options = {
    //contentfulのエディタで設定したassetへのリンクを変換
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: (node) =>
        `<a href="${node.data.target.fields.file.url}">${node.content[0].value}</a>`,
    },
  };
  export default {
    name: "koujishi2",
    metaInfo() {
      return {
        titleTemplate:
          "2級土木施工管理技士 受験対策講習会｜能セン-合格への近道-",
        meta: [
          {
            name: "description",
            content:
              "通学講座・オンライン講座とご自身に合った学習スタイルを選べる受験対策講習会です。経験記述問題の対策も学べます。願書サービス、再受講割引等もご用意。CPDS認定講座。ポイントを押さえた講義をお届けします。",
          },
          {
            key: `og:title`,
            property: `og:title`,
            content: `2級土木施工管理技士 受験対策講習会｜能セン-合格への近道-`,
            // content: `1・2級 土木施工管理技士 | ${
            //   this.$static.metadata.siteName
            // }`,
          },
          {
            key: `og:url`,
            property: `og:url`,
            content: `${this.$static.metadata.siteUrl}/doboku-s`,
          },
        ],
      };
    },
    components: {
      // Hero,
      HeroDoboku,
      Point,
      Explanation,
      CampaignDoboku,
      Study,
      Linelink,
      // NewPvMovie,
      NewPvMovieDoboku,
      Method,
      Support,
      SupportDoboku,
      SupportSecond,
      Lecture,
      CheerDoboku,
      QualityDoboku,
      // News,
      Info,
      Venue,
      VenueAddMap,
      Application,
      NewApplication,
      IconBase,
      IconDoubleArrowRight,
      IconArrowRight,
      ContactInfo,
      Fsc,
      Discount,
      DiscountDoboku,
      SetCourse2,
      WorkshopDoboku,
      ScheduleDoboku,
      ExamDoboku,
      ExamKenchiku,
      ExamSecond,
      FollowUpDoboku,
      TestOverviewDoboku,
      Gansho,
      MerumagaDoboku,
      TimeCountDoboku,
      IconFingerRight,
    },
    data() {
      return {
        isActive: 1,
        isVoice: 0,
        isActiveTop: 2,
      };
    },
    methods: {
      richtextToHTML(content) {
        const richtextString = documentToHtmlString(content, options)
          .replace(/\n/g, `</br>`)
          .replace(/<a((?: .+?))?>(.*?)<\/a>/g, '<a $1 target="_blank">$2</a>');
        return richtextString;
      },
      tabToggle: function (num) {
        this.isActive = num;
      },
      tabToggleTop: function (num) {
        this.isActiveTop = num;
      },
      toggleVoice: function (num) {
        if (this.isVoice === num) {
          this.isVoice = 0;
        } else {
          this.isVoice = num;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .exam-link-flex {
    display: flex;
    margin: 0 auto;
    @media print, screen and (max-width: 768px) {
      flex-wrap: wrap;
      max-width: 480px;
      justify-content: center;
    }
  }
  .doboku {
    padding-bottom: 0;
  }
  .header {
    background-color: #fff8cc;
    // border-bottom: 5px solid #ed7d31;
    border-bottom: 5px solid #1262b2;
  }
  .exam-link-wrapper {
    text-align: center;
    padding: 60px 0 20px 0;
    display: flex;
    flex-direction: column;
    @media print, screen and (max-width: 1000px) {
      padding: 40px 0 20px 0;
      flex-direction: column;
    }
  }
  // .exam-link-wrapper.-border {
  //   border-bottom: 5px solid #1262b2;
  // }
  .exam-link,
  .application-form-link,
  .online-link {
    color: #fff;
    border-radius: 10px;
    padding: 14px 30px;
    font-weight: bold;
    text-align: center;
    margin: 0 20px;
    font-size: 17px;
    box-sizing: border-box;
    font-family: "メイリオ", sans-serif;
    @media print, screen and (max-width: 370px) {
      padding: 7px 15px;
      width: 80%;
    }
  }
  .exam-link {
    width: 300px;
    background-color: #1262b2;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    @media print, screen and (max-width: 480px) {
      width: 80%;
    }
  }
  .application-form-link {
    // background-color: #ed6c00;
    background-color: #ff4500;
    box-shadow: 4px 4px 10px rgba(153, 33, 0, 0.3);

    margin-top: 25px;
    width: 400px;
    padding: 14px 30px;
    @media print, screen and (max-width: 900px) {
      width: 300px;
    }

    @media print, screen and (max-width: 480px) {
      width: 90%;
    }
  }
  .online-link {
    width: 300px;
    background-color: #1262b2;
    box-shadow: 4px 4px 10px rgba(0, 47, 77, 0.3);
    margin-top: 25px;

    @media print, screen and (max-width: 1000px) {
      margin-right: auto;
      margin-left: auto;
    }
    @media print, screen and (max-width: 480px) {
      width: 80%;
    }
  }
  .tab-wrapper {
    margin: 0 auto;
    // max-width: 900px;
    max-width: 1000px;
    width: 100%;
    display: flex;
    text-align: center;
    margin-top: -70px;
    font-weight: bold;
    justify-content: center;
    font-family: "メイリオ", sans-serif;
    @media print, screen and (max-width: 370px) {
      margin-top: -20vw;
    }
    .tab {
      cursor: pointer;
      font-size: 20px;
      color: #666666;
      // max-width: 280px;
      max-width: 305px;
      width: 100%;
      // background-color: #f2f2f2;
      // background-color: #fff7d5;
      background-color: #ebf7ff;
      // border: 5px solid #ed7d31;
      border: 5px solid #1262b2;
      border-radius: 20px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding: 10px 0;
      margin: 0 10px;
      @media print, screen and (max-width: 1000px) {
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
        padding: 5.9px 0;
        margin: 0 3px;
      }
      @media print, screen and (max-width: 370px) {
        font-size: 4.4vw;
        padding: 2.4% 0;
        height: 4.55em;
        box-sizing: border-box;
      }
      .icon {
        vertical-align: middle;
        @media print, screen and (max-width: 1000px) {
          display: block;
          margin: 0 auto;
          margin-top: 0.4em;
        }
      }
      &.active {
        border-bottom: none;
        background-color: #ebf7ff;
        // background-color: #fff7d5;
        color: #000000;
        // color: #ed7d31;
        .icon {
          transform: rotate(90deg);
        }
      }
    }
  }
  .tab:nth-child(1) {
    &::before {
      content: url("../assets/img/license_page/icon_pc.svg");
      display: inline-block;
      width: 1em;
      height: 1em;
      margin-right: 0.2em;
      @media print, screen and (max-width: 1000px) {
        margin-right: 0;
      }
    }
    .icon {
      @media print, screen and (max-width: 1000px) {
        display: inline;
        margin-top: 0;
      }
    }
  }

  .tab-wrapper.-top {
    @media print, screen and (max-width: 1000px) {
      margin-top: -45.7px;
    }

    .tab {
      max-width: 100%;
      background-color: #ffffff;
    }

    .tab.active {
      border-bottom: 6px solid #fff8cc;
      background-color: #fff8cc;
    }

    .tab::before {
      content: "";
      display: none;
    }

    .icon {
      @media print, screen and (max-width: 1000px) {
        display: inline;
        margin-top: 0;
        margin-left: 8px;
      }
    }
  }

  .tab-wrapper.-top .tab.active {
    color: #000;
  }

  .underdisplay {
    @media print, screen and(min-width: 1001px) {
      display: none;
    }
  }

  .body {
    width: 100%;
    margin: 0 auto;
    font-family: "メイリオ", sans-serif;
    background-color: #ebf7ff;
    // background-color: #fff7d5;
    padding-bottom: 100px;
    // @media print, screen and (max-width: 1000px) {
    //   width: 90%;
    // }
    .body-title {
      padding-top: 116px;
      text-align: center;
      font-size: 30px;
      margin-top: 0;
      @media print, screen and (max-width: 1000px) {
        font-size: 18px;
      }
      &:after {
        content: "";
        width: 70px;
        // border-bottom: 5px solid #ed7d31;
        border-bottom: 5px solid #1262b2;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
      }
    }
  }
  .point-image {
    width: 590px;
    height: 380px;
    margin: 40px auto 0;

    @media print, screen and (max-width: 767px) {
      width: 80%;
      height: auto;
    }
  }

  .point {
    margin-top: 30px;
  }

  .bg-lightBlue {
    // padding-top: 20px;
    // padding-bottom: 40px;
    background: #ebf7ff;
  }
  .exam-link-wrapper.-column {
    padding: 0 0 40px;
    // padding: 20px 0 0;
    border-bottom: none;
    flex-direction: row;
    justify-content: center;
  }
  @media print, screen and (max-width: 1000px) {
    .exam-link-wrapper.-column {
      padding: 0 0 40px;
      // padding: 20px 0 0;
      flex-direction: column;
    }
  }

  .bg-lightBlue.-pd100 {
    padding-bottom: 110px;
  }

  .bg-white {
    background-color: #ffffff;
  }

  .bg-white_type2 {
    // background-color: #ffffff;
    background-color: #ebf7ff;
    padding-top: 60px;
    padding-bottom: 85px;
  }

  .credit-image {
    margin: 24px auto 0;
  }
  .credit-image img {
    max-width: 90%;
    @media print, screen and (max-width: 480px) {
      max-width: 80%;
    }
  }

  /* voiceセクションのスタイル */
  .voice {
    background-color: #ebf7ff;
    width: 100%;
    padding: 40px 0;
  }
  .voice-inner {
    max-width: 1090px;
    width: 100%;
    background-color: #ebf7ff;
    margin: 0 auto;
    font-family: "メイリオ", sans-serif;
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
  // .voice-item:first-of-type p {
  //     width: 100%;
  // }
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
  @media print, screen and (max-width: 480px) {
    .-sp-none {
      display: none;
    }
  }
  // voiceセクションここまで
</style>
