<template>
    <div class="quality">
        <div class="quality-wrap">
            <p class="quality-mainTitle"><span>＼ </span>【完全攻略】できる<br>３つのポイント！！！<span> ／</span></p>
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
    width: 100%;
    background-color: #ebf7ff;
    font-family: 'メイリオ', sans-serif;
    padding: 20px 0 110px;
}
.quality-wrap {
    max-width: 1170px;
    margin: 0 auto;
}
.quality-mainTitle {
    font-weight: bold;
    text-align: center;
    font-size: 28px;
    color: red;
    margin-bottom: 30px;
}

.quality-mainTitle br {
    display: none
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
    font-size: 12px;
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
    padding: 20px 20px 0;
}
.quality-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
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
    margin: 0;
}
.quality-image img {
    width: 100%;
}

.quality-text {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

@media print, screen and (max-width: 1000px) {
.quality {
    padding-bottom: 90px;
}
.quality-wrap {
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

.quality-description {
    padding: 20px 20px 20px;
}

}

@media print, screen and (max-width: 560px) {
    .quality-mainTitle {
       font-size: 24px;
    }
    .quality-mainTitle br {
        display: block;
    }
    
    .quality-mainTitle span {
        display: none;
    }
    .quality-title {
        font-size: 18px;
    }
}

</style>