import Vue from 'vue'
import Router from 'vue-router'
//导入相应的组件,组件命名大写
import MyAc from '../views/myAc'
import Mycourse from '../views/mycourse'
import MyExam from '../views/myExam'
import MyNote from '../views/myNote'
import QuestionBank from '../views/questionBank'
import StudycenterIndex from '../views/studycenterIndex'
import StudyReport from '../views/studyReport'
import Help from '../views/help'
Vue.use(Router)

export default new Router({
  routes: [
    // 组件重定向，默认为/,重定向为/studycenterIndex
    {
      path:"/",redirect:"/studycenterIndex"
    },
    {
      path: '/',
      // 给路由设置名称
      name: '学习中心首页',
      // 设置对应的组件
      component: StudycenterIndex
    },
    {
      path: '/myAc/:id',
      name: '我的交流',
      component: MyAc
    },
    {
      path: '/mycourse',
      name: '我的课程',
      component: Mycourse
    },
    {
      path: '/myExam',
      name: '做题记录',
      component: MyExam
    },
    {
      path: '/myNote',
      name: '我的笔记',
      component: MyNote
    },
    {
      path: '/questionBank',
      name: '题库',
      component: QuestionBank
    },
    {
      path: '/studycenterIndex',
      name: '学习中心首页',
      component: StudycenterIndex
    },
    {
      path: '/studyReport',
      name: '学习报告',
      component: StudyReport
    },
    {
      path:'/help',
      help:'帮助',
      component:Help
    }
  ]
})
