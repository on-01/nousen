<template>
    <div class="Sfc">
        <div class="courseOverview-inner">

                <div class="courseOverview-flex">
                    <div class="courseOverview-flex-left">
                        <img class="courseOverview-flex-image" src="../../assets/img/license_page/denken3/denken3_courseOverview_1.jpg" alt="電験三種">
                    </div>
                    <div class="courseOverview-flex-right">
                        <p class="courseOverview-title">{{ title }}</p>
                        <div class="courseOverview-line"></div>
                        <p class="courseOverview-text -type1 -center">東京・名古屋・大阪<br>業界支持率No.1の圧倒的なわかりやすさ！</p>
                        <br>
                        <p class="courseOverview-text -type3">令和6年度上期 筆記・CBT試験日対応の通学講座。<br>受講生が業務の多忙さによる時間的制約の中で、最小限の努力で最大の結果（合格）を得るための通学講座をご提供いたします。※令和6年度は東京会場のみ</p>
                    </div>
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
.courseOverview {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 20px auto 0;
    z-index: 0;
    position: relative;
    font-family: 'Meiryo', sans-serif;
}
.courseOverview p,
.courseOverview img {
    margin: 0;
}
.courseOverview-inner {
    padding: 40px 110px;
}
.courseOverview-content {
    width: 98%;
    margin: 0 auto;
}
.courseOverview-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.courseOverview-flex-right,
.courseOverview-flex-left {
    width: 49%;
}
.courseOverview-flex-image {
    transform: scale(0.95);
}
.courseOverview-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}
.courseOverview-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto;
    border-radius: 8px;
}
.-center {
    text-align: center;
}
.courseOverview-text.-type1 {
    font-weight: bold;
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.8;
}
.courseOverview-text.-type2 {
    font-weight: bold;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.8;
}
.courseOverview-text.-type3 {
    font-size: 18px;
    line-height: 1.8;
}
.courseOverview-text.-type4 {
    font-size: 16px;
    line-height: 1.8;
}
.courseOverview table {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    border-left: 1px solid #000;
    margin: 20px auto;
    width: 100%;
}
.courseOverview tr {
    border-top: 1px solid #000;
    display: flex;
    text-align: left;
}
.courseOverview th {
    border-right: 1px solid #000;
    width: 38%;
    background: #fff7d5;
    font-size: 16px;
    line-height: 1.8;
    font-weight: 700;
    padding: 8px;
}
.courseOverview td {
    width: 62%;
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    padding: 8px;
}
.courseOverview-th-text {
    font-weight: 400;
}
.courseOverview-td-text {
    font-weight: 700;
}
.courseOverview td span {
    font-weight: 700;
}
.red {
    color: red;
}

.courseOverview-link {
    text-decoration: underline;
    text-decoration-color: #337ab7;
    color: #337ab7;
}
@media print, screen and (max-width: 768px) {
.courseOverview {
    width: 90%;
}
.courseOverview-inner {
    padding: 40px 20px;
}

.courseOverview-content {
    width: 100%;
}
.courseOverview-flex {
    flex-flow:wrap;
}
.courseOverview-flex.-reverse {
    flex-direction: column-reverse;
}
.courseOverview-flex-right,
.courseOverview-flex-left {
    width:100%;
}
.courseOverview-title {
    font-size: 24px;
}
.courseOverview-text.-type1 {
    font-size: 18px;
    line-height: 1.6;
}
.courseOverview-text.-type2 {
    font-size: 16px;
    line-height: 1.6;
}
.courseOverview-text.-type3 {
    font-size: 16px;
    line-height: 1.6;
}
.courseOverview-text.-type4 {
    font-size: 14px;
    line-height: 1.6;
}
.courseOverview table {
    border-bottom: 1px solid #000;
    border-right: none;
    border-left: none;
    margin: 20px auto;
}
.courseOverview tr {
    flex-wrap: wrap;
}
.courseOverview th {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    border-left: 1px solid #000;
    width: 100%;
    font-size: 14px;
    line-height: 1.6;
}
.courseOverview td {
    border-right: 1px solid #000;
    border-left: 1px solid #000;
    width: 100%;
    font-size: 14px;
    line-height: 1.6;
}
}
</style>
