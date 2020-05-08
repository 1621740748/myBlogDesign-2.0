import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Register from '@/views/register'
import Layout from '@/layout/layout'
import essayRouter from './modules/essay'
Vue.use(Router)

/**
 * alwaysShow: true           if set true, will always show the root menu, whatever its child routes length
 *                            if not set alwaysShow, only more than ont route under the children
 *                            it will becomes nested mode, otherwise not show the root menu
 * alwaysShow: true           如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                            它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    hidden: true,
    component: Register,
    meta: {
      title: '注册'
    }
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'svg-dashboard', affix: true }
      }
    ]
  },
  {
    path: '/home',
    hidden: false,
    component: Layout,
    children: [
      {
        path: 'center',
        name: 'center',
        component: () => import('@/views/homepage'),
        meta: { title: '个人中心', icon: 's-home' }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    hidden: false,

    children: [
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/account/index'),
        meta: { icon: 's-promotion', title: '账号设置' }
      }
    ]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    children: [
      {
        path: 'index',
        name: 'introduction',
        component: () => import('@/views/introduction/index'),
        meta: { icon: 'svg-aperture', title: '简述' }
      }
    ]
  },
  essayRouter,
  {
    path: '/media',
    component: Layout,
    redirect: '/media/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/media/index'),
        name: '媒体库',
        meta: {
          title: '媒体库',
          icon: 'svg-component'
        }
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: '图标', icon: 'svg-icon', noCache: true }
      }
    ]
  },

  {
    path: '/404',
    component: () => import('@/views/error-page/index'),
    hidden: true
  }
]

export default new Router({
  // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  // mode:'hash',
  mode: 'history',
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/theme',
    component: Layout,
    redirect: 'index',

    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: '主题', icon: 'svg-pifu' }
      }
    ]
  }
]
