<style scoped>
.main-container{
  padding:  3rem 0 0 10rem;
}
</style>
<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="main-container">
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