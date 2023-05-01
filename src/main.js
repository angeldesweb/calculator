import "./app.postcss";
import "daisyui/dist/full.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
