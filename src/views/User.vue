<template>
     <div class="user-container">
       <div class="user-card">
         <van-cell>
           <template #icon>
             <img :src="userinfo.headPortrait" alt="" class="avatar" v-if="userinfo!=={}"/>
           </template>
           <template #title>
             <span class="username" v-if="!userinfo.nickname">用户名</span>
             <span class="username" v-if="userinfo.nickname">{{userinfo.nickname}}</span>
           </template>
           <template #label>
             <router-link to="/login" v-if="!islogin"><van-tag color="#fff" text-color="#007bff">登录/注册</van-tag></router-link>
           </template>
         </van-cell>
       </div>

        <!-- <div class="car">
          <div class="img"><router-link to="/user/detail1"><img src="@/assets/car1.png"/><p>汽车</p></router-link></div>
          <div class="img"><router-link to="/user/detail2"><img src="@/assets/car2.png"/><p>电动汽车</p></router-link></div>
          <div class="img"><router-link to="/user/detail3"><img src="@/assets/car3.png"/><p>小货车</p></router-link></div>
          <div class="img"><router-link to="/user/detail4"><img src="@/assets/more.png"/><p>更多</p></router-link></div>
        </div> -->
        <br>
        <div class="card-contain">
        <router-link to='/userdetail'>
          <div class="card">
          <van-icon name="contact" size="30px" color="#fff"/>
          <br>
          <div><p>个人信息</p>
          <p v-if="userinfo.name">{{userinfo.gender}} {{userinfo.height}}厘米</p>
          </div>
        </div>
        </router-link>
        <router-link to='/car/cardetail'>
          <div class="card" style=" background-color: #199fff">
          <van-icon name="logistics" size="30px" color="#fff" />
          <br>
          <div>
            <p>车辆信息</p>
          <p v-if="cars.length!=0">{{cars[0].type}} {{cars[0].carNumber}}</p>
          </div>
        </div>
        </router-link>
       </div>
       <br>
       <van-cell-group class="action-card">
         <van-cell icon="phone-o" title="联系客服" is-link />
         <van-cell icon="setting-o" title="设置" is-link />
       </van-cell-group>
     </div>
   </template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
      islogin: false
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['token', 'cars', 'userinfo'])
  },
  watch: {
    token () {
      this.$store.dispatch('getAllCar')
      this.$store.dispatch('getLastUserHealth')
      this.$store.dispatch('GetUser')
      this.$store.dispatch('getDrivingInformationByTime', { beginTimeS: '2022-01-01 00:00:00', endTimeS: '2022-01-08 00:00:00' })
      this.islogin = true
    }
  },
  mounted () {
    if (this.token.length !== 0) {
      this.$store.dispatch('getAllCar')
      this.islogin = true
    }
  }
}

</script>

<style lang="less" scoped>
   .user-container {
     .user-card {
       background-color: #007bff;
       color: white;
       padding-top: 20px;
       .van-cell {
         background: #007bff;
         color: white;
         &::after {
           display: none;
         }
         .avatar {
           width: 60px;
           height: 60px;
           background-color: #fff;
           border-radius: 50%;
           margin-right: 10px;
         }
         .username {
           font-size: 14px;
           font-weight: bold;
         }
       }
     }
     .img{
       border: 1px solid #ebedf0;
       border-radius: 10px;
       flex:1;
       text-align: center;
       p{
         margin: 0;
         padding: 0;
         color: #323233;
         font-size: 14px;
       }
     }
     .car {
       display: flex;
       justify-content: space-evenly;
       align-items: center;
       margin-top: 1px;
       img {
         height: 50px;
         width: 50px;
         border-radius: 50%;
       }
     }
     .card-contain{
       display: flex;
       justify-content: space-around;
     }
     .card{
       display: inline-block;
       border-radius: 10px;
       width: 100px;
       height: 100px;
       padding: 10px;
       img{
         display: inline-block;
         width: 60px;
       }
       div{
         display: inline-block;
         p{
           font-size: 10px;
           color: #fff;
         }
       }
       background-color: #12d1b6;
     }
   }
</style>
