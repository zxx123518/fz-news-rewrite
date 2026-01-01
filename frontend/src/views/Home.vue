<template>
  <div class="home-page">
    <div class="welcome-banner">
      <h1>欢迎使用银行网讯管理系统</h1>
      <p>实时掌握银行内部公告、行业资讯、政策变动</p>
    </div>

    <div class="home-stat">
      <div class="stat-item">
        <h3>今日新增新闻</h3>
        <p class="stat-num">8</p>
      </div>
      <div class="stat-item">
        <h3>累计新闻总数</h3>
        <p class="stat-num">267</p>
      </div>
      <div class="stat-item">
        <h3>已阅读人数</h3>
        <p class="stat-num">1259</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 无需逻辑，空着即可
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px 0;
}

.welcome-banner {
  margin-bottom: 40px;
}

.welcome-banner h1 {
  color: #1f4e79;
  font-size: 32px;
  margin-bottom: 15px;
}

.welcome-banner p {
  font-size: 18px;
  color: #666;
}

/* 数据统计模块 */
.home-stat {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.stat-item {
  width: 200px;
  padding: 20px;
  background-color: #f0f5ff;
  border-radius: 8px;
  border: 1px solid #d1e0ff;
}

.stat-item h3 {
  color: #1f4e79;
  margin-bottom: 10px;
  font-size: 16px;
}

.stat-num {
  font-size: 28px;
  font-weight: bold;
  color: #1f4e79;
  margin: 0;
}
</style>