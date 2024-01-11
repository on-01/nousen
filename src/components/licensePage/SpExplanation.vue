<template>
    <div class="sp_explanation">
        <div class="sp_explanation-inner">
        <p class="sp_explanation-title">{{ title }}</p>
        <p class="sp_explanation-line"></p>
        <figure class="sp_explanation-image">
            <img :src="imagePath">
        </figure>
        <p class="sp_explanation-text" v-html="text"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        text: String,
        imagePath: String
    } 
}
</script>

<style lang="scss" scoped>
@media print, screen and (min-width: 1001px) {
    .sp_explanation {
        display: none;
    }
}
.sp_explanation {
    width: 90%;
    background-color: #fff;
    margin: 20px auto;
    z-index: 0;
    position: relative;
    font-family: 'メイリオ', sans-serif;
}
.sp_explanation-inner {
    padding: 20px;
}

.sp_explanation-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}

.sp_explanation-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 30px;
    border-radius: 8px;
}

.sp_explanation-image {
    width: 90%;
    margin: 0 auto;
}

.sp_explanation-text {
    width: 100%;
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
}

@media print, screen and (max-width: 560px) {
    .sp_explanation-title {
        font-size: 20px;
    }

    .sp_explanation-text {
    font-size: 14px;
    line-height: 1.6;
    }
}

</style>
