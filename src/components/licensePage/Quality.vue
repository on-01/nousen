<template>
  <div class="quality">
        <p class="quality-mainTitle">＼短期間で合格する３つのポイント／</p>
        <div class="quality-flex">
            <div class="quality-box">
                <div class="quality-header">
                    Point
                    <span>1</span>
                </div>
                <figure class="quality-image">
                    <img :src="imagePath_1">
                </figure>
                <div class="quality-description">
                    <p class="quality-title" v-html="title_1"></p>
                    <p class="quality-line"></p>
                    <p class="explanation-text" v-html="text_1"></p>
                </div>
            </div>
            <div class="quality-box">
                <div class="quality-header">
                    Point
                    <span>2</span>
                </div>
                <figure class="quality-image">
                    <img :src="imagePath_2">
                </figure>
                <div class="quality-description">
                    <p class="quality-title" v-html="title_2"></p>
                    <p class="quality-line"></p>
                    <p class="explanation-text" v-html="text_2"></p>
                </div>
            </div>
            <div class="quality-box">
                <div class="quality-header">
                    Point
                    <span>3</span>
                </div>
                <figure class="quality-image">
                    <img :src="imagePath_3">
                </figure>
                <div class="quality-description">
                    <p class="quality-title" v-html="title_3"></p>
                    <p class="quality-line"></p>
                    <p class="explanation-text" v-html="text_3"></p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
 props: {
   title_1: String,
   text_1: String,
   imagePath_1: String,
   title_2: String,
   text_2: String,
   imagePath_2: String,
   title_3: String,
   text_3: String,
   imagePath_3: String,
 } 
}
</script>

<style lang="scss" scoped>
.quality {
    max-width: 970px;
    width: 100%;
    background-color: transparent;
    margin: 20px auto;
}
.quality-mainTitle {
    font-weight: bold;
    text-align: center;
    font-size: 28px;
    color: red;
    margin-bottom: 30px;
}
.quality-flex {
    display: flex;
    justify-content: space-between;
}
.quality-box {
    width: 30%;
    background: #fff;
    position: relative;
}
.quality-header {
    display: flex;
    font-weight: bold;
    background-color: #249ef0;
    color: #fff;
    padding: 0 12px;
    position: relative;
    position: absolute;
    font-size: 13px;
    letter-spacing: 0.1em;
    top: 0;
    left: 0;
    align-items: center;
    }

.quality-header span {
    font-size: 20px;
    vertical-align: baseline;
    margin-left: 4px;
}

/* .quality-header:after {
    content: "";
    border: 14px solid transparent;
    border-right: 8px solid #fff;
    position: absolute;
    right: 0;
    top: 0;
    } */

.quality-description {
    padding: 30px 20px;
}
.quality-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
}

.quality-line {
    width: 20%;
    height: 4px;
    background: #249ef0;
    margin: 16px auto;
    border-radius: 8px;
}
.quality-image {
    width: 100%;
}
.quality-image img {
    width: 100%;
    height: 200px;
}

.quality-text {
    font-size: 16px;
    line-height: 1.8;
}

@media print, screen and (max-width: 1000px) {
.quality {
    width: 90%;
}
.quality-mainTitle {
    font-size: 20px;
    margin-bottom: 0;
}

.quality-flex {
    flex-wrap: wrap;
}

.quality-box {
    width: 100%;
    margin: 30px auto 0;
}

.quality-image img {
    height: 590px;
}

}

@media print, screen and (max-width: 768px) {
    .quality-image img {
    height: auto;
    height: 400px;
}
}

@media print, screen and (max-width: 560px) {
    .quality-image img {
    height: 225px;
}
    .quality-title {
        font-size: 18px;
    }
}

</style>