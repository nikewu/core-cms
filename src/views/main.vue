<template>
  <div class="content-wrap">
    <navbar></navbar>
    <!-- <sidebar></sidebar> -->
    <div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      };
    }
  };
</script>