<template>
  <div class="edit">
    <div style="margin-bottom:13px;"><nav-bar /></div>
    <div class="upload">
      <van-uploader
        class="upload-img"
        preview-size="100vw"
        :after-read="afterRead"
      />
      <edit-bar left="头像">
        <img slot="right" :src="model.user_img" alt="" v-if="model.user_img" />
        <img slot="right" src="" alt="" v-else />
      </edit-bar>
    </div>

    <edit-bar left="昵称" @barClick="show = true">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-bar>

    <edit-bar left="账号">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </edit-bar>

    <edit-bar left="性别" @barClick="sexshow = true">
      <a href="javascript:;" slot="right">{{ model.gender? '男':'女' }}</a>
    </edit-bar>

    <edit-bar left="出生日期">

    </edit-bar>

    <edit-bar left="个性签名" @barClick="textshow = true">
      <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
    </edit-bar>

    <div class="editback" @click="$router.back()">返回空间</div>

    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="nameClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" autofocus />
    </van-dialog>

    <van-dialog
      v-model="textshow"
      title="个性签名"
      show-cancel-button
      @confirm="textClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet v-model="sexshow" cancel-text="取消" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import NavBar from "../components/common/NavBar";
import EditBar from "../components/common/EditBar";
export default {
  data() {
    return {
      model: {},
      show: false,
      textshow: false,
      sexshow: false,
      content: "",
      actions:[
        { name: '女',val:0},
        { name: '男',val:1},
      ]
    };
  },
  components: {
    NavBar,
    EditBar,
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(f) {
      const formdata = new FormData();
      formdata.append("file", f.file);
      const res = await this.$http.post("/upload", formdata);
      this.model.user_img = res.data.url;
      this.updateData();
    },
    async updateData() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),this.model);
        if(res.data.code == 200){
          this.$toast('修改成功')
        }
    },
    nameClick() {
      this.model.name = this.content;
      this.updateData();
      this.content = "";
    },
    textClick() {
      this.model.user_desc = this.content;
      this.updateData();
      this.content = "";
    },
    onSelect(data){
      this.model.gender = data.val
      this.updateData();
      this.sexshow = false
    }
  },
  created() {
    this.selectUser();
  },
};
</script>

<style>
.edit a {
  color: #aaa;
}
.edit img {
  width: 40px;
  border-radius: 50%;
}
.upload {
  overflow: hidden;
  position: relative;
}
.upload .upload-img {
  position: absolute;
  opacity: 0;
}
.editback{
  background-color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  margin-top: 40px;
  padding: 8px;
}
</style>
