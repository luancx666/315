<template>
  <div class="content-container" v-if="data">
    <div class="title">
      {{ data.title }}
    </div>
    <div v-if="data.url" class="video-wrapper">
      <iframe
          :src="`//player.bilibili.com/player.html?bvid=${data.url}&poster=1&autoplay=0&muted=1&danmaku=0`"></iframe>
    </div>
    <!-- 事件概览 -->
    <el-card class="event-card">
      <template #header>
        <div class="card-header">
          <span>事件概览</span>
        </div>
      </template>
      <el-descriptions :column="2" border label-class-name="desc-label" content-class-name="desc-content">
        <el-descriptions-item label="曝光时间">{{ data.exposureTime }}</el-descriptions-item>
        <el-descriptions-item label="涉事行业">{{ data.industry }}</el-descriptions-item>
      </el-descriptions>
      <div class="event-description">
        {{ data.desc }}
      </div>
    </el-card>

    <!-- 涉事企业 -->
    <el-card class="company-card">
      <template #header>
        <div class="card-header">
          <span>涉事企业</span>
        </div>
      </template>
      <template v-for="item in data.companyList" :key="item.id">
        <el-descriptions :column="2" border class="company-item">
          <el-descriptions-item label="企业名称">{{ item.name }}</el-descriptions-item>
          <el-descriptions-item label="法人代表">{{ item.legalPerson }}</el-descriptions-item>
        </el-descriptions>
      </template>
    </el-card>

    <!-- 涉事品牌 -->
    <el-card class="company-card flex gap-2">
      <template #header>
        <div class="card-header">
          <span>涉事品牌</span>
        </div>
      </template>
      <el-tag v-for="brand in data.brandList" :key="brand.id" class="brand-tag" type="warning" effect="plain"
              size="large">
        {{ brand.name }}
      </el-tag>
    </el-card>

    <!-- 产品/问题 -->
    <el-card v-if="data.productType === 1" class="problem-card">
      <template #header>
        <div class="card-header">
          <span>涉事产品</span>
        </div>
      </template>
      <template v-for="product in data.productList" :key="product.id">
        <el-descriptions :column="3" border class="product-item">
          <el-descriptions-item label="产品名称">{{ product.name }}</el-descriptions-item>
          <el-descriptions-item label="生产批次">{{ product.batchNum }}</el-descriptions-item>
          <el-descriptions-item label="问题类型">{{ product.issueType }}</el-descriptions-item>
          <el-descriptions-item label="备注">{{ product.remark }}</el-descriptions-item>
        </el-descriptions>
      </template>
    </el-card>
    <el-card v-else-if="data.productType === 2" class="product-card">
      <template #header>
        <div class="card-header">
          <span>涉事问题</span>
        </div>
      </template>
      <template v-for="product in data.productList" :key="product.id">
        <el-descriptions :column="1" border class="problem-item">
          <el-descriptions-item label="问题类型" label-width="100px">{{ product.name }}</el-descriptions-item>
          <el-descriptions-item label="具体表现" label-width="100px">{{ product.issueType }}</el-descriptions-item>
          <el-descriptions-item label="备注" label-width="100px">{{ product.remark }}</el-descriptions-item>
        </el-descriptions>
      </template>
    </el-card>

    <!-- 处罚记录 -->
    <el-descriptions class="margin-top penalty-item" title="处罚记录" :column="2" size="large" label-width="120px"
                     border v-if="data.penalty">
      <el-descriptions-item label="处罚类型">{{ data.penalty.type }}</el-descriptions-item>
      <el-descriptions-item label="罚款金额（万元）">{{ data.penalty.amount }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="处罚详情">{{ data.penalty.desc }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="企业回应声明">{{ data.penalty.response }}</el-descriptions-item>
    </el-descriptions>

    <!-- 后续行动 -->
    <el-descriptions class="margin-top penalty-item" title="后续行动" :column="1" size="large" label-width="120px" border v-if="data.followUp">
      <el-descriptions-item label="监管措施">{{ data.followUp.regulatory }}</el-descriptions-item>
      <el-descriptions-item label="品牌回应">{{ data.followUp.brandRes }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* 移动原有页面的样式到组件内部 */
.content-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 24px;
  color: #303133;
  margin-bottom: 20px;
}

.video-wrapper {
  margin: 20px 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.event-card,
.company-card,
.product-card {
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
}

.card-header {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.event-description {
  margin-top: 15px;
  padding: 12px;
  background-color: #f5f7fa;
  border-radius: 4px;
  line-height: 1.6;
}

.penalty-item {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
  word-break: break-all;
}

.brand-tag {
  margin-right: 10px;
}
</style>