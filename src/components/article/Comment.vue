<template>
  <div class="comment">
    <p>
      <span>评论</span>
      <span>(400)</span>
    </p>
    <div class="comment-text" v-if="myUser.user_img">
      <img :src="myUser.user_img" alt="">
      <input type="text" placeholder="说点什么吧">
      <button @click="publish">发布</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      myUser:{}
    }
  },
  methods:{
    async myUserinfo() {
      if (localStorage.getItem("token")) 
      {const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.myUser = res.data[0];}
    },
    publish(){

    }
  },
  created(){
    this.myUserinfo()
  }
}
</script>

<style lang="less">
.comment{
  padding: 0 15px;
  p {
    span{
      font-size: 20px;
      margin-right: 10px;
    }
    span:nth-child(2){
      color: #999;
    }
  }
  .comment-text{
    display: flex;
    font-size: 14px;
    img {
      width: 30px;
      border-radius: 50%;
    }
    input {
      margin: 0 15px;
      outline: none;
      border: 0;
      border-radius: 15px;
      padding: 0 15px;
      width: 60%;
    }
    button {
      border: 0;
      color: #999;
      background-color: #f4f4f4;
      padding: 0;
    }
  }
}
</style>