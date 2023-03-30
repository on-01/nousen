<template>
  <Layout>
    <div class="benefits">
      <Hero
        :backImgOver="require('../assets/img/benefits/benefits_hero.jpg')"
        :backImgUnder="require('../assets/img/benefits/benefits_hero_sp.jpg')"
        title="給付制度"
      />
      <div class="benefits-contents">
        <div class="tab-wrapper">
          <div
            :class="['tab', { active: isActive === 1 }]"
            v-on:click="tabToggle(1)"
          >
            一般教育訓練給付金
          </div>
          <div
            :class="['tab', { active: isActive === 2 }]"
            v-on:click="tabToggle(2)"
          >
            人材開発支援助成金
          </div>
          <div
            :class="['tab', { active: isActive === 3 }]"
            v-on:click="tabToggle(3)"
          >
            民間派遣型スキルアップ助成金
          </div>
        </div>
        <div class="contents-wrapper">
          <Ippan v-show="isActive === 1" />
          <Jinzai v-show="isActive === 2" />
          <Minkan v-show="isActive === 3" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import Hero from '@/components/Hero.vue';
import Ippan from '@/components/benefits/Ippan.vue';
import Jinzai from '@/components/benefits/Jinzai.vue';
import Minkan from '../components/benefits/Minkan.vue';
export default {
  name: 'benefits',
  metaInfo() {
    return {
      titleTemplate: '給付制度｜能セン-学び方を学ぶ-（能力開発研修センター）',
      meta: [
					{
					name: 'description', content: '電気、建築、設備関連を中心とした受験対策講習会を開催しています能センのページです。講習会受講時に申請できる一般教育訓練給付金、人材開発支援助成金、民間派遣型スキルアップ助成金についてご紹介しています。'
				},
        {
          key: `og:title`,
          property: `og:title`,
          content: `給付制度｜能セン-学び方を学ぶ-（能力開発研修センター）`,
          // content: `給付制度 | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/benefits`,
        },
      ],
    };
  },
  data() {
    return {
      isActive: 1,
    };
  },
  components: {
    Hero,
    Ippan,
    Jinzai,
    Minkan,
  },
  methods: {
    tabToggle: function (num) {
      this.isActive = num;
    },
  },
};
</script>

<style lang="scss" scoped>
.benefits {
  padding-bottom: 100px;
}
.benefits-contents {
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
  }
}
.tab-wrapper {
  display: flex;
  .tab {
    cursor: pointer;
    background-color: #e6e6e6;
    max-width: 290px;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #666666;
    margin-right: 10px;
    @media print, screen and (max-width: 1000px) {
      padding: 0 0.5em;
      font-size: 14px;
    }
    @media print, screen and (max-width: 520px) {
      font-size: 12px;
    }
    &.active {
      background-color: #f9f9f9;
      border-top: 5px solid #f4891e;
      box-sizing: border-box;
    }
    &:last-of-type {
      margin-right: 0;
      @media print, screen and (max-width: 520px) {
        line-height: 1.5;
      }
    }
  }
}
.contents-wrapper {
  background-color: #f9f9f9;
  padding: 70px 50px 100px 50px;
  @media print, screen and (max-width: 1000px) {
    padding: 70px 5% 100px 5%;
  }
}
</style>
