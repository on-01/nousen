<template>
    <div class="explanation-wrap">
        <div class="explanation">
            <div class="explanation-inner">
            <p class="explanation-title">{{ title }}</p>
            <p class="explanation-line"></p>
                <div class="explanation-flex">
                    <figure class="explanation-image">
                        <g-image :src="imagePath" :alt="altText" />
                    </figure>
                    <p class="explanation-text" v-html="text"></p>
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
        altText: String
    } 
}
</script>

<style lang="scss" scoped>
.explanation {
    max-width: 1170px;
    width: 100%;
    background-color: #fff;
    margin: 40px auto;
    z-index: 0;
    position: relative;
    font-family: 'メイリオ', sans-serif;
}
.explanation-inner {
    padding: 20px;
}

.explanation-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}

.explanation-line {
    width: 10%;
    height: 4px;
    background: #249ef0;
    margin: 20px auto 30px;
    border-radius: 8px;
}
.explanation-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.explanation-image {
    width: 42%;
    margin-top: 0;
    margin-left: 0;
}

.explanation-text {
    width: 66%;
    font-size: 14px;
    line-height: 1.8;
    margin-top: 10px;
}
.denken3 .explanation-text {
    font-size: 15px;
    margin-top: -4px;
    }

@media print, screen and (max-width: 1100px) {
    .denken3 .explanation-text {
        font-size: 14px;
        width: 70%;
    }
}

@media print, screen and (max-width: 1000px) {
    .explanation {
        width: 90%;
    }
    .explanation-flex {
    flex-flow: wrap;
    }
    .explanation-image {
    width: 90%;
    margin: 0 auto;
    }
    .explanation-text {
    width: 100%;
    margin-top: 20px;
    }

    .denken3 .explanation {
    display: none;
    }
}

@media print, screen and (max-width: 560px) {
    .explanation-title {
        font-size: 20px;
    }

    .explanation-text {
        font-size: 14px;
        line-height: 1.6;
    }
}

</style>
