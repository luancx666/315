<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="menu">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from '@/views/Menu.vue'
</script>

<style>
.menu {
  border-right: 1px solid #E4E7ED;
  height: 100vh;
  background: #ffffff;
}
</style>