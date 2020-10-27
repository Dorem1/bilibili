<template>
  <div class="home">
    <nav-bar></nav-bar>
    <van-tabs v-model="active" swipeable sticky animated>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.title"
      >
        <div class="detailparent">
          <detail
            class="detailitem"
            :detailitem="detailitem"
            v-for="(detailitem, detailindex) in item.list"
            :key="detailindex"
          />
        </div>
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="我是有底线的 >_<"
          @load="onLoad"
          :immediate-check="false"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "../components/common/NavBar";
import Detail from "../components/home/Detail";
export default {
  data() {
    return {
      category: [],
      active: "",
      list: [],
      loading: false,
      finished: false,
    };
  },
  components: {
    NavBar,
    Detail,
  },
  methods: {
    async selectCategory() {
      const res = await this.$http.get("/category");
      this.changeCategory(res.data);
    },
    changeCategory(data) {
      this.category = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.pagesize = 10;
        item.loading = false
        item.finished = false
        return item;
      });
    },
    onLoad(){
      const current = this.category[this.active]
      current.page+=1;
      setTimeout(()=>{
        this.selectArticle()
        current.loading = false
      },500)
    },
    async selectArticle() {
      const categoryItem = this.category[this.active];
      const res = await this.$http.get("/detail/" + categoryItem._id, {
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pagesize,
        },
      });
      categoryItem.list.push(...res.data);
      if(res.data.length < categoryItem.pagesize){
        categoryItem.finished = true
      }
    },
  },
  watch: {
    active() {
      this.selectArticle();
    },
  },
  created() {
    this.selectCategory();
  },
};
</script>

<style lang="less">
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .detailitem {
    width: 45%;
    margin: 6px;
  }
}
</style>
