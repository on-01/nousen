<template>
    <section>
        <div class="support-wrap">
            <p class="support-title">{{ title }}</p>
            <div class="support">
                <div class="support-flex">
                    <figure class="support-image"><img src="../../assets/img/license_page/support_1.jpg" alt="みんなの建設業Q&A50"></figure>
                    <figure class="support-image"><img src="../../assets/img/license_page/support_2.png" alt="建設業ウエルカム"></figure>
                    <figure class="support-image"><img src="../../assets/img/license_page/support_3.png" alt="建設産業ガイドブック"></figure>
                </div>
                <div class="support-description">
                    <p>少しでも建設業を知ってもらうために！</p>
                    <p>受講生・企業採用担当者様・建設業に興味がある学生の方に進呈します。</p>
                </div>
                <ul class="support-list">
                    <li>■みんなの建設業Q&A50　一般社団法人東京建設業協会　人材支援課</li>
                    <li>■建設産業ガイドブック　建設産業人材確保・育成推進協議会（人材協）</li>
                    <li>■建設業ウエルカム(最新号)　厚生労働省 建設労働者育成支援事業</li>
                </ul>
                <div class="support-notes">
                    <p>※受講生の方は教材と一緒にお送りいたします。</p>
                    <p>※企業採用担当者 様・学生の方は能セン事務局までご連絡ください。無料でお送りいたします。</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: { 
    title: String,
    }
}
</script>

<style lang="scss" scoped>

.support-wrap {
max-width: 1170px;
width: 100%;
font-family: 'Meiryo', sans-serif;
background-color: #fff;
margin: 20px auto;
z-index: 0;
position: relative;
}

.support-wrap p {
    margin: 0;
}
.support-title {
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
.support {
margin: 0 auto;
padding: 4em 4rem;
@media print, screen and (max-width: 1000px) {
padding: 2rem 2rem;
}
}
.support-flex {
    display: flex;
    justify-content: space-between;
    @media print, screen and (max-width: 768px) {
    flex-flow: wrap;
    }
}
.support-image {
    width: 30%;
    max-height: 400px;
    @media print, screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    }
}

.support-image img {
    width: 100%;
    height: 100%;
    display: block;
    @media print, screen and (max-width: 768px) {
    width: 250px;
    margin: 0 auto;
    }
}

.support-description {
    font-size: 20px;
    line-height: 1.8;
    font-weight: 700;
    text-align: center;
    padding-top: 20px;
    @media print, screen and (max-width: 560px) {
    font-size: 16px;
    line-height: 1.6;
}
}

.support-list {
    margin: 30px auto 0;
    text-align: center;
    max-width: 560px;
    @media print, screen and (max-width: 600px) {
        max-width: 100%;
    }
    li {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.8;
        text-align: left;
        @media print, screen and (max-width: 560px) {
        font-size: 14px;
        line-height: 1.6;
    }
    }
}

.support-notes {
    margin: 30px auto 0;
    text-align: center;
    max-width: 700px;
    @media print, screen and (max-width: 768px) {
        max-width: 100%;
    }
    p {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.8;
        text-align: left;
        @media print, screen and (max-width: 560px) {
        font-size: 14px;
        line-height: 1.6;
    }
    }
}

</style>
