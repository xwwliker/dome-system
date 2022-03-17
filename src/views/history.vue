<template>
  <div>
    <div class="nav">
      驾 驶 记 录
    </div>
    <!-- <div class="test">
      暂无驾驶记录!
    </div> -->
    <van-tabs :active="active" color="#007BFF">
      <van-tab title="最近一周">
        <router-link v-for="item in timeHistory" :key="item.id" :to="{name: 'historydetail',params: {id:item.id,obj: item}}">
      <div class="card">
          <van-icon name="todo-list-o" size="30px" color="black"/>
          <div><p>开始时间: {{item.begin}}</p>
          <p>结束时间: {{item.end}}</p></div>
      </div>
    </router-link>
      </van-tab>
      <van-tab title="最近一个月">
        <router-link v-for="item in timeHistory" :key="item.id" :to="{name: 'historydetail',params: {id:item.id,obj: item}}">
      <div class="card">
          <van-icon name="todo-list-o" size="30px" color="black"/>
          <div><p>开始时间: {{item.begin}}</p>
          <p>结束时间: {{item.end}}</p></div>
      </div>
    </router-link>
      </van-tab>
    </van-tabs>

<!-- <div class="card">
          <van-icon name="todo-list-o" size="30px" color="black"/>
          <div><p>驾驶人</p>
          <p>驾驶时间</p></div>
</div> -->
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'history',
  computed: {
    ...mapState(['timeHistory', 'dayHistory'])
  },
  methods: {
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
.test{
  text-align: center;
  color:#007BFF;
}
.card{
       border-radius: 10px;
       width: auto;
       height: 60px;
       padding: 10px;
       margin: 5px;
       box-shadow:  1px 1px 1px #fafafa;
       background-color: #fafafa;
       div{
         display: inline-block;
         margin-left: 10px;
         p{
           font-size: 10px;
           color: black;
         }
       }
}
.bbc{
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #ebf2f7cb;
}
</style>
