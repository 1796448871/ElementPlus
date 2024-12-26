import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import { createPinia } from "pinia";
// 只要有install的npm都需要在这里导入才可以用

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(ElementPlus);
app.use(router)
app.mount("#app");