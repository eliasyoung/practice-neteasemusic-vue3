import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "@/assets/iconfont";
// import "@/assets/styles/style.less";

import router from "./router";

// import global component
import SvgIcon from "@/components/SvgIcon.vue";

const app = createApp(App);

// register global component
app.component("SvgIcon", SvgIcon);

app.use(router);

app.mount("#app");
