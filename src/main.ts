import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

//element-plus
import ElementPlus from 'element-plus'
import * as icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import 'normalize.css'

//nprogress 请求加载条
import 'nprogress/nprogress.css'

//路由
import router from './router/index'

//指令安装
import directiveInstall from './directive/Index'

/*=====================================================================================================================*/

var app = createApp(App)

//引用element plus
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

//引用全局图标
let currentIcons: any = icons
for (const iconName in currentIcons) {
	app.component(iconName, currentIcons[iconName])
}

console.log(`VITE_HTTP_BASEURL:${import.meta.env.VITE_HTTP_BASEURL}`)
console.log(`VITE_OAUTH2_AUTHORITY:${import.meta.env.VITE_OAUTH2_AUTHORITY}`)

//指令加载
directiveInstall(app)

//使用router,pinia
app.use(router).use(createPinia()).mount('#app')
