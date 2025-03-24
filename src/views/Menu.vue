<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">开</el-radio-button>
    <el-radio-button :value="true">关</el-radio-button>
  </el-radio-group>
  <el-menu router :default-active="router.currentRoute.value.fullPath" :collapse="isCollapse" class="el-menu-vertical-demo">
    <!-- 首页 -->
    <el-menu-item index="/home">
      <el-icon>
        <House />
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>

    <!-- 历史315数据 -->
    <el-sub-menu index="/history">
      <template #title>
        <el-icon>
          <Clock />
        </el-icon>
        <span>历史315数据</span>
      </template>
      <el-sub-menu v-for="yearGroup in groupedData" :key="yearGroup.year" :index="`/${yearGroup.year}`">
        <template #title>
          <el-icon>
            <Location />
          </el-icon>
          <span>{{ yearGroup.year }}</span>
        </template>
        <el-menu-item v-for="item in yearGroup.items" :key="item.id" :index="`/${yearGroup.year}/${item.id}`">
          {{ item.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import router from '@/router/index.js'

const isCollapse = ref(true)
const eventData = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data/event.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    eventData.value = await response.json()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
})

// 根据年份对数据进行分组
const groupedData = computed(() => {
  if (!eventData.value.length) return []
  const groups = {}
  eventData.value.forEach(yearGroup => {
    groups[yearGroup.year] = { year: yearGroup.year, items: yearGroup.data }
  })
  return Object.values(groups).sort((a, b) => b.year - a.year)
})
</script>

<style setup>

</style>