import App from "@/App.vue";
import "@/assets/css/app.css";
import { vReveal } from "@/composables/useReveal";
import router from "@/router";
import { createApp } from "vue";

const app = createApp(App);

app.directive("reveal", vReveal);
app.use(router).mount("#app");
