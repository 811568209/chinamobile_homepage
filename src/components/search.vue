<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        f5_3:55,
    }
  },
    mounted:function () {
        this.$http.get("http://zks333.f3322.net/htdocs/htdocs/1.php").then(function(data){
            console.log(data.body)
        });
        console.log(this.$route.params.data)
        this.msg=this.$route.params.data
    },
    methods: {

    },
    watch:{
      msg:function () {

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
</style>
