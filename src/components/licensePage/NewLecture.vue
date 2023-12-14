<template>
    <div class="lecture">
        <div class="lecture-inner">
            <div class="lecture-section">
                <figure class="lecture-image">
                    <img :src="imagePath">
                </figure>
                <div class="lecture-description">
                    <p class="lecture-title" v-html="title"></p>
                    <p class="lecture-line"></p>
                    <p class="lecture-text">{{ text }}</p>
                </div>
            </div>
            <div class="lecture-section -bottom">
                <div class="lecture-book-images">
                    <figure class="lecture-book-image">
                        <img :src="imageBook1">
                    </figure>
                    <figure class="lecture-book-image">
                        <img :src="imageBook2">
                    </figure>
                    <figure class="lecture-book-image">
                        <img :src="imageBook3">
                    </figure>
                </div>
                <div class="lecture-description">
                    <p class="lecture-teacher" v-html="teacher"></p>
                    <p class="lecture-profile" v-html="profile"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        text: String,
        imagePath: String,
        teacher: String,
        profile: String,
        imageBook1: String,
        imageBook2: String,
        imageBook3: String,
    } 
}
</script>

<style lang="scss" scoped>
.lecture {
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    font-family: 'メイリオ', sans-serif;
}
.lecture-inner {
    max-width: 1170px;
    width: 100%;
    padding: 30px 0;
    margin: 0 auto;
}

.lecture-section {
    display: flex;
    justify-content: space-between;
}
.lecture-section.-bottom {
    margin-top: 18px;
}

.lecture-image {
    width: 48%;
}
.lecture-description {
    width: 48%;
    padding-right: 20px;
}

.lecture-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
}
.lecture-line {
    width: 20%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 20px;
    border-radius: 8px;
}
.lecture-text {
    font-size: 16px;
    line-height: 2;
}
.lecture-book-images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 48%;
}
.lecture-book-image {
    width: 28%;
    margin: 0;
}
.lecture-teacher {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
}
.lecture-profile {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

@media print, screen and (max-width: 1000px) {

.lecture-section {
    flex-wrap: wrap
}
.lecture-image {
    width: 100%;
}
.lecture-description {
    width: 90%;
    margin-top: 20px;
    padding-right: 0;
    margin: 18px auto;
}
.lecture-book-images {
    width: 90%;
    margin: 0 auto;
}

.lecture-title {
    font-size: 24px;
}
.lecture-text {
    font-size: 16px;
    line-height: 1.6;
}

}
</style>
