<template>
  <ChangeCreate />
  <ChangeList />
</template>

<script>
import ChangeCreate from '@/components/ChangeCreate.vue'
import ChangeList from '@/components/ChangeList.vue'

export default {
  name: 'Change',
  components: { ChangeCreate, ChangeList }
}
</script>
