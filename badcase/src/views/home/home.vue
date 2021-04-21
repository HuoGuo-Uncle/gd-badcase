<template>
   <el-container class="container">
        <el-header class="header">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content">
                        <h1>广电平台</h1>
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="middle">
                        <h3></h3>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content bg-purple">
                        <!-- <a href="#" class="loginout" @click.prevent="handleSignout()">退出</a>
                        <a href="#" class="loginout" @click.prevent="handleLogin()">登录</a> -->
                        用户名
                    </div>
                    
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="260px" class="aside">
                <el-menu 
                    :router="true"
                    :unique-opened="true"
                    :default-active="activeIndex"
                >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span> 工具</span>
                    </template>
                    <el-menu-item index="policy">
                        <i class="el-icon-success"></i>
                        <span>底库数据</span>
                    </el-menu-item>
                    <el-menu-item index="website">
                        <i class="el-icon-success"></i>
                        <span>badcase反馈</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>文档</span>
                    </template>
                    <el-menu-item index="files">
                        <i class="el-icon-location"></i>
                        <span>底库数据搜集文档</span>
                    </el-menu-item>
                    <el-menu-item index="files">
                        <i class="el-icon-location"></i>
                        <span>badcase说明文档</span>
                    </el-menu-item>
                </el-submenu>
                
                </el-menu>
            </el-aside>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    // beforeCreate(){
    //     // 获取token
    //     const token = sessionStorage.getItem('token')
    //     console.log(token)
    //     if(!token){
    //         this.$router.push({name:'login'})
    //     }
    // },
    data(){
        return{
            activeIndex: 'policy'
        }
    } ,   
    methods:{
        // handleSignout(){
        //     sessionStorage.clear()
        //     this.$message.success('退出成功')
        //     this.$router.push({name:'login'})
        // },
        // handleLogin(){
        //     this.$router.push('/login')
        // }
    }
}
</script>
<style>
.container{
    height: 100%;
}
.header{
    background-color: #b3c0d1;
}
.aside{
    background-color: #fff;
    margin: 24px 0 0 24px;
     box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    /* border: 1px solid #EBEEF5; */
    /* border-right:0; */
    padding-right: 8px;
}
.el-menu{
    border: 0;
}
.main{
    background-color: #fff;
    margin: 24px 0 0px 0;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    /* border: 1px solid #EBEEF5; */
    /* border-left:0; */
}
/* 头部样式 */
.middle{
    text-align: center;
}
.loginout{
    line-height: 100%;
}
.bg-purple{
    padding: 25px 0;
}
</style>