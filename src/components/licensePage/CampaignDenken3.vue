<template>
    <div class="campaign">
        <p class="campaign-title">合格応援キャンペーン(受講者特典)</p>
        <div class="campaign-inner">
            <div class="campaign-section">
                <figure class="campaign-image">
                    <img src="../../assets/img/license_page/denken3/denken3_campaign_1.jpg" alt="電験三種">
                </figure>
                <div class="campaign-description">
                    <p class="campaign-topic -red">第二弾【￥5,000 off】早割キャンペーン（通学講座）</p>
                    <ul class="campaign-content">
                        <li class="campaign-emphasis">・{{ date }}まで早割キャンペーン開催中です！</li>
                        <li>・通学講座の全科目セット・４科目セットのお申込みの方が対象になります。</li>
                        <li>早いスタートが合格への近道です！</li>
                    </ul>
                </div>
            </div>
            <div class="campaign-section">
                <figure class="campaign-image">
                    <img src="../../assets/img/license_page/denken3/denken3_campaign_2.jpg" alt="電験三種">
                </figure>
                <div class="campaign-description">
                    <p class="campaign-topic">電気主任技術者のバイブルを進呈</p>
                    <ul class="campaign-content">
                        <li>・電験男子・電験女子のバイブルと言えばオーム社さんの【新電気】。その最新号を進呈！</li>
                        <li>・【基礎講座】または【全科目セット】受講の方が対象です（通学・オンライン・通信）</li>
                        <li>※お申込み時期によっては前月号になる場合もあります。</li>
                    </ul>
                </div>
            </div>
            <div class="campaign-section">
                <figure class="campaign-image">
                    <img src="../../assets/img/license_page/denken3/denken3_campaign_3.jpg" alt="電験三種">
                </figure>
                <div class="campaign-description">
                    <p class="campaign-topic">過去問題進呈</p>
                    <ul class="campaign-content">
                        <li>・過去の試験問題10年分を進呈します（通学・オンライン・通信講座）</li>
                        <li>・メールアドレスが必要になります。</li>
                        <li>電験三種の試験突破には過去問題を多く解くことが非常に重要な役割を果たします。</li>
                    </ul>
                </div>
            </div>
            <div class="campaign-section">
                <figure class="campaign-image">
                    <img src="../../assets/img/license_page/denken3/denken3_campaign_4.jpg" alt="電験三種">
                </figure>
                <div class="campaign-description">
                    <p class="campaign-topic">出題分析を進呈</p>
                    <ul class="campaign-content">
                        <li>・能セン講座の合格率が高い理由の一つである【出題分析】。こちらを受講生全員に進呈！</li>
                        <li>・過去の出題傾向を把握して対策を立てられます。</li>
                        <li>通学講座・オンライン講座では出題傾向による対策を毎年講義で行っております。</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        date: String,
    } 
}
</script>

<style lang="scss" scoped>
.campaign {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 0px auto 40px;
    z-index: 0;
    position: relative;
    font-family: 'Meiryo', sans-serif;
}
.campaign-inner {
    padding: 20px;
}

.campaign-title {
line-height: 1.3;
font-size: 28px;
font-weight: 700;
color: #fff;
background-color: #ed6c00;
padding: 1rem;
text-align: center;
margin: 0;
box-shadow: 0px 5px 1px rgba(161, 73, 0, 1);
    @media print, screen and (max-width: 560px) {
        font-size: 20px;
    }
}
.campaign-section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.campaign-image {
    width: 25%;

}
.campaign-description {
    width: 70%;
    line-height: 2;
}
.campaign-topic {
    font-weight: bold;
    font-size: 20px;
    color: #005a9e;
    margin: 10px 0 0;
}
.campaign-topic.-red {
    color: #ff0000;
}
.campaign-summary {
    font-weight: medium;
    font-size: 16px;
    color: #005a9e;
    margin: 0;
}

.campaign-content {
    font-weight: normal;
    font-size: 15px;
}
.campaign-content li span{
    color: #ff0000
}

.campaign-emphasis {
    color: #005a9e;
}


@media print, screen and (max-width: 1000px) {
    .campaign {
        width: 90%;
    }
    .campaign-section {
    flex-flow: wrap;
    }
    .campaign-image {
    width: 90%;
    margin: 0 auto;
    }

    .campaign-description {
    width: 100%;
    margin-top: 20px;
    }
}

@media print, screen and (max-width: 560px) {
    .campaign-description {
    margin-top: 10px;
    line-height: 1.8;
    }
    .campaign-topic {
    font-size: 18px;
    }
    .campaign-summary {
        font-size: 14px;
    }
    .campaign-content {
        font-size: 14px;
    }
}

</style>
