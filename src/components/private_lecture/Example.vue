<template>
  <section class="example">
    <div class="name">
      <img src="../../assets/img/private_lecture/company.svg" alt="">
      <p>{{companyName}} 様の場合</p>
    </div>
    <div class="text">
      <ul>
        <li v-for="(item,index) in exampleList" :key="index" v-html="item">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    companyName: String,
    exampleList: Array
  }
}
</script>

<style lang="scss" scoped>
.example {
  display: flex;
  padding: 50px 0;
  border-bottom: 1px dotted #000;
  align-items: center;
  @media print, screen and (max-width: 1000px) {
   display: block;
  }
}
.name {
  border-radius: 8px;
  border: 5px solid #ededed;
  text-align: center;
  width: 300px;
  height: 110px;
  margin-right: 50px;
  color: #3b241a;
  font-weight: bold;
  @media print, screen and (max-width: 1000px) {
   margin: 0 auto;
  }
  img {
    width: 28px;
    margin-top: 20px;
  }
  p {
    margin-top: 5px;
  }
}
.text {
  font-weight: bold;
  @media print, screen and (max-width: 1000px) {
   margin-top: 30px;
  }
  li:before {
    content: "▶︎";
  }
}
</style>