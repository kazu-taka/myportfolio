import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import About from '../components/about.vue'
import Main from '../components/main.vue'
import Myskills from '../components/myskills.vue'
import Works from '../components/works.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/about', component: About },
    { path: '/myskills', component: Myskills },
    { path: '/works', component: Works },
  ],
})