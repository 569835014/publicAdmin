// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import Swal from 'common/plugin/swal' //弹框组件
import subscribe from 'common/plugin/subscribe'//订阅发布模式
import store from './vuex/index'
import Session from 'common/plugin/Session.js'//操作本地存储
import {isEmpty} from 'common/util/common' //工具函数 判断对象是不是为空
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Swal)
Vue.use(subscribe)
/* eslint-disable no-new */
let app
router.afterEach(route => {
  document.title=route.meta.name;
  if(app&&app.$store){
    app.$store.dispatch('saveactiveMenu',route.meta.level);
  }
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (!isEmpty(Session.getItem('user'))) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/user',
        query: {redirect: to.name}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
      return
    }
  }
  else {
    next();
  }


});
app=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
