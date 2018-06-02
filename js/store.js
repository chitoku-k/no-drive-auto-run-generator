import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allDrives: [],
        disabledDrives: [],
        registryMap: {},
    },
    getters: {
        registryValues(state) {
            return state.allDrives.filter(x => state.disabledDrives.includes(x))
                                  .map(x => state.registryMap[x])
                                  .reduce((previous, { value, bit }) => (previous[bit] += value, previous), [ 0, 0, 0, 0 ])
        },
    },
    mutations: {
        registerDrives(state, { allDrives, registryMap }) {
            state.allDrives = allDrives;
            state.registryMap = registryMap;
        },
        updateAutoRun(state, { drives }) {
            state.disabledDrives = [ ...new Set(drives) ].sort();
        },
    },
    actions: {
        initialize({ commit }) {
            const bitLength = 8;
            const allDrives = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
            commit('registerDrives', {
                allDrives,
                registryMap: Object.assign(...allDrives.map((x, i) => ({
                    [x]: {
                        value: 2 ** (i % bitLength),
                        bit: i / bitLength | 0,
                    },
                }))),
            });
        },
        updateAutoRun({ commit }, { drives }) {
            commit('updateAutoRun', { drives });
        },
    },
});
