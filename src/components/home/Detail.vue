<template>
  <div class="detail" @click="$router.replace(`/article/${detailitem.id}`)">
    <img :src="detailitem.img" alt="" style="width:100%;" />
    <p>{{ detailitem.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["detailitem"],
};
</script>

<style lang="less">
.detail {
  
  p {
    font-size: 14px;
    margin: 0;
  }
}
</style>
