<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Название</label>
        <input 
        v-model="form.name"
        class="form-control"
        required />
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

      <button type="submit" class="btn btn-success mt-3">
        Добавить проект
      </button>
    </form>
  </div>
</template>

<script>
import { createProject } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '', code: '', status: false })

    const onSubmit = async () => {
      await createProject({ ...form })
      form.name = ''
      form.code = ''
      form.status = false
    }

    return { form, onSubmit }
  }
}
</script>

<style>
input {
  margin-left: 5px
}
</style>
