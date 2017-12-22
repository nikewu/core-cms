<template>
  <div class="sidebar">
    <ul class="sidebar-nav" v-if="nav == 'home'">
      <li  :class="side == 'index' ? 'sidebar-nav__active': ''">
         <router-link  to="/">
          组件库
         </router-link>
      </li>
      <li  :class="side == 'table' ? 'sidebar-nav__active': ''">
        <router-link  to="/table">
        图表库
        </router-link>
      </li>
    </ul>
     <ul class="sidebar-nav" v-if="nav == 'user'">
      <li  :class="side == 'list' ? 'sidebar-nav__active': ''">
         <router-link  to="/user/list">
        用户列表
         </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import './index.scss';
  export default {
    name: 'sidebar',
    computed: {
      nav() {
        return this.$store.getters.navbar.nav;
      },
      side() {
        return this.$store.getters.navbar.side;
      }
    }
  };
</script>