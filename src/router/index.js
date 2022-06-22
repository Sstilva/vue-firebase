import { createRouter, createWebHistory } from 'vue-router'
import Project from '@/views/Project.vue'
import ProjectEdit from '@/views/ProjectEdit.vue'

const routes = [
  {
    path: '/projects',
    name: 'Project',
    component: Project
  },
  {
    path: '/projects-edit/:id',
    name: 'ProjectEdit',
    component: ProjectEdit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
