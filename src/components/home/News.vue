<template>
  <div class="news-wrapper">
    <h2 class="section-title">センターからのお知らせ</h2>
    <article
      class="news-article"
      v-for="(item, index) in $static.allContentfulNewsPost.edges"
      :key="index"><span class="news-date">{{ item.node.date }}<br /></span><div class="news-content" v-html="richtextToHTML(item.node.article)" />
    </article>
  </div>
</template>

<static-query>
query News {
  allContentfulNewsPost(limit:5) {
    edges {
      node {
        title
        date(format: "Y.M.D")
        createdAt(format: "Y.M.D")
        updatedAt(format: "Y.M.D")
        article
      }
    }
  }
}
</static-query>

<script>
import { INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from '../../../node_modules/@contentful/rich-text-html-renderer';
const options = {
  //contentfulのエディタで設定したassetへのリンクを変換
  renderNode: {
    [INLINES.ASSET_HYPERLINK]: (node) =>
      `<a href="${node.data.target.fields.file.url}">${node.content[0].value}</a>`,
  },
};

export default {
  name: 'news',
  methods: {
    richtextToHTML(content) {
      const richtextString = documentToHtmlString(content, options)
        .replace(/\n/g, `</br>`)
        .replace(/<a((?: .+?))?>(.*?)<\/a>/g, '<a $1 target="_blank">$2</a>');
      return richtextString;
    },
  },
};
</script>
<style lang="scss" scoped>
.news-wrapper {
  max-width: 860px;
  border-top: 5px solid #3b241a;
  border-bottom: 5px solid #3b241a;
  height: 336px;
  overflow-y: scroll;
  margin: 0 auto;
  position: relative;
}
.section-title {
  text-align: center;
  margin-top: 50px;
  font-size: 1.17em;
}
.news-article {
  margin: 30px;
}
.news-date {
  font-weight: bold;
  color: #f4891e;
  font-style: italic;
  font-size: 25px;
  @media print, screen and (max-width: 1000px) {
    font-size: 20px;
  }
}
.news-content::v-deep p:first-child {
  margin-top: 0;
}
.news-content::v-deep a {
  text-decoration: underline;
}
</style>
