<template>
    <el-container>
        <el-main>
            <!-- <div class="bg"></div> -->
            <div class="complain-wrapper">
                <div class="usernav">
                    <div class="user-img"><img width='35' height='35' src="@/assets/images/logo.png" alt="user"></div>
                    <div class="user-info">用户：{{username}}</div>
                    <div class="user-signout" @click="signout"><img src="@/assets/images/close.png" alt=""></div>
                </div>
                <div class="complain-header">
                    <img src="@/assets/images/logo.png" alt="logo">
                    濮阳县企业投诉平台
                </div>
                <div class="complain-body">
                    <router-view />
                </div>
            </div>
           
        </el-main>
    </el-container>
    
</template>
<script>
export default {
    data(){
        return{
           username:'匿名用户'
        }

    
    },
    methods:{
        signout(){
            sessionStorage.clear();
            this.$router.replace('/')
        }

        
    },
    mounted(){
        let user = sessionStorage.getItem('user');
        if(user){
            this.username = user;
        }
    }
}
</script>
<style lang="less" scoped>
.el-main {
    font-family:'Microsoft YaHei';
    background: url('../../assets/images/bg.png') no-repeat center center;
    background-size: cover;
    // overflow: hidden;
    height:100vh;
    overflow-x: hidden;

    
    width:100vw;
   
    z-index:1;
    position: relative;
    &:before{
        content: "";
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        background: inherit;
        filter: blur(4px);
        z-index: 2;
    }
    .complain-wrapper{
        position: absolute;
        width:62.5%;
        top:3.58%;
        left:18.75%;
        opacity: 1;
        z-index: 11;
        .usernav{
            position: absolute;
            top:0;
            // right:-500px;
            left:106%;
            line-height: 35px;
            width:246px;
            color:#1A1A1A;
            div{
                display: inline-block;
            }
            .user-img{
                height:35px;
                width: 35px;
                border-radius: 50%;
                img{
                    border-radius: 50%;
                }
            }
            .user-info{
                margin-left:15px;
                font-size:14px;
                line-height: 35px;
            }
            .user-signout{
                margin-left:56px;
                display: inline-block;
                img{
                    margin:5px auto;
                    cursor: pointer;
                }
            }
        }
        .complain-header{
            height:81px;
            line-height: 81px;
            
            // width:271px;
            // height:31px;
            margin:0 auto;
            font-size:31px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(26,26,26,1);
        }
        .complain-body{
            width:1200px;
            height:auto;
            background:rgba(255,255,255,1);
            border-radius:10px 10px 0px 0px;
            margin:0 auto;
            margin-top:57px;
            padding-bottom:173px;
            
        }
        
        
    }
    
    
}
</style>
