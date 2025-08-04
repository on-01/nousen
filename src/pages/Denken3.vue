<template>
  <div class="denken3-template">
    <Layout>
      <div class="denken3">
        <header class="header">
          <!-- メインビジュアル -->
          <HeroDenken3
            :backImgOver="
              require('../assets/img/license_page/denken3/denken3_hero.jpg')
            "
            :backImgUnder="require('../assets/img/license_page/bg_white.jpg')"
            headTitle="令和7年度上期/令和7年度下期"
            title="第三種電気主任技術者"
            :icon="require('../assets/img/icon/qualification/denken.svg')"
          />
          <TimeCount />
          <Cheer
            :imagePath="
              require('../assets/img/license_page/denken3/denken3_point5.jpg')
            "
            altText="電験三種 第三種電気主任技術者"
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
              title="第三種電気主任技術者とは"
              text="第三種電気主任技術者（電験三種）は、電気設備の保安監督に必要な国家資格です。<br>
                    電気設備の設計、施工、保守、点検などを行うための専門知識と技術を有する者として<br>
                    認められます。<br>
                    電験三種の資格を取得すると、電気設備の点検や保安をはじめ、さまざまな仕事に携われます。<br>
                    また、電気設備の監督・維持・保安は電験主任技術者資格取得者がいなければならない業務<br>
                    であるため、電験三種資格取得者を求める企業への就職・転職を有利にすることができます。<br>
                    <br>
                    <span style='font-weight: 700;'>能センでは、受講生が業務の多忙さによる時間的制約の中、<br>
                      最小限の努力で最大の結果（合格）を得るための講座をご提供いたします。</span>"
              :imagePath="
                require('../assets/img/license_page/denken3/denken3_explain.jpg')
              "
              altText="電験三種 第三種電気主任技術者"
            />
            <SpExplanation
              title="第三種電気主任技術者とは"
              text="第三種電気主任技術者(以下電験三種)とは、国家資格で事業用電気設備の保安監督を行い、該当の施設には必ず配置されます。<br>
                    資格には第一種・第二種・第三種の3つの区分があり、電圧によって対応範囲が異なり、電圧5万ボルト未満の電気工作物は「電験三種」
                    で対応できます。<br>
                    <br>
                    <span style='font-weight: 700;'>能センでは、受講生が業務の多忙さによる時間的制約の中、最小限の努力で
                    最大の結果（合格）を得るための講座をご提供いたします。</span>"
              :imagePath="
                require('../assets/img/license_page/denken3/denken3_explain.jpg')
              "
              altText="電験三種 第三種電気主任技術者"
            />

            <div class="bg-lightBlue">
              <Schedule title="令和7年度 第三種電気主任技術者 試験日程" />
              <TestOverview />
              <div class="experience-link">
                <a
                  class="application-link -blue -mr"
                  href="https://timerex.net/s/a4b3c5d67_73c6/9aab6876"
                >
                  オンライン相談はこちら
                  <IconBase class="icon" width="25" height="25">
                    <IconFingerRight />
                  </IconBase>
                </a>
                <a
                  class="application-link -blue"
                  href="https://business.form-mailer.jp/fms/e72637ff291274"
                >
                  お問い合わせ / 資料請求
                  <IconBase class="icon" width="25" height="25">
                    <IconFingerRight />
                  </IconBase>
                </a>
              </div>

              <!-- <div class="exam-link-wrapper -column">
                <g-link
                  to="https://timerex.net/s/a4b3c5d67_73c6/9aab6876"
                  class="online-link"
                >
                  オンライン相談はこちら
                  <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
                </g-link>
              </div> -->
              <MeritDenken3 />
              <StudyDenken3 />
              <!-- <Study
                studySlug="denken"
                name1="電験三種の合格に必要な勉強時間"
                time1="1,000"
                pc_text="勉強時間は個人の前提知識や学習スピードによって異なりますが、全科目合格するには通常は約1000時間の学習が必要<br>とされています。<br>
                例えば、毎日3時間ずつ勉強すれば、約9ヶ月から1年かかるでしょう。<br>
                ただし、1000時間は目安であり、自身の進捗状況や理解度に合わせて、柔軟にスケジュールを調整することが重要です。<br>
                また、定期的な復習や自己評価も忘れずに行い、学習効果を高めることを意識しましょう。<br>
                特に理系の科目が多いため、理系出身かどうかや理系科目の得意不得意も影響を与えます。"
                sp_text="勉強時間は個人の前提知識や学習スピードによって異なりますが、全科目合格するには通常は約1000時間の学習が必要とされています。<br>
                例えば、毎日3時間ずつ勉強すれば、約9ヶ月から1年かかるでしょう。<br>
                ただし、1000時間は目安であり、自身の進捗状況や理解度に合わせて、柔軟にスケジュールを調整することが重要です。<br>
                また、定期的な復習や自己評価も忘れずに行い、学習効果を高めることを意識しましょう。<br>
                特に理系の科目が多いため、理系出身かどうかや理系科目の得意不得意も影響を与えます。"
              /> -->

              <!-- <Method
                text="電験三種の勉強は、理論、電力または機械、法規の順番で進めると効果的です。<br>
                まずは礎となる理論を理解し、その後に電力や機械といった実践的な科目を習得します。<br>
                電力と機械はどちらから先に学んでも問題ありません。 法規はそれまで勉強してきた科目の集大成として考えましょう。<br>
                電気工学や電力系統に関する基本的な知識を得るために、教科書や参考書、オンライン学習、講習会を利用することをおすすめします。<br><br>
  
                ① 試験範囲の確認: 受験要項や過去の試験問題を調べ、出題範囲や試験形式を把握。<br>
                ② 教科書や参考書の学習: 電気工学や電力系統に関する基礎知識を身につけるため、教科書や参考書を順番に学習。<br>
                ③ 過去の試験問題の解答: 過去の試験問題を解くことで、実際の試験形式や問題の傾向を把握し、対策を練ることができます。<br>
                ④ 模擬試験の受験: 本番の試験に近い環境で、模擬試験を受けることで実践力を養います。<br><br>
  
                また、独学の方は講習会やオンライン講座に参加することも有益です。<br>
                他の受験生と情報交換や質問をすることで学習の効率が上がるでしょう。<br>
                最終的には、自身の学習スタイルやペースに合わせて計画を立て、着実に進めることが重要です。<br>
                また、継続的な努力と忍耐力を持ちながら、定期的に自己評価を行い、必要な修正を加えることも大切です。<br>"
                boldText="能センでは基礎講座、模擬試験、出題傾向、過去問題、テキストまで全てご対応しております。"
              />
 -->
              <!-- <blog title="電験三種（第三種電気主任技術者）の新記事ブログ" /> -->
              <RecommendLink />

              <div style="padding-bottom: 100px">
                <ContactInfo title="受講に関するご相談は" />
                <Linelink
                  text="能センLINE公式アカウント開設しました。<br>
                    只今『お友達登録キャンペーン』で500円割引キャンペーンコードをプレゼント！<br>
                    期間限定ですのでお早めにご使用ください。（他の割引と併用可）"
                />
              </div>
            </div>
          </div>

          <!-- 講座情報 -->
          <div v-show="isActiveTop === 2">
            <quality
              text_1="1.講師が執筆したオリジナルテキストを使用。ポイントを絞り、合格点の60点を超える力を的確に身に付けます（目標は80点以上）<br>
                        2.効果的な学習をサポートする副教材も特徴。自宅学習に使える解説付き問題集や、4科目分の添削課題付き。<br>
                        ※過去3年間の集計です（過去最高は95%）"
              :imagePath_1="
                require('../assets/img/license_page/denken3/denken3_quality_1-1.jpg')
              "
              text_2="初めて受験する方におすすめするのが、能センの基礎講座です。専用の教材を使って基礎数学（電気数学）から電気の法則などわかりやすく解説します。しばらく理系の学習から離れていた方はこの機会にご活用ください。"
              :imagePath_2="
                require('../assets/img/license_page/denken3/denken3_quality_2-2_2.jpg')
              "
              text_3="受講生のライフスタイルに合った講座を選ぶことができます。【通学】【オンライン】【通信】講座。通学にオンライン講座を追加（70%割引）などバリエーションは豊富です。どの講座も合格に特化した教材を使用します。"
              :imagePath_3="
                require('../assets/img/license_page/denken3/denken3_quality_4.jpg')
              "
            />

            <NewPvMovie
              :movie="$static.online.mediaYoutube"
              :image="
                $static.online.mediaImg ? $static.online.mediaImg.file.url : ''
              "
              movieTitle="科目合格率No.1  電験三種の講習会動画をご視聴ください"
              description="合格者を多数輩出した大嶋先生による基礎講座の無料動画になります。"
            />

            <OmNoHousoku />

            <NewLecture
              title="業界トップのわかりやすさ！<br>大嶋先生の講習"
              bold="電験三種の講師歴３５年以上のベテラン講師<br>電気保安功労者経済産業大臣賞を受賞した実力派！"
              text="長年電気と土木の建設工事、設備保守に従事し、経験を踏まえて１級土木施工管理技士、電気主任技術者（３～１種）等多くの関連資格を取得。
                    その後電気・電子部門の技術士も取得した電気、土木のエキスパートです。
                    電気・土木関連の資格書籍の執筆や能センをはじめとした受験対策講習で多数の講義を担当しています。
                    難解な内容もわかりやすいソフトな説明で理解させてくれるベテラン講師です。"
              :imagePath="
                require('../assets/img/license_page/denken3/denken3_lecture2.jpg')
              "
              teacher="大嶋輝夫 先生"
              profile="＜プロフィール＞<br>
                        元東京電力株式会社<br>
                        現在（株）オフィスボルト 代表取締役社長<br>
                        電気保安功労者経済産業大臣賞受賞<br>
                        <br>
                        著書 : 続・電気技術者のための失敗100選-対策編-（オーム社）<br>
                        　　　電験二種二次試験「機械・制御」精選問題（オーム社）<br>
                        　　　これからスタート！１級電気施工（電気書院）<br>
                        その他、OHM、新電気、電気計算、工事と受験 他電気雑誌多数"
              :imageBook1="
                require('../assets/img/license_page/denken3/denken3_lecture_book_1.jpg')
              "
              :imageBook2="
                require('../assets/img/license_page/denken3/denken3_lecture_book_2.jpg')
              "
              :imageBook3="
                require('../assets/img/license_page/denken3/denken3_lecture_book_3.jpg')
              "
              altText="電験三種 第三種電気主任技術者"
              altBook1="電験三種 第三種電気主任技術者"
              altBook2="電験三種 第三種電気主任技術者"
              altBook3="電験三種 第三種電気主任技術者"
            />

            <div class="bg-white">
              <ExamSupport />
              <!-- <Exam title="最新の予想模擬試験＋ポイント解説" /> -->

              <!-- <CourseOverview
              title="通 学 講 座"
            /> -->
              <FollowUpDenken3 />
              <SetCourse title="通学＋オンラインセット" />
            </div>

            <div class="bg-white_type2">
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
                              alt="電験三種 第三種電気主任技術者"
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
                              alt="電験三種 第三種電気主任技術者"
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
                              alt="電験三種 第三種電気主任技術者"
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
                              alt="電験三種 第三種電気主任技術者"
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
                        <h4>【基礎講座】</h4>
                        <div class="voice-item-flex">
                          <figure v-on:click="toggleVoice(1)" class="-sp-none">
                            <img
                              src="../assets/img/license_page/denken3/denken3_voice_comment_1.jpg"
                              alt="電験三種 第三種電気主任技術者"
                            />
                          </figure>
                          <p>
                            ・現場の実例があり、公式や問題の意味が理解できた。
                            <br />
                            ・電気数学（基礎数学）が苦手で「どうしたらその解答になる？」ということが多かったが、
                            講座を受講して電験三種に必要な数学知識の習得ができた。
                            <br />
                            ・学生時代に理解しきれていなかった内容などをわかりやすく、具体的に説明されていた。
                          </p>
                        </div>
                        <div v-show="isVoice === 1" class="voice-upImage">
                          <img
                            src="../assets/img/license_page/denken3/denken3_voice_comment_1.jpg"
                            alt="電験三種 第三種電気主任技術者"
                          />
                        </div>
                      </div>
                      <div class="voice-item">
                        <h4>【理論】</h4>
                        <div class="voice-item-flex">
                          <figure v-on:click="toggleVoice(2)" class="-sp-none">
                            <img
                              src="../assets/img/license_page/denken3/denken3_voice_comment_2.jpg"
                              alt="電験三種 第三種電気主任技術者"
                            />
                          </figure>
                          <p>
                            ・どこから手をつけていいか悩んでいたのが、ポイントを抑えてくださったおかげで進め方の道しるべになりました。
                            また強制的に勉強の機会を作る為、通学を選びましたが、オンラインでも振り返れるところがとてもありがたいです。
                            調べた中では両方実地しているところは他にはなく、非常に魅力的だと思います。
                          </p>
                        </div>
                        <div v-show="isVoice === 2" class="voice-upImage">
                          <img
                            src="../assets/img/license_page/denken3/denken3_voice_comment_2.jpg"
                            alt="電験三種 第三種電気主任技術者"
                          />
                        </div>
                      </div>
                      <div class="voice-item">
                        <h4>【電力】</h4>
                        <div class="voice-item-flex">
                          <figure v-on:click="toggleVoice(3)" class="-sp-none">
                            <img
                              src="../assets/img/license_page/denken3/denken3_voice_comment_3.jpg"
                              alt="電験三種 第三種電気主任技術者"
                            />
                          </figure>
                          <p>
                            ・出題傾向を変えながら要点を教えていただけた。
                            <br />
                            ・単位の重要性を改めて実感しました。式計算する時に式を立てるだけでなく式の中でも単位を使用してみようと思います。
                            <br />
                            ・図解が分かりやすく、学習範囲も明確になりました。
                          </p>
                        </div>
                        <div v-show="isVoice === 3" class="voice-upImage">
                          <img
                            src="../assets/img/license_page/denken3/denken3_voice_comment_3.jpg"
                            alt="電験三種 第三種電気主任技術者"
                          />
                        </div>
                      </div>
                      <div class="voice-item">
                        <h4>【機械】</h4>
                        <div class="voice-item-flex">
                          <figure v-on:click="toggleVoice(4)" class="-sp-none">
                            <img
                              src="../assets/img/license_page/denken3/denken3_voice_comment_4.jpg"
                              alt="電験三種 第三種電気主任技術者"
                            />
                          </figure>
                          <p>
                            ・自動制御が非常に分かりやすかった。
                            <br />
                            ・膨大な出題範囲から要点を絞って解説して頂き、学習の効率化に繋がると実感しております。
                            <br />
                            ・自分で学習した際にはなぜその手順で解法が成り立つのか確認できた。
                            <br />
                            ・色々なテキストを買って勉強していたが、テキストでは教えてくれない内容がわかり理解が深まった。
                          </p>
                        </div>
                        <div v-show="isVoice === 4" class="voice-upImage">
                          <img
                            src="../assets/img/license_page/denken3/denken3_voice_comment_4.jpg"
                            alt="電験三種 第三種電気主任技術者"
                          />
                        </div>
                      </div>
                      <div class="voice-item">
                        <h4>【法規】</h4>
                        <div class="voice-item-flex">
                          <figure v-on:click="toggleVoice(5)" class="-sp-none">
                            <img
                              src="../assets/img/license_page/denken3/denken3_voice_comment_5.jpg"
                              alt="電験三種 第三種電気主任技術者"
                            />
                          </figure>
                          <p>
                            ・大嶋先生の講義が非常にわかりやすく、講習を受けてよかったです！
                            <br />
                            ・広範囲に渡る問題の中から厳選されて説明を受けたので、自己学習のポイントが分かり、良かったと思います。ありがとうございました。
                            <br />
                            ・受験対策用の講習としてかなり満足した内容でした。提出課題も頑張って提出します！
                          </p>
                        </div>
                        <div v-show="isVoice === 5" class="voice-upImage">
                          <img
                            src="../assets/img/license_page/denken3/denken3_voice_comment_5.jpg"
                            alt="電験三種 第三種電気主任技術者"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <!-- <CampaignDenken3 date="３月１５日（金）" /> -->

              <Discount title="🎓 GO!資格 合格応援制度 START！" />

              <Fsc title="持続可能なミライへ" />
            </div>

            <div class="bg-white_type2">
              <div class="exam-link-wrapper">
                <div class="exam-link-flex">
                  <g-link
                    to="/denken3-application"
                    class="application-form-link"
                  >
                    お申込みはこちら（個人）
                    <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
                  </g-link>
                  <g-link
                    to="/denken3-application-business"
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
        </header>

        <div v-show="isActiveTop === 2">
          <section class="tab-wrapper">
            <div
              :class="['tab', { active: isActive === 1 }]"
              v-on:click="tabToggle(1)"
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
              通学講座
              <IconBase class="icon"><IconArrowRight /></IconBase>
            </div>
            <div
              :class="['tab', { active: isActive === 3 }]"
              v-on:click="tabToggle(3)"
            >
              通信講座
              <IconBase class="icon"><IconArrowRight /></IconBase>
            </div>
          </section>
          <div class="body">
            <div v-show="isActive === 2">
              <!-- <h3 class="body-title">通学講座</h3> -->
              <CourseOverview1 title="通 学 講 座" />
              <h3 class="body-title">各会場の開催日程</h3>
              <VenueAddMapDenken3
                v-for="(items, index) in $static.tuugakuVenue.edges"
                :key="index"
                :city="items.node.city"
                :period="items.node.period"
                :hall="items.node.hall"
                :details="items.node.details"
                :address="items.node.address"
                :map="items.node.map"
              />
              <Info
                :tuitionFee="richtextToHTML($static.tuugaku.tuitionFee)"
                :capacity="$static.tuugaku.capacity"
                :benefits="richtextToHTML($static.tuugaku.benefits)"
                :cpds="richtextToHTML($static.tuugaku.cpds)"
              />
              <Merumaga />
              <NewApplicationDenken3
                personalFormLink="/denken3-application"
                businessFormLink="/denken3-application-business"
                faxLink="/sanshu.pdf"
              />
            </div>
            <div v-show="isActive === 3">
              <!-- <h3 class="body-title">通信講座</h3> -->
              <CourseOverview3 title="通 信 講 座" />
              <Info
                :tuitionFee="richtextToHTML($static.tuushin.tuitionFee)"
                :capacity="$static.tuushin.capacity"
                :benefits="richtextToHTML($static.tuushin.benefits)"
                :cpds="richtextToHTML($static.tuushin.cpds)"
              />
              <Merumaga />
              <NewApplicationDenken3
                personalFormText="お申込みはこちら（個人）"
                personalFormLink="/denken3-application"
                businessFormText="お申込みはこちら（法人）"
                businessFormLink="/denken3-application-business"
                faxLink="/sanshu.pdf"
              />
            </div>
            <div v-show="isActive === 1">
              <!-- <h3 class="body-title">オンライン講座</h3> -->
              <CourseOverview2 title="オンライン講座" />
              <InfoDenken3
                :courseOutline="richtextToHTML($static.online.courseOutline)"
                :apply="richtextToHTML($static.online.apply)"
              />
              <div id="apply-section"></div>
              <Merumaga />
              <NewApplicationDenken3
                personalFormText="お申込みはこちら（個人）"
                personalFormLink="/denken3-application"
                businessFormText="お申込みはこちら（法人）"
                businessFormLink="/denken3-application-business"
                faxLink="/sanshu.pdf"
              />
            </div>
            <ContactInfo title="受講に関するご相談・資料請求は" />
          </div>
        </div>

        <!-- <div class="fixed-btn">
          <div @click="navigateToSection">
            <img
              src="../assets/img/common/fixed_btn.svg"
              alt="講座のお申し込み"
              width="534"
              height="92"
            />
          </div>
        </div> -->
      </div>
    </Layout>
  </div>
