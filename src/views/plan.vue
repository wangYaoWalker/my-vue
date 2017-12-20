<template>
	<div id="plan">
		<div class="title">
			<img src="../assets/image/logo@1x.png" />
			<div>上海市青浦区看守所</div>
		</div>
		<div @click="chaFun" class="chah"></div>
		<div class="logok">

		</div>

		<div @click="logoClick('/environControl',4)" class="hjjc">
			<div class="logobk"></div>
			<div class="quanK">
				<div>
					<span>环境监测</span>
				</div>
				<!--<span>环境监测</span>-->
			</div>
		</div>

		<div @click="logoClick('/menjin',6)" class="menjin">
			<div class="logobk"></div>
			<div class="quanK">
				<div>
					<span>门禁</span>
				</div>
				<!--<span>门禁</span>-->
			</div>
		</div>

		<div @click="logoClick('/yangan',3)" class="yangan">
			<div class="logobk"></div>
			<div class="quanK">
				<div>
					<span>烟感</span>
				</div>

			</div>
		</div>
		<div @click="logoClick('/container',7)" class="huogui">
			<div class="logobk"></div>
			<div class="quanK">
				<div>
					<span>货柜</span>
				</div>

			</div>
		</div>

		<div @click="logoClick('/jinggai',5)" class="jinggai">
			<div class="logobk"></div>
			<div class="quanK">
				<div>
					<span>井盖</span>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			var _this = this;
			//						setTimeout(function(){
			//							_this.chaFun();
			//						},13000);
		},
		methods: {
			chaFun: function() {
				this.$router.push({
					path: '/yangan'
				});
			},
			logoClick: function(nowPath, index) {
				console.log(nowPath, index);
				localStorage.nowGL = index;
				this.$router.push({
					path: nowPath
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	$colorBlue:#2960d2;
	$fontSize:16px;
	$weight600:600;
	$bktime:2s;
	$zitime:2s;
	#plan {
		width: 100%;
		height: 100%;
		/*background-image: url(../../static/image/pingmiantu@1x.png);*/
		background-image:url(../assets/image/pingmiantu@1x.png);
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
		.title {
			width: 92.27%;
			height: 44px;
			margin-left: 2.73%;
			margin-top: 1.8%;
			position: relative;
			img {
				width: 48px;
				height: 44px;
			}
			div {
				display: inline-block;
				/*opacity: 0.8;*/
				font-size: 20px;
				color: #1a4bb1;
				letter-spacing: 0;
				text-align: center;
				font-weight: $weight600;
				margin-left: 14px;
			}
		}
		.chah {
			/*opacity: 0.4;*/
			background: #000000;
			width: 30px;
			height: 30px;
			border-radius: 100%;
			/*background-image: url(../../static/image/chah@1x.png);*/
			background-image:url(../assets/image/chah@1x.png);
			background-repeat: no-repeat;
			background-position: center center;
			/*backgroundsico*/
			position: absolute;
			left: 97%;
			top: 4%;
		}
		.hjjc {
			background: #2960d2;
			width: 88px;
			height: 88px;
			border-radius: 100%;
			transition: background $bktime;
			position: absolute;
			top: 46%;
			left: 9%;
			&:hover {
				background: #FFFFFF;
				.logobk {
					background-image: url('');
					/*../../static/image/hjjcblue@1x.png*/
				}
				.quanK div {
					opacity: 1;
					/*display: block;*/
				}
			}
			.logobk {
				height: 40px;
				width: 40px;
				/*background-image: url(../../static/image/hjjcgl@1x.png);*/
				background-image:url(../assets/image/hjjcgl@1x.png);
				background-size: 40px;
				margin: 20px auto;
				background-repeat: no-repeat;
				background-position: center center;
			}
			.quanK {
				position: relative;
				width: 100px;
				height: 100px;
				color: $colorBlue;
				margin-top: 36px;
				div {
					transition: opacity $zitime;
					width: inherit;
					height: inherit;
					position: absolute;
					top: -108%;
					left: -12%;
					border: 6px solid #fff;
					border-radius: 100%;
					/*display: none;*/
					opacity: 0;
					span {
						font-size: 16px;
						font-weight: 600;
						letter-spacing: 2px;
						display: inline-block;
						width: 86px;
						/* margin-top: 10px; */
						text-align: right;
						/* display: none; */
						line-height: 100px;
						margin: 0 auto;
					}
				}
			}
		}
		.menjin {
			background: #2960d2;
			width: 88px;
			height: 88px;
			border-radius: 100%;
			transition: background $bktime;
			position: absolute;
			top: 35%;
			left: 38%;
			&:hover {
				background: #FFFFFF;
				.logobk {
					background-image: url('');
					/*../../static/image/menjinblue@1x.png*/
				}
				.quanK div {
					opacity: 1;
				}
			}
			.logobk {
				height: 45px;
				width: 45px;
				/*background-image: url(../../static/image/mjgl@1x.png);*/
				background-image:url(../assets/image/mjgl@1x.png);
				background-size: 40px;
				margin: 20px auto;
				background-repeat: no-repeat;
				background-position: center center;
			}
			.quanK {
				position: relative;
				width: 100px;
				height: 100px;
				color: $colorBlue;
				margin-top: 36px;
				div {
					width: inherit;
					height: inherit;
					transition: opacity $zitime;
					position: absolute;
					/*top: -108%;*/
					left: -12%;
					top: -113%;
					border: 6px solid #fff;
					border-radius: 100%;
					opacity: 0;
					span {
						font-weight: 600;
						font-size: 16px;
						letter-spacing: 2px;
						display: inline-block;
						width: 69px;
						text-align: right;
						margin: 36px auto;
					}
				}
			}
		}
		.yangan {
			background: #2960d2;
			width: 88px;
			height: 88px;
			border-radius: 100%;
			transition: background $zitime;
			position: absolute;
			top: 54%;
			left: 50%;
			&:hover {
				background: #FFFFFF;
				.logobk {
					background-image: url('');
					/*../../static/image/yanganblue@1x.png*/
				}
				.quanK div {
					opacity: 1;
				}
			}
			.logobk {
				height: 45px;
				width: 45px;
				/*background-image: url(../../static/image/yangangl@1x.png);*/
				background-image:url(../assets/image/yangangl@1x.png);
				background-size: 40px;
				margin: 20px auto;
				background-repeat: no-repeat;
				background-position: center center;
			}
			.quanK {
				position: relative;
				width: 100px;
				height: 100px;
				color: $colorBlue;
				margin-top: 36px;
				div {
					width: inherit;
					height: inherit;
					transition: opacity $zitime;
					opacity: 0;
					position: absolute;
					/*top: -108%;*/
					left: -12%;
					top: -113%;
					border: 6px solid #fff;
					border-radius: 100%;
					span {
						font-weight: $weight600;
						font-size: $fontSize;
						letter-spacing: 2px;
						display: inline-block;
						width: 69px;
						text-align: right;
						margin: 38px auto;
				}
				}
			}
		}
		.huogui {
			background: #2960d2;
			width: 88px;
			height: 88px;
			border-radius: 100%;
			transition: background $zitime;
			position: absolute;
			top: 33%;
			left: 58%;
			&:hover {
				background: #FFFFFF;
				.logobk {
					background-image: url('');
					/*../../static/image/huoguiblue@1x.png*/
				}
				.quanK div {
					opacity: 1;
				}
			}
			.logobk {
				height: 45px;
				width: 45px;
				/*background-image: url(../../static/image/hggl@1x.png);*/
				background-image:url(../assets/image/hggl@1x.png);
				background-size: 40px;
				margin: 20px auto;
				background-repeat: no-repeat;
				background-position: center center;
			}
			.quanK {
				position: relative;
				width: 100px;
				height: 100px;
				color: $colorBlue;
				margin-top: 36px;
				div {
					width: inherit;
					height: inherit;
					transition: opacity $zitime;
					opacity: 0;
					position: absolute;
					/*top: -108%;*/
					left: -12%;
					top: -113%;
					border: 6px solid #fff;
					border-radius: 100%;
					span {
					font-weight: $weight600;
					font-size: $fontSize;
					letter-spacing: 2px;
					display: inline-block;
					width: 102px;
					/*margin-top: 10px;*/
					text-align: center;
					margin: 0 auto;
					line-height: 100px;
				}
				}
			}
		}
		.jinggai {
			background: #2960d2;
			width: 88px;
			height: 88px;
			border-radius: 100%;
			transition: background $zitime;
			position: absolute;
			top: 70%;
			left: 74%;
			&:hover {
				background: #FFFFFF;
				.logobk {
					background-image: url('');
					/*../../static/image/jinggaiblue@1x.png*/
				}
				.quanK div{
					opacity: 1;
				}
			}
			.logobk {
				height: 45px;
				width: 45px;
				/*background-image: url(../../static/image/jggl@1x.png);*/
				background-image:url(../assets/image/jggl@1x.png);
				background-size: 40px;
				margin: 20px auto;
				background-repeat: no-repeat;
				background-position: center center;
			}
			.quanK {
				position: relative;
				width: 100px;
				height: 100px;
				color: $colorBlue;
				margin-top: 36px;
				div {
					width: inherit;
					height: inherit;
					transition: opacity $zitime;
					opacity: 0;
					position: absolute;
					left: -12%;
					top: -113%;
					border: 6px solid #fff;
					border-radius: 100%;
					span {
					font-weight: $weight600;
					font-size: $fontSize;
					letter-spacing: 2px;
					display: inline-block;
					width: 104px;
					text-align: center;
					margin: 0 auto;
					line-height: 100px;
				}
				}
			}
		}
	}
</style>