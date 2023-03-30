<template>
	<div class="loading_manager-wrapper" >
		<transition-group v-show="this.loading" class="loading" tag="div">
			<div class="white-back" :key="1"></div>
			<div class="icon" :key="2">
				<img src="../assets/img/common/loading.svg" width="100%">
			</div>
		</transition-group>
		<slot>
		</slot>
	</div>
</template>
<script>


let timerId = 0;
const FORCE_LOADIN_TIME = 500;

export default {
  name: 'Loading',
	data() {
		return {
			loading: true,
			routePath: "",
		}
	},
	methods: {
    loadCompleteHandler: function() {
			this.loading = false;
		},

		getHeroImagePath: function() {
			
			//ページのヘッダを取得
			const heroImage = document.querySelector('.hero-inner');
			
			if(heroImage === null || ( heroImage === undefined)) {
				return;
			}

			//hero（ページのヘッダの画像）のタグやcssのbackground-imageのurl取得
			const heroImageBackPath = getComputedStyle( heroImage, '' ).getPropertyValue( "background-image" ).replace(/^url\(\"|\"\)/g, '');

			//DOMを新しく作り取得したimgを挿入して返す
			const heroElement = document.createElement("img");
			heroElement.src = heroImageBackPath;
			return heroElement;
		},
		loadStartHandler: function() {

			//templateのDOMをコピーして保持
			const domCopyPutWapper = document.createElement('div');
			domCopyPutWapper.innerHTML = this.$el;

			const heroElement = this.getHeroImagePath();

			//heroの画像URLがあれば
			if(heroElement !== undefined) {
				//templateのコピーに追加
				domCopyPutWapper.appendChild(heroElement);
			}

			//imgタグ取得
			const jumbotronImgs = domCopyPutWapper.querySelectorAll('img');
			
			//画像がなければ一定時間ローディング出して終了
			if(jumbotronImgs.length === 0) {
				timerId = setTimeout(() => {
					this.loadCompleteHandler();
				}, FORCE_LOADIN_TIME);
				return;
			}else {

				//画像を読み込んだらローディング終了
				const jumbotronImgsArray = Array.from(jumbotronImgs);
				const imagePromiseArray = jumbotronImgsArray.map((imgUrl) => {
					return new Promise((resolve) => {
						const img = document.createElement("img");
						img.src = imgUrl.src;
						if(img.complete) {
							resolve();
						}else {
							// img.addEventListener('load', () => {
							// 	resolve();
							// }, {
							// 	once: true
							// });
							//IEに対応させるため以下に修正
							img.addEventListener('load', function loadEvent(event) {
								resolve();
								event.currentTarget.removeEventListener(event.type, loadEvent);
							});
						}
					});
				});

				Promise.all(imagePromiseArray).then(() => {
					this.loadCompleteHandler();
				});
			}
		}
  },
	mounted() {
		this.loadStartHandler();
	},
	updated: function() {
	},
	destroyed: function() {
		clearTimeout(timerId);
	},
}
</script>
<style scoped lang="scss">
.loading {
	position: fixed;
	z-index: 102;
	top: 0;
  left: 0;
	width: 100%;
	height: 100%;
	.icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		img {
			vertical-align: middle;
		}
	}	
}
.white-back {
	width: 100vw;
	height: 100vh;
	background-color: #fff;
	position: absolute;
	top: 0;
	left: 0;
}
</style>