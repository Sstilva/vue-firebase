<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Проект</th>
          <th scope="col">Активен</th>
          <th scope="col">Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, project, status } in tasks" :key="id">
          <td>{{ name }}</td>
          <td>{{ project }}</td>
          <td>{{ status }}</td>
          <td>
            <router-link :to="`/tasks-edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Изменить
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteTask(id)">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadTasks, deleteTask } from '@/firebase'

export default {
  setup() {
    const tasks = useLoadTasks()
    return { tasks, deleteTask }
  }
}
</script>
