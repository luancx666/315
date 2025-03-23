<template>
  <div class="content-container">
    <div class="title">
      {{ data.title }}
    </div>
    <div v-if="data.url" class="video-wrapper">
      <iframe
          :src="`//player.bilibili.com/player.html?bvid=${data.url}&poster=1&autoplay=0&muted=1&danmaku=0`"></iframe>
    </div>
    <!--  事件概览  -->
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
        <el-tag v-for="brand in data.brandList" :key="brand.id" class="brand-tag" type="warning" effect="plain" size="large">
          {{ brand.name }}
        </el-tag>
    </el-card>
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

    <!--  处罚记录  -->
    <el-descriptions class="margin-top penalty-item" title="处罚记录" :column="2" size="large" label-width="120px"
                     border>
      <el-descriptions-item label="处罚类型">{{ data.penalty.type }}</el-descriptions-item>
      <el-descriptions-item label="罚款金额（万元）">{{ data.penalty.amount }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="处罚详情">{{ data.penalty.desc }}</el-descriptions-item>
      <el-descriptions-item :span="2" label="企业回应声明">{{ data.penalty.response }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const data = reactive({
  title: "卫生巾、纸尿裤翻新“二次销售”",
  exposureTime: "2025-03-15",
  industry: "日用品",
  desc: "2025年央视“3·15”晚会首个曝光事件揭露了卫生巾、婴儿纸尿裤行业黑幕。济宁市梁山县的梁山希希纸制品有限公司被曝以低价收购正规企业应销毁的残次品（如生产垃圾、不合格产品），通过翻新、分拣和重新包装后，以“二等品”名义二次销售至市场。这些产品未经过卫生消毒，部分甚至带有知名品牌标识（如麦酷酷、自由点、嫚熙、米菲、Babycare等），但包装上无厂名厂址，属于“三无产品”。",
  url: "BV1HCQmY6Enh",
  companyList: [
    {
      name: "梁山希希纸制品有限公司",
      legalPerson: "刘总（化名）"
    }
  ],
  brandList: [
    {name: "麦酷酷"},
    {name: "自由点"},
    {name: "嫚熙"},
    {name: "中亿孕婴"},
    {name: "Babycare"},
    {name: "米菲"},
    {name: "好之"},
    {name: "全棉时代"},
    {name: "苏菲"}
  ],
  productType: 1,
  productList: [
    {
      name: "全棉时代卫生巾",
      batchNum: "2024-08",
      issueType: "卫生不达标",
      remark: "部分产品被打碎后重新制成原材料，流入市场。"
    },
    {
      name: "麦酷酷婴儿拉拉裤",
      batchNum: "2024-10",
      issueType: "卫生不达标",
      remark: "从生产垃圾中挑拣翻新，未消毒，包装无品牌信息。"
    },
    {
      name: "嫚熙婴儿拉拉裤",
      batchNum: "2024-09",
      issueType: "卫生不达标",
      remark: "二次包装后流入市场，未标注厂名厂址。"
    },
    {
      name: "自由点女性安睡裤",
      batchNum: "2024-12",
      issueType: "虚假包装",
      remark: "包装标注“如沐春风卫生用品有限公司”，实际为三无产品。"
    },
    {
      name: "米菲婴儿纸尿裤",
      batchNum: "2024-11",
      issueType: "卫生不达标",
      remark: "从生产垃圾中挑拣，未经消毒处理。"
    },
  ],
  penalty: {
    type: "查封停业",
    amount: "未公布",
    desc: "企业被查封，负责人被控制，相关部门已介入调查",
    response: "涉事企业未回应，部分关联品牌（如全棉时代、苏菲）发布声明否认合作"
  }
});
</script>

<style scoped>
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