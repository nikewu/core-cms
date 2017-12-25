<template>
    <div  class="core-loading" v-if="status == 1">
            <div class="loading-bar-1"></div>
            <div class="loading-bar-2"></div>
            <div class="loading-bar-3"></div>
            <div class="loading-bar-4"></div>
            <div class="loading-bar-5"></div>
    </div>
</template>
<script>
import './index.scss';
export default {
    name: 'loading',
    computed: {
      status() {
        return this.$store.getters.loading.status;
      }
    }
};
</script>
