<template>
  <div class="bbc">
    <div class="nav">
      车 载 设 备 详 情
    </div>
    <div class="card">
          <van-icon name="desktop-o"  color="black" size="20px" />
          <div>
            <p>设备品牌: ZB</p>
            <p>设备型号: ZB-812</p>
          </div>
          <van-icon name="cross"/>

</div>
  <div>
    <br>
      <van-button round type="primary" size="normal" color="#007BFF" block>新增设备</van-button>
      <!-- <br>
      <van-button round type="primary" size="normal" color="red" block @click="Dialog">删除</van-button> -->
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.card{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      width: auto;
      height: 60px;
      padding: 10px 15px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      div{
         display: inline-block;
         margin-left: -50px;
         p{
           font-size: 14px;
           color: #323233;
         }
       }
       button{
          display: inline-block;
          height: 20px;
          width: 20px;
          border: 1px red solid;
          border-radius: 30%;
          background-color: red;
          color: #fff;
          font-size: 14px;
}
       background-color: #fff;
}
.button{
  display: block;
  width: 286px;
  height: 44px;
  text-align: center;
  margin: 0 auto;
  background-color: #007BFF;
  border: #007BFF;
  border-radius: 30px;
}
.bbc{
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #f1f9ffb6;
}
</style>
