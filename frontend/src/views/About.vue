<template>
  <div class="about-page">
    <h2 class="page-title">关于我们</h2>

    <div class="about-content">
      <h3>一、平台介绍</h3>
      <p>银行网讯管理系统是我行内部打造的资讯发布与管理平台，旨在为内部员工提供实时、准确的银行资讯、政策文件、营业通知等内容，提升内部信息传递效率。</p>

      <h3>二、平台功能</h3>
      <ul>
        <li>新闻资讯发布与展示</li>
        <li>内部公告推送</li>
        <li>营业安排查询</li>
        <li>行业资讯收集与整理</li>
      </ul>

      <h3>三、联系我们</h3>
      <p>技术支持：网讯研发部</p>
      <p>联系电话：0591-12345678</p>
      <p>联系邮箱：news@fzbank.com</p>
    </div>
  </div>
</template>

<script setup>
// 无需逻辑，空着即可
</script>

<style scoped>
.about-page {
  padding: 10px 0;
}

.page-title {
  color: #1f4e79;
  border-bottom: 2px solid #d1e0ff;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.about-content {
  line-height: 1.8;
  color: #333;
}

.about-content h3 {
  color: #1f4e79;
  margin-top: 25px;
  margin-bottom: 10px;
}

.about-content ul {
  padding-left: 20px;
}

.about-content li {
  margin-bottom: 8px;
}
</style>