import { createRouter, createWebHistory } from 'vue-router'
import Project from '@/views/Project.vue'
import ProjectEdit from '@/views/ProjectEdit.vue'
import Task from '@/views/Task.vue'
import TaskEdit from '@/views/TaskEdit.vue'
import Change from '@/views/Change.vue'
import ChangeEdit from '@/views/ChangeEdit.vue'

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
  },
  {
    path: '/tasks',
    name: 'Task',
    component: Task
  },
  {
    path: '/tasks-edit/:id',
    name: 'TaskEdit',
    component: TaskEdit
  },
  {
    path: '/changes',
    name: 'Change',
    component: Change
  },
  {
    path: '/changes-edit/:id',
    name: 'ChangeEdit',
    component: ChangeEdit
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
