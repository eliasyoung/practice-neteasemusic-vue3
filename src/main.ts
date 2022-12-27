import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "@/assets/iconfont";
// import "@/assets/styles/style.less";

import router from "./router";

// import global component
import SvgIcon from "@/components/SvgIcon.vue";
import BaseContainer from "@/components/base/BaseContainer.vue";
import BaseContent from "@/components/base/BaseContent.vue";

const app = createApp(App);

// register global component
app.component("SvgIcon", SvgIcon);
app.component("BaseContainer", BaseContainer);
app.component("BaseContent", BaseContent);

app.use(router);

app.mount("#app");
