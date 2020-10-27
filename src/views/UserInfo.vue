<template>
  <div class="user-info">
    <nav-bar :userInfo="model" />
    <div class="bg"><img src="@/assets/bannerTop_new.png" alt="" /></div>
    <user :userInfo="model" />
    <user-video />
  </div>
</template>

<script>
import NavBar from "../components/common/NavBar.vue";
import User from "../components/user/User";
import UserVideo from "../components/user/UserVideo";
export default {
  data() {
    return {
      model: {},
    };
  },
  components: {
    NavBar,
    User,
    UserVideo,
  },
  methods: {
    async UserinfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0]
    },
  },
  created() {
    this.UserinfoData();
  },
};
</script>

<style lang="less">
.user-info {
  .bg {
    overflow: hidden;

    img {
      height: 190px;
      width: 100%;
      margin-top: -40px;
      margin-bottom: -70px;
    }
  }
}
</style>
