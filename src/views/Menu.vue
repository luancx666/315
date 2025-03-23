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
        <el-menu-item index="/2025/202501">卫生巾、纸尿裤翻新“二次销售”</el-menu-item>
        <el-menu-item index="/2025/202502">一次性内裤虚假宣传与生产乱象</el-menu-item>
        <el-menu-item index="/2025/202503">家电维修平台“小病大修”</el-menu-item>
        <el-menu-item index="/2025/202504">保水虾仁超量添加磷酸盐</el-menu-item>
        <el-menu-item index="/2025/202505">电子签高利贷“砍头息”陷阱</el-menu-item>
        <el-menu-item index="/2025/202506">个人信息窃取与骚扰电话产业链</el-menu-item>
        <el-menu-item index="/2025/202507">手机抽奖诱导消费</el-menu-item>
        <el-menu-item index="/2025/202508">非标电线电缆隐患</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/2024">
        <template #title>
          <el-icon>
            <Location/>
          </el-icon>
          <span>2024</span>
        </template>
        <el-menu-item index="/2024/202401">主板机黑灰产业链</el-menu-item>
        <el-menu-item index="/2024/202402">假防火玻璃黑产链</el-menu-item>
        <el-menu-item index="/2024/202403">偷工减料的灭火器</el-menu-item>
        <el-menu-item index="/2024/202404">梅菜扣肉预制菜使用“糟头肉”</el-menu-item>
        <el-menu-item index="/2024/202405">听花酒虚假宣传</el-menu-item>
        <el-menu-item index="/2024/202406">婚恋平台诱导消费</el-menu-item>
        <el-menu-item index="/2024/202407">宝马530Li传动轴异响问题</el-menu-item>
        <el-menu-item index="/2024/202408">同程金融App礼品卡套路</el-menu-item>
        <el-menu-item index="/2024/202409">AI变脸诈骗</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts" setup>
import router from "@/router/index.js";

</script>

<style setup>

</style>