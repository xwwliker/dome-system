<template>
  <div>
    <div class="nav">
      编辑驾驶人
    </div>
<br>
<van-cell-group inset>
  <van-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
  />
  <van-field
    v-model="phone"
    label="手机号"
    placeholder="请输入手机号"
  />
</van-cell-group>
<br>
  <van-button round type="primary" size="normal" color="#007BFF" block @click="onSave">保存</van-button>
  <br>
  <van-button round type="primary" size="normal" color="red" block @click="Dialog">删除</van-button>
  </div>
</template>

<script>
import { Toast, Dialog } from 'vant'
export default {
  data () {
    return {
      username: '',
      phone: ''
    }
  },
  methods: {
    onSave () {
      console.log('add')
      this.$router.replace('/userdetail')
      Toast('操作成功')
    },
    Dialog () {
      Dialog.confirm({
        title: '确认删除？'
        //     message:
        // '确认删除？'
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    }
  }

}
</script>

<style lang="less" scoped>
.nav{
  height: 46px;
  background-color: #007BFF;
  text-align: center;
  line-height: 46px;
  color: #fff;
}
</style>
