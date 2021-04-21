<template>
    <div class="login-wrap">
        <el-form 
        class="login-from"
        label-position="top" 
        label-width="80px" 
        :rules="loginFormRules"
        :model="formdata">
        <h2>登录政策库采集系统</h2>
            <el-form-item label="" prop="username">
                <el-input v-model="formdata.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
                <el-input v-model="formdata.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="" prop="captcha_key">
                <el-input
                
                placeholder="验证码"
                prefix-icon="lj-icon-yanzhengma"
                    autocomplete="off"
                autocapitalize="off"
                    spellcheck="false"
                maxlength="4"
                @keyup.enter.native="handleLogin"
                style="float: left; width: 122px;"
                ></el-input>
                <div class="captcha_code">
                    <img src="" ref="code" @click="changeCode">
                </div>
            </el-form-item>
             <el-button
             @click.prevent="handleLogin()"
              class="login-btn" type="primary">登录</el-button>

        </el-form>
    </div>
</template>

<script>

import Axios from 'axios'

export default {
    data(){  
        return{
            formdata:{
                username:'',
                password:'',
                captcha_key: "",
                captcha_code:''
            },
        // 表单验证
            loginFormRules: {
                username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { message: '格式不对', trigger: 'blur',pattern: /[^a-zA-Z]*ad/}
                ],
                password: [
                { required: true, message: '请输入用户密码', trigger: 'blur' },
                { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                ]
            },
        }
    },
    mounted() {
    //绑定事件
     window.addEventListener('keydown',this.keyDown);
    },
    methods:{
        keyDown(e){
        //如果是回车则执行登录方法
            if(e.keyCode == 13){
                this.handleLogin();
            }
        },
        // 登录请求
       async handleLogin(){
            const res = Axios.post('/login',this.formdata).then( res => {
                console.log(res.data.meta.status)
                // 不成功
                // 1.提示消息
                if (res.data.meta.status === 200){
                    // 登陆成功
                    sessionStorage.setItem('token',res.data.data.token)
                    this.$message.success('登录成功');
                    this.$router.push({name:'home'})

                }else{
                    this.$message.warning('登录失败');
                }
            }

            )
        },
        // 验证码
      changeCode(){
          console.log();
      }
    },
    destroyed(){
        window.removeEventListener('keydown',this.keyDown,false);
    }
}
</script>
<style>
.login-wrap{
    height: 100%;
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-wrap .login-from {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
}
.login-wrap .login-btn{
    width: 100%;
}
</style>