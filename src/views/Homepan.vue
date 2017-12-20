<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<!--<el-col :span="10">-->
				<!--<div class="tools" @click.prevent="collapse">-->
					<!--<i class="fa fa-align-justify">&#xe621;</i>-->
				<!--</div>-->
			<!--</el-col>-->
			<div class="logo-img"><img src="static/images/qp-logo.png" alt=""></div>
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>

			<el-col :span="4" class="userinfo">
				<!--<el-dropdown trigger="hover">-->
					<!--<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>-->
					<!--<el-dropdown-menu slot="dropdown">-->
						<!--<el-dropdown-item>我的消息</el-dropdown-item>-->
						<!--<el-dropdown-item>设置</el-dropdown-item>-->
						<!--<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>-->
					<!--</el-dropdown-menu>-->
				<!--</el-dropdown>-->
				<div class="user-admin"><span>张警官</span><span   @click="logout" class="user-logout">退出</span></div>
			</el-col>
		</el-col>

			<el-aside  class="left-con">
				<ul class="left-list">
					<li class="text">
						<p><img src="static/images/yangan.png" alt=""></p>
						<p class="p-text">烟感</p>
					</li>
					<li class="text">
						<p><img src="static/images/huanjing.png" alt=""></p>
						<p class="p-text">环境监测</p>
					</li>
					<li class="text">
						<p><img src="static/images/jingai.png" alt=""></p>
						<p class="p-text">井盖</p>
					</li>
					<li class="text">
						<p><img src="static/images/menjin.png" alt="" class="hj"></p>
						<p class="p-text">门禁</p>
					</li>
					<li class="text">
						<p><img src="static/images/huogui.png" alt=""></p>
						<p class="p-text">货柜</p>
					</li>
				</ul>
			</el-aside>

			<el-main class="iframe-con" >
				<ul class="se-menu clearfix">
					<li class="menu-te">报警监控</li>
					<li class="menu-te">项目查询</li>
					<li class="menu-te">设备状态</li>
				</ul>
				<iframe src="http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.ossalarm.alarmmonitor.Main" frameborder="1" width="100%" height="90%"></iframe>
			</el-main>
			
			
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				sysName:'上海市青浦区看守所物联网设备监控系统',
				collapsed:false,
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});


			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	/*@import '../static/iconfont/iconfont.css';*/
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 8%;
			line-height: 60px;
			background: $color-primary;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.user-logout{
					cursor: pointer;
				}
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
				.user-admin span{
					padding: 0 20px;
					font-size:14px;
					color:#ffffff;
					letter-spacing:0;
					opacity: 0.7;
				}
			}
			.logo {
				//width:230px;
				opacity: 0.8;
				height:60px;
				font-size: 18px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				/*border-right-width: 1px;*/
				/*border-right-style: solid;*/
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				/*width:230px;*/
				/*background-image: url("../static/images/qp-logo.png") no-repeat;*/

			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
			.logo-img{
				float: left;
				width: 50px;
				text-align: center;
				padding: 10px 20px;
			}
		}
		.clearfix:after{
			clear:both;
			display:block;
			content:"";
		}
		.iframe-con{
			width:92.2%;
			float:right;
			height:92%;
			padding:0;

			.se-menu{
				list-style: none;
				margin: 0;
				padding: 0;
				background: #e4e9ef;
				padding-left: 10px;
				height:8%;
				.menu-te{
					float:left;
					line-height: 50px;
					padding: 0 20px;
					font-size:14px;
					color:#717984;
					cursor: pointer;
				}
			}

		}
		.left-con{
			width:7.8% !important;
			background: #1d50b9;
			float:left;
			height:92%;
		}
		.left-list{
			list-style:none;
			text-align: center;
			margin: 0;
			padding: 0;

			.text{
				color:#fff;
				background: #2860d2;
				padding: 14px 0;
				margin-bottom: 1px;
				img{
					width:26px;
				}
				.p-text{
					margin: 0;
				}
				.hj{
					width:32px;
				}
			}
			.text:hover{
				background: #6696f9;
				cursor:pointer;
			}

		}

		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>