<template>
  <div>
    <div class="nav">
      注 册
    </div>
    <!-- <van-nav-bar
  title="注册"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/> -->
    <div class="login">
 <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">注册</van-button>
  </div> <div style="margin: 16px;">
  </div>
</van-form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Resgiter',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less">
.login{
  margin-top: 100px;
}
.nav{
  height: 46px;
  background-color: #007bffd5;
  text-align: center;
  line-height: 46px;
  color: #fff;
}
</style>
