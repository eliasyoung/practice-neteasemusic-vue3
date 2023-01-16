import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "@/assets/iconfont";

import router from "./router";

// import global component
import SvgIcon from "@/components/SvgIcon.vue";
import BaseContainer from "@/components/base/BaseContainer.vue";
import BaseContent from "@/components/base/BaseContent.vue";
import BaseCoverImage from "@/components/base/cover-info/image/BaseCoverImage.vue";
import BaseCoverTitle from "@/components/base/cover-info/BaseCoverTitle.vue";
import BaseCoverArtist from "@/components/base/cover-info/BaseCoverArtist.vue";

// import directives
import { lazyImg } from "./directives";
const app = createApp(App);

// register global component
app.component("SvgIcon", SvgIcon);
app.component("BaseContainer", BaseContainer);
app.component("BaseContent", BaseContent);
app.component("BaseCoverImage", BaseCoverImage);
app.component("BaseCoverTitle", BaseCoverTitle);
app.component("BaseCoverArtist", BaseCoverArtist);

// register directives
app.directive("lazyImg", lazyImg);

app.use(router);

app.mount("#app");
