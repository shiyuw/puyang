<template>
  <div>
                <div class="aside-title">
                    投诉登录
                </div>
                <div class="form-item form-item-input" :class="{'active':IsActive1}">
                    <i class="el-icon-user" style="font-size:16px;line-height:38px;"></i>
                    <input type="text" placeholder="请输入账号"  @focus="IsActive1=true" @blur="IsActive1=false" v-model="username" />
                </div>
                <div class="form-item form-item-input" :class="{'active':IsActive2}">
                    <i class="el-icon-lock" style="font-size:16px;line-height:38px;"></i>
                    <input type="password" placeholder="请输入密码" @focus="IsActive2=true" @blur="IsActive2=false" v-model="password" />
                </div>
                <div class="form-item">
                    <div class="tips"><el-link type="info" href="/login/resetpass">忘记密码？</el-link></div>
                </div>
                <div class="form-item  clearfix">
                    <el-button class='btn'>登录</el-button>
                </div>
                <div class="form-item">
                    <el-button class="btn-nobg" @click="goRegister">注册</el-button>
                </div>
    </div>
    
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
        goRegister(){
            this.$router.replace('/login/register')
        }
        
    }
}
</script>
<style lang="less" scoped>
    .el-main{
        padding:0;
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
            margin-bottom:38px;
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
        }
        .form-item{
            position:relative;
            overflow: hidden;
            width:100%;
            text-align: left;
            // line-height: 50%;
            input{
                margin-left:10px;
                margin-top:28px;
                border:none;
                border-radius: 0;
                box-shadow: 0;
                font-size:16px;
                height:38px;
                width:90%;
                line-height:30px;
                color:rgba(179,179,179,1)
            }
            button{
                height: 52px;
                border-radius: 0;
                font-size:18px;
                width:100%;
                border:none;
                margin-top:10px;
            }
            .btn{
                color:#fff;
                background: linear-gradient(to right, #FF8800 0%,#FF4C05 100%);
            }
            .btn-nobg{
                
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
