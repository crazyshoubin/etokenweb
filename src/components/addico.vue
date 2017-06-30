<template>
 <div>
   <div class="panel panel-default">
     <!-- Default panel contents -->
     <div class="panel-heading">ICO信息 <span class="add" @click="addico()">添加</span></div>

     <!-- Table -->
     <table class="table table-bordered">
       <tr>
         <th>ICO_NAME</th>
         <th>ICO_ICON</th>
         <th>ICO_Type</th>
         <th>SET</th>
       </tr>
       <tr v-for="(item,index) in items">
         <td>{{item.ICO_Name}}</td>
         <td>{{item.ICO_ICON}}</td>
         <td>{{item.ICO_Type}}</td>
         <td @click="addico(index)" class="set" >修改</td>
       </tr>
     </table>
   </div>
   <div id="add" class="change" v-if="flag">
     <p class="close" style="color: #f5f5f5; font-size: 40px" @click="close()" >X</p>
     <form :enctype="enctype">
       <div class="form-group">
         <label >ICO_NAME*:</label>
         <input  class="form-control" v-model="addData.ICO_Name" v-bind:disabled="disable">
       </div>
       <div class="form-group">
         <label >ICO_Score(评级):</label>
         <input  class="form-control" v-model="addData.ICO_Score" >
       </div>
       <div class="form-group">
         <label >ICO_URL:</label>
         <input type="url" class="form-control" v-model="addData.ICO_URL">
       </div>
       <div class="form-group">
         <label >ICO_ICON:</label>
         <input  class="form-control" v-model="addData.ICO_ICON">
       </div>
       <div class="form-group">
         <label >ICO_Basis(基础链):</label>
         <input  class="form-control" v-model="addData.ICO_Basis">
       </div>
       <div class="form-group">
         <label >ICO_Founding(创始人):</label>
         <input  class="form-control" v-model="addData.ICO_Founding">
       </div>
       <div class="form-group">
         <label >ICO_Tptal(代币总量):</label>
         <input  class="form-control" v-model="addData.ICO_Tptal">
       </div>
       <div class="form-group">
         <label >ICO_StartTime(开始时间):</label>
         <input  type="date" class="form-control" v-model="addData.ICO_StartTime">
       </div>
       <div class="form-group">
         <label >ICO_EndTime(结束时间):</label>
         <input type="date" class="form-control" v-model="addData.ICO_EndTime">
       </div>
       <div class="form-group">
         <label >ICO_Amount(总值):</label>
         <input  class="form-control" v-model="addData.ICO_Amount">
       </div>
       <div class="form-group">
         <label >ICO_State(状态):</label>
         <input  class="form-control" v-model="addData.ICO_State">
       </div>
       <div class="form-group">
         <label>ICO_Logo(图片):</label>
         <input type="file" class="form-control" name="logo" @change="onupdataImg()" id="imgToUpload">
       </div>
       <div class="form-group">
         <label >ICO_Country(国家):</label>
         <input  class="form-control" v-model="addData.ICO_Country">
       </div>
       <div class="form-group">
         <label >ICO_Exchange(交易所):</label>
         <input  class="form-control" v-model="addData.ICO_Exchange">
       </div>
       <div class="form-group">
         <label >ICO_Team(团队):</label>
         <input  class="form-control" v-model="addData.ICO_Team">
       </div>
       <div class="form-group">
         <label >ICO_Wpaper(白皮书):</label>
         <input type="file" class="form-control" @change="onupdataFile()" id="FileToUpload">
       </div>
       <div class="form-group">
         <label >ICO_Remark(评语):</label>
         <input type="text" class="form-control" v-model="addData.ICO_Remark">
       </div>
       <div class="form-group">
         <label >ICO_HOT(排序,由大到小)*:</label>
         <input  class="form-control" v-model="addData.ICO_HOT">
       </div>
       <div class="checkbox">
         <label>
           <input type="checkbox" v-model="addData.ICO_Type"> 是否显示
         </label>
       </div>
       <div class="btn" @click="updataico()">提交</div>
     </form>
   </div>
 </div>


</template>

