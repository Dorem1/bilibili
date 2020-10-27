<template>
  <div class="userdetail">
    <div>
      <div class="user_img">
        <img :src="userInfo.user_img" v-if="userInfo.user_img" />
        <img src="@/assets/default_img.jpg" v-else/>
      </div>
      <div class="user_edit">
        <div>
          <p>
            <span>0</span>
            <span class="user_text">粉丝</span>
          </p>
          <p>
            <span>54</span>
            <span class="user_text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
          <div class="user_editBtn">编辑资料</div>
        </div>
      </div>
    </div>
    <div>
      <h2>罓Doremi</h2>
      <p v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
      <p v-else>这个人很神秘，什么都没有写</p>
    </div>
    <div class="bar">
      <span>动态</span>
      <span>视频</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userInfo"],
};
</script>

<style lang="less">
.userdetail {
  background-color: white;
  padding: 0px 10px;
  > div:nth-child(1) {
    display: flex;
    .user_img {
      margin-right: 20px;
      margin-top: 10px;
      img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
      }
    }
    .user_edit {
      flex: 1;
      div:nth-child(1) {
        display: flex;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 13px;
          .user_text {
            color: #aaa;
          }
        }
        p:nth-child(1),
        p:nth-child(2) {
          border-right: 1.085px solid #ccc;
        }
      }
      div:nth-child(2) {
        padding: 2.17px 0px;
        .user_editBtn {
          border: 1.085px solid #fb7a9f;
          padding: 3.247px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fb7a9f;
          border-radius: 4.332px;
          font-size: 17px;
        }
      }
    }
  }
  > div:nth-child(2) {
    h2 {
      margin: 10.835px 0 3.247px 0;
      font-weight: 400;
      font-size: 20px;
    }
    p {
      padding: 0;
      margin: 10.835px 0;
      color: #999;
      font-size: 15px;
    }
  }
  .bar {
    padding: 6px 10px;
    font-size: 15px;
    color: #666;
    border-width: 1px 0;
    border-style: solid;
    border-color: #ccc;
    margin: 10px -10px;
    span {
      margin-right: 25px;
    }
  }
}
</style>
