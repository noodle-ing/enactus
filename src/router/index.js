import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Business from '../views/Business.vue'
import Participants from '../views/Participants.vue'
import Competitions from '../views/Competitions.vue'
import News from '../views/News.vue'

// Импорт новых страниц из выпадающего списка "О нас"
import Headquarters from '../views/about/Headquarters.vue'
import BoardOfDirectors from '../views/about/BoardOfDirectors.vue'
import AcademicCouncil from '../views/about/AcademicCouncil.vue'
import Partnership from '../views/Partnership.vue'


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
    // НОВЫЕ ПУТИ ДЛЯ ВЫПАДАЮЩЕГО МЕНЮ
    {
      path: '/about/headquarters',
      name: 'headquarters',
      component: Headquarters
    },
    {
      path: '/about/board',
      name: 'board',
      component: BoardOfDirectors
    },
    {
      path: '/about/council',
      name: 'council',
      component: AcademicCouncil
    },
    // КОНЕЦ НОВЫХ ПУТЕЙ
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
    },
    {
      path: '/partnership',
      name: 'partnership',
      component: Partnership
    }
  ]
})

export default router