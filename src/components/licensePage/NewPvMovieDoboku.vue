<template>
  <section>
    <div class="pv-wrap">
      <p class="pv-title">{{ movieTitle }}</p>
      <div class="pv">
        <p class="pv-description">{{ description }}</p>
        <div class="pv-movie">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WTIJgRILrEY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      description: String,
      movieTitle: String,
    },
  };
</script>

<style lang="scss" scoped>
  .pv-wrap {
    // max-width: 1070px;
    width: 100%;
    font-family: "Meiryo", sans-serif;
    background-color: #ffffff;
    margin: 20px auto;
    z-index: 0;
    position: relative;
  }
  .pv {
    width: 800px;
    margin: 0 auto;
    padding: 0 3em 5rem;
    @media print, screen and (max-width: 1001px) {
      width: 90%;
      padding: 0rem 0rem 2rem;
    }
  }
  .pv-title {
    line-height: 1.3;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    background-color: #1262b2;
    padding: 1rem;
    text-align: center;
    margin: 0;
    // box-shadow: 0px 5px 1px rgba(0, 107, 173, 1);
    @media print, screen and (max-width: 560px) {
      font-size: 20px;
    }
  }
  .pv-description {
    line-height: 1.3;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    @media print, screen and (max-width: 560px) {
      font-size: 16px;
    }
  }
  .pv-movie {
    position: relative;
    width: 100%;
    height: 0px;
    padding-top: 56.25%;
  }
  .pv-movie iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .pv-img img {
    width: 100%;
  }

  .denken3 .pv-wrap {
    margin-bottom: 0;
    margin-top: 0;
  }
  .kenchiku .pv-wrap {
    margin-bottom: 0;
  }
  .doboku .pv-wrap {
    margin-bottom: 0;
    margin-top: 0;
  }
</style>
