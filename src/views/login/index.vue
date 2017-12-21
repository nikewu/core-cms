<style scoped>
.signin-box {
    width: 100%;
    margin: 0 auto;
    padding: 60px 10px 10px;
}
.signin-container{
  box-sizing: border-box;
}
.sign-title{
    margin: 25px auto;
    text-align: center;
}
.sign-from-container{
    box-sizing: border-box;
}
.signin-form{
    max-width: 300px;
    padding-bottom: 40px;
    margin: 0 auto 25px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #d9d9d9;
}
.form-horizontal{

}
.form-group{
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 15px;
}
.input-group{
  position: relative;
    display: flex;
    border-collapse: separate;
}
.form-control {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;
    height: 44px;
    padding: 4px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.btn{
   width: 100%;
   display: block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.btn-lg{
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
 }
.valid {
    color: #0cf73f;
}
.invalid {
    border-color:#ec0a0a;
    color: #ec0a0a;
}
</style>
<template>
  <div class="signin-box">
    <div class="signin-container">
      <h4 class="sign-title">登 录</h4>
      <div id="signinForm">
        <form class="signin-form form-horizontal" @submit.prevent="login()" novalidate>
          <div class="form-group">
            <div class="input-group">
              <input type="text" name="email" autocomplete="off"  v-model="user.email" v-validate="'required|email|min:3'" data-vv-delay="100" :class="{'form-control valid': true, 'invalid':errors.has('email')}" placeholder="邮箱" />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <input type="password" name="password" autocomplete="off" v-model="user.password" v-validate="'required|min:6'" :class="{'form-control valid': true, 'invalid':errors.has('password')}"  placeholder="密码" />
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-lg" type="submit" id="signin_btn" :disabled="errors.any()" >登 录</button>
          </div>
        </form>
      </div>
      <!-- <div class="login-sns">
        <p>您还可以通过以下方式直接登录</p>
        <snsloginbtns :logins="logins"></snsloginbtns>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login(scope) {
       this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.dispatch('loginin', this.user);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>
