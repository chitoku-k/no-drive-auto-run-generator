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
        'http-vue-loader': 'https://cdn.rawgit.com/chitoku-k/http-vue-loader/bc8e142332b8f396715ec3fc61fbad03ae2a8040/src/httpVueLoader',
    },
});
require(['babel!app']);
