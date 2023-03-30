
## 能セン開発環境構築
サーバーはNetlifyです。<br>
テストアップ：ブランチを作ってプルリク作成<br>
本番アップ：masterにプッシュ

### GitHubからクローン
```
$ git clone https://github.com/on-01/nousen.git
```

### npmインストール
```
$ npm install
```

### gitでブランチ作成
```
$ git checkout -b ブランチ名
```
参考
[ブランチの切り方](https://github.com/mikutaniguchi/portfolio_site/wiki/%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%AE%E5%88%87%E3%82%8A%E6%96%B9)
[SourceTreeでブランチを切ってプルリクを送る](https://tokku-engineer.tech/github-sourcetree-branch/)

### プロジェクトルートに.env ファイルを作成して SPACE_ID と ACCESS_TOKEN を記載。(記載済みのファイルあり)
Contentfulとつなげるための準備。.envファイルの中身は引継ぎ資料の中にあります。<br>
.env ファイル内
```
SPACE_ID="~SPACE_ID~"
ACCESS_TOKEN="~ACCESS_TOKEN~"
```

### 開発開始
```
$ npm run develop
```
&emsp;

## テストアップ方法

### ブランチでGitHubにプルリク作成
参考
[PR作成までの手順](https://github.com/mikutaniguchi/portfolio_site/wiki/PR%E4%BD%9C%E6%88%90%E3%81%BE%E3%81%A7%E3%81%AE%E6%89%8B%E9%A0%86)

### GitHubのプルリクページでテストアップURL確認
赤矢印の場所をクリックすると、プルリクでアップした内容のサイトが見れます。テストアップURLはこれを使ってください。<br>
URLが複雑なのでベーシック認証は必要ないです。
![URLの場所](readme_description.png "readmedescription")
<br>

## ※テストアップでも、Contentfulの情報更新を自動で反映させたい場合

### ONのNetlifyアカウントに能センのテストアップ用URL内のブランチ設定変更
| ONのアカウント |
|---|
| ID：info@on-01.com |
| pass：netlify2438 |
| https://app.netlify.com/ |

[https://eloquent-ramanujan-6ca626.netlify.app](https://eloquent-ramanujan-6ca626.netlify.app)
- eloquent-ramanujan-6ca626 > Site Settings > Build&Deploy > Deploy contexts
- Production branch を新しく作ったブランチに変更
- webhookが繋がるのは Production branch のみ
<br>

[参考 https://blog.microcms.io/netlify-deploy-contexts/](https://blog.microcms.io/netlify-deploy-contexts/)



補足説明<br>
本番環境では、NetlifyがContentfulの情報更新を検知して、自動的にbuildしてくれるのですが、<br>
Production branch以外のブランチURLだと、プルリクを上げた時点の内容から変わりません。<br>
テストアップ後にContentfulの情報更新を反映させたい場合は、Netlify内で手動で更新するか、<br>
ブランチ用にURLを作ってwebhookをつなげる必要があります。<br>

&emsp;

## 本番アップ方法

### GitHub内でプルリクをマージ
masterのデータがそのまま本番にアップされています。<br>
なので、マージした段階で本番アップ完了です。<br>
※web上に反映されるまでに数分かかります。

&emsp;

## 補足
一度マージされたブランチはもう使わないので、deleteして、ローカルのブランチも削除して大丈夫です。ローカルではmasterをプルしてください。
