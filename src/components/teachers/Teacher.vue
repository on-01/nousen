<template>
  <section class="teacher-introduce">
    <div class="scroll-animation-item">
    </div>
    <div class="teacher-introduce-inner">
      <div class="mark">
        <div v-for="(qualification,index) in qualifications" :key="index" :class="qualification">
        </div>
      </div>
      <div class="profile">
        <div class="photo">
          <!-- <img src="../../assets/img/teachers/先生.jpg" alt=""> -->
          <g-image :src="photo" :alt="name" />
        </div>
        <div class="text">
          <div class="catch">
            <p>{{myCatch}}</p>
          </div>
          <p class="name">
            {{name}} 先生
          </p>
          <div class="qualification">
            <p v-for="(qualification,index) in qualifications" :key="index" :class="qualification">
            </p>
          </div>
          <p class="background" v-html="background">
            <!-- 関西地区で長年ゼネコン企業に勤務されて施工管理や設計監理業務に携わり、各種の建築関連資格を取得。その後独立して１級建築士事務所を設立し現在に至る。<br>
            各種大学、専門学校、資格学校にて豊富な講師経験を持ち、建築士や建築施工管理技士の著書も多数執筆。特に建築施工管理技士のシリーズはロングセラーとして長年に渡って受験生からの多大な信頼を獲得しています。<br>
            歯切れの良い語り口で要点をズバリと解説して下さる頼もしい先生です。 -->
          </p>
        </div>
      </div>
      <div class="message">
        <p class="title"><span>合格を目指すあなたへ。<br class="under_display">ワンポイントアドバイス</span></p>
        <p class="comment" v-html="message">
          <!-- 資格に合格するためには良い講習会でノウハウを学ぶことが一番です。<br>
          短期間の講習ではありますが、講義の内容が１問でも多く出題されるよう毎年講義内容を工夫しております。<br>
          講習受講後はそのままにせずよく復習をすることで合格に近づきます！ -->
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    myCatch: String,
    name: String,
    photo: String,
    qualifications: Array,
    background: String,
    message: String
  }
}
</script>

<style lang="scss" scoped>
.teacher-introduce {
  &:after {
    content: "";
    background-color:  #cccccc;
    display: block;
    height: 100%;
    width: 100%;
    z-index: -3;
    position: absolute;
    box-sizing: border-box;
    top: 30px;
    transform: translateX(30px);
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 15px);
    @media print, screen and (max-width: 1000px) {
      top: 10px;
      width: 90%;
      transform: translateX(10px);
    }
  }
}
.teacher-introduce-inner {
  border: 5px solid #3b241a;
  box-shadow: 10px 10px 0px 5px #fff;
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  max-width: calc(100% - 25px);
  width: 100%;
  padding: 50px;
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
    box-shadow: 5px 5px 0px 1px #fff;
    padding: 10px 5% 30px 5%;
  }
}
.mark {
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 100px);
  @media print, screen and (max-width: 1000px) {
    width: 100%;
    position: relative;
  }
  div {
    margin-left: 10px;
    &:before {
      width: 50px;
      display: block;
    }
  }
  .denken:before {
    content: url('../../assets/img/icon/qualification/denken.svg');
  }
  .denkikouji:before {
    content: url('../../assets/img/icon/qualification/denkikouji.svg');
  }
  .denkikoujisekou:before {
    content: url('../../assets/img/icon/qualification/denkikoujisekou.svg');
  }
  .doboku:before {
    content: url('../../assets/img/icon/qualification/doboku.svg');
  }
  .kankouji:before {
    content: url('../../assets/img/icon/qualification/kankouji.svg');
  }
  .kenchiku:before {
    content: url('../../assets/img/icon/qualification/kenchiku.svg');
  }
  .kyuusui:before {
    content: url('../../assets/img/icon/qualification/kyuusui.svg');
  }
}
.profile {
  display: flex;
  justify-content: space-between;
  @media print, screen and (max-width: 1000px) {
    display: block;
  }
}
.photo {
  border-radius: 100%;
  overflow: hidden;
  width: 180px;
  height: 180px;
  @media print, screen and (max-width: 1000px) {
    margin: 0 auto;
    margin-top: 10px;
  }
}
.text {
  max-width: calc(100% - 80px - 100px - 50px);
  width: 100%;
  @media print, screen and (max-width: 1000px) {
    max-width: 100%;
  }
}
.catch {
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  color: #ed6c00;
  font-weight: bold;
  margin-top: 30px;
  &:before {
    content: url("../../assets/img/icon/finger_diagonallyright_orange.svg");
    width: 20px;
    height: 30px;
    display: inline-block;
    background-color: #fff;
    margin-right: 10px;
    vertical-align: middle;
  }
  p {
    margin: 0;
    line-height: 1.5em;
  }
}
.name {
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 0;
}
.qualification {
  p {
    display: inline-block;
    margin: 5px 0;
    &:before {
      color: #fff;
      padding: 5px 10px;
      border-radius: 20px;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .denken:before {
    content: "電気主任技術者";
    background-color: #e60039;
  }
  .denkikouji:before {
    content: "電気工事士";
    background-color: #b60081;
  }
  .denkikoujisekou:before {
    content: "電気工事施工管理技士";
    background-color: #00a63c;
  }
  .doboku:before {
    content: "土木施工管理技士";
    background-color: #00a63c;
  }
  .kankouji:before {
    content: "管工事施工管理技士";
    background-color: #00a63c;
  }
  .kenchiku:before {
    content: "建築施工管理技士";
    background-color: #00a63c;
  }
  .kyuusui:before {
    content: "給水装置工事主任技術者";
    background-color: #00afcc;
  }
}
.message {
  background-color: #ed6c00;
  color: #fff;
  padding: 20px 50px;
  border-radius: 10px;
  margin-top: 30px;
  @media print, screen and (max-width: 1000px) {
    padding: 20px 5%;
  }
  .title {
    font-weight: bold;
    position: relative;
    margin: 1em 0;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      width: 30px;
      height: 2px;
      background-color: #fff;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      margin-right: 10px;
    }
    &:after {
      content: "";
      width: 30px;
      height: 2px;
      background-color: #fff;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      margin-left: 10px;
    }
    .under_display {
      @media print, screen and (min-width: 768px) {
        display: none;
      }
    }
  }
}
</style>