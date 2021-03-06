import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false


//导入轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import "mint-ui/lib/style.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
