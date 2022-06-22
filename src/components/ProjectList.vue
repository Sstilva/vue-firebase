<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Код</th>
          <th scope="col">Активен</th>
          <th scope="col">Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, code, status } in projects" :key="id">
          <td>{{ name }}</td>
          <td>{{ code }}</td>
          <td>{{ status }}</td>
          <td>
            <router-link :to="`/projects-edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Изменить
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteProject(id)">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadProjects, deleteProject } from '@/firebase'

export default {
  setup() {
    const projects = useLoadProjects()
    return { projects, deleteProject }
  }
}
</script>
