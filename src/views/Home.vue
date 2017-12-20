<template>
	<el-row class="container">
		<el-header class="h-header">
			<div class="home-title">
				<img class="home-img" src="../assets/image/logo@1x.png" />
				<div class="home-titlev">{{collapsed?'':sysName}}</div>
				<div class="title-right">
					<span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
					<span class="quit cursorv" divided @click="logout">退出</span>
				</div>
			</div>
		</el-header>
		<el-container style="height: 92%;width: 100%;">
			
			<!--导航-->
			<el-aside class="home-nav">
				<ul class="left-list">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<li :class="['text',(num == index)?'activeDanna':'']" :id="index" @click="navClick($event,index)" :path="item.iframe">
							<p>
								<!--<img :src=item.iconCls alt="" />-->
								<i :class="[item.iconCls,{'fontSize30':index>3},{'fontSize40':index == 4}]" :style="item.fontSize"></i>
							</p>
							<p class="p-text">{{item.children[0].name}}</p>
						</li>
					</template>
				</ul>
				</el-menu>
			</el-aside>
			<!--content-->
			<el-col class="content-wrapper" style="width: 92.2%;height: 100%;overflow: hidden;">
				<router-view style="height: inherit;"></router-view>
			</el-col>
		</el-container>
	</el-row>
</template>
<script>export default {
	data() {
		return {
			sysName: '上海市青浦区看守所物联网设备监控系统',
			collapsed: false,
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
			},
			flag: [,,, true, false, false, false, false],
			num: 3
		}
	},
	created() {
//		console.log('========',this.$router);
//		console.log(this.$router.options);
		var nowGL = localStorage.getItem('nowGL');
		var navIndex = localStorage.getItem('navIndex');
		if(nowGL){
			this.num = nowGL;
			localStorage.removeItem('nowGL');
		}
		if(navIndex){
            this.num = navIndex;
		}
	},
	methods: {
		navClick: function(event, index) {
			var _this = this;
			_this.num = index;
			localStorage.setItem('navIndex',index);
			console.log('index:', index, 'num:', _this.num);
			if(index == 3) {
				console.log(this);
				this.$router.push({
					path: '/yangan'
				});
				//					localStorage.nowPath = '/yangan';
			} else if(index == 4) {
				this.$router.push({
					path: '/environControl'
				});
				//					localStorage.nowPath = '/environControl';
			} else if(index == 5) {
				this.$router.push({
					path: '/jinggai'
				});
				//					localStorage.nowPath = '/jinggai';
			} else if(index == 6) {
				this.$router.push({
					path: '/menjin'
				});
			} else if(index == 7) {
				this.$router.push({
					path: '/container'
				});
			}

			//				if( index == 2 ){
			//					_this.flag = [,,true,false,false,false,false];
			//				}else if( index == 3 ){
			//					_this.flag = [,,false,true,false,false,false];
			//				}else if( index == 3 ){
			//					_this.flag = [,,false,false,true,false,false];
			//				}else if( index == 4 ){
			//					_this.flag = [,,false,false,false,true,false];
			//				}else if( index == 5 ){
			//					_this.flag = [,,false,false,false,false,true];
			//				}
		},
		onSubmit() {
			console.log('submit!');
		},
		handleopen() {
			//console.log('handleopen');
		},
		handleclose() {
			//console.log('handleclose');
		},
		handleselect: function(a, b) {},
		//退出登录
		logout: function() {
			console.log(111);
			var _this = this;
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('user');
				_this.$router.push('/login');
			}).catch(() => {

			});

		},
	},
	mounted() {
		var user = sessionStorage.getItem('user');
		if(user) {
			user = JSON.parse(user);
			this.sysUserName = user.name || '';
			this.sysUserAvatar = user.avatar || '';
		}
		//			console.log(this);
		//			if(!localStorage.nowPath) {
		//				this.$router.push({
		//					path: localStorage.nowPath
		//				});
		//			}
	}
}</script>

<style scoped lang="scss">
@import '~scss_vars';
.fontSize30{
	font-size: 30px;
}
.fontSize40{
	font-size: 40px;
}
.cursorv {
	cursor: pointer;
}

