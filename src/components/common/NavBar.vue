<template>
  <div class="nav-bar">
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/logo.png" />
    </div>
    <div>
      <p>
        <van-icon class="ipt-icon" name="search" />
      </p>
    </div>
    <div @click="$router.push('/userinfo/')">
      <img :src="imgUrl" v-if="imgUrl" />
      <img src="@/assets/default_img.jpg" alt="" v-else />
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  async mounted() {
    if (localStorage.getItem("token")) {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.imgUrl = res.data[0].user_img;
    }
  },
};
</script>

<style lang="less">
.nav-bar {
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .logo {
    width: 115px;
    img {
      width: 80%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    p {
      background-color: #f4f4f4;
      width: 90%;
      border-radius: 10px;
      .ipt-icon {
        padding: 3px;
        margin: 0;
        float: right;
        color: #aaa;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 26px;
      margin: 0 6px;
      border-radius: 50%;
    }
    p {
      padding: 5px 18px;
      margin: 0 10px;
      border-radius: 3px;
      background-color: #fb7299;
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
