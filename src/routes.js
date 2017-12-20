import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import yangan from './views/rightNav/yangan.vue'
import environControl from './views/rightNav/environControl'
import jinggai from './views/rightNav/jinggai'
import container from './views/rightNav/container'
import menjin from './views/rightNav/menjin'
import plan from './views/plan'

import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
//import echarts from './views/charts/echarts.vue'

let routes = [{
		path: '/login',
		component: Login,
		name: '',
		hidden: true
	}, {
		path: '/404',
		component: NotFound,
		name: '',
		hidden: true
	},{
		path: '/plan',
		component: plan,
		name: '',
		hidden: true
	},{
		path: '/',
		component: Home,
		name: '烟感',
		iconCls: 'icon iconfont icon-yangan', //图标样式class
		iframe: 'http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.ossalarm.alarmmonitor.Main',
		leaf: true, //只有一个节点
		children: [{
			path: '/yangan',
			component: yangan,
			name: '烟感',
			hidden: true
		}, ],
	},
	{
		path: '/',
		component: Home,
		name: '环境监测',
		iconCls: 'icon iconfont icon-huanjingjiance',
		iframe: 'http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.ossalarm.alarmmonitor.Main',
		leaf: true, //只有一个节点
		children: [{
			path: '/environControl',
			component: environControl,
			name: '环境监测'
		}]
	},
	{
		path: '/',
		component: Home,
		name: '',
		iconCls: 'icon iconfont icon-manhole-cover',
		iframe: 'http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.ossalarm.alarmmonitor.Main',
		leaf: true, //只有一个节点
		children: [{
			path: '/jinggai',
			component: jinggai,
			name: '井盖'
		}]
	},
	{
		path: '/',
		component: Home,
		name: '',
		iconCls: 'icon iconfont icon-door_bashou',
		iframe: 'http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.ossalarm.alarmmonitor.Main',
		leaf: true, //只有一个节点
		children: [{
			path: '/menjin',
			component: menjin,
			name: '门禁'
		}]
	},
	{
		path: '/',
		component: Home,
		name: '',
		iconCls: 'icon iconfont icon-iconset0499',
		iframe: 'http://hxtest.hothink.net.cn/dm1/?token=c2hrc3MxLDEyM2FiYw==&hideHeader=yes&goto=divo.ossalarm.alarmmonitor.Main',
		leaf: true, //只有一个节点
		children: [{
			path: '/container',
			component: container,
			name: '货柜'
		}]
	}
]

export default routes;