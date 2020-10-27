<template>
  <div>
    <van-cell-group>
      <van-field
        autofocus
        v-model="value"
        :label="label"
        :placeholder="placeholder"
        :type="type"
        :rule="rule"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  props: ["label","placeholder","type","rule"],
  methods:{
    handleRule(){
      const ru = new RegExp(this.rule)
      if(ru.test(this.value)){
        this.$emit('inputChange',this.value)
      }
    }
  },
  watch:{
    value(){
      this.handleRule()
    }
  }
};
</script>

<style></style>
