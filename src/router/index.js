import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/layout'
import essayRouter from './modules/essay'
const HomePage = () => import('@/pages/homepage')
const BokePage = () => import('@/pages/bokepage')
const TimeAxis = () => import('@/pages/time-axis')
const About = () => import('@/pages/about')
const Login = () => import('@/views/login')
const Register = () => import('@/views/register')
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
    path: '/front/homepage',
    name: 'FrontHomepage',
    hidden: true,
    component: HomePage,
    meta: { noCache: true }
  },
  {
    path: '/front/bokepage',
    name: 'FrontBokepage',
    hidden: true,
    component: BokePage,
    meta: { noCache: true }
  },
  {
    path: '/front/time-axis',
    name: 'TimeAxis',
    hidden: true,
    component: TimeAxis,
    meta: { noCache: true }
  },
  {
    path: '/front/about',
    name: 'AboutMe',
    hidden: true,
    component: About,
    meta: { noCache: true }
  },
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
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'router.dashboard', icon: 'svg-dashboard', affix: true }
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
        meta: { title: 'router.homepage', icon: 's-home' }
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
        meta: { icon: 'svg-peoples', title: 'router.account' }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'router.guide', icon: 'svg-guide', noCache: true }
      }
    ]
  },

  {
    path: '/introduction',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'introduction',
        component: () => import('@/views/introduction/index'),
        meta: { icon: 'svg-aperture', title: 'router.introduction' }
      }
    ]
  },
  {
    path: '/echats',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'echarts',
        component: () => import('@/views/echarts/index'),
        meta: { icon: 'svg-television', title: 'router.echarts' }
      }
    ]
  },
  essayRouter,
  {
    path: '/media',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/media/index'),
        name: '媒体库',
        meta: {
          title: 'router.media',
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
        meta: { title: 'router.icon', icon: 'svg-icon', noCache: true }
      }
    ]
  },

  {
    path: '/todo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'ToDo',
        component: () => import('@/views/todo/index'),
        meta: { title: 'router.todo', icon: 'svg-form' }
      }
    ]
  },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/378406712/myBlogDesign-2.0',
        meta: { title: 'router.external_link', icon: 'link' }
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

    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'router.theme', icon: 'svg-theme' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
