<template>
  <div class="navbar">
    <div class="navbar-brand">core-cms</div>
    <ul class="navbar-nav">
      <!-- <li :class="{active:uikit.menu.nav=='home'}"> -->
      <li>
        <router-link  to="/">
          1
          <!-- <span v-if="roleType == 'ADMIN'">管理中心</span>
          <span v-if="roleType == 'MEMBER'">会员中心</span> -->
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import './index.css';
  // const roles = ['超级管理员', '会员'];
  export default {
    name: 'navbar',
    data() {
      return {};
    }
    // computed: {
    //   roleName() {
    //     return roles[this.$store.state.user.role] || '未知';
    //   },
    //   roleType() {
    //     return this.$store.getters.roleType;
    //   }
    // },
    // methods: {
    //   signout() {
    //     this.$router.push({
    //       path: '/login'
    //     });
    //     this.$store.dispatch('signout', {});
    //   }
    // }
  };
</script>