<template>
  <div>
    <div class="nav">
      个 人 信 息
  </div>
  <van-cell-group inset>
  <van-divider @click="show = true">
    <img :src="userinfo.headPortrait" alt="" class="avatar" v-if="userinfo!=={}"/>
  </van-divider>
  <!-- <van-action-sheet
  v-model="show"
  :actions="actions"
  cancel-text="取消"
  close-on-click-action
  @select="onSelect"
  @cancel="onCancel"
  /> -->
  <input type="file" id="test">
  <van-action-sheet v-model="show" :actions="actions" @select="onSelect">
  <div class="content">
    <!-- <p>上传头像</p> -->
  <!-- <van-uploader :after-read="afterRead" /> -->
  </div>
</van-action-sheet>

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
import { perfectInformation, reqUploadPortrait } from '@/api'
export default {
  data () {
    return {
      show: false,
      actions: [{ name: '查看头像' }, { name: '上传头像' }]
    }
  },
  computed: {
    ...mapState(['userinfo'])
  },
  methods: {
    comReqImg () {
      var input = document.getElementById('test')
      var formdata = new FormData()
      formdata.append('file', input.files[0])
      reqUploadPortrait(formdata)
    },
    inputImg () {
      var input = document.getElementById('test')
      input.click()
      console.log(input.value)
    },
    onSave () {
      var res = perfectInformation(this.userinfo)
      this.comReqImg()
      if (res.status === 200) {
        Toast('操作成功')
      }
    },
    onCancel () {
      Toast('取消')
    },
    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false
      if (item.name === '上传头像') {
        this.inputImg()
      }
      Toast(item.name)
    },
    afterRead (file) {
      this.show = false
      console.log(file.file)
      reqUploadPortrait(file.file)
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  }

}
</script>

<style lang="less" scoped>
#test{
  visibility: hidden;
}
.nav{
  height: 46px;
  background-color: #007bffd5;
  text-align: center;
  line-height: 46px;
  color: #fff;
}
.avatar {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 10px;
}
.content {
  text-align: center;
}
</style>
