import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

createApp(App).use(Router).mount('#app')