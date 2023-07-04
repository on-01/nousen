<template>
    <div class="explanation">
        <div class="explanation-inner">
        <p class="explanation-title">{{ title }}</p>
        <p class="explanation-line"></p>
            <div class="explanation-flex">
                <figure class="explanation-image">
                    <img :src="imagePath">
                </figure>
                <p class="explanation-text" v-html="text"></p>
            </div>
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
.explanation {
    max-width: 970px;
    width: 100%;
    background-color: #fff;
    margin: -20px auto 0;
    // margin: 20px auto;
    z-index: 0;
    position: relative;
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
    background: #ed7d31;
    margin: 20px auto 30px;
    border-radius: 8px;
}
.explanation-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.explanation-image {
    width: 30%;
}

.explanation-text {
    width: 70%;
    font-size: 14px;
    line-height: 1.8;
    margin-top: 10px;
}


@media print, screen and (max-width: 1000px) {
    .explanation {
        width: 90%;
    }

    .explanation-flex {
    flex-flow: wrap;
    }
    .explanation-image {
    width: 100%;
    }

    .explanation-text {
    width: 100%;
    margin-top: 20px;
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
