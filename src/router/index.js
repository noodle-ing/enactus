import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Business from '../views/Business.vue'
import Participants from '../views/Participants.vue'
import Competitions from '../views/Competitions.vue'
import News from '../views/News.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/business',
      name: 'business',
      component: Business
    },
    {
      path: '/participants',
      name: 'participants',
      component: Participants
    },
    {
      path: '/competitions',
      name: 'competitions',
      component: Competitions
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})

export default router