<template>
  <div >
    <div class="edit-bar" @click="barClick">
      <span>{{left}}</span>
      <span><slot name="right"></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  props:['left'],
  methods:{
    barClick(){
      this.$emit('barClick')
    }
  }
}
</script>

<style>
.edit-bar{
  background-color: #fff;
  padding: 10px;
  font-size: 15px;
  color: #666;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>