const webpack = require("webpack");
module.exports = {
  // siteName: `株式会社ＮＯＵＳＥＮ 能セン`,
  // titleTemplate: `%s | 能セン-合格への近道-`,
  // titleTemplate: '',
  siteUrl: `https://www.nouryoku.com`,
  siteDescription: `
  // 能セン(株式会社ＮＯＵＳＥＮ)では、電気、建築、設備関連を中心とした講習会を各地で開催しております。経験豊富な専門の講師が資格合格のサポートを致します。`,
  metadata: {
    siteOgImage: `https://www.nouryoku.com/ogp.png`
  },
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.SPACE_ID, // required
        accessToken: process.env.ACCESS_TOKEN, // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful"
      }
    },
    {
      use: "gridsome-plugin-gtag",
      options: {
        config: {
          id: "AW-478664526"
        }
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-169928700-1"
      }
    }
  ],
  //<g-image>で動的なimgを使うためエイリアスを設定
  chainWebpack: config => {
    config.resolve.alias.set("@images", "@/assets/img");
  }
};
