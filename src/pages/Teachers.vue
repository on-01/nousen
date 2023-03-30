<template>
  <Layout>
    <div class="teachers">
      <Hero
        :backImgOver="require('../assets/img/teachers/teachers_hero.jpg')"
        :backImgUnder="require('../assets/img/teachers/teachers_hero_sp.jpg')"
        title="講師を知る"
      />
      <div class="contents">
        <div v-for="(teacher,index) in $page.allContentfulTeacher.edges" :key="index">
          <div class="scroll-animation-item">
          </div>
          <Teacher
            :myCatch="teacher.node.catch"
            :name="teacher.node.name"
            :photo="teacher.node.photo.file.url"
            :qualifications="teacher.node.qualification"
            :background="richtextToHTML(teacher.node.background)"
            :message="richtextToHTML(teacher.node.message)"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Teachers {
  allContentfulTeacher(order:ASC) {
    edges {
      node {
        name
        catch
        photo {
          file {
            url(width: 180, height: 180, quality: 100)
          }
        }
        qualification
        background
        message
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
import { documentToHtmlString } from '../../node_modules/@contentful/rich-text-html-renderer';
import Hero from '@/components/Hero.vue';
import Teacher from '@/components/teachers/Teacher.vue';
export default {
  mame: 'teachers',
  metaInfo() {
    return {
      titleTemplate: '講師を知る｜能セン-学び方を学ぶ-（能力開発研修センター）',
      meta: [	{
					name: 'description', content: '受験対策講習会を開催しています能セン（能力開発研修センター）のホームページです。能センの講習を担当する自慢の講師陣をご紹介しています。熱意溢れる先生方からのワンポイントアドバイスもございます。'
				},
        {
          key: `og:title`,
          property: `og:title`,
          content: `講師を知る｜能セン-学び方を学ぶ-（能力開発研修センター）`,
          // content: `講師を知る | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/teachers`,
        },
      ]
    }
  },
  components: {
    Hero,
    Teacher
  },
  methods: {
   richtextToHTML(content) {
    //  const richtextString = documentToHtmlString(JSON.parse(content));
    const richtextString = documentToHtmlString(content).replace(/\n/g, `</br>`).replace(/<a((?: .+?))?>(.*?)<\/a>/g,'<a $1 target="_blank">$2</a>');
    return richtextString
   }
 }
}
</script>

<style lang="scss" scoped>
.teachers {
  padding-bottom: 100px;
}
.contents {
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
}
.teacher-introduce {
  transform: translateY(100px);
  transition: transform 0.3s ease-in-out;
}
.is-show + .teacher-introduce {
  transform: translateY(0);
}
</style>