<template>
	<el-row style="width: 100%;">
		<ul class="se-menu clearfix">
			<template v-for="(item,index) in childArr">
				<li @click="nowClick(item.iframe,index)" :path = "item.iframe" :class="['menu-te', { yanganActive: flag[index]}]" >{{item.name}}</li>
			</template>
		</ul>
		<iframe id="ifrmK" src="http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.ossalarm.alarmmonitor.Main"></iframe>
		</div>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				childArr: [{
						iframe: 'http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.ossalarm.alarmmonitor.Main',
						name: '这是门禁的'
					},
					{
						iframe: 'http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.osscs.alarmproject.Main',
						name: '项目查询'
					}, {
						iframe: 'http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.osscs.query202.Main',
						name: '设备状态'
					},
				],
				flag:[true,false,false],
				flagStaic:true
			}
		},
		methods: {
			nowClick:function(pathv,index){
				var _this = this;
				document.getElementById('ifrmK').setAttribute('src',pathv);
				if(index == 0){
					_this.flag = [true,false,false];
				}else if(index == 1){
					_this.flag = [false,true,false];
				}else if(index == 2){
					_this.flag = [false,false,true];
				}
			}
		}
	}
</script>

<style scoped lang="scss">
    .yanganActive{
    	color: #2960d2!important;
    }
	.clearfix:after {
		clear: both;
		display: block;
		content: "";
	}
	
	#ifrmK {
		border: 0;
		height: 83%;
		width: 100%;
	}
	
	.se-menu {
		width: 100%;
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
	}
</style>