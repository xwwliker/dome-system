<template>
<div class="con">
<!-- 路由 -->
<router-view></router-view>
<!-- tabbar -->
<div class="empty"></div>
<van-tabbar route fixed>
  <van-tabbar-item replace icon="home-o" to="/home" name="home">首 页</van-tabbar-item>
  <van-tabbar-item replace icon="clock-o" to="/history" name="history">驾 驶 记 录</van-tabbar-item>
  <van-tabbar-item replace icon="user-o" to="/user" name="user">用 户</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  name: 'APP'

}
</script>

<style lang="less" scoped>
.empty{
  height: 50px;
}
</style>
