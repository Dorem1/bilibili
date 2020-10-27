<template>
  <div class="regiter">
    <login-top middleTop="登录bilibili">
    <div
      slot="right"
      style="font-size:3.333vw;justify-content: flex-end;"
      @click="$router.push('/regiter')"
    >
      注册
    </div></login-top>

    <login-text
      style="margin-top:20px"
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="(value) => (model.username = value)"
    />
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="(value) => (model.password = value)"
    />
    <login-btn btntext="登录" @regiterSubmit="AjaxInsert"></login-btn>
  </div>
</template>

<script>
import LoginTop from "../components/common/LoginTop";
import LoginText from "../components/common/LoginText";
import LoginBtn from "../components/common/LoginBtn";

export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async AjaxInsert() {
      if (this.model.username && this.model.password) {
        // 格式正确
        const res = await this.$http.post("/login", this.model);
        this.$toast(res.data.msg);
        // 
        if(res.data.code == 301 ||res.data.code == 302){
          return
        }
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('id',res.data.id)
        setTimeout(()=>{
          this.$router.push('/userinfo')
        },500)
      } else {
        this.$toast.fail("格式不正确，请重新输入");
      }
    },
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
};
</script>

<style></style>
