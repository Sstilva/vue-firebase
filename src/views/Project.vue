<template>
  <ProjectCreate />
  <ProjectList />
</template>

<script>
import ProjectCreate from '@/components/ProjectCreate.vue'
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'Project',
  components: { ProjectCreate, ProjectList }
}
</script>
