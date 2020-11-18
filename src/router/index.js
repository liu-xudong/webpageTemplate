import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/home.vue'
import Login from '../view/login.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/home',
		component: Home,
		children: [

		]
	},

]

const router = new VueRouter({
	mode: 'history',
	routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
	//to 将要访问的路径
	//from 代表从哪个路径跳转而来
	//next 是一个函数，表示放行
	// next()  放行  next('/login')  强制跳转

	if (to.path === '/login') return next()
	//获取token
	// const tokenStr = window.sessionStorage.getItem('token')
	// if(!token) return next('/login')
	next()
})

export default router
