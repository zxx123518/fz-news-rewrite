// 导入 Vue Router 的核心方法（固定写法，不能错）
import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
// 首页
import Home from '../views/Home.vue'
// 银行新闻列表页
import NewsList from '../views/NewsList.vue'
// 关于我们页
import About from '../views/About.vue'

// 定义路由规则：数组中每个对象对应一个页面
const routes = [
  {
    path: '/', // 页面访问路径（http://localhost:5173/）
    name: 'Home', // 路由名称（可选，方便后续跳转）
    component: Home // 对应要渲染的页面组件
  },
  {
    path: '/news', // 新闻列表页路径（http://localhost:5173/news）
    name: 'NewsList',
    component: NewsList
  },
  {
    path: '/about', // 关于我们页路径（http://localhost:5173/about）
    name: 'About',
    component: About
  }
]

// 创建路由实例（固定写法，不能错）
const router = createRouter({
  history: createWebHistory(), // 路由模式（HTML5模式，无#号，美观）
  routes // 引入上面定义的路由规则（等同于 routes: routes）
})

// 导出路由实例（供 main.js 导入挂载）
export default router