import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
// import "@/assets/styles/style.less";

import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
