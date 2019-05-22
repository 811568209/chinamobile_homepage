<template>
    <div id="login">
        <div>
            账号:
            <input type="text" placeholder="input username" v-model="userIfo.username" >
            <br>
            密码:
            <input type="password" placeholder="input password" v-model="userIfo.password" >
            <button @click="login()" style="" class="btlog">登陆</button>
            <span  v-if="showHide==1">{{userIfo.msg+'请先注册'}}</span>
            <br>
            <br>
            <button @click="register()" >注册</button>
            <span  v-if="showHide==2">{{registe.msg}}</span>
            <br>
            <br>
            <button @click="enter" class="ent">游客进入</button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                userIfo:{id:-1, username: "", password: "", userinput: "",msg:""},
                url:'2444f679p9.wicp.vip:37469',//zks333.f3322.net，2444f679p9.wicp.vip:37469 , 51271f1.cpolar.io
                loginSecces:false,
                registe:{id:-1, username: "", password: "", userinput: "",msg:""},
                showHide:0
            }
        },
        mounted: function () {

        },
        methods: {
            login:function () {
//                var url=`http://${this.url}/htdocs/htdocs/my%20project/project%202/data/login/accesTOLogin.php`
////                var url=`${this.url}/htdocs/htdocs/my%20project/project%202/data/login/accesTOLogin.php?${this.username}&${this.password}`
//                var data={username:this.userIfo.username,password:this.userIfo.password}
//                this.$http.post(url,data,{headers:{},emulateJSON:true,withCredentials:true}).then((resp)=>{
//                    console.log(resp)
//                    this.showHide=1
//                    if(resp.body.msg=="用户名或密码错误！"){
//                        this.loginSecces=false
//                        this.userIfo.msg=resp.body.msg
//                    }else{
//                        this.userIfo=resp.body
//                        this.loginSecces=true
//                        this.$router.push("/index")
//                    }
//                })

                $.ajax({
                    type: "post",
                    url: `http://${this.url}/htdocs/htdocs/my%20project/project%202/data/login/accesTOLogin.php?username=${this.userIfo.username}&password=${this.userIfo.password}`,
                    dataType: "jsonp",
                }).then((resp) => {
                    console.log(resp)
                    this.showHide = 1
                    if (resp.msg == "用户名或密码错误！") {
                        this.loginSecces = false
                        this.userIfo.msg = resp.msg
                    } else {
                        this.userIfo = resp
                        this.loginSecces = true
                        this.$router.push("/index")
                    }
                })
            },
            register:function () {
                $.ajax({
                    type:"post",
                    url:`http://${this.url}/htdocs/htdocs/my%20project/project%202/data/register/accessTOregister.php?username=${this.userIfo.username}&password=${this.userIfo.password}`,
                    dataType:"jsonp",
//                    data:{username:this.userIfo.username,password:this.userIfo.password}
                }).then((data)=>{
                    this.showHide=2
                    console.log(data)
                    this.registe=data;
                    if(data.msg=="添加成功"){
                        this.$router.push("/index")
                    }
                })
            },
            enter:function () {
                this.$router.push("/index")
            }
        },
        computed: {
            name: function () {
                return
            }
        },
        watch: {//前面属性名称:函数
            dataofname: function () {
            }
        }
    }
</script>


<style scoped>
    #login div:first-child{width: 300px;height: 200px;text-align: left;margin: 0 auto}
    #login div:first-child input{width: 300px}
    #login div:first-child button{width: 70px;text-align: center}
    #login div:first-child .ent{width: 90px;text-align: center}
    #login div:first-child span{color: red}


</style>
