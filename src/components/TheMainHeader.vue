<template>
	<div :class="['main-header', { 'nav-open': isMenuOpen }, { 'session-open': isSessionOpen }]">
		<div class="main-header-inner">
			<div class="logo">
				<div class="logo-inner">
					<g-link to="/">
						<h1 class="main-header-title">
							<img src="../assets/img/common/main_logo.svg" alt="能セン 学び方を学ぶ" />
						</h1>
					</g-link>
				</div>
			</div>

			<div class="information">
				<div class="application">
					<div class="tel overdisplay item">
						<a href="tel:0356326011">
							<img src="../assets/img/common/tel.svg" alt="03-5632-6011 （祝日を除く平日土日9:00~18:00）" />
						</a>
					</div>
					<div class="form item">
						<a @click="openModal">
							<img src="../assets/img/common/session.svg" alt="講習会お申し込み" />
						</a>
					</div>
					<div class="contact item">
						<g-link to="/contact" target="_blank" rel="noopener noreferrer">
							<img src="../assets/img/common/contact.svg" alt="お問い合わせ" />
						</g-link>
					</div>
				</div>
			</div>
			<div class="togglebutton underdisplay" @click="isMenuOpen = !isMenuOpen">
				<div class="togglebutton-inner">
					<i></i>
					<i></i>
					<i></i>
				</div>
			</div>
		</div>
		<nav class="pagelink-wrapper">
			<div class="pagelink-inner">
				<OnlineInfo displayNone="sp_none" />
				<section class="navi-inner nav-inner01">
					<div class="pagelink-title pagelink-title-session" @click="isSessionOpen = !isSessionOpen">
						<p>講習会情報</p>
						<div class="rolldown">
							<ul>
								<g-link to="/denken3">
									<li class="denken">
										第三種<br class="overdisplay" />電気主任技術者
										<IconOnline iconClass="online_icon_header" />
									</li>
								</g-link>
								<g-link to="/koujishi1">
									<li class="denkikouji">第一種<br class="overdisplay" />電気工事士</li>
								</g-link>
								<g-link to="/koujishi2">
									<li class="denkikouji">第二種<br class="overdisplay" />電気工事士</li>
								</g-link>
								<g-link to="/denkikouji-s">
									<li class="denkikoujisekou">
										1・2級<br class="overdisplay" />電気工事施工管理技士
										<IconOnline iconClass="online_icon_header" />
									</li>
								</g-link>
								<g-link to="/kenchiku-s">
									<li class="kenchiku">
										1・2級<br class="overdisplay" />建築施工管理技士
										<IconOnline iconClass="online_icon_header" />
									</li>
								</g-link>
								<g-link to="/kankouji-s">
									<li class="kankouji">1・2級<br class="overdisplay" />管工事施工管理技士</li>
								</g-link>
								<g-link to="/doboku-s">
									<li class="doboku">
										1・2級<br class="overdisplay" />土木施工管理技士
										<IconOnline iconClass="online_icon_header" />
									</li>
								</g-link>
								<g-link to="/kyuusui">
									<li class="kyuusui">給水装置工事<br class="overdisplay" />主任技術者</li>
								</g-link>
							</ul>
						</div>
					</div>
					<div class="pagelink-title">
						<g-link to="/licenses">
							<p>学べる資格と講習会</p>
						</g-link>
					</div>
					<div class="pagelink-title">
						<g-link to="/teachers">
							<p>講師を知る</p>
						</g-link>
					</div>
					<div class="pagelink-title">
						<g-link to="/faq">
							<p>よくあるご質問</p>
						</g-link>
					</div>
					<div class="pagelink-title">
						<g-link to="/private-lecture">
							<p>出張講習のご案内</p>
						</g-link>
					</div>
					<div class="pagelink-title">
						<g-link to="/goods-sales" target="_blank" rel="noopener noreferrer">
							<p>テキスト・工具販売</p>
						</g-link>
					</div>
				</section>

				<section class="navi-inner nav-inner02 underdisplay">
					<a @click="openModal">
						<img src="../assets/img/common/toggle_menu/application_button.svg" alt="講習会お申し込み" />
					</a>
					<g-link to="/contact" target="_blank" rel="noopener noreferrer">
						<img src="../assets/img/common/toggle_menu/contact_button.svg" alt="お問い合わせ" />
					</g-link>
				</section>
				<section class="navi-inner nav-inner03 underdisplay">
					<div class="pagelink-title">
						<g-link to="/company">
							<p>会社概要</p>
						</g-link>
					</div>
					<div class="pagelink-title">
						<g-link to="/benefits">
							<p>給付制度</p>
						</g-link>
					</div>
					<div class="pagelink-title">
						<g-link to="/guide">
							<p>特定商取引法に基づく表記</p>
						</g-link>
					</div>
					<div class="pagelink-title">
						<g-link to="/privacy">
							<p>プライバシーポリシー</p>
						</g-link>
					</div>
				</section>
				<section class="navi-inner nav-inner04 underdisplay">
					<div class="tel">
						<a href="tel:0356326011">
							<img src="../assets/img/common/toggle_menu/tel_sp.svg" alt="03-5632-6011（祝日を除く平日土日9:00~18:00）" />
						</a>
					</div>
					<p class="sns-link twitter-link">
						<a href="https://twitter.com/nouryoku1983" target="_blank" rel="noopener noreferrer">
							<img src="../assets/img/common/twitter.svg" alt="twitter" />
						</a>
					</p>
				</section>
				<button class="close underdisplay" @click="isMenuOpen = false">
					<img src="../assets/img/common/toggle_menu/close_button.svg" alt="close" />
				</button>
			</div>
		</nav>
		<!-- モーダル -->
		<MyModal @close="closeModal" v-if="modal">
			<!-- default スロットコンテンツ -->
			<div class="modal-application">
				<div class="form item">
					<img src="../assets/img/common/session.svg" alt="講習会お申し込み" />
				</div>
				<ul>
					<li class="denken">
						<p class="title">第三種<br class="overdisplay" />電気主任技術者</p>
						<g-link to="/denken3-application" class="application-form-link"> お申し込みフォーム </g-link><br />
						<!-- <a
              href="/3_denken_tuugaku_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 通学・オンライン(PDF)
            </a>
            <br />
            <a
              href="/3_denken_tuushin_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 通信(PDF)
            </a> -->
						<a href="/3_denken_FAX_2022_after.pdf" target="_blank" class="application-fax-link">
							FAX用紙(PDF)
						</a>
					</li>
					<!-- <li class="denkikouji">
            <p class="title">第一種<br class="overdisplay" />電気工事士</p>
            <g-link to="/koujishi-application" class="application-form-link">
              お申し込みフォーム </g-link
            ><br />
            <a
              href="/1_denki_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙(PDF)
            </a>
          </li> -->
					<li class="denkikouji">
						<p class="title">第二種<br class="overdisplay" />電気工事士</p>
						<g-link to="/koujishi-application" class="application-form-link"> お申し込みフォーム </g-link><br />
						<a href="/2_denki_FAX_2022year.pdf" target="_blank" rel="noopener noreferrer" class="application-fax-link">
							FAX用紙(PDF)
						</a>
					</li>
					<!-- <li class="denkikoujisekou">
            <p class="title">
              1・2級<br class="overdisplay" />電気工事施工管理技士
            </p>
            <g-link
              to="/denkikouji-s-application"
              class="application-form-link"
            >
              お申し込みフォーム </g-link
            ><br />
            <a
              href="/denkikouji_1_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 1級(PDF) </a
            ><br />
            <a
              href="/denkikouji_2_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 2級(PDF)
            </a>
          </li> -->
					<li class="kenchiku">
						<p class="title">1・2級<br class="overdisplay" />建築施工管理技士</p>
						<g-link to="/kenchiku-s-application" class="application-form-link"> お申し込みフォーム </g-link><br />
						<!-- <a
              href="/kenchiku_1_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 1級(PDF) </a
            ><br />
            <a
              href="/kenchiku_2_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 2級(PDF)
            </a> -->
						<a href="/kenchiku_FAX_2022year.pdf" target="_blank" rel="noopener noreferrer" class="application-fax-link">
							FAX用紙(PDF)
						</a>
					</li>
					<!-- <li class="kankouji">
            <p class="title">
              1・2級<br class="overdisplay" />管工事施工管理技士
            </p>
            <g-link to="/kankouji-s-application" class="application-form-link">
              お申し込みフォーム </g-link
            ><br />
            <a
              href="/kankouji_1_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 1級(PDF) </a
            ><br />
            <a
              href="/kankouji_2_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 2級(PDF)
            </a>
          </li> -->
					<li class="doboku">
						<p class="title">1・2級<br class="overdisplay" />土木施工管理技士</p>
						<g-link to="/doboku-s-application" class="application-form-link"> お申し込みフォーム </g-link><br />
						<!-- <a
              href="/doboku_1_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 1級(PDF) </a
            ><br />
            <a
              href="/doboku_2_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 2級(PDF)
            </a> -->
						<a href="/doboku_FAX_2022year.pdf" target="_blank" rel="noopener noreferrer" class="application-fax-link">
							FAX用紙(PDF)
						</a>
					</li>
					<!-- <li class="kyuusui">
            <p class="title">
              給水装置工事<br class="overdisplay" />主任技術者
            </p>
            <g-link to="/kyuusui-application" class="application-form-link">
              お申し込みフォーム </g-link
            ><br />
            <a
              href="/kyuusui_FAX_31year.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="application-fax-link"
            >
              FAX用紙 (PDF)
            </a>
          </li> -->
				</ul>
			</div>
			<!-- /default -->
		</MyModal>

		<OnlineInfo displayNone="pc_none" />
	</div>
