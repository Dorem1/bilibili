<template>
  <div class="loginBtn" @click="regiterClick">
    {{btntext}}
  </div>
</template>

<script>
export default {
  props:['btntext'],
  methods:{
    regiterClick(){
      this.$emit('regiterSubmit')
    }
  }
};
</script>

<style>
.loginBtn{
  height: 40px;
  background-color: #ff9db5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.8vw;
  border-radius: 6.667vw;
  margin: 15px 8px;
}
</style>
