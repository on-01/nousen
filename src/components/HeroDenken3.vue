<template>
  <HeroLicense
    :backImgOver="backImgOver"
    :title="title"
    :headTitle="headTitle"
    :icon="icon"
    color="#1262b2"
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
              label: "基礎講座",
              note: "はじめての方に",
              href: "https://denken.nouryoku.com/kiso-kouza",
              icon: "book",
            },
            {
              label: "通学講座",
              note: "対面でしっかり学ぶ",
              href: "https://denken.nouryoku.com/denken3-tuugaku",
              icon: "classroom",
            },
            {
              label: "無料体験講座",
              note: "まずは気軽に",
              href: "https://taiken.nouryoku.com/",
              icon: "trial",
            },
          ],
          [
            {
              label: "オンライン講座",
              note: "いつでも・どこでも学べる",
              href: "https://denken.nouryoku.com/online",
              icon: "online",
            },
            {
              label: "通信講座",
              note: "自分のペースで学べる",
              href: "https://t.kouza.nouryoku.com/",
              icon: "correspondence",
            },
          ],
        ],
      };
    },
  };
</script>
