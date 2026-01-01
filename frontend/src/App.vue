<template>
  <div class="app-container">
    <!-- 1. 顶部导航栏（银行风格，可点击跳转页面） -->
    <header class="bank-header">
      <div class="header-content">
        <h2 class="bank-logo">福州银行 - 网讯管理系统</h2>
        <!-- 导航菜单：使用 router-link 实现页面跳转（无需刷新） -->
        <nav class="nav-menu">
          <!-- to="/" 对应路由路径，active-class 是选中后的样式 -->
          <router-link to="/" active-class="active">首页</router-link>
          <router-link to="/news" active-class="active">新闻列表</router-link>
          <router-link to="/about" active-class="active">关于我们</router-link>
        </nav>
      </div>
    </header>

    <!-- 2. 路由容器：router-view（渲染对应页面内容，核心！） -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- 3. 底部版权信息（可选，增加页面完整性） -->
    <footer class="bank-footer">
      <p>© 2026 福州银行 版权所有 | 技术支持：网讯研发部</p>
    </footer>
  </div>
</template>

<script setup>
// 无需写任何逻辑，空着即可（路由已在 main.js 挂载）
</script>

<style scoped>
/* 全局容器样式 */
.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa; /* 浅灰背景，贴合银行系统风格 */
}

/* 顶部导航栏样式（银行蓝为主色调） */
.bank-header {
  background-color: #1f4e79; /* 银行深蓝色 */
  color: white;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 轻微阴影，增加层次感 */
}

.header-content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; /* 标题和导航左右分布 */
  align-items: center;
}

.bank-logo {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

/* 导航菜单样式 */
.nav-menu {
  display: flex;
  gap: 30px; /* 菜单之间的间距 */
}

/* router-link 默认是a标签，修改样式 */
.nav-menu a {
  color: white;
  text-decoration: none; /* 去掉下划线 */
  font-size: 16px;
  padding: 5px 0;
  border-bottom: 2px solid transparent; /* 透明下划线，选中后显示 */
}

/* 选中后的样式（active-class="active"） */
.nav-menu a.active {
  color: #ffd700; /* 金色，突出选中状态 */
  border-bottom: 2px solid #ffd700; /* 金色下划线 */
}

/* 路由内容容器 */
.main-content {
  flex: 1; /* 占满剩余高度，让底部固定在下方 */
  width: 80%;
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* 底部样式 */
.bank-footer {
  background-color: #1f4e79;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}
</style>