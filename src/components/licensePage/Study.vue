<template>
    <div :class="['study', `study-${studySlug}`]">
        <div class="study-inner">
            <div class="study-title-img"></div>
            <p class="study-title">勉強時間は？</p>
            <p class="study-line"></p>
            <p class="study-time" v-if="name1">{{ name1 }}<br class="sp-only"><span>{{ time1 }}</span> 時間</p>
            <p class="study-time" v-if="name2">{{ name2 }}<br class="sp-only"><span>{{ time2 }}</span> 時間</p>
            <p class="study-text" v-html="text"></p>
        </div>
    </div>
</template>

<script>
export default {
 props: {
   name1: String,
   time1: String,
   name2: String,
   time2: String,
   text: String,
   studySlug: String,
 } 
}
</script>

<style lang="scss" scoped>
.study {
    max-width: 970px;
    width: 100%;
    background-color: #fff;
    margin: 20px auto;
    z-index: 0;
    position: relative;
}
.study-inner {
    padding: 20px 40px;
}

.study-line {
    width: 10%;
    height: 4px;
    background: #ed7d31;
    margin: 20px auto 20px;
    border-radius: 8px;
}

.study-title {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
}

.study-time {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 10px 0;
}

.study-time span {
    color: #ff0000;
    font-size: 22px;
    margin-left: 12px;
}
.study-text {
    font-size: 14px;
    line-height: 1.8;
    margin-top: 20px;
}

.sp-only {
  display: none;
}

@media print, screen and (max-width: 1000px) {
    .study {
        width: 90%;
    }
}

@media print, screen and (max-width: 560px) {
    .study-title {
        font-size: 20px;
    }

    .study-inner {
    padding: 20px;
  }

    .study-time {
    font-size: 18px;
    }
    .study-time span {
    font-size: 18px;
    margin-left: 0;
    }

    .study-text {
    font-size: 14px;
    line-height: 1.6;
    }

  .sp-only {
  display: block;
  }
}

.study-title-img {
    width: 120px;
    margin-right: 0;
    margin-left: auto;
    display: block;
    height: auto;
    &:before {
        width: 100%;
        height: 100%;
        display: block;
    }
    @media print, screen and (max-width: 1000px) {
        width: 80px;
        margin-bottom: 10px;
    }
    }

    .study-denken {
        .study-title-img {
        &:before {
        content: url('../../assets/img/license_page/study_denken.svg');
        }
        }
    }
    .study-other {
        .study-title-img {
        &:before {
        content: url('../../assets/img/license_page/study_other.svg');
        }
        }
    }


</style>
