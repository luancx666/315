<template>
  <el-menu router :default-active="router.currentRoute.value.fullPath" class="el-menu-vertical-demo">
    <!--  首页  -->
    <el-menu-item index="/home">
      <el-icon>
        <House/>
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>

    <!--  历史315数据  -->
    <el-sub-menu index="/history">
      <template #title>
        <el-icon>
          <Clock/>
        </el-icon>
        <span>历史315数据</span>
      </template>
      <el-sub-menu index="/2025">
        <template #title>
          <el-icon>
            <Location/>
          </el-icon>
          <span>2025</span>
        </template>
        <el-menu-item index="/202501">卫生巾、纸尿裤翻新“二次销售”</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import router from "@/router/index.js";

</script>

<style setup>

</style>