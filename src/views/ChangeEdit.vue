<template>
  <div class="card card-body mt-4">
    <h3>Редактировать проводку</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Дата</label>
        <input 
          v-model="form.date"
          type="date"
          required
          />
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

      <button type="submit" class="btn btn-primary  mt-3">
        Сохранить
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getChange, updateChange } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const changeId = computed(() => route.params.id)

    const form = reactive({ date: '1/1/2000', hours: 0 ,description: '', task: '' })
    onMounted(async () => {
      const change = await getChange(changeId.value)
      console.log(change, changeId.value)
      form.date = change.date
      form.hours = change.hours
      form.description = change.description
      form.task = change.task
    })

    const update = async () => {
      await updateChange(changeId.value, { ...form })
      router.push('/changes')
      form.date = '1/1/2000'
      form.hours = 0
      form.description = ''
      form.task = ''
    }

    return { form, update }
  }
}
</script>
