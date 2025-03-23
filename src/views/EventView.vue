<template>
  <EventDetail :data="eventData" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import EventDetail from '@/components/EventDetail.vue'

const route = useRoute()
const eventData = ref({})

const loadData = async () => {
  const dataPath = route.fullPath.replace('/event', '')
  try {
    const response = await fetch(`/data${dataPath}.json`)
    eventData.value = await response.json()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

onMounted(() => {
  loadData()
})

// 监听路由变化，重新加载数据
watch(
    () => route.fullPath,
    () => {
      loadData()
    }
)
</script>