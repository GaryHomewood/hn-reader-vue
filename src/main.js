import Vue from 'vue'
import App from './App.vue'
import router from './router'

import TopStories from './components/TopStories.vue'
Vue.component('top-stories', TopStories)

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
