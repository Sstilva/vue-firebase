<template>
  <div class="card card-body mt-4">
    <h3>Редактировать задачу</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Название</label>
        <input 
          v-model="form.name"
          class="form-control"
          required
          />
      </div>

      <div class="form-group mt-3">
        <label>Проект</label>
        <input
          v-model="form.project"
          class="form-control"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Активен</label>
        <input
          v-model="form.status"
          type="checkbox"
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Сохранить
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTask, updateTask } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const taskId = computed(() => route.params.id)

    const form = reactive({ name: '', project: '' ,status: false })
    onMounted(async () => {
      const task = await getTask(taskId.value)
      console.log(task, taskId.value)
      form.name = task.name
      form.project = task.project
      form.status = task.status
    })

    const update = async () => {
      await updateTask(taskId.value, { ...form })
      router.push('/tasks')
      form.name = ''
      form.project = ''
      form.status = false
    }

    return { form, update }
  }
}
</script>
