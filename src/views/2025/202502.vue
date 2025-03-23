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
      <el-tag v-for="brand in data.brandList" :key="brand.id" class="brand-tag" type="warning" effect="plain"
              size="large">
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

    <!--  后续行动  -->
    <el-descriptions class="margin-top penalty-item" title="后续行动" :column="1" size="large" label-width="120px" border>
      <el-descriptions-item label="处罚类型">{{ data.followUp.regulatory }}</el-descriptions-item>
      <el-descriptions-item label="处罚类型">{{ data.followUp.brandRes }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const data = reactive({
  title: "一次性内裤虚假宣传与生产乱象",
  exposureTime: "2025-03-15",
  industry: "日用品",
  desc: "2025年央视“3·15”晚会曝光了一次性内裤行业的虚假宣传与生产乱象。河南省商丘市的多家服饰加工企业被曝生产的一次性内裤存在严重的卫生和质量问题，包括未按标准灭菌、材质造假、生产环境脏乱等。这些产品以“方便卫生”为宣传卖点，实际却威胁消费者健康。",
  url: "",
  companyList: [
    {
      name: "梦阳服饰有限公司",
      legalPerson: "未公开"
    },
    {
      name: "健芝初医疗器械有限公司",
      legalPerson: "未公开"
    },
    {
      name: "商丘润景服装有限公司",
      legalPerson: "未公开"
    },
  ],
  brandList: [
    {name: "初医生"},
    {name: "贝姿妍"},
    {name: "浪莎"}
  ],
  productType: 1,
  productList: [
    {
      name: "初医生一次性内裤",
      batchNum: "2024-12",
      issueType: "未灭菌、材质造假",
      remark: "包装标注“纯棉”，实际使用涤纶，未进行灭菌处理。"
    },
    {
      name: "贝姿妍一次性内裤",
      batchNum: "2024-11",
      issueType: "未灭菌、虚假宣传",
      remark: "宣传“EO灭菌”，实际未灭菌，包装伪造灭菌标签。"
    },
    {
      name: "浪莎一次性内裤",
      batchNum: "2024-10",
      issueType: "未灭菌、生产环境差",
      remark: "生产车间脏乱，工人徒手制作，原材料与垃圾混放。"
    }
  ],
  penalty: {
    type: "查封停业",
    amount: "未公布",
    desc: "涉事企业被查封，成品、半成品及原材料被现场封存，相关部门成立联合工作组进行调查",
    response: "部分品牌（如浪莎、贝姿妍）下架相关产品，但未公开回应"
  },
  followUp: {
    regulatory: "梁商丘市市场监管、卫健等部门成立联合工作组，对涉事企业进行查封，并依法依规严肃查处",
    brandRes: "部分品牌下架涉事产品，但未公开具体整改措施"
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