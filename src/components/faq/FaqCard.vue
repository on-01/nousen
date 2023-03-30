<template>
  <div class="faq-card-wrapper">
    <div class="scroll-animation-item"></div>
    <div class="faq-card">
      <div class="faq-card-inner">
        <div class="q">
          <div class="q-headline">
            {{ qText }}
          </div>
        </div>
        <div class="a">
          <div class="a-inner">
            <div class="a-headline">
              {{ aText }}
            </div>
            <div class="a-content">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qText: String,
    aText: String,
  },
};
</script>

<style lang="scss" scoped>
.faq-card-wrapper {
  & + .faq-card-wrapper {
    margin-top: 50px;
  }
}
.faq-card {
  border: 5px solid #3b241a;
  // width: 730px;
}
.faq-card-inner {
  margin: 50px 30px;
  @media print, screen and (max-width: 1000px) {
    margin: 30px 5%;
  }
}
.q {
  border-bottom: 1px dashed #808080;
  .q-headline {
    font-size: 18px;
    font-weight: bold;
    color: #00afcc;
    margin: 30px;
    line-height: 1.5em;
    padding-left: 2.3em;
    position: relative;
    @media print, screen and (max-width: 1000px) {
      margin: 30px 10px;
      padding-left: 0;
    }
    &:before {
      content: url("../../assets/img/faq/question.svg");
      width: 20px;
      height: 20px;
      left: 0;
      position: absolute;
      display: inline-block;
      margin-right: 20px;
      vertical-align: sub;
      @media print, screen and (max-width: 1000px) {
        position: static;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
}
.a {
  .a-inner {
    margin: 30px;
    @media print, screen and (max-width: 1000px) {
      margin: 30px 10px;
    }
  }
  .a-headline {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    color: #e2690d;
    line-height: 1.5em;
    margin-bottom: 1em;
    padding-left: 2.3em;
    position: relative;
    @media print, screen and (max-width: 1000px) {
      display: block;
      padding-left: 0;
    }
    &:before {
      content: url("../../assets/img/faq/answer.svg");
      width: 20px;
      height: 20px;
      display: inline-block;
      // margin-right: 20px;
      vertical-align: sub;
      left: 0;
      position: absolute;
      @media print, screen and (max-width: 1000px) {
        position: static;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
  .a-content {
    @media print, screen and (min-width: 1001px) {
      margin-top: 10px;
      margin-left: 40px;
    }
    a {
      color: #e2690d;
      text-decoration: underline;
    }
  }
}

.faq-card {
  transform: translateY(100px);
  transition: transform 0.3s ease-in-out;
}
.is-show + .faq-card {
  transform: translateY(0);
}
</style>
