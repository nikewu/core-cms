import store from '../../store';
export default {
    loadingOn() {
        store.dispatch('setLoad', 1);
    },
    loadingOff() {
        store.dispatch('setLoad', 0);
    }
};