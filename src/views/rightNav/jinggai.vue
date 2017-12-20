<template>
	<el-row style="width: 100%;">
		<ul class="se-menu clearfix">
			<template v-for="(item,index) in childArr">
				<li   @click="nowClick(item.iframe,index)" :path = "item.iframe" :class="['menu-te', { yanganActive: flag[index]}]" >{{item.name}}</li>
			</template>
		</ul>
		<div class="singleIframe" id="myDIV">
			<iframe id="ifrmK"  src="http://bjutsg.com/biz/device/monitor"  scrolling="no" ></iframe>
		</div>
	</el-row>
</template>

<script>
    export default {
        data() {
            return {
                childArr: [{
                    iframe: 'http://bjutsg.com/biz/device/monitor',
                    name: '设备监控',
                },
                    {
                        iframe: 'http://bjutsg.com/biz/device/list',
                        name: '设备管理',
                    },
                ],
                flag:[true,false,false],
                flagStaic:true
            }
        },
        mounted(){

        },
        methods: {
            nowClick:function(pathv,index){
                var _this = this;
                document.getElementById('ifrmK').setAttribute('src',pathv);
                if(index == 0){
                    _this.flag = [true,false,false];
                    document.getElementById("myDIV").classList.remove("bojue-login");
                    document.getElementById("myDIV").classList.add("singleIframe");
                }else if(index == 1){
                    _this.flag = [false,true,false];
                    document.getElementById("myDIV").classList.remove("singleIframe");
                    document.getElementById("myDIV").classList.add("bojue-login");
                }else if(index == 2){
                    _this.flag = [false,false,true];
                }

            }
        }
    }



</script>

<style scoped lang="scss">
	body{
		overflow: hidden !important;
	}
	.bojue-login{
		position:absolute;
		top:-2%;
		left:-19.5%;
		height:120%;
		width:119.5%;
	}
	.singleIframe{
		position:absolute;
		top:-9%;
		left:-19.5%;
		height:120%;
		width:119.5%;
	}
	.adda{
		border: 1px solid red;
	}
	.yanganActive{
		color: #2960d2 !important;
	}
	.clearfix:after {
		clear: both;
		display: block;
		content: "";
	}

	#ifrmK {
		border: 0;
		height: 95%;
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
		z-index: 99999;
		position: relative;
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