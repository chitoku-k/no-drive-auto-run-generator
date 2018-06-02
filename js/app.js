import Vue from 'vue';
import store from 'babel!./store';
import RegistryGenerator from 'component!./components/registry-generator';

new Vue({
    el: '#app',
    template: `<registry-generator></registry-generator>`,
    store,
    components: {
        RegistryGenerator,
    },
});
