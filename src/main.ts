import { createApp } from 'vue';
// pinia and pinia-plugin-persistedstate
import pinia from './stores';
// vue-router
import router from './router';
// i18n
import i18n from './lang';
/**
 * Import the Unocss core styles
 * Best placed after reset style, before uno.css
 */
import './assets/styles/index.scss';
// Import the Unocss utilities styles
import 'uno.css';
// 全局定义指令
import backToTop from './directive/back-to-top';
// App
import App from './App.vue';

/** 解决浏览器警告
 * Added non-passive event listener to a scroll-blocking 'touchmove' event. Consider marking event handler as 'passive' to make the page more responsive.
 */
import 'default-passive-events';

const app = createApp(App);

app.directive('back-to-top', backToTop);

app.use(pinia);
app.use(i18n);
app.use(router);
app.mount('#app');
