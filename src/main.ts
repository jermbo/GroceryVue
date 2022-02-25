import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import { createPinia } from "pinia";
import router from "./routes";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
