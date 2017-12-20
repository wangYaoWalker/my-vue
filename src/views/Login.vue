<template>
	<div id="login-vue">
		<div class="login-title">
			<img class="login-img" src="../assets/image/logo@1x.png" />
			<div>上海市青浦区看守所</div>
		</div>
		<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
			<h3 class="title">物联网设备监控系统</h3>
			<el-form-item class="ipt-style" prop="account">
				<el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="用户名"></el-input>
			</el-form-item>
			<el-form-item class="ipt-style" prop="checkPass">
				<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
			</el-form-item>
			<!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
			<el-form-item class="ipt-style login-online">
				<el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
				<!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
			</el-form-item>
			<el-form-item class="ck-style">
				<el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
			</el-form-item>

		</el-form>

		<!--adddanna 2017-12-12-->
		<div class="login-bk-btm"></div>
		<div class="login-bk-top"></div>
	</div>
</template>

<script>
	import { requestLogin } from '../api/api.js';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				logining: false,
				ruleForm2: {
					account: 'admin',
					checkPass: '123456'
				},
				rules2: {
					account: [{
							required: true,
							message: '请输入账号',
							trigger: 'blur'
						},
						//{ validator: validaePass }
					],
					checkPass: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						//{ validator: validaePass2 }
					]
				},
				checked: false
			};
		},
		methods: {
			handleReset2() {
				this.$refs.ruleForm2.resetFields();
			},
			handleSubmit2(ev) {
				var _this = this;
				this.$refs.ruleForm2.validate((valid) => {
					if(valid) {
						//_this.$router.replace('/table');
						this.logining = true;
						//NProgress.start();
						var loginParams = {
							username: this.ruleForm2.account,
							password: this.ruleForm2.checkPass
						};
						requestLogin(loginParams).then(data => {
							this.logining = false;
							//NProgress.done();
							let {
								msg,
								code,
								user
							} = data.data;
							if(code !== 200) {
								this.$message({
									message: msg,
									type: 'error'
								});
							} else {
								sessionStorage.setItem('user', JSON.stringify(user));
								this.$router.push({
									path: '/plan'///yangan
								});
								localStorage.nowPath = "/yangan";
							}
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~scss_vars';
	#login-vue {
		width: 100%;
		height: 100%;
		/*add danna*/
		background: $color-primary;
		position: relative;
		overflow: hidden;
		.login-container {
			/*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
			-webkit-border-radius: 5px;
			border-radius: 5px;
			-moz-border-radius: 5px;
			background-clip: padding-box;
			/*margin: 180px auto;*/
			width: 350px;
			height: 310px;
			padding: 35px 35px 15px 35px;
			background: #fff;
			border: 1px solid #2960d2;
			box-shadow: 0 0 25px #1a4bb1;
			background-image: linear-gradient(-180deg, #7ba5fb 0%, #ffffff 100%);
			/*add danna*/
			position: fixed;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			z-index: 9999;
			.ipt-style {
				width: 280px;
				height: 44px;
				margin: 0 auto 16px auto;
			}
			.el-button--primary {
				color: #fff;
				background-color: #2960d2;
				font-family: $font-family;
				font-size: 18px;
				letter-spacing: 0;
				text-align: center;
				
			}
			.ck-style {
				width: 280px;
				height: 44px;
				margin: -5px auto;
				font-family: $font-family;
				font-size: 14px;
				color: #666666;
				letter-spacing: 0;
				text-align: left;
			}
			.title {
				margin: 0px auto 40px auto;
				text-align: center;
				/*color: #505458;*/
				font-size: 24px;
				color: #2e53a0;
				letter-spacing: 0;
				font-weight: $weight600;
			}
			.remember {
				margin: 0px 0px 35px 0px;
			}
		}
		/*add danna 2017-12-12*/
		.login-title {
			width: inherit;
			height: 50px;
			margin-top: 21px;
			overflow: hidden;
			.login-img {
				height: 44px;
				width: 55px;
				vertical-align: middle;
				margin-left: 27px;
			}
			& div {
				height: inherit;
				opacity: 0.8;
				display: inline-block;
				font-size: 20px;
				color: #d3e0fa;
				letter-spacing: 0;
				text-align: center;
				line-height: 50px;
				margin-left: 16px;
				font-weight: $weight600;
			}
		}
		.login-bk-btm {
			position: absolute;
			left: -53px;
			bottom: 0;
			/*background: #1a4bb1;*/
			/*border: 3px solid #1a4bb1;*/
			width: 571px;
			height: 325px;
			/*background-image: url(../../static/image/loginbk1@1x.png);*/
			background-image:url(../assets/image/loginbk1@1x.png);
			background-repeat: no-repeat;
			background-size: contain;
			z-index: 10;
		}
		.login-bk-top {
			/*background:#6396ff;*/
			/*border: 3px solid #6396ff;*/
			/*left: -61px;
    top: 580px;*/
			width: 346px;
			height: 196px;
			position: absolute;
			left: -63px;
			bottom: 0;
			/*top: 539px;*/
			/*background-image: url(../../static/image/loginbk2@1x.png);*/
			background-image:url(../assets/image/loginbk2@1x.png);
			background-repeat: no-repeat;
			background-size: contain;
			z-index: 12;
		}
	}
</style>