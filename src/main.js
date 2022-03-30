import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Tasklist from './components/tasklist/Tasklist.vue'
import AddList from './components/AddList.vue'

const routes = [
    { path: '/', component: Tasklist },
    { path: '/add', component: AddList },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

createApp(App).use(router).mount('#app')
