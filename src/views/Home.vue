<template>
  <el-table :data="tableData" border style="width: 100%; margin-top: 20px;" >
    <el-table-column prop="year" label="年份" width="70"/>
    <el-table-column prop="title" label="标题" width="300"/>
    <el-table-column prop="industry" label="行业" width="70"/>
    <el-table-column prop="url" label="链接" width="100">
      <template v-slot:default="{ row }">
        <div v-if="row.url">
          <el-link :href="`//www.bilibili.com/video/${row.url}`" target="_blank">视频地址</el-link>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const tableData = [
  {
    year: '2025',
    title: '卫生巾、纸尿裤翻新“二次销售”',
    industry: "日用品",
    url: 'BV1HCQmY6Enh',
  },
]
</script>