</template>

<script>
import MyModal from '@/components/MyModal.vue';
import OnlineInfo from '@/components/OnlineInfo.vue';
import IconOnline from '@/components/icons/IconOnline.vue';
export default {
	name: '',
	components: {
		MyModal,
		OnlineInfo,
		IconOnline,
	},
	data() {
		return {
			isMenuOpen: false,
			isSessionOpen: false,
			modal: false,
		};
	},
	methods: {
		openModal() {
			this.modal = true;
		},
		closeModal() {
			this.modal = false;
		},
	},
};
</script>
<style lang="scss" scoped>
.main-header {
	width: 100%;
	position: fixed;
	z-index: 1;
	background-color: #fff;
	transition: background-color 0.3s cubic-bezier(0.35, 0.13, 0.35, 0.88);
	top: 0;
	@media print, screen and(min-width: 768px) {
		box-shadow: 0px 5px 5px 0px #0000005c;
	}
	&:not(.nav-open):not(.session-open):not(.mini-header) {
		background-color: transparent;
		box-shadow: 0px 0px 0px 0px #0000005c;
	}
	&:not(.nav-open) {
		.pagelink-wrapper {
			@media print, screen and(max-width: 1000px) {
				height: 0;
			}
		}
	}
	&:not(.session-open) {
		.rolldown {
			height: 0;
			opacity: 0;
		}
		.pagelink-title-session:after {
			@media print, screen and(min-width: 1001px) {
				transform: rotate(0deg);
			}
			@media print, screen and(max-width: 1000px) {
				content: url('../assets/img/icon/plus.svg');
			}
		}
	}
	&.session-open,
	&.mini-header {
		.logo {
			@media print, screen and(min-width: 1101px) {
				max-width: 120px;
				position: relative;
				margin-top: 0.5em;
			}
			@media print, screen and(max-width: 1100px) {
				max-width: 75px;
				position: relative;
			}
			&::after {
				position: absolute;
				content: '一般社団法人 能力開発研修センター';
				transform: scale(0.6);
				font-size: 11px;
				width: 200px;
				color: #3b241a;
				left: -4.8em;
				top: 80%; //ロゴのh1化によるズレ調整
				@media print, screen and(min-width: 1101px) {
					transform: scale(1);
					left: -2em;
					top: 100%; //ロゴのh1化によるズレ調整
				}
			}
		}
	}
}
.main-header-inner {
	display: flex;
	justify-content: space-between;
	font-weight: 500;
	align-items: flex-start;
	width: 95%;
	position: relative;
	z-index: 0;
	pointer-events: none; //透明な時後ろの要素を押せるように
	& * {
		pointer-events: all; //中の要素はクリックできるように
	}
	@media print, screen and(min-width: 1001px) {
		height: 100px;
		margin: 10px auto;
	}
	@media print, screen and(max-width: 1000px) {
		height: 50px;
		margin: 10px auto;
		width: 90%;
	}
}
.logo {
	width: 100%;
	// max-width: 150px;
	position: relative;
	transition: max-width 0.3s ease-in-out;
	@media print, screen and(min-width: 1200px) {
		max-width: 200px;
	}
	@media print, screen and(max-width: 1200px) {
		max-width: 90px;
	}
	.logo-inner {
		width: 100%;
	}
}
.information {
	position: relative;
	@media print, screen and(min-width: 1001px) {
		width: 100%;
		margin-top: 1em;
	}
	@media print, screen and(max-width: 1000px) {
		// overflow-y: scroll;
		margin-left: 15%;
		align-self: center;
	}
}
.application {
	position: relative;
	font-size: 20px;
	width: 100%;
	@media print, screen and(min-width: 1001px) {
		// margin-left: calc(100% - 670px); //202101 オンライン講座案内のため
		margin-left: calc(100% - 655px); //営業時間の表記変更に伴うレイアウト変更
		// max-width: 670px;
		max-width: 660px; //営業時間の表記変更に伴うレイアウト変更
		margin-bottom: 20px;
	}
	@media print, screen and(min-width: 551px) {
		justify-content: space-between;
		display: flex;
	}
	.item {
		line-height: 1.2em;
		@media print, screen and(min-width: 501px) {
			margin: 0 10px;
		}
		img {
			@media print, screen and(max-width: 500px) {
				height: 16px;
			}
		}
	}
}
.togglebutton {
	cursor: pointer;
	width: 37px;
	height: 37px;
	top: 20%;
	position: relative;
	background-color: var(--orange);
	border-radius: 100%;
	text-align: center;
	&:before {
		content: 'menu';
		font-size: 10px;
		font-weight: bold;
		transform: scale(0.9);
		position: absolute;
		top: -1.7em;
		color: var(--orange);
		left: 0;
		right: 0;
		margin: auto;
	}
	.togglebutton-inner {
		width: 60%;
		height: 60%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	i {
		position: absolute;
		background-color: #fff;
		width: 100%;
		height: 100%;
		display: block;
		transform: scale(1, 0.05);
		transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}
	i:nth-child(1) {
		transform: scale(1, 0.05) translateY(0%);
	}
	i:nth-child(2) {
		transform: scale(1, 0.05) translateY(600%);
	}
	i:nth-child(3) {
		transform: scale(1, 0.05) translateY(-600%);
	}
}
.pagelink-wrapper {
	// height: 100%;
	position: absolute;
	z-index: 100;
	top: 0;
	transition: height 0.3s cubic-bezier(0.35, 0.13, 0.35, 0.88);
	color: #3b241a;
	font-weight: bold;
	@media print, screen and(min-width: 1001px) {
		right: 3%;
		max-width: 900px;
		width: 100%;
		margin-top: 70px;
	}
	@media print, screen and(max-width: 1200px) {
		width: 90%;
	}
	@media print, screen and(max-width: 1000px) {
		height: calc(100vh - 70px);
		width: 100%;
		background-color: #fff;
		margin-top: 70px;
		overflow: scroll;
	}
}
.pagelink-inner {
	margin: 0 auto;
	position: relative;
	@media print, screen and(max-width: 1000px) {
		padding-bottom: 30px;
		padding-top: 10px;
		max-width: 90%;
	}
	@media print, screen and(max-width: 430px) {
		padding-bottom: 60px;
	}
}
.nav-inner01 {
	position: relative;
	font-size: 14px;
	@media print, screen and(min-width: 1001px) {
		justify-content: space-between;
		display: flex;
		flex-wrap: wrap;
	}
}
.pagelink-title-session {
	cursor: pointer;
	p {
		transition: 0.2s opacity ease-in;
		&:hover {
			opacity: 0.7;
		}
	}
}
.pagelink-title {
	position: relative;
	// margin: 0 10px;
	p {
		display: inline-block;
		margin: 0;
		line-height: 3em;
		@media print, screen and(max-width: 1000px) {
			background-color: #fff;
			padding-right: 10px;
		}
	}
	&:before {
		@media print, screen and(max-width: 1000px) {
			content: '';
			width: 90%;
			height: 2px;
			background-color: #ccc;
			display: inline-block;
			position: absolute;
			right: 10%;
			top: 1.5em;
			z-index: -1;
		}
	}
	&:after {
		content: url('../assets/img/icon/double_arrow_right_orange.svg');
		height: 1.2em;
		width: 1.2em;
		display: inline-block;
		vertical-align: sub;
		position: relative;
		@media print, screen and(min-width: 1001px) {
			margin-left: 10px;
		}
		@media print, screen and(max-width: 1001px) {
			position: absolute;
			top: 0.8em;
			right: 0;
		}
	}
}
.pagelink-title:last-child {
	@media print, screen and(min-width: 1001px) {
		margin-right: 0px;
	}
}
.pagelink-title-session:after {
	@media print, screen and(max-width: 1000px) {
		content: url('../assets/img/icon/minus.svg');
	}
	@media print, screen and(min-width: 1001px) {
		transform: rotate(90deg);
		transition: transform 0.3s cubic-bezier(0.35, 0.13, 0.35, 0.88);
	}
}
.rolldown {
	font-size: 14px;
	width: 100%;
	left: 0;
	background-color: #fff;
	transition: height, opacity 0.3s cubic-bezier(0.35, 0.13, 0.35, 0.88);
	z-index: 0;
	opacity: 1;
	@media print, screen and(min-width: 1001px) {
		position: fixed;
		top: 110px;
		height: 230px; //202101
		overflow: hidden;
		box-shadow: 0px 5px 5px 0px #0000005c;
	}
	@media print, screen and(max-width: 1000px) {
		overflow: hidden;
		height: auto;
	}
	ul {
		max-width: 900px;
		width: 100%;
		margin: 0 auto;
		padding-bottom: 40px; //202101
		@media print, screen and(min-width: 1001px) {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		@media print, screen and(max-width: 1000px) {
			margin-left: 1em;
		}
		li {
			position: relative; //202101
			text-align: left;
			display: flex;
			align-items: center;
			line-height: 1.5em;
			@media print, screen and(min-width: 1001px) {
				width: 210px;
				margin-top: 40px; //202101
			}
			@media print, screen and(max-width: 1000px) {
				padding: 0.5em 0;
			}
			&:before {
				height: 50px;
				width: 50px;
				display: inline-block;
				margin-right: 20px;
				@media print, screen and(max-width: 1000px) {
					height: 1.2em;
					width: 1.2em;
				}
			}
			&:after {
				@media print, screen and(max-width: 1000px) {
					content: url('../assets/img/icon/double_arrow_right_orange.svg');
					height: 1.2em;
					width: 1.2em;
					display: inline-block;
					margin-left: 20px;
					vertical-align: sub;
				}
			}
			&.denken:before {
				content: url('../assets/img/icon/qualification/denken.svg');
			}
			&.denkikouji:before {
				content: url('../assets/img/icon/qualification/denkikouji.svg');
			}
			&.denkikoujisekou:before {
				content: url('../assets/img/icon/qualification/denkikoujisekou.svg');
			}
			&.doboku:before {
				content: url('../assets/img/icon/qualification/doboku.svg');
			}
			&.kankouji:before {
				content: url('../assets/img/icon/qualification/kankouji.svg');
			}
			&.kenchiku:before {
				content: url('../assets/img/icon/qualification/kenchiku.svg');
			}
			&.kyuusui:before {
				content: url('../assets/img/icon/qualification/kyuusui.svg');
			}
		}
	}
}
.nav-inner02 {
	display: flex;
	position: relative;
	justify-content: space-between;
	a {
		width: calc(50% - 5px);
	}
}
.nav-inner04 {
	display: flex;
	position: relative;
	justify-content: space-between;
	.tel {
		width: 100%;
		max-width: 170px;
	}
	.sns-link {
		display: inline-block;
		width: 30px;
		margin: 0;
	}
}
.navi-inner + .navi-inner {
	margin-top: 30px;
}
.close {
	padding: 0;
	width: 100%;
	background-color: #fff;
	margin-top: 30px;
	border: 0;
}
.modal-application {
	font-size: 14px;
	width: 100%;
	left: 0;
	background-color: #fff;
	z-index: 0;
	font-weight: bold;
	.item {
		text-align: center;
		margin-top: 30px;
	}
	ul {
		max-width: 900px;
		width: 100%;
		margin: 0 auto;
		padding-bottom: 30px;
		@media print, screen and(min-width: 1001px) {
			display: flex;
			align-items: flex-start;
			flex-wrap: wrap;
			justify-content: center;
		}
		@media print, screen and(max-width: 1000px) {
			margin-left: 1em;
		}
		@media print, screen and(max-width: 321px) {
			margin-left: 0;
		}
		li {
			position: relative; //202101 for online
			text-align: left;
			// display: flex;
			align-items: center;
			@media print, screen and(min-width: 1001px) {
				width: 210px;
				margin-top: 30px;
			}
			.application-form-link {
				&:after {
					content: url('../assets/img/icon/double_arrow_right_orange.svg');
					height: 1.2em;
					width: 1.2em;
					display: inline-block;
					margin-left: 20px;
					vertical-align: sub;
				}
			}
			&.denken {
				.application-form-link,
				.application-fax-link {
					color: #e60039;
				}
				.title:before {
					content: url('../assets/img/icon/qualification/denken.svg');
				}
			}
			&.denkikouji {
				.application-form-link,
				.application-fax-link {
					color: #b60081;
				}
				.title:before {
					content: url('../assets/img/icon/qualification/denkikouji.svg');
				}
			}
			&.denkikoujisekou {
				.application-form-link,
				.application-fax-link {
					color: #00a73c;
				}
				.title:before {
					content: url('../assets/img/icon/qualification/denkikoujisekou.svg');
				}
			}
			&.doboku {
				.application-form-link,
				.application-fax-link {
					color: #00a73c;
				}
				.title:before {
					content: url('../assets/img/icon/qualification/doboku.svg');
				}
			}
			&.kankouji {
				.application-form-link,
				.application-fax-link {
					color: #00a73c;
				}
				.title:before {
					content: url('../assets/img/icon/qualification/kankouji.svg');
				}
			}
			&.kenchiku {
				.application-form-link,
				.application-fax-link {
					color: #00a73c;
				}
				.title:before {
					content: url('../assets/img/icon/qualification/kenchiku.svg');
				}
			}
			&.kyuusui {
				.application-form-link,
				.application-fax-link {
					color: #00afcc;
				}
				.title:before {
					content: url('../assets/img/icon/qualification/kyuusui.svg');
				}
			}
		}
		.title {
			display: flex;
			&:before {
				height: 50px;
				width: 50px;
				display: inline-block;
				margin-right: 20px;
				@media print, screen and(max-width: 1000px) {
					height: 1.2em;
					width: 1.2em;
				}
				@media print, screen and(max-width: 321px) {
					margin-right: 10px;
				}
			}
		}
	}
}
.overdisplay {
	@media print, screen and(max-width: 1000px) {
		display: none;
	}
}
.underdisplay {
	@media print, screen and(min-width: 1001px) {
		display: none;
	}
}
.main-header-title {
	margin: 0;
	display: inline-flex;
}
</style>
