<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Дата</label>
        <input 
        v-model="form.date"
        type="date"
        required />
      </div>

      <div class="form-group mt-3">
        <label>Количество часов</label>
        <input
          v-model="form.hours"
          class="form-control"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Описание</label>
        <input
          v-model="form.description"
          class="form-control"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Задача</label>
        <input
          v-model="form.task"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Добавить проводку
      </button>
    </form>
  </div>
</template>

<script>
import { createChange } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ date: '1/1/2000', hours: 0 ,description: '', task: '' })

    const onSubmit = async () => {
      await createChange({ ...form })
      form.date = '1/1/2000'
      form.hours = 0
      form.description = ''
      form.task = ''
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
