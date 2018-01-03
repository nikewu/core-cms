<template>
  <div>
  <el-checkbox v-model="checked">备选项</el-checkbox>
  <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      radio: '1'
    };
  },
  created() {
    console.log(this);
  }
};
</script>
