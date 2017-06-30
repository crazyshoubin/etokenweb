<template>
  <div class="col-sm-6 col-md-3">
    <div class="thumbnail">
      <img :src='message.ICO_Logo' alt="logo">
      <div class="caption">
        <h3>{{message.ICO_Name}}</h3>
        <p>日期：{{message.ICO_StartTime}}-{{message.ICO_EndTime}}</p>
        <p>代币符号：{{message.ICO_ICON}}</p>
        <p>代币总量：{{message.ICO_Total}}</p>
        <p>众酬金额：{{message.ICO_Amount}}</p>
      </div>
    </div>
  </div>
</template>
End
<script>

export default {
  name: 'n',
  props:['message'],
  data () {
    return {
    }
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
  p{
    text-align: left;
    padding: 0 10px;
  }
</style>
