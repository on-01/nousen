<template>
    <section v-if="movie || image">
      <div class="pv-wrap">
        <p class="pv-title">科目合格率No.1  電験三種の講習会動画をご視聴ください</p>
        <div class="pv">
          <p class="pv-description">{{ description }}</p>
          <div class="pv-movie" v-if="movie">
            <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${movie}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="pv-img" v-if="!movie && image">
            <img :src="image" alt="">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    movie: String,
    image: String,
    description: String
  }
}
</script>

<style lang="scss" scoped>

.pv-wrap {
  max-width: 1070px;
  width: 100%;
  font-family: 'Meiryo', sans-serif;
  background-color: #ebf7ff;
  margin: 20px auto;
  z-index: 0;
  position: relative;
  @media print, screen and (max-width: 1001px) {
    width: 90%;
  }
}
  .pv {
  width: 700px;
  margin: 0 auto;
  padding: 0 3em 3rem;
  @media print, screen and (max-width: 1001px) {
    width: 95%;
  }
}
.pv-title {
    line-height: 1.3;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #1da1f2;
    padding: 1rem;
    text-align: center;
    margin: 0;
    @media print, screen and (min-width: 1001px) {
      font-size: 16px;
    }
}
.pv-description {
    line-height: 1.3;
    font-size: 13px;
    font-weight: 700;
    @media print, screen and (min-width: 1001px) {
      font-size: 15px;
    }
}
.pv-movie {
  position: relative;
  width: 100%;
  height:0px;
  padding-top: 56.25%;
}
.pv-movie iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.pv-img img {
  width: 100%;
}

</style>