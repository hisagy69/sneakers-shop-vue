import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import "./assets/main.css";
import components from "@/components/UI";
import router from "@/router";

const app = createApp(App);

app.use(router);
app.use(autoAnimatePlugin);

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
