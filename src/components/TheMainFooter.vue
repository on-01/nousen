<template>
	<div class="main-footer">
		<div class="main-footer-inner">
			<div class="main-footer-top">
				<div class="main-footer-top-inner">
					<div class="logo">
						<div class="logo-inner">
							<img src="../assets/img/common/main_logo.svg" alt="能セン 学び方を学ぶ" />
						</div>
						<div class="logo-text">
							<p class="logo-text_logo">一般社団法人 能力開発研修センター</p>
							<a href="https://jeea.or.jp/" target="_blank" class="jeea-link">(社) 日本電気技術者協会 維持会員</a>
						</div>
					</div>
					<div class="wrapper-information">
						<div class="information">
							<p class="information_list">
								<g-link to="/company"> 会社概要 </g-link>
							</p>
							<p class="information_list">
								<g-link to="/benefits"> 給付制度 </g-link>
							</p>
							<p class="information_list">
								<g-link to="/guide"> 特定商取引法に基づく表記 </g-link>
							</p>
							<p class="information_list">
								<g-link to="/privacy"> プライバシーポリシー </g-link>
							</p>
						</div>
						<div class="sns-link twitter-link">
							<a href="https://twitter.com/nouryoku1983" target="_blank">
								<p>公式 Twitter</p>
								<img src="../assets/img/common/twitter.svg" alt="twitter" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="main-footer-bottom">
				<div class="application">
					<p class="message">
						ご質問・ご相談など、お気軽にお問い合わせください
					</p>
					<a href="tel:0356326011" class="tel">
						<img src="../assets/img/common/tel.svg" alt="03-5632-6011 （祝日を除く平日土日9:00~18:00）" />
					</a>
				</div>
				<div class="banner">
					<a href="https://www.tokyo-cci.or.jp/" target="_blank">
						<g-image src="../assets/img/common/banner1.jpg" alt="バナー 東京商工会議所" width="200px" />
					</a>
					<a href="https://www.birumen-navi.com/" target="_blank">
						<g-image
							src="../assets/img/common/banner2.jpg"
							alt="バナー ビルメン転職ナビ 電験転職ナビ 施工管理転職ナビ"
							width="140px"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.main-footer {
	border-top: 2px solid #f4f0ed;
	margin-bottom: 20px;
	position: relative;
}
.main-footer-inner {
	padding: 10px 0 110px;
	max-width: 950px;
	width: 100%;
	margin: 0 auto;
	margin-top: 10px;
	@media print, screen and(max-width: 1000px) {
		padding: 10px 0 100px;
		width: 90%;
	}
}
.main-footer-top {
	.logo {
		max-width: 500px;
		width: 100%;
		display: flex;
		align-items: center;
		&-text {
			margin-left: 2em;
			margin-top: 1.5em;

			&_logo {
				font-size: 13px;
				margin: 0;
				font-weight: bold;
				@media print, screen and(max-width: 1000px) {
					font-size: 10px;
				}
			}
		}
	}
	.logo-inner {
		width: 100%;
		max-width: 130px;
		margin-top: 10px;
		@media print, screen and(max-width: 1000px) {
			max-width: 100px;
		}
	}
	.under_display {
		@media print, screen and(min-width: 1001px) {
			display: none;
		}
	}
	.jeea-link {
		font-size: 11px;
		line-height: 1.5em;
		display: block;
		@media print, screen and(max-width: 1000px) {
			font-size: 10px;
			transform: scale(0.9);
			transform-origin: left center;
		}
	}
	.wrapper-information {
		@media print, screen and(max-width: 1000px) {
			display: flex;
			margin-top: 2em;
			width: 100%;
			justify-content: space-between;
		}
	}
	.information {
		font-weight: bold;
		max-width: 750px;
		@media print, screen and(min-width: 1001px) {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			width: 400px;
			margin-top: 1em;
		}
		p {
			margin: 0;
			font-size: 14px;
			@media print, screen and(max-width: 1000px) {
				display: block;
				text-align: left;
				margin-top: 0.5em;
				font-size: 12px;
			}
			@media print, screen and(min-width: 1001px) {
				&:nth-child(1),
				&:nth-child(3) {
					width: 232px;
				}
			}
		}
	}
}
.information_list::after {
	content: url('../assets/img/icon/double_arrow_right_orange.svg');
	height: 1.2em;
	width: 1.2em;
	display: inline-block;
	vertical-align: sub;
	position: relative;
	margin-left: 7px;
	@media print, screen and(min-width: 1001px) {
		margin-left: 7px;
	}
}
.main-footer-top-inner {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	position: relative;
	@media print, screen and(max-width: 1000px) {
		align-items: flex-start;
		flex-direction: column;
	}
}
.main-footer-bottom {
	margin-top: 40px;
	@media print, screen and(min-width: 1001px) {
		display: flex;
		justify-content: space-between;
	}
	.message {
		font-family: serif;
		font-size: 16px;
		margin-bottom: 0;
		margin-top: 0;
		@media print, screen and(max-width: 1000px) {
			font-size: 11px;
		}
	}
}

.sns-link {
	font-size: 11px;
	@media print, screen and(min-width: 1001px) {
		position: absolute;
		z-index: 1;
		bottom: -6.2rem;
		left: 45%;
		font-size: 14px;
	}
	& p {
		margin: 0;
		font-weight: normal;
	}
	a {
		display: inline-block;
		img {
			width: 36px;
			margin-left: 1.5em;
		}
	}
}
.application {
	position: relative;
	font-size: 20px;
	width: 100%;
	@media print, screen and(min-width: 1001px) {
		max-width: 60%;
		& img {
			width: 385px;
		}
	}

	@media print, screen and(max-width: 1000px) {
		text-align: center;
		& img {
			width: 90%;
		}
	}
	.tel {
		line-height: 1.2em;
	}
}
.banner {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	@media print, screen and(min-width: 1001px) {
		max-width: 40%;
	}
	@media print, screen and(max-width: 1000px) {
		margin-top: 30px;
	}
	a img {
		@media print, screen and(max-width: 1000px) {
			max-width: 160px;
		}
	}
}
</style>
