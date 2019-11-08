<template>
    <el-container>
        <el-main>
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
           username:'135XXXX'
        }

    
    },
    methods:{
        signout(){
            this.$router.replace('/')
        }

        
    }
}
</script>
<style lang="less" scoped>
.el-main {
    background: url('../../assets/images/bg.png') no-repeat center center;
    background-size: cover;
    height:1080px;
    width:100%;
    opacity: 0.9;
    position: relative;
    font-family:Microsoft YaHei;
    overflow: hidden;
    .complain-wrapper{
        position: absolute;
        width:1200px;
        top:43px;
        left:360px;
        .usernav{
            position: absolute;
            top:-22px;
            right:-302px;
            line-height: 35px;
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
            height:900px;
            background:rgba(255,255,255,1);
            border-radius:10px 10px 0px 0px;
            margin:0 auto;
            margin-top:57px;
        }
        
        
    }
    
    
}
</style>