</template>

<static-query>
    query Denken3 {
      news:contentfulQualificationNews(id: "41kikEtCP4v1CbTnaW9n5L") {
        newsField
      }
      tuugaku:contentfulQualification(id:"6VzS8vwSpwUI40fOLwAeNd") {
        tuitionFee
        capacity
        benefits
        cpds
      }
      tuushin:contentfulQualification(id:"2ZbX0D7OZ3NaL5F058SAIr") {
        tuitionFee
        capacity
        benefits
        cpds
      }
      online:contentfulQualificationOnline(id:"2W790efooopLZNd6owCL2") {
        courseOutline
        apply
        mediaYoutube
        mediaImg {
          file { url }
        }
        mediaDescription
      }
      tuugakuVenue:allContentfulDenken3Venue(order: ASC) {
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
        siteUrl
      }
    }
  </static-query>

<script>
  // import Hero from "@/components/Hero.vue";
  import HeroDenken3 from "@/components/HeroDenken3.vue";
  // import Point from "@/components/licensePage/Point.vue";
  import Explanation from "@/components/licensePage/Explanation.vue";
  import SpExplanation from "@/components/licensePage/SpExplanation.vue";
  import CampaignDenken3 from "@/components/licensePage/CampaignDenken3.vue";
  import Study from "@/components/licensePage/Study.vue";
  import Linelink from "@/components/licensePage/Linelink.vue";
  import NewPvMovie from "../components/licensePage/NewPvMovie.vue";
  import Method from "../components/licensePage/Method.vue";
  // import Food from '../components/licensePage/Food.vue';
  import NewLecture from "../components/licensePage/NewLecture.vue";
  import Cheer from "../components/licensePage/Cheer.vue";
  import Quality from "../components/licensePage/Quality.vue";
  // import News from "@/components/licensePage/News.vue";
  import Info from "@/components/licensePage/Info.vue";
  import InfoDenken3 from "@/components/licensePage/InfoDenken3.vue";
  import Venue from "@/components/licensePage/Venue.vue";
  import VenueAddMapDenken3 from "@/components/licensePage/VenueAddMapDenken3.vue";
  import Application from "@/components/licensePage/Application.vue";
  import NewApplicationDenken3 from "@/components/licensePage/NewApplicationDenken3.vue";
  import IconBase from "@/components/IconBase.vue";
  import IconDoubleArrowRight from "@/components/icons/IconDoubleArrowRight.vue";
  import IconArrowRight from "@/components/icons/IconArrowRight.vue";
  import IconFingerRight from "@/components/icons/IconFingerRight.vue";
  import { INLINES } from "@contentful/rich-text-types";
  import { documentToHtmlString } from "../../node_modules/@contentful/rich-text-html-renderer";
  import Schedule from "../components/licensePage/Schedule.vue";
  import CourseOverview from "../components/licensePage/CourseOverview.vue";
  import CourseOverview1 from "../components/licensePage/CourseOverview1.vue";
  import CourseOverview2 from "../components/licensePage/CourseOverview2.vue";
  import CourseOverview3 from "../components/licensePage/CourseOverview3.vue";
  import ContactInfo from "../components/licensePage/ContactInfo.vue";
  import Exam from "../components/licensePage/Exam.vue";
  import SetCourse from "../components/licensePage/SetCourse.vue";
  import Discount from "../components/licensePage/Discount.vue";
  import Blog from "../components/licensePage/Blog.vue";
  import Fsc from "../components/licensePage/Fsc.vue";
  import RecommendLink from "../components/licensePage/RecommendLink.vue";
  import TestOverview from "../components/licensePage/TestOverview.vue";
  import StudyDenken3 from "../components/licensePage/StudyDenken3.vue";
  import MeritDenken3 from "../components/licensePage/MeritDenken3.vue";
  import Merumaga from "../components/licensePage/Merumaga.vue";
  import OmNoHousoku from "../components/licensePage/OmNoHousoku.vue";
  import FollowUpDenken3 from "../components/licensePage/FollowUpDenken3.vue";
  import TimeCount from "../components/licensePage/TimeCount.vue";
  import ExamSupport from "../components/licensePage/ExamSupport.vue";

  const options = {
    //contentfulのエディタで設定したassetへのリンクを変換
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: (node) =>
        `<a href="${node.data.target.fields.file.url}">${node.content[0].value}</a>`,
    },
  };
  export default {
    name: "denken3",
    metaInfo() {
      return {
        titleTemplate: "電験三種（第三種電気主任技術者）受験対策講習会｜能セン",
        meta: [
          {
            name: "description",
            content:
              "能センの電験三種講習会は【通学講座】【オンライン講座】【通信講座】があります。基礎講座の電気数学から模擬試験まで。過去問題もあり最短合格を目指せます。",
          },
          {
            key: `og:title`,
            property: `og:title`,
            content: `電験三種（第三種電気主任技術者）受験対策講習会｜能セン`,
            // content: `第三種電気主任技術者（電験三種） | ${
            //   this.$static.metadata.siteName
            // }`,
          },
          {
            key: `og:url`,
            property: `og:url`,
            content: `${this.$static.metadata.siteUrl}/denken3`,
          },
        ],
      };
    },
    components: {
      // Hero,
      HeroDenken3,
      // Point,
      Explanation,
      SpExplanation,
      CampaignDenken3,
      Study,
      Linelink,
      NewPvMovie,
      Method,
      // Food,
      NewLecture,
      Cheer,
      Quality,
      // News,
      Info,
      InfoDenken3,
      Venue,
      VenueAddMapDenken3,
      Application,
      NewApplicationDenken3,
      IconBase,
      IconDoubleArrowRight,
      IconArrowRight,
      IconFingerRight,
      Schedule,
      CourseOverview,
      CourseOverview1,
      CourseOverview2,
      CourseOverview3,
      ContactInfo,
      Exam,
      SetCourse,
      Discount,
      Blog,
      Fsc,
      RecommendLink,
      TestOverview,
      StudyDenken3,
      MeritDenken3,
      Merumaga,
      OmNoHousoku,
      FollowUpDenken3,
      TimeCount,
      ExamSupport,
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
      navigateToSection() {
        // ユーザーエージェントを取得
        const userAgent = navigator.userAgent;

        // スマートフォンかどうかを判別
        const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

        if (isMobile) {
          // スマートフォンの場合の処理
          window.location.href = "https://www.nouryoku.com/denken3/#temp";

          setTimeout(() => {
            window.location.href =
              "https://www.nouryoku.com/denken3/#apply-section";
          }, 10);
        } else {
          // PCの場合の処理
          window.location.href =
            "https://www.nouryoku.com/denken3/#apply-section";
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

  .denken3 {
    padding-bottom: 0;
    scroll-behavior: smooth;
  }
  .header {
    background-color: #fff8cc;
    border-bottom: 5px solid #1262b2;
  }
  .exam-link-wrapper {
    text-align: center;
    padding: 60px 0 150px 0;
    display: flex;
    flex-direction: column;
    @media print, screen and (max-width: 1000px) {
      padding: 40px 0 150px 0;
    }
  }
  .exam-link,
  .application-form-link,
  .online-link {
    color: #fff;
    border-radius: 10px;
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
    background-color: #1262b2;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    width: 338px;
    padding: 7px 30px;
  }
  .application-form-link {
    // background-color: #ed6c00;
    // background-color: #ff4500;
    background-color: #1262b2;
    box-shadow: 4px 4px 10px rgba(0, 47, 77, 0.3);
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
    background-color: #00a73c;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    width: 338px;
    padding: 7px 30px;
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
  .tab-wrapper {
    margin: 0 auto;
    // max-width: 900px;
    max-width: 1000px;
    width: 100%;
    display: flex;
    text-align: center;
    margin-top: -70px;
    font-weight: bold;
    justify-content: space-between;
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
      // background-color: #FFF7D5;
      background-color: #ebf7ff;
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
        // background-color: #ebf7ff;
        // background-color: #FFF7D5;
        background-color: #ebf7ff;
        color: #000000;
        .icon {
          transform: rotate(90deg);
        }
      }
    }
  }

  .tab::before {
    content: url("../assets/img/license_page/icon_bag.svg");
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
    @media print, screen and (max-width: 1000px) {
      margin-right: 0;
    }
  }

  .tab:nth-child(3) {
    &::before {
      content: url("../assets/img/license_page/icon_home.svg");
    }
  }
  .tab:nth-child(1) {
    &::before {
      content: url("../assets/img/license_page/icon_pc.svg");
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
      background-color: #fff8cc;
    }

    .tab.active {
      border-bottom: 6px solid #fff8cc;
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
    padding-top: 60px;
    // background-color: #ebf7ff;
    // background-color: #FFF7D5;
    background-color: #ebf7ff;
    padding-bottom: 100px;
    border-bottom: 5px solid #1262b2;
    // @media print, screen and (max-width: 1000px) {
    //   width: 90%;
    // }
    .body-title {
      padding-top: 116px;
      text-align: center;
      font-size: 30px;
      margin-top: 0;
      @media print, screen and (max-width: 1000px) {
        padding-top: 60px;
        font-size: 18px;
      }
      &:after {
        content: "";
        width: 70px;
        border-bottom: 5px solid #1262b2;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
      }
    }
  }

  .is-sp {
    display: none;
  }
  @media screen and (max-width: 430px) {
    .is-sp {
      display: block;
    }
  }

  .fixed-btn {
    position: fixed;
    z-index: 10;
    bottom: 10px;
    width: 84%;
    max-width: 528px;
    left: 50%;
    transform: translateX(-50%);
    @media print, screen and (min-width: 1001px) {
      left: auto;
      right: 10px;
      transform: none;
      width: 528px;
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
    background: #ebf7ff;
  }
  .bg-lightBlue_type2 {
    background: #ebf7ff;
  }
  .bg-white {
    padding-top: 20px;
    background: #fff;
  }
  .bg-white_type2 {
    background: #fff;
  }
  .exam-link-wrapper.-column {
    padding: 20px 0 40px;
  }
  @media print, screen and (max-width: 1000px) {
    .exam-link-wrapper.-column {
      padding: 20px 0 40px;
    }
  }

  /* voiceセクションのスタイル */
  .voice {
    background-color: #ebf7ff;
    width: 100%;
    padding: 40px 0;
    margin-bottom: 60px;

    @media print, screen and (max-width: 1170px) {
      margin-bottom: 20px;
    }
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

  .experience-link {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
    @media print, screen and (max-width: 1000px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .application-link {
    margin: 0 auto;
    color: #fff;
    max-width: 400px;
    width: 100%;
    padding: 20px 50px;
    text-align: center;
    background-color: #ed6c00;
    border: 3px solid #ed6c00;
    border-radius: 10px;
    font-weight: 700;
    svg {
      margin-top: -3px;
    }
    @media print, screen and (max-width: 1000px) {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      padding: 10px;
      width: 90%;
    }
  }
  .application-link.-blue {
    background-color: #1262b2;
    border: 3px solid #1262b2;
    box-shadow: 4px 4px 10px rgba(0, 47, 77, 0.3);
  }

  .application-link.-mr {
    margin-right: 40px;
    @media print, screen and (max-width: 1000px) {
      margin-right: auto;
    }
  }
</style>
