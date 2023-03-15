import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import SchoolEdit from "../views/SchoolEdit.vue";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		children: [
			{ path: '/schools/create', component: SchoolEdit },
			{ path: '/schools/edit/:id', component: SchoolEdit, props: true }, // 将页面的id通过地址注入页面
			{ path: '/schools/list', component: SchoolEdit },


		]
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}
]

const router = new VueRouter({
	routes
})

export default router
