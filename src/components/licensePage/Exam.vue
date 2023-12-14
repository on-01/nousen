<template>
    <div class="exam">
        <div class="exam-inner">
            <p class="exam-title">{{ title }}</p>
            <p class="exam-line"></p>
            <div class="exam-image">
                <figure>
                    <img src="../../assets/img/license_page/denken3/denken3_exam_1.jpg" alt="模擬試験１">
                </figure>
                <figure>
                    <img src="../../assets/img/license_page/denken3/denken3_exam_2.jpg" alt="模擬試験２">
                </figure>
            </div>
            <p class="exam-text">
                【解答解説付き模擬試験】<br>
                最新のオリジナル予想模擬試験は【理論】【電力】【機械】【法規】の４科目分を取り揃えています。<br>
                <br>
                ・模擬試験（問題）<br>
                今年の試験で出題が予想される問題を扱った、能センオリジナルの模擬試験です。<br>
                本番前の総仕上げとしてご活用ください。<br>
                <br>
                ・模擬試験（解答解説）<br>
                解説付きの解答で理解度UP！問題の考え方を丁寧に指導します。
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

.exam-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.8;
    margin-top: 20px;
    margin: 0;
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
}
</style>