<script>
  import axios from 'axios'
  import config from '../config/config'
export default {
  name: 'hello',
  data () {
    return {
      items:'',
      msg: 'Welcome to Your Vue.js App',
      flag:false,
      addData:{ICO_Amount: '', ICO_Basis:'', ICO_Country:'', ICO_EndTime:'', ICO_Exchange:'', ICO_Founding:'',ICO_HOT:'',
        ICO_ICON:'', ICO_Logo:'', ICO_Name:'', ICO_Remark:'', ICO_Score:'', ICO_StartTime:'', ICO_State:'',
        ICO_Team:'', ICO_Total:'', ICO_Type:'', ICO_URL:'', ICO_Wpaper:''},
      updata:{ICO_Amount: null, ICO_Basis:null, ICO_Country:null, ICO_EndTime:null, ICO_Exchange:null, ICO_Founding:null,ICO_HOT:null,
        ICO_ICON:null, ICO_Logo:null, ICO_Name:null, ICO_Remark:null, ICO_Score:null, ICO_StartTime:null, ICO_State:null,
        ICO_Team:null, ICO_Total:null, ICO_Type:'ture', ICO_URL:null, ICO_Wpaper:null},
      disable:'',
      enctype:"multipart/form-data"
    }
  },
  methods:{
    close(){
      this.flag?this.flag=false:this.flag=true
    },
    addico(key){
      this.flag?this.flag=false:this.flag=true
      if(key == undefined){
        this.addData = this.updata
        this.$store.commit('addico',undefined)
        this.disable = false
      }
      if(key>=0){
        this.addData = this.items[key]
        this.$store.commit('addico',key)
        this.disable = true
      }
    },
    updataico(){
     var key = this.$store.state.addkey
     var that = this
     if(key == undefined){
       axios.post('/ico/addinfo',this.updata)
         .then(function (response) {
           that.flag?that.flag=false:that.flag=true
           alert(response.data.msg)
           that.info()
         })
         .catch(function (error) {

         });
     }else{
        axios.post('/ico/updatainfo',this.addData)
          .then(function (response) {
            that.flag?that.flag=false:that.flag=true
            alert('修改成功')
          })
          .catch(function (error) {

          });
      }
    },
    info(){
      var that = this;
      axios.get('/ico/allinfo')
        .then(function (response) {
          that.items = response.data.data
        })
        .catch(function (error) {
        });
    },
    onupdataImg(e){
      var files = document.getElementById('imgToUpload').files[0]
      var fd = new FormData();
      var that = this
      fd.append("myfile", files);
      this.addData.ICO_Logo = config.url+files.name
      axios.post('/ico/updatafile',fd)
        .then(function (response) {
         console.log(response.data)
          if(response.data.status == 200){
              that.stast = "上传成功"
          }
        })
        .catch(function (error) {
        });
    },
    onupdataFile(e){
      var files = document.getElementById('FileToUpload').files[0]
      var fd = new FormData();
      var that = this
      fd.append("myfile", files);
      this.addData.ICO_Wpaper = config.url+files.name
      axios.post('/ico/updatafile',fd)
        .then(function (response) {
          console.log(response.data)
          if(response.data.status == 200){
            that.stast = "上传成功"
          }
        })
        .catch(function (error) {
        });
    }

  },
  created (){
    this.info()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel{
    margin: 10px;
  }
  .btn{
    border: solid 1px #c3c3c3;
  }
  .panel-heading{
    text-align: left;
  }
  .add{
    display: inline-block;
    float: right;
    cursor:pointer;
  }
  .change{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(52, 52, 52, 0.5);
    top:0;
    overflow: auto;

  }
  .checkbox{
    height: 20px;

  }
  .change form{
    background-color: #fff;
    margin: 80px 20px;
    padding: 20px 10px;
  }
  .close{
    position: absolute;
    right: 20px;
    cursor:pointer;
    border: 1px solid #f5f5f5;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-top: 10px;
  }
  .set{
    cursor:pointer;
  }
  label{
    float: left;
  }
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
table{

}
table th{
  text-align: center;
}
  table td{
    border: 1px solid #1b6d85;
  }
</style>
