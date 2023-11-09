<template>
    <div class="schedule">
        <div class="schedule-inner">
            <p class="schedule-title">{{ title }}</p>
            <div class="schedule-line"></div>
            <p class="schedule-tableTitle">令和５年度　第三種電気主任技術者　各種日程　</p>
            <div class="schedule-table-wrap">
            <table class="schedule-table">
            <tr>
                <th class="schedule-th -first">項目</th>
                <th class="schedule-th -second">上期試験</th>
                <th class="schedule-th -third">下期試験</th>
            </tr>
            <tr>
                <td class="schedule-td-border-none schedule-padding-none">
                    <div class="schedule-table-flex">
                        <div class="schedule-td-bold schedule-td-flex-left">試験日</div>
                        <div class="schedule-td-flex-right">
                            <p class="schedule-td-flex-right-top schedule-table-padding">CBT方式<span class="schedule-table-note"> ※1</span></p>
                            <p class="schedule-table-padding">筆記方式<span class="schedule-table-note"> ※2</span></p>
                        </div>
                    </div>
                </td>
                <td class="schedule-padding-none">
                    <div>
                        <p class="schedule-td-flex-right-top schedule-table-padding"><del>７月６日（木）～７月３０日（日）</del></p>
                        <p class="schedule-table-padding"><del>８月２０日（日）</del></p>
                    </div>
                </td>
                <td class="schedule-padding-none">
                    <div>
                        <p class="schedule-td-flex-right-top schedule-table-padding">令和６年２月１日（木）～２月２５日（日）</p>
                        <p class="schedule-table-padding">令和６年３月２４日（日）</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="schedule-td-bold schedule-td-border-none schedule-table-padding">【受験申込受付期間】<br>申込期間はCBT方式・筆記方式共に同じです。</td>
                <td><del>５月１５日（月）～６月１日（木）</del></td>
                <td>１１月１３日（月）～１１月３０日（木）</td>
            </tr>
            <tr>
                <td class="schedule-td-bold schedule-td-border-none schedule-table-padding">試験結果発表日（筆記方式）<span class="schedule-table-note"> ※3</span></td>
                <td><del>９月 ４日（月）</del></td>
                <td>令和６年４月頃</td>
            </tr>
            <tr class="schedule-tr-border-none">
                <td class="schedule-td-border-none schedule-padding-none">
                    <div class="schedule-table-flex">
                        <div class="schedule-td-bold schedule-td-flex-left">受験手数料<br>（非課税）</div>
                        <div class="schedule-td-flex-right">
                            <p class="schedule-td-flex-right-top schedule-table-padding">インターネットによる申込み</p>
                            <p class="schedule-table-padding">書面（郵送）による申込み</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p><del>７，７００円</del></p>
                    <p><del>８，１００円</del></p>
                </td>
                <td>
                    <p>７，７００円</p>
                    <p>８，１００円</p>
                </td>
            </tr>
            </table>
            </div>

            <div>
                <p class="schedule-emphasis-text">試験は上期試験と下期試験の年２回になります。
                <br>上期試験が落ちてもそのまま勉強を続けて下期試験で合格する方もいます。</p>
                <br>
                <p>・インターネットによる申込みは初日１０時から最終日の１７時まで、郵便による書面申込みは最終日の消印有効となります。 </p>
                <p>・一次試験免除で申込みされる方も上記期間の申込みとなります。 </p>
                <p>・受験案内・申込書は、各申込受付開始の約１週間前から配布します。 </p>
                <p>・配布場所等の詳細は、<a class="schedule-link" href="https://www.shiken.or.jp/" target="_blank">一般財団法人 電気技術者試験センター</a>でご案内します。 </p>
                <br>
                <p>第三種電気主任技術者試験は、CBT方式又は筆記方式でのいずれかの受験となります。 </p>
                <p>CBT方式の試験を欠席した場合、筆記方式の試験は受験できません。 </p>
                <br>
                <p><span class="schedule-table-note">※１</span>CBT方式（パソコンでの受験）</p>
                <p>所定の期間内に試験会場、試験日時を選択することが可能です。</p>
                <p><span class="schedule-table-note">※２</span>筆記方式 </p>
                <p><span class="schedule-table-note">※３</span>ＣＢＴ方式では、申込マイページで試験終了から約２週間以降に受験した科目の結果を確認することができます。 </p>
                <br>
                <p>参考：<a class="schedule-link" href="https://www.shiken.or.jp/" target="_blank">一般財団法人 電気技術者試験センター</a></p>
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
.schedule {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 20px auto 0;
    z-index: 0;
    position: relative;
    font-family: 'Meiryo', sans-serif;
    font-size: 15px;
}

.schedule p {
    margin: 0;
}
.schedule-inner {
    padding: 20px 60px;
}
.schedule-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}
.schedule-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 30px;
    border-radius: 8px;
}
.schedule-tableTitle {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
}
.schedule-table {
    border: 2px solid #000;
    width: 100%;
}
.schedule-th {
    background: #249ef0;
    color: #fff;
    padding-top: 20px;
    border-bottom: 1px solid #000;
    font-size: 20px;
}
.schedule-th.-first {
    width:40%;
}
.schedule-th.-second,
.schedule-th.-third {
    width:30%;
    border-left: 1px solid #000;
}
.schedule-table tr {
    border-bottom: 1px solid #000;
}
.schedule-table td {
    text-align: center;
    border-left: 1px solid #000;
}
.schedule-td-bold {
    font-weight: 700;
}
.schedule-table-flex {
    display:flex;
    border-left: none;
    align-items: center;
}
.schedule-td-flex-left {
    width: 40%;
}
.schedule-td-flex-right {
    width: 60%;
    border-left: 1px solid #000;
}
.schedule-tr-border-none {
    border-bottom: none;
}
.schedule-td-border-none {
    border-left: none;
}
.schedule-td-flex-right-top {
    border-bottom: 1px solid #000;
}
.schedule-table-padding {
    padding: 18px 0;
}
.schedule-table-note {
    color: red;
    font-size: 11px;
    font-weight: 500;
}
.schedule-emphasis-text {
    color: red;
    font-weight: 700;
}
.schedule-link {
    text-decoration: underline;
}
.schedule-padding-none {
    padding: 0;
}

@media print, screen and (max-width: 1200px) {
    .schedule {
        font-size: 14px;
    }
    .schedule-inner {
        padding: 20px 20px;
    }
}
@media print, screen and (max-width: 1000px) {
    .schedule-title {
    font-size: 20px;
    }
    .schedule-tableTitle {
    font-size: 16px;
    }
    .schedule {
        width: 90%;
        font-size: 12px;
    }
}

@media print, screen and (max-width: 870px) {
    .schedule-table-wrap {
        overflow-x: auto;
    }
    .schedule-table {
        min-width: 830px;
    }
}


</style>
