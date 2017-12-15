<template>
  <div class="sidebar">
    <!-- <ul class="sidebar-nav" v-if="uikit.menu.nav=='home'">
      <li :class="{active:uikit.menu.side=='dashboard'}">
        <router-link to="/">
          控制台
        </router-link>
      </li>
      <li :class="{active:uikit.menu.side=='uikit'}" v-if="env === 'development'">
        <router-link to="/uikit">
          uikit
        </router-link>
      </li>
    </ul> -->
  </div>
</template>
<script>
  import './index.less';
  export default {
    name: 'sidebar',
    data() {
      return {

      };
    },
    computed: {
    //   roleType() {
    //     return this.$store.getters.roleType;
    //   }
    }
  };
</script>