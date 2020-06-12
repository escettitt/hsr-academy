import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueCarousel from 'slick-carousel';
// import Slick from 'vue-slick-carousel';
// Vue.use(Slick)
Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
