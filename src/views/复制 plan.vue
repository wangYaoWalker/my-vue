<template>
	<div id="plan">
		<div class="title">
			<img src="../../static/image/logo@1x.png" />
			<div>上海市青浦区看守所</div>
		</div>
		<div class="chah"></div>
		<div class="logok">
			<div class="hjjc">
				<div></div>
			</div>
			<div>环境监测</div>
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

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	#plan {
		width: 100%;
		height: 100%;
		background-image: url(../../static/image/pingmiantu@1x.png);
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
			background-image: url(../../static/image/chah@1x.png);
			background-repeat: no-repeat;
			background-position: center center;
			/*backgroundsico*/
			position: absolute;
			left: 97%;
			top: 4%;
		}
		.logok {
			position: absolute;
			top: 43%;
			left: 8%;
			border: 5px solid #fff;
			border-radius: 100%;
			width: 100px;
			height: 100px;
			/*display: none;*/
			&:hover{
				display: block;
			}
			.hjjc {
				background: #2960d2;
				margin: 16px auto;
				width: 68px;
				height: 68px;
				border-radius: 100%;
				overflow: hidden;
				&:hover {
					background: #FFFFFF;
					div {
						background-image: url(../../static/image/hjjcblue@1x.png);
					}
				}
				div {
					height: 30px;
					width: 30px;
					background-image: url(../../static/image/hjjcgl@1x.png);
					background-size: 30px;
					margin: 20px auto;
					background-repeat: no-repeat;
					background-position: center center;
				}
			}
			div {
				color: #2960d2;
				text-align: center;
				margin-top: 26px;
			}
		}
	}
</style>