<template>
  <div class="commentParent">
    <div class="commentItem">
      <img src="@/assets/default_img.jpg" alt="" />
      <p>
        <span>小明</span>
        <span>4-4</span>
      </p>
    </div>
    <div class="comment">
      蜡笔小新真好看
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
.commentParent {
  margin-top: 30px;
  .commentItem {
    display: flex;
    padding: 0 15px;
    img {
      width: 35px;
      height: 35px;
    }
    p {
      margin: 0 10px;
      display: flex;
      justify-content: space-between;
      flex: 1;
      span {
        font-size: 16px;
        color: #999;
      }
    }
  }
  .comment {
    margin-top: -10px;
    margin-left: 45px;
    font-size: 16px;
  }
}
</style>
