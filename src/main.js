import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import store from "@/store";
import components from "@/components/UI";  // импортируем массив UI компонентов UI/index.js
import directives from "@/directives";  // импортируем массив директив

const app = createApp(App);   
// глобальная регистрация компонентов из UI/index.js
components.forEach(component => {                
    app.component(component.name, component) 
})
// 
// глобальная регистрация директив
directives.forEach(directive => {                
    app.directive(directive.name, directive) 
})
console.log(directives);
app
    .use(store)
    .use(router)
    .mount("#app");

