<template>
    <div class="food">
        <div class="food-inner">
            <p class="food-title">勉強に効果的な食事・栄養素</p>
            <p class="food-line"></p>
            <p class="food-headline" v-html="headline"></p>
            <p class="food-text">
                ① グリーンリーフ野菜や色鮮やかな野菜<br>
                　これらはビタミン、ミネラル、抗酸化物質が豊富で、脳の機能をサポートします。<br>
                　例えば、ほうれん草やケール、人参、トマトなどが含まれます。<br>
                ② 魚やナッツ<br>
                　オメガ-3脂肪酸が豊富な食品は、認知機能と集中力を向上させる可能性があります。<br>
                　サーモン、マグロ、アーモンドやくるみなどがオメガ-3脂肪酸を含んでいます。<br>
                ③ ブルーベリーや苺<br>
                　これらのフルーツには抗酸化物質が含まれ、脳の血流を改善し、記憶力や学習能力をサポートする可能性があり<span class="-pc-only"><br>
                　</span>ます。<br>
                ④ 全粒穀物や健康的な炭水化物<br>
                　エネルギー源として重要です。全粒穀物（全粒小麦、オートミールなど）や健康的な炭水化物（さつまいも、バ<span class="-pc-only"><br>
                　</span>ナナなど）は持続的なエネルギーを提供します。<br>
                ⑤ 水分補給<br>
                　十分な水分摂取は脳機能に必要であり、集中力を保つためにも重要です。こまめに水分補給を心掛けましょう。
            </p>
        </div>
    </div>
    </template>

    <script>
    export default {
    props: {
        headline: String,
    } 
    }
</script>

<style lang="scss" scoped>
.food {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    font-family: 'Meiryo', sans-serif;
}
.food-inner {
    padding: 20px 40px;
}

.food-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
}

.food-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}

.food-text {
    font-size: 14px;
    line-height: 1.8;
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
}

.food-headline {
    font-size: 14px;
    line-height: 1.8;
    margin-top: 20px;
    text-align: center
}

@media print, screen and (max-width: 1000px) {
    .food-headline {
    text-align: left;
    }
}

@media print, screen and (max-width: 1000px) {
    .food {
        width: 90%;
    }
}

@media print, screen and (max-width: 1000px) {
    .-pc-only {
        display: none;
    }
}

@media print, screen and (max-width: 560px) {
    .food-title {
        font-size: 20px;
    }
    .food-text {
    font-size: 14px;
    line-height: 1.6;
    }
}

</style>
