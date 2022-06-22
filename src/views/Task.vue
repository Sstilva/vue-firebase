<template>
  <TaskCreate />
  <TaskList />
</template>

<script>
import TaskCreate from '@/components/TaskCreate.vue'
import TaskList from '@/components/TaskList.vue'

export default {
  name: 'Task',
  components: { TaskCreate, TaskList }
}
</script>
