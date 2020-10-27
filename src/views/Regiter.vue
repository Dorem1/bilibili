<template>
  <div class="regiter">
    <login-top middleTop="注册bilibili">
      <div
        slot="right"
        style="font-size:3.333vw;justify-content: flex-end;"
        @click="$router.push('/login')"
      >
        密码登录
      </div>
    </login-top>
    <login-text
      style="margin-top:20px"
      label="姓名"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="(value) => (model.name = value)"
    />
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
    <login-btn btntext="注册" @regiterSubmit="regiterSubmit"></login-btn>
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
        name: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async regiterSubmit() {
      let rule = /^.{6,16}$/;
      if (
        rule.test(this.model.name) &&
        rule.test(this.model.username) &&
        rule.test(this.model.password)
      ) {
        // 格式正确 发送Axios
        const res = await this.$http.post("/register", this.model);
        // 提示框
        this.$toast(res.data.msg);
        if (res.data.msg == "注册成功") {
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("token", res.data.objtoken);
          setTimeout(()=>{
            this.$router.push('/userinfo')
          },500)
        }
      } else {
        // 失败
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
