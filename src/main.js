import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ваш роутер
import i18n from './i18n'    // импортируем созданный конфиг i18n

const app = createApp(App)

app.use(router)
app.use(i18n) // добавляем плагин интернационализации

app.mount('#app')