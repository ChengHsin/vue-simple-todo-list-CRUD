import Vue from 'vue'
import App from './App'
import store from './store/store';

new Vue({
    el: '#app',
    store,
    App,
    render: h => h(App)
});
