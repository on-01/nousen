<template>
    <div class="blog">
        <div class="blog-inner">
            <p class="blog-title" v-html="title"></p>
            <p class="blog-line"></p>
            <div class="blog-links">
                <a class="blog-link" href="https://denken.nouryoku.com/">● 電験三種【2024年】初心者必見！試験・合格率・難易度・仕事内容</a>
                <a class="blog-link" href="https://nousen.blog/denken3/"><span class=".blog-blank">　</span>● 電験三種【令和6年度】試験日・難易度・合格率・勉強方法を徹底解説</a>
                <a class="blog-link" href="https://nousen.blog/denken3-1/">● 電験三種【2024年】初心者必見！試験・合格率・難易度・仕事内容</a>
                <a class="blog-link" href="https://nousen.blog/denken3-2/">● 電験三種【2024年】初心者必見！試験・合格率・難易度・仕事内容</a>
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
.blog {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 20px auto;
    z-index: 0;
    position: relative;
    font-family: 'Meiryo', sans-serif;
}
.blog-inner {
    padding: 20px 40px;
}

.blog-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
}

.blog-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}

.blog-links {
    padding: 10px 0;
}
.blog-link {
    font-size: 16px;
    margin: 20px auto 0; 
    display: block;
    text-align: center;
}

@media print, screen and (max-width: 1000px) {
    .blog {
        width: 90%;
    }
}

@media print, screen and (max-width: 768px) {
    .blog-title {
        font-size: 20px;
    }
    .blog-link {
    font-size: 14px;
    line-height: 1.6;
    }

    .blog-blank {
        display: none;
    }
}

</style>