.clearfix:after {
	clear: both;
	display: block;
	content: "";
}


/*.se-menu {
		list-style: none;
		margin: 0;
		padding: 0;
		background: #e4e9ef;
		padding-left: 10px;
		height: 8%;
		min-height: 65px;
		.menu-te {
			float: left;
			line-height: 64px;
			padding: 0 20px;
			font-size: 14px;
			color: #717984;
			cursor: pointer;
		}
	}*/

.activeDanna {
	background: #6696f9!important;
	color: #fff!important;
	opacity: 1!important;
}

.container {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
	.h-header {
		background: #1d50b9;
		/*background: $color-primary;*/
		width: 100%;
		height: 8%;
		padding: 0 20px 0 0;
		/*add danna 2017-12-12*/
		.home-title {
			width: inherit;
			height: 55px;
			overflow: hidden;
			line-height: 44px;
			color: $fff;
			.home-img {
				height: 44px;
				width: 55px;
				vertical-align: middle;
				margin: 10px 12px;
			}
			.home-titlev {
				opacity: 0.7;
				font-family: PingFangTC-Semibold;
				font-size: 18px;
				letter-spacing: 0;
				text-align: left;
				height: inherit;
				display: inline-block;
				text-align: center;
				/*margin-left: 16px;*/
				font-weight: $weight600;
			}
			.title-right {
				opacity: 0.7;
				height: inherit;
				line-height: 57px;
				float: right;
				.quit {
					margin-left: 20px;
				}
			}
		}
	}
	.header {
		height: 60px;
		line-height: 60px;
		background: $color-primary;
		color: #fff;
		.userinfo {
			text-align: right;
			padding-right: 35px;
			float: right;
			.userinfo-inner {
				cursor: pointer;
				color: #fff;
				img {
					width: 40px;
					height: 40px;
					border-radius: 20px;
					margin: 10px 0px 10px 10px;
					float: right;
				}
			}
		}
		.logo {
			//width:230px;
			height: 60px;
			font-size: 22px;
			padding-left: 20px;
			padding-right: 20px;
			border-color: rgba(238, 241, 146, 0.3);
			border-right-width: 1px;
			border-right-style: solid;
			img {
				width: 40px;
				float: left;
				margin: 10px 10px 10px 18px;
			}
			.txt {
				color: #fff;
			}
		}
		.logo-width {
			width: 230px;
		}
		.logo-collapse-width {
			width: 60px
		}
		.tools {
			padding: 0px 23px;
			width: 14px;
			height: 60px;
			line-height: 60px;
			cursor: pointer;
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
			flex: 0 0 230px;
			width: 230px;
			// position: absolute;
			// top: 0px;
			// bottom: 0px;
			.el-menu {
				height: 100%;
			}
			.collapsed {
				width: 60px;
				.item {
					position: relative;
				}
				.submenu {
					position: absolute;
					top: 0px;
					left: 60px;
					z-index: 99999;
					height: auto;
					display: none;
				}
			}
		}
		.menu-collapsed {
			flex: 0 0 60px;
			width: 60px;
		}
		.menu-expanded {
			flex: 0 0 230px;
			width: 230px;
		}
		.content-container {
			// background: #f1f2f7;
			flex: 1;
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


/*=====================================*/

.home-nav {
	height: 100%;
	width: 7.8%!important;
	background: #1d50b9;
	min-width: 80px;
	/*float: left;*/
}

.left-list {
	list-style: none;
	text-align: center;
	margin: 0;
	padding: 0;
	.text {
		/*color: #fff;*/
		opacity: 0.7;
		color: #e2f4ff;
		background: #2860d2;
		padding: 14px 0;
		margin-bottom: 1px;
		i {
			width: 26px;
		}
		.p-text {
			margin: 0;
		}
		.hj {
			width: 32px;
		}
	}
	.text:hover {
		background: #6696f9;
		cursor: pointer;
	}
}</style>
<!--<script type="text/javascript">
		console.log(111);
			$('.left-list>li').eq(0).addClass(activeDanna);
			$('.left-list>li').click(function(){
				var $this = $(this);
				$this.addClass("activeDanna").siblings().removeClass("activeDanna");
			})
</script>-->