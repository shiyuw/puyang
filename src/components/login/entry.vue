<template>
    <el-container>
        
        <el-main>
            <!-- <img width="1393" src="@/assets/images/bg.png" alt="背景图"> -->
        </el-main>
        <el-aside width="510px">
            <div class="aside-wrapper">
                <div class="aside-header">
                    <img src="@/assets/images/logo.png">
                    濮阳县企业投诉平台
                </div>
                <router-view/>
                
            </div>
        </el-aside>
    </el-container>
    
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            IsActive1:false,
            IsActive2:false,
        }

    
    },
    methods:{
        login(){
            // api to login
        },
        
    }
}
</script>
<style lang="less" scoped>
    .el-container{
        height:1080px;
    }
    .el-main{
        padding:0;
        width:1400px !important;
        background: url('../../assets/images/bg.png');
        background-size: cover;
        background-repeat: no-repeat;
        // height:100%;
    }
    .el-aside{
        height:100%;
    }
    .aside-wrapper{
        margin:0 auto;
        width:360px;
        .aside-header,.aside-title{
            margin-top:110px;
        }
        .aside-header{
            height:81px;
            line-height: 81px;
            
            // width:271px;
            // height:31px;
            font-size:30px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(26,26,26,1);
        }
        .aside-title{
            // width:120px;
            height:40px;
            font-size:30px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:40px;
            text-align: left;
        }
        .form-item-input{
            border-bottom:1px solid rgba(222,222,222,1);
            i{
                font-size:16px;
            }
        }
        .form-item{
            position:relative;
            overflow: hidden;
            width:100%;
            text-align: left;
            
            input{
                margin-left:10px;
                margin-top:28px;
                border:none;
                border-radius: 0;
                box-shadow: 0;
                font-size:15px;
                height:30px;
                width:90%;
                line-height:30px;
            }
            button{
                height: 52px;
                border-radius: 0;
                font-size:18px;
                width:100%;
                border:none;
                margin-top:10px;
            }
            .login{
                color:#fff;
                background: linear-gradient(to right, #FF8800 0%,#FF4C05 100%);
            }
            .register{
                
                color:rgba(102,102,102,1)
            }
            .tips{
                float:right;

            }
        }
        .active{
            border-bottom:1px solid rgba(255,77,5,1);
            color:rgba(255,77,5,1);
        }
    }
</style>
