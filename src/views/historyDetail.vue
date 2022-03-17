<template>
  <div>
    <div class="nav">
      驾 驶 记 录 详 情
    </div>
    <div>
      <p>眨眼次数：{{this.$route.params.obj.closeEye}}</p>
      <p>注意力不集中次数：{{this.$route.params.obj.attention}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'historydetail',
  mounted () {

  }

}
</script>

<style lang="less" scoped>
.nav{
  height: 46px;
  background-color: #007bffd5;
  text-align: center;
  line-height: 46px;
  color: #fff;
}
</style>
