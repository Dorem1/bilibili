<template>
  <div v-if="model">
    <nav-bar></nav-bar>
    <div class="video-info">
      <div class="video">
        <video controls preload :src="model.content"></video>
      </div>
      <div class="video-name">
        <span>{{ model.name }}</span>
        <div>
          <p>{{ model.userinfo.name }}</p>
          <span>123万次观看</span>
          <span>5567弹幕</span>
          <span>{{ model.date }}</span>
        </div>
      </div>
      <div>
        <p>
          <span class="icon-star-full"></span>
          <span>收藏</span>
        </p>
        <p>
          <span class="icon-box-add"></span>
          <span>缓存</span>
        </p>
        <p>
          <span class="icon-redo2"></span>
          <span>分享</span>
        </p>
      </div>
    </div>
    <div class="detailparent" @click="$router.go(0)">
      <detail
        v-for="item in commendList"
        :key="item.id"
        :detailitem="item"
        class="detailitem"
      />
    </div>
    <comment />
    <comment-text />
    <comment-text />
    <comment-text />
    <comment-text />
  </div>
</template>

<script>
import NavBar from "../components/common/NavBar";
import Detail from "../components/home/Detail";
import Comment from "../components/article/Comment";
import CommentText from "../components/article/CommentText";

export default {
  data() {
    return {
      model: null,
      commendList: null,
    };
  },
  components: {
    NavBar,
    Detail,
    Comment,
    CommentText
  },
  methods: {
    async articleData() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      
      this.model = res.data[0];
    },
    async recommendData() {
      const res = await this.$http.get("/commend/");
      this.commendList = res.data;
    },
    
  },

  created() {
    this.articleData();
    this.recommendData();
    
  },
};
</script>

<style lang="less">
.video-info {
  background-color: #fff;
  .video {
    width: 100%;
    video {
      width: 100%;
    }
  }
  .video-name {
    margin: 15px 0;
    line-height: 16px;
    background-color: #fff;
    span {
      margin: 12px;
      font-size: 17px;
    }
    div {
      margin: 0 12px;
      p {
        display: inline-block;
        margin-right: 5px;
        font-size: 15px;
      }
      span {
        margin: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }
  div:nth-child(3) {
    height: 40px;
    margin-top: -20px;
    display: flex;
    p {
      margin-left: 15px;
      display: flex;
      align-items: center;
      font-size: 18px;
      span:nth-child(1) {
        color: #666;
      }
      span:nth-child(2) {
        margin-left: 3px;
        font-size: 13px;
        color: #999;
      }
    }
  }
}
</style>
