import { createRouter, createWebHistory } from 'vue-router'
import { AlbumsView } from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'albums',
      component: AlbumsView
    }
  ]
})

export default router
