<template>
  <HeroLicense
    :backImgOver="backImgOver"
    :title="title"
    :headTitle="headTitle"
    :icon="icon"
    color="#ed7d31"
    :buttons="buttons"
  />
</template>

<script>
  import HeroLicense from "@/components/HeroLicense.vue";

  export default {
    name: "hero",
    components: { HeroLicense },
    props: {
      backImgOver: String,
      backImgUnder: String, // SP は背景画像を使わないため未使用
      title: String,
      headTitle: String,
      icon: String,
    },
    data() {
      return {
        // PC 表示時の行ごとのボタン（href なしはリンク未設定）
        buttons: [
          [
            {
              label: "通学講座",
              note: "対面でしっかり学ぶ",
              icon: "classroom",
            },
            {
              label: "オンライン講座",
              note: "いつでも・どこでも学べる",
              icon: "online",
            },
          ],
        ],
      };
    },
  };
</script>
