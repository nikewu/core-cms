export default {
    state: {
        navbar: null
    },
    getters: {
        navbar: state => {
            return state.navbar;
        }
    },
    mutations: {
        setNavbar(state, navbar) {
            state.navbar = navbar;
        }
    },
    actions: {
        setNavbar({ commit }, navbar) {
            commit('setNavbar', navbar);
        }
    }
};