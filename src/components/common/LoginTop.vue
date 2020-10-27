<template>
  <div>
    <div class="login-top" style="padding:0 15px">
      <div></div>
      <div>{{middleTop}}</div>
      <div>
        <slot name="right" id="right"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["middleTop"],
};
</script>

<style lang="less" scoped>
.login-top {
  height: 55px;
  background-color: #fff;
  display: flex;
  div{
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 4.6vw;
  }
  
}
</style>
