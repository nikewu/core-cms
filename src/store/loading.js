export default {
    state: {
        loading: {
            status: 0
        }
    },
    getters: {
        loading: state => {
            return state.loading;
        }
    },
    mutations: {
        setLoad(state, status) {
            state.loading.status = status;
        }
    },
    actions: {
        setLoad({ commit }, status) {
            commit('setLoad', status);
        }
    }
};