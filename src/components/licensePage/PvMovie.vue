<template>
    <section v-if="movie || image">
      <div class="pv">
        <div class="pv-movie" v-if="movie">
          <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${movie}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="pv-img" v-if="!movie && image">
          <img :src="image" alt="">
        </div>
        <p class="pv-description">{{ description }}</p>
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
  .pv {
  width: 100%;
  margin: 0 auto;
  padding: 6em 0;
  @media print, screen and (min-width: 1001px) {
    width: 90%;
  }
}
.pv-description{
    line-height: 1.8;
    font-size: 13px;
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