require.config({
    paths: {
        // Transformers
        'babel': 'transform/babel',
        'component': 'transform/component',

        // Packages
        'babel-standalone': 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min',
        'babel-polyfill': 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min',
        'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.6/vue',
        'vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min',
        'http-vue-loader': 'https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.0/src/httpVueLoader.min',
    },
});
require(['babel!app']);
