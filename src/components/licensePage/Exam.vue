<template>
    <div class="exam">
        <div class="exam-inner">
            <p class="exam-title">{{ title }}</p>
            <p class="exam-line"></p>
            <div class="exam-image">
                <figure>
                    <img src="../../assets/img/license_page/denken3/denken3_exam_3.jpg" alt="電験三種">
                </figure>
                <figure>
                    <img src="../../assets/img/license_page/denken3/denken3_exam_1.jpg" alt="電験三種">
                </figure>
                <figure>
                    <img src="../../assets/img/license_page/denken3/denken3_exam_2.jpg" alt="電験三種">
                </figure>
            </div>
            <p class="exam-note"><i class="scroll-animation-item">通学講座・オンライン講座でできる予想模擬試験！</i></p>
            <p class="exam-text">
                <span>【解答解説付き模擬試験】</span><br>
                最新の本試験出題傾向を徹底分析した予想模擬試験は【理論】【電力】【機械】【法規】の４科目分を取り揃えています。<br>
                <br>
                <span>・模擬試験（問題）</span><br>
                今年の試験で出題が予想される問題を扱った、能センオリジナルの模擬試験です。<br>
                本番前の総仕上げとしてご活用ください。<br>
                <br>
                <span>・模擬試験（解答解説）</span><br>
                解説付きの解答で理解度UP！30分程度のポイント解説の講習（オンライン講座では動画）があり、問題の考え方を丁寧に指導します。
            </p>
            <div class="exam-bottom-section">
                <div class="exam-bottom-description">
                    <p class="exam-bottom-title">勉強計画を立てて最短合格へ</p>
                    <p class="exam-bottom-line"></p>
                    <div class="exam-bottom-text">
                        電験三種資格取得には長期間の勉強が必要になります。<br>
                        能センでは計画に沿った勉強で最短合格ができるように、
                        二つのシートをお渡ししております。<br>
                        <div class="exam-bottom-wrap">
                            <span>・電験三種 勉強計画表</span><br>
                            <span>・電験三種 勉強チェックシート</span><br>
                        </div>
                        <span>能センの教材、副教材全てが合格へと通じています！</span>
                    </div>
                </div>
                <figure class="exam-bottom-image">
                    <img src="../../assets/img/license_page/denken3/denken3_exam_4.jpg" alt="電験三種">
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    } 
}
</script>

<style lang="scss" scoped>
.exam {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 20px auto 0;
    z-index: 0;
    position: relative;
    font-family: 'メイリオ', sans-serif;
}
.exam-inner {
    padding: 40px 80px 60px;
}

.exam-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}

.exam-note::v-deep i {
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

.exam-line {
    width: 20%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto;
    border-radius: 8px;
}

.exam-image {
    display: flex;
    justify-content: space-between;
    margin: 24px auto;
}

.exam-image figure {
    width: 30%;
    margin: 0 auto;
}

.exam-image figure img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
}

.exam-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    margin-top: 20px;
    margin: 0;
}

.exam-note {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.8;
    margin: 0;
    text-align: center;
    margin-bottom: 8px;
}
.exam-text span {
    font-weight: 700;
}
.exam-bottom-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
}
.exam-bottom-image {
    width: 54%;
    margin: 0;
}
.exam-bottom-description {
    width: 42%;
}
.exam-bottom-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
}
.exam-bottom-line {
    width: 40%;
    height: 4px;
    background: #249ef0;
    margin: 10px auto;
    border-radius: 8px;
}
.exam-bottom-text {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 28px;
}
.exam-bottom-text span {
    font-weight: 700;
}
.exam-bottom-wrap {
    padding: 18px 0;
}


@media print, screen and (max-width: 1100px) {
    .exam-inner {
        padding: 40px 60px;
    }
}

@media print, screen and (max-width: 1000px) {
    .exam {
        width: 90%;
    }
    .exam-inner {
        padding: 0px 0px 40px;
    }
    .exam-bottom-section {
    flex-wrap: wrap;
    margin-top: 36px;
    }
    .exam-bottom-image {
        width: 100%;
        margin-top:10px;
    }
    .exam-bottom-description {
        width: 90%;
        margin-top: 20px;
        padding-right: 0;
        margin: 0 auto;
        text-align: center;
    }
    .exam-bottom-title {
        font-size: 20px;
    }
    .exam-bottom-text {
        font-size: 16px;
        line-height: 1.6;
        margin-top: 20px;
    }
    .exam-image figure img {
    max-width: 96%;
}
}
@media print, screen and (max-width: 800px) {
    .exam-image figure {
        margin: 0 auto;
        width: 48%;
    }
    .exam-note {
        margin-top: 8px;
    }

.exam-image figure img {
        display: block;
        margin: 0 auto;
    }
}

@media print, screen and (max-width: 560px) {
    .exam-title {
        font-size: 20px;
    }

    .exam-text {
    font-size: 14px;
    line-height: 1.6;
    }
    .exam-note {
    font-size: 16px;
    }
}
</style>
