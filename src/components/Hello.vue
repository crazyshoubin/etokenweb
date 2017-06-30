<template>
  <div>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->


    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="../assets/5902d48101985.jpg"alt="">
        <div class="carousel-caption">

        </div>
      </div>
      <div class="item">
        <img src="../assets/5902d48101985.jpg" alt="">
        <div class="carousel-caption">

        </div>
      </div>
      <div class="item">
        <img src="../assets/5902d48101985.jpg" alt="">
        <div class="carousel-caption">

        </div>
      </div>
    </div>
  </div>
    <div class="container-fluid">
      <lyric v-for="item in items" :message="item"></lyric>
    </div>


  </div>

</template>

<script>
  import Lyric from './index/icoinfo.vue'
  import axios from 'axios'
export default {
  name: 'hello',
  components: {
    Lyric
  },
  data () {
    return {
      items:'',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created (){
    var that = this;
    axios.get('/ico/allinfo')
      .then(function (response) {
        that.items = response.data.data
      })
      .catch(function (error) {
      });
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
</style>
