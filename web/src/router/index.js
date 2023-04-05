import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/',
		name: 'home',
		component: () => import('../views/Home.vue'),
		children: [
			
		]
	},
	{
		path: '/master',
		name: 'master',
		component: () => import('../views/children/Master.vue')
	},
	{
		path: '/master/category',
		name: 'master-category',
		component: () => import('../views/children/Category.vue')
	},
	{
		path: '/master/college',
		name: 'master-college',
		component: () => import('../views/children/College.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
