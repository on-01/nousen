<template>
    <div class="blog">
        <div class="blog-inner">
            <p class="blog-title" v-html="title"></p>
            <p class="blog-line"></p>
            <div class="blog-links">
                <a class="blog-link" href="https://denken.nouryoku.com/" target="_blank">● 電験三種【2024年】初心者必見！試験・合格率・難易度・仕事内容</a>
                <a class="blog-link" href="https://nousen.blog/denken3/" target="_blank">● 電験三種【令和6年度】試験日・難易度・合格率・勉強方法を徹底解説</a>
                <a class="blog-link" href="https://nousen.blog/denken3-1/" target="_blank">● 電験三種とは？試験内容・出題範囲・取得メリット公開【2024年】</a>
                <a class="blog-link" href="https://nousen.blog/denken3-2/" target="_blank">● 電験三種の基礎数学・計算が苦手な方【初心者】数学の範囲・基礎講座</a>
                <a class="blog-link" href="https://nousen.blog/3-4/" target="_blank">● よくわかる！電験三種（第三種電気主任技術者）の試験概要2024年</a>
                <a class="blog-link" href="https://nousen.blog/3-5/" target="_blank">● すぐわかる！令和6年度第三種電気主任技術者の試験日程2024</a>
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
    transform: translateX(50%);
    margin-right: 50%;
}
.blog-link {
    font-size: 16px;
    margin: 10px auto 0; 
    display: block;
}
@media print, screen and (max-width: 1000px) {
    .blog {
        width: 90%;
    }

    .blog-links {
    transform: none;
    margin-right: auto;
}
}

@media print, screen and (max-width:480px) {
    .blog-title {
        font-size: 20px;
    }
    .blog-link {
    font-size: 14px;
    line-height: 1.6;
    }
}

</style>
