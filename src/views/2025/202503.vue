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
  title: "家电维修平台“小病大修”",
  exposureTime: "2025-03-15",
  industry: "家电维修",
  desc: "2025年央视“3·15”晚会曝光了家电维修行业的乱象，重点揭露了啄木鸟家庭维修平台存在的“小病大修、无病乱修”问题。该平台通过虚报故障、抬高材料费、诱导消费等手段，严重损害消费者权益，暴露出行业监管缺位和利益链条失衡的深层问题。",
  url: "",
  companyList: [
    {
      name: "啄木鸟家庭维修平台",
      legalPerson: "王国伟（创始人兼董事长）"
    },
  ],
  brandList: [
    {name: "国内最大的家电维修平台，覆盖300多个城市，拥有超10万名在线接单的维修师傅"},
  ],
  productType: 2,
  productList: [
    {
      name: "小病大修",
      issueType: "将洗衣机无法进水归结于未打开水龙头，收费100多元；燃气灶因电池帽未取导致问题，收费250多元",
      remark: "维修师傅通过虚报故障提高收费。"
    },
    {
      name: "无病乱修",
      issueType: "更换洗衣机塑料电机，成本91元，收费659元，剩余电机转卖获利60元",
      remark: "维修师傅通过更换不必要的配件牟利。"
    },
    {
      name: "收费不透明",
      issueType: "平台与维修师傅按6:4比例分成，师傅需通过抬高材料费“找补”",
      remark: "平台高比例抽成导致维修师傅不得不虚报费用。"
    },
    {
      name: "培训与监管缺失",
      issueType: "维修师傅仅需3天技术培训即可上岗，缺乏专业性和规范性",
      remark: "平台对维修师傅的培训和管理存在严重漏洞。"
    }
  ],
  penalty: {
    type: "查封停业、调查取证",
    amount: "未公布",
    desc: "重庆市市场监督管理局出动80余名执法人员，进驻啄木鸟总部及其子公司，查封涉嫌无3C认证的产品（如燃气软管、LED平板灯、电机等），并提取相关证据资料",
    response: "啄木鸟平台发布《整改承诺书》，承诺每天发布整改声明，接受全民监督，并上线“小病大修”违规行为申诉入口，核实属实后奖励用户1000元/次"
  },
  followUp: {
    regulatory: "重庆市市场监督管理局对啄木鸟平台进行全面调查，重点核查抽成规则、员工培训、零配件质量等问题",
    brandRes: "啄木鸟平台延长培训期至15-45天，开发“Deepseek AI 帮忙问价”功能，提供维修价格预估和DIY维修指导"
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