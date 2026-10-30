<template>
  <div class="setCourse">
    <p class="setCourse-title">{{ title }}</p>
    <div class="setCourse-inner">
      <p class="setCourse-text">
        その場で講師の授業を受けながら、オンラインで復習も可能。
        <br />
        より合格に近づきたい方におすすめのプランです！
      </p>
      <figure class="setCourse-image">
        <img
          src="../../assets/img/license_page/setcourse_online70.webp"
          alt="通学＋オンラインセット 共通のテキスト・同じ講義内容で追加する講座が70%割引"
        />
      </figure>
      <p class="setCourse-price">料金</p>
      <div class="setCourse-menu">
        <p><span>セット</span></p>
        <p>
          一次・二次セット
          <del>106,700円</del>
          ▶️57,860円（セット割＋追加割）
        </p>
        <p><span>コース別</span></p>
        <p>
          一次コース
          <del>69,300円</del>
          ▶️43,890円（追加割）
        </p>
        <p>
          二次コース
          <del>37,400円</del>
          ▶️24,310円（追加割）
        </p>
      </div>
    </div>
    <div class="setCourse-inner">
      <p class="setCourse-text -table">後から追加することも可能です！</p>
      <p class="table-text">
        同じ科目を（通常料金70%引きの価格で）追加できます。
      </p>
      <div class="setCourse-tableWrap">
        <div class="setCourse-table">
          <ul class="setCourse-tableFlex">
            <li class="setCourse-tableItem -yellow">コース</li>
            <li class="setCourse-tableItem -yellow">通学追加</li>
            <li class="setCourse-tableItem -yellow">オンライン追加</li>
          </ul>
          <ul class="setCourse-tableFlex">
            <li class="setCourse-tableItem">一次・二次セット</li>
            <li class="setCourse-tableItem">
              13,860円
              <br />
              (46,200円の70%割引)
            </li>
            <li class="setCourse-tableItem">
              13,200円
              <br />
              (44,000円の70%割引)
            </li>
          </ul>
          <ul class="setCourse-tableFlex">
            <li class="setCourse-tableItem">一次コース</li>
            <li class="setCourse-tableItem">
              10,890円
              <br />
              (36,300円の70%割引)
            </li>
            <li class="setCourse-tableItem">
              9,900円
              <br />
              (33,000円の70%割引)
            </li>
          </ul>
          <ul class="setCourse-tableFlex">
            <li class="setCourse-tableItem">二次コース</li>
            <li class="setCourse-tableItem">
              5,610円
              <br />
              (18,700円の70%割引)
            </li>
            <li class="setCourse-tableItem">
              5,610円
              <br />
              (18,700円の70%割引)
            </li>
          </ul>
        </div>
      </div>
      <p class="table-text -bottom">
        ※教材および添削は共通のため、追加されません
        <br />
        ※通学とオンライン講座の内容は原則同じですが、会場によって講師や一部内容が異なる場合があります
      </p>
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
  .setCourse {
    width: 100%;
    background-color: #fff;
    z-index: 0;
    position: relative;
    font-family: "Meiryo", sans-serif;
  }
  .setCourse-inner {
    max-width: 1170px;
    margin: 0 auto;
    // width: 100%;
    padding: 20px 40px;
  }
  .setCourse-title {
    line-height: 1.3;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    background-color: #1262b2;
    padding: 1rem;
    text-align: center;
    margin: 0;
    // box-shadow: 0px 5px 1px #006bad;
  }

  .setCourse-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.8;
    text-align: center;
    padding-top: 10px;
    margin: 0;
  }

  .setCourse-text.-table {
    font-size: 24px;
  }
  .setCourse-image {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    margin-top: 24px;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .setCourse-price {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #1da1f2;
    border: 2px solid #1da1f2;
    padding: 8px 0;
    margin: 48px 0 12px;
  }
  .setCourse-menu {
    font-size: 18px;
    padding: 4px;
    text-align: center;
  }

  .setCourse-menu p {
    margin: 0;
  }
  .setCourse-menu span {
    font-size: 20px;
    font-weight: 700;
  }
  .setCourse-tableWrap {
    overflow: scroll;
    margin: 10px 0 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .setCourse-table {
    max-width: 610px;
    min-width: 610px;
    margin: 0 auto;
    border-bottom: solid 1px black;
  }
  .setCourse-tableFlex {
    border-top: solid 1px black;
    border-left: solid 1px black;
    display: flex;
  }

  .setCourse-tableItem {
    width: calc(100% / 3);
    border-right: solid 1px black;
    padding: 10px 0;
    text-align: center;
    line-height: 1.5;
  }

  .setCourse-tableItem.-yellow {
    background-color: #fff8cc;
    font-weight: 700;
  }

  .table-text {
    margin: 0;
    text-align: center;
  }

  .table-text.-bottom {
    margin-bottom: 20px;
  }

  @media print, screen and (max-width: 768px) {
    .setCourse-inner {
      padding: 20px;
    }
    .setCourse-title {
      font-size: 20px;
    }
    .setCourse-text {
      font-size: 16px;
    }
    .setCourse-menu {
      font-size: 16px;
    }
    .setCourse-menu span {
      font-size: 18px;
    }
  }
</style>
