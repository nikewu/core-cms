<template>
  <div class="navbar">
    <div class="navbar-brand">core-cms</div>
    <ul class="navbar-nav">
      <li  :class="nav == 'home'?'navbar-nav__active':''">
        <router-link  to="/">
          首页
        </router-link>
      </li>
       <li :class="nav == 'user'?'navbar-nav__active':''">
        <router-link  to="/user/list">
          用户中心
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import './index.scss';
  export default {
    name: 'navbar',
    computed: {
      nav() {
        return this.$store.getters.navbar.nav;
      }
    },
    methods: {
      signout() {
        this.$store.dispatch('loginOut');
        this.$router.push({
          path: '/login'
        });
      }
    }
  };
</script>