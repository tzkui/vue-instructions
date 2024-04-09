import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.directive("drag", {
  mounted(el, binding) {
    el.style.position = "absolute";
    const data = binding.value || { x: 0, y: 0 };
    console.log("xxxx",data)
    let x = data.x,
      y = data.y;
    el.style.left = x + "px";
    el.style.top = y + "px";
  },
});
app.mount("#app");
