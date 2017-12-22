<style scoped>
.signin-box {
    width: 100%;
    margin: 0 auto;
    padding: 5rem 1rem 1rem;
}
.signin-container{
  box-sizing: border-box;
}
.sign-title{
    margin: 2rem auto 0 auto;
    text-align: center;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-weight: 400;
}
.sign-from-container{
    box-sizing: border-box;
}
.signin-form{
    max-width: 20rem;
    padding-bottom: 2rem;
    margin: 0 auto 2rem;
    box-sizing: border-box;
}
.core-textfield.primary input.valid {
    color:#93dad6;
}
.core-textfield.primary input.invalid {
    color: #FB656E;
}
</style>
<template>
  <div class="signin-box">
    <div class="signin-container">
      <h4 class="sign-title">登 录</h4>
      <div id="signinForm">
        <form class="signin-form form-horizontal" @submit.prevent="login()" novalidate>
          <div class="form-group">
                <div class="core-textfield primary">
                    <input type="text" name="email" required v-model="user.email" v-validate="'required|email|min:3'" data-vv-delay="100" :class="{'form-control valid': true, 'invalid':errors.has('email')}"/>
                    <label data-content="邮箱">邮箱</label>
                </div>
          </div>
          <div class="form-group">
              <div class="core-textfield primary">
                    <input type="password" name="password" required  autocomplete="off" v-model="user.password" v-validate="'required|min:6'" :class="{'form-control valid': true, 'invalid':errors.has('password')}"/>
                    <label data-content="密码">密码</label>
              </div>
          </div>
          <div class="form-group">
            <button class="btn-lg btn-auto" type="submit" id="signin_btn" :disabled="errors.any()" >登 录</button>
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
          this.$store.dispatch('loginIn', this.user);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>
