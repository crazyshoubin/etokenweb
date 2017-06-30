<template>
  <div class="container">
    <div class="alert alert-success" role="alert" v-if="dis">{{msg}}</div>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputText3" class="col-sm-2 control-label" >手机号</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="inputText3" placeholder="Phone" @blur="changePhone()" v-model="user.phone">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="user.pass">
        </div>
      </div>
      <div class="row">
        <div class="form-group col-lg-6">
          <div class="col-sm-offset-1 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="user.type"> 记住我
              </label>
            </div>
          </div>
        </div>
        <div class="form-group col-lg-6">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="btn btn-default" @click="login()">登录</div>
          </div>
        </div>
      </div>

    </form>

  </div>

</template>

<script>
  import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      user:{phone:'',pass:'',npass:'',type:''},
      msg:'',
      dis:false
    }
  },
  methods:{
      login(){
        if(this.user.phone == ''){
          this.msg = '手机号不能为空'
          this.dis = true
        }else if(this.user.pass == ''){
          this.msg = '密码不能为空'
          this.dis = true
        }else {
          this.dis = false
          var that = this
          axios.post('/ico/login',{phone:this.user.phone,pass:this.user.pass,type:this.user.type})
            .then(function (response) {

              if(response.data.status == 200 ){
                that.dis = true
                that.msg = '登录成功5秒后跳转'
                that.dis = true
                setTimeout(function(){that.$router.go(-1)},5000)
              }else {
                that.msg = response.data.msg
                that.dis = true
              }
            })
            .catch(function (error) {
            });
        }
      },
      changePhone(){
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.user.phone))){
          this.msg = '请输入正确的手机号'
          this.dis = true
        }else {
          this.msg = ''
          this.dis = false
        }
      }
  },
  created (){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .form-control{

    margin: 0 auto;
  }
form{
  padding: 20%  20%;
}
</style>
