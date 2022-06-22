<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Дата</th>
          <th scope="col">Количество часов</th>
          <th scope="col">Описание</th>
          <th scope="col">Задача</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, date, hours, description, task } in changes" :key="id">
          <td>{{ date }}</td>
          <td>{{ hours }}</td>
          <td>{{ description }}</td>
          <td>{{ task }}</td>
          <td>
            <router-link :to="`/changes-edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Изменить
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteChange(id)">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadChanges, deleteChange } from '@/firebase'

export default {
  setup() {
    const changes = useLoadChanges()
    return { changes, deleteChange }
  }
}
</script>
