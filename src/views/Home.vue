<template>
  <div class="home-container">
    <el-table :data="tableData" border style="width: 100%; margin-top: 20px;">
      <el-table-column prop="year" label="年份" width="70"/>
      <el-table-column prop="title" label="标题" width="300"/>
      <el-table-column prop="industry" label="行业" width="170"/>
      <el-table-column prop="url" label="链接" width="100">
        <template v-slot:default="{ row }">
          <div v-if="row.url">
            <el-link :href="`//www.bilibili.com/video/${row.url}`" target="_blank">视频地址</el-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const tableData = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data/event.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const eventData = await response.json()
    // 展平数据
    tableData.value = eventData.flatMap(yearGroup => yearGroup.data.map(item => ({...item, year: yearGroup.year})))
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
})
</script>

<style scoped>
/* 响应式样式 */
@media (max-width: 768px) {
  .home-container {
    padding: 10px;
    font-size: 14px;
  }
}
</style>