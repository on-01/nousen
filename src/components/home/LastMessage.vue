<template>
    <div class="last-message-flex">
        <img
            src="../assets/img/common/social_image.jpg"
            alt="子供の未来は日本の未来"
            class="last-message-logo"
            width="174"
            height="93"
            decoding="async"
        />
        <div class="last-message-description">
            <p class="last-message-text1" v-html="title"></p>
            <p class="last-message-text2">日本を元気に！<br>
            子供たちが夢と希望を持って働ける世の中へ！<br>
            能センでは受講生１名につき１００円を<br>
            「こどもの未来応援基金」へ寄付をいたします。
            </p>
            <p class="last-message-text3">
            <a href="http://kodomohinkon.go.jp" target="_blank">
            こどもの未来応援基金</a>は、
            こどもの貧困対策を進めるための<br>
            官民連携プロジェクトのひとつとして、<br>
            ２０１５年に創設されました。<br>
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

<style scoped lang="scss">
.last-message-flex {
    display: flex;
    max-width: 960px;
    margin: 20px auto 0;
}

.last-message-flex p {
    margin: 0;
}
.last-message-logo {
    width: 45%;
}
.last-message-description {
    width: 55%;
    background: #fff8cc;
    padding-left: 5%;
    position: relative;
}
.last-message-description::after{
    content: "";
    position: absolute;
    left: -350px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 562px solid transparent;
    border-top: 138px solid #fff8cc;
    transform: rotate(90deg);
}
.last-message-text1 {
    color: #0071bb;
    font-size: 28px;
    font-weight: 700;
    padding-top: 10px;
}
.last-message-text2 {
    font-size: 14px;
    font-weight: 700;
    padding-top: 10px;
}
.last-message-text3 {
    font-size: 14px;
    font-weight: 500;
    padding-top: 10px;
    padding-bottom: 8px;
}
.last-message-text3 a {
    text-decoration: underline;
}

@media print, screen and (max-width: 1000px) {
.last-message-description::after {
    display: none;
}
.last-message-flex {
    width: 100%;
    max-width: 560px;
    flex-wrap: wrap;
}
.last-message-logo {
    width: 100%;
}
.last-message-description {
    width: 100%;
    padding-left: 0;
}
.last-message-text1 {
    text-align: center;
    font-size: 20px;
}
.last-message-text2 {
    text-align: center;
    font-size: 13px;
}
.last-message-text3 {
    text-align: center;
    font-size: 12px;
}
}
</style>
