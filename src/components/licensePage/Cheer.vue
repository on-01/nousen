<template>
    <div class="cheer">
        <div class="cheer-inner">
            <div class="cheer-section">
                <div class="cheer-description">
                    <p class="cheer-title" v-html="text"></p>
                    <p class="cheer-line"></p>
                </div>
                <figure class="cheer-image">
                    <img src="../../assets/img/license_page/denken3/denken3_point.jpg">
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { 
    text: String,
    }
}
</script>

<style lang="scss" scoped>
.cheer {
    width: 100%;
    background-color: #fff;
    margin: 40px auto 0;
    font-family: 'メイリオ', sans-serif;
}
.cheer-inner {
    max-width: 1170px;
    width: 100%;
    padding: 30px 0;
    margin: 0 auto;
}

.cheer-section {
    display: flex;
    justify-content: space-between;
}
.cheer-image {
    width: 48%;
}
.cheer-description {
    width: 48%;
}

.cheer-title {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 28px;
    line-height: 2;
}
.cheer-line {
    width: 20%;
    height: 4px;
    background: #249ef0;
    margin: 10px auto 20px;
    border-radius: 8px;
}

@media print, screen and (max-width: 1000px) {
.cheer-section {
    flex-wrap: wrap
}
.cheer-image {
    width: 100%;
}
.cheer-image img {
    display: block;
    margin: 0 auto; 
}
.cheer-description {
    width: 90%;
    margin-top: 20px;
    padding-right: 0;
    margin: 0 auto;
}

.cheer-title {
    font-size: 36px;
}

}

</style>
