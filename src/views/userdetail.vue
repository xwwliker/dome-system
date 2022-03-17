<template>
  <div>
    <div class="nav">
      个 人 信 息
  </div>
  <van-cell-group inset>
  <!-- 输入任意文本 -->
  <van-field v-model="userinfo.name" label="姓名" />
  <van-field v-model="userinfo.tel" label="手机号" />
  <van-field v-model="userinfo.gender" label="性别" />
  <van-field v-model="userinfo.nickname" label="用户名" />
  <!-- 允许输入正整数，调起纯数字键盘 -->
  <van-field v-model="userinfo.year" type="digit" label="年龄" />
  <!-- 允许输入数字，调起带符号的纯数字键盘 -->
  <van-field v-model="userinfo.height" type="number" label="身高" />
  <van-field v-model="userinfo.weight" type="number" label="体重" />
  <van-field v-model="userinfo.emergencyNumber" type="number" label="紧急联系人" />
  <van-button round type="primary" size="normal" color="#007BFF" block @click="onSave" style="margin-top: 5px">保存</van-button>

</van-cell-group>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { mapState } from 'vuex'
import { perfectInformation } from '@/api'
export default {
  data () {
    return {
      message: this.userinfo
    }
  },
  computed: {
    ...mapState(['userinfo'])
  },
  methods: {
    onSave () {
      var res = perfectInformation(this.userinfo)
      if (res.status === 200) {
        Toast('操作成功')
      }

      console.log(this.userinfo)
    }
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
