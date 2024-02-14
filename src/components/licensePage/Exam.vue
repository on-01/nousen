<template>
    <div class="exam">
        <div class="exam-inner">
            <p class="exam-title">{{ title }}</p>
            <p class="exam-line"></p>
            <div class="exam-image">
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
    padding: 40px 170px;
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
    margin: 24px auto 0;
}

.exam-image figure img {
    max-width: 90%;
    margin: 0 auto;
    display: block;
}

.exam-text {
    font-size: 18px;
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

@media print, screen and (max-width: 1100px) {
    .exam-inner {
        padding: 40px 80px;
    }
}

@media print, screen and (max-width: 1000px) {
    .exam {
        width: 90%;
    }

    .exam-inner {
        padding: 40px 20px;
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
