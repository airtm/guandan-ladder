import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LoginLayout',
      component: () => import('@/layouts/LoginLayout.vue')
    },
    {
      path: '/',
      name: 'AppLayout',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'SoloRank',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/SoloRank.vue')
        },
        {
          path: '/record-report',
          name: 'RecordReport',
          component: () => import('@/views/RecordReport.vue')
        },
        {
          path: '/team-rank',
          name: 'TeamRank',
          component: () => import('@/views/TeamRank.vue')
        },
        {
          path: '/record/unconfirmed',
          name: 'UnconfirmedRecord',
          component: () => import('@/views/UnconfirmedRecord.vue')
        },
        {
          path: '/record/history',
          name: 'HistoryRecord',
          component: () => import('@/views/HistoryRecord.vue')
        }
      ]
    }
  ]
})

export default router
