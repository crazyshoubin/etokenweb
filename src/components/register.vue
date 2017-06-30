<template>
  <div class="container">
    <div class="alert alert-success" role="alert" v-if="dis">{{msg}}</div>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputText3" class="col-sm-2 control-label">手机号</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="inputText3" placeholder="Phone" v-model="user.phone"  @blur="changePhone()">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="user.pass">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label"> 再次输入密码</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password" v-model="user.npass" @blur="changeCount()">
        </div>
      </div>

      <div class="row">
        <div class="form-group col-lg-6">
          <div class="col-sm-offset-4 col-sm-12">
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="user.type"> 我已经理解并且同意
              </label>
              <a>《ETOKEN用户协议》</a>
            </div>
          </div>
        </div>
        <div class="form-group col-lg-6">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="btn btn-default" @click="register()">注册</div>
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
    register(){
      if(this.user.phone == ''){
        this.msg = '手机号不能为空'
        this.dis = true
      }else if(this.user.pass == ''){
        this.msg = '密码不能为空'
        this.dis = true
      }else if(this.user.npass == ''){
        this.msg = '请再次输入密码'
        this.dis = true
      }else if(this.user.type !== true){
        this.msg = '请阅读用户协议并勾选'
        this.dis = true
      }else {
        this.dis = false
        var that = this
        axios.post('/ico/register',{phone:this.user.phone,pass:this.user.pass})
          .then(function (response) {

            if(response.data.status == 200 ){
              that.msg = '注册成功5秒后跳转到登录页面'
              that.dis = true
              setTimeout(function(){that.$router.push('/etoken/login')},5000)
            }else {
              that.msg = response.data.msg
              that.dis = true
            }
          })
          .catch(function (error) {
          });
      }
    },
    changeCount(){

      if(this.user.pass !== this.user.npass){
        this.msg = '两次密码不一致'
        this.dis = true
      }else {
        this.msg = ''
        this.dis = false
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
