<template>
  <div class="application">
    <a :href="formLink" class="application-link">
      {{ formText }}
      <IconBase class="icon" width="25" height="25"
        ><IconFingerRight
      /></IconBase>
    </a>
    <p class="fax-link" v-if="faxLink">
      <a :href="faxLink" target="_blank">
        FAX用紙のダウンロードはこちら
      </a>
    </p>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
import IconFingerRight from '@/components/icons/IconFingerRight.vue';
export default {
  props: {
    formText: {
      type: String,
      default: '講習会へのお申し込み',
    },
    formLink: String,
    faxLink: String,
  },
  components: {
    IconBase,
    IconFingerRight,
  },
};
</script>

<style lang="scss" scoped>
.application {
  font-weight: bold;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  font-size: 18px;
}
.application-link {
  margin: 0 auto;
  color: #fff;
  max-width: 400px;
  width: 100%;
  padding: 20px 50px;
  text-align: center;
  background-color: #ed6c00;
  border: 3px solid #ed6c00;
  border-radius: 10px;
  @media print, screen and (max-width: 1000px) {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
    width: 90%;
  }
}
.fax-link {
  margin-top: 50px;
  color: #ed6c00;
  text-decoration: underline;
}
</style>
