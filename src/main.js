import Vue from 'vue';
import App from './App';
import router from './router';
//导入element-ui
import ElementUI from 'element-ui';
//导入我们的api接口
import webApi from './request/api'
import global from './global'
import VueTimeago from 'vue-timeago';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
Vue.use(ElementUI);
Vue.use(global);
Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'zh-CN',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json'),
    'zh-CN': require('vue-timeago/locales/zh-CN.json')
  }
})


// 设置为false时关闭vue在启动时生成的生产提示
Vue.config.productionTip=false;
// 在Vue的原型上面定义我们的api
Vue.prototype.$api = Vue.prototype.webApi=webApi;
new Vue({
  // 将所有的元素都挂载在#app这个dom元素上面
  el: '#app',
  // 路由注入，从而让整个应用都具有路由功能
  router,
  store,
  components: { App },
  template: '<App/>'
})
