// 导入 Vue 核心方法
import { createApp } from 'vue'
// 导入根组件 App.vue
import App from './App.vue'
// 导入上面创建的路由实例（路径要正确，./router 会自动找 router/index.js）
import router from './router'

// 关键：创建 App 实例 → 挂载路由 → 挂载到页面（顺序不能反）
const app = createApp(App)
app.use(router) // 挂载路由，让 <router-view> 生效
app.mount('#app') // 挂载到页面的 #app 容器

// 可选：打印日志，验证路由挂载成功
console.log("路由挂载成功！")