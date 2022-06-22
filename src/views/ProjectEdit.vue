<template>
  <div class="card card-body mt-4">
    <h3>Редактировать проект</h3>
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
        <label>Код</label>
        <input
          v-model="form.code"
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
import { getProject, updateProject } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const projectId = computed(() => route.params.id)

    const form = reactive({ name: '', code: '' ,status: false })
    onMounted(async () => {
      const project = await getProject(projectId.value)
      console.log(project, projectId.value)
      form.name = project.name
      form.code = project.code
      form.status = project.status
    })

    const update = async () => {
      await updateProject(projectId.value, { ...form })
      router.push('/projects')
      form.name = ''
      form.code = ''
      form.status = false
    }

    return { form, update }
  }
}
</script>
