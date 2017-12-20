<template>
	<el-row style="width: 100%;">
		<ul class="se-menu clearfix">
			<template v-for="(item,index) in childArr">
				<li @click="nowClick(item.iframe,index)" :path = "item.iframe" :class="['menu-te', { yanganActive: flag[index]}]" >{{item.name}}</li>
			</template>
		</ul>
		<iframe id="ifrmK" src="http://47.97.114.102:8080/#"></iframe>
		</div>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				childArr: [{
						iframe: 'http://47.97.114.102:8080/#',
						name: '实时监测'
					},
					{
						iframe: 'http://47.97.114.102:8080/#/history',
						name: '历史数据'
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
		height:90%;
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