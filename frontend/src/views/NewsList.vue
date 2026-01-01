<template>
  <div class="news-list-page">
    <h2 class="page-title">银行新闻列表</h2>

    <!-- 新闻列表 -->
    <div class="news-list">
      <div class="news-item" v-for="news in newsList" :key="news.id">
        <div class="news-header">
          <h3 class="news-title">{{ news.title }}</h3>
          <span class="news-time">{{ news.publishTime }}</span>
        </div>
        <p class="news-content">{{ news.content }}</p>
        <div class="news-tag">{{ news.tag }}</div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入 Vue 响应式数据（模拟新闻数据）
import { ref } from 'vue'

// 模拟银行新闻数据（后续可替换为后端接口数据）
const newsList = ref([
  {
    id: 1,
    title: "关于2026年一季度存款利率调整的公告",
    content: "为响应央行货币政策，我行决定自2026年1月5日起，上调个人定期存款利率0.2个百分点，具体细则可咨询各网点。",
    publishTime: "2026-01-01",
    tag: "重要公告"
  },
  {
    id: 2,
    title: "个人网银新增跨行实时转账功能",
    content: "我行个人网上银行已正式上线跨行实时转账服务，单笔限额5万元，免手续费，支持全国各大银行。",
    publishTime: "2026-01-02",
    tag: "功能更新"
  },
  {
    id: 3,
    title: "春节期间网点营业安排通知",
    content: "2026年春节假期（2月10日-2月17日），我行各网点营业时间调整为9:00-16:00，部分偏远网点暂停营业。",
    publishTime: "2026-01-03",
    tag: "营业通知"
  },
  {
    id: 4,
    title: "我行荣获“2025年度最佳服务银行”称号",
    content: "在近日举办的银行业评选中，我行凭借优质的客户服务和创新的金融产品，荣获“2025年度最佳服务银行”称号。",
    publishTime: "2026-01-04",
    tag: "行业荣誉"
  }
])
</script>

<style scoped>
.news-list-page {
  padding: 10px 0;
}

.page-title {
  color: #1f4e79;
  border-bottom: 2px solid #d1e0ff;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.news-list {
  margin-top: 20px;
}

.news-item {
  padding: 15px 0;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.news-title {
  color: #1f4e79;
  font-size: 18px;
  margin: 0;
}

.news-time {
  color: #999;
  font-size: 14px;
}

.news-content {
  color: #333;
  line-height: 1.6;
  margin-bottom: 10px;
}

.news-tag {
  display: inline-block;
  padding: 3px 8px;
  background-color: #1f4e79;
  color: white;
  font-size: 12px;
  border-radius: 4px;
}
</style>