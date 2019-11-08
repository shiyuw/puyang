<template>
  <div>
                <div class="aside-title">
                    找回密码
                </div>
                <div class="form-item">
                    <div class="step step-active">身份验证</div>
                    <div class="step">修改密码</div>
                </div>
                <div class="form-item form-item-input">
                    <div class="label-name">手机号码</div>
                    <input type="text" placeholder="请输入账号" v-model="mobile" />
                </div>
                <div class="form-item form-item-input">
                    <div class="label-name">验证码</div>
                    <input type="text" class="mobilecode" placeholder="请输入验证码" v-model="mobileCode" />
                    <el-button @click="getMobileCode" class="mobilecode-btn">获取验证码</el-button>
                </div>
               
                <div class="form-item" style="margin-top:38px;">
                    <el-button class='btn' @click="goNext">下一步</el-button>
                </div>
                <div class="form-item">
                    <el-button class="btn-nobg" @click="goBack">返回登录</el-button>
                </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            mobile:'',
            mobileCode:''
        }
    },
    methods:{
        getMobileCode(){

        },
        goBack(){
            this.$router.replace('/')
        },
        goNext(){
            this.$router.replace('/login/modifypass')
        }
    }
}
</script>

<style lang="less" scoped>

    .aside-title{
            // width:120px;
            height:40px;
            font-size:30px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:40px;
            text-align: left;
            margin-top:110px;
            margin-bottom:66px;
        }
    .form-item{
            position:relative;
            overflow: hidden;
            width:100%;
            text-align: left;
            .step{
                width:180px;
                text-align: center;
                border-bottom: 2px solid #ccc;
                padding-bottom:8px;
                display: inline-block;
            }
            .step-active{
                border-bottom: 2px solid #FF4D05;
                color:#FF4D05;
            }
            input{
                margin-left:10px;
                margin-top:28px;
                // border:none;
                border:1px solid #ccc;
                border-radius: 0;
                box-shadow: 0;
                font-size:15px;
                height:38px;
                width:280px;
                line-height:30px;

                
            }

            .label-name{
                width:68px;
                font-size:16px;
                text-align: right;
                line-height: 40px;
                display: inline-block;
            }
            .mobilecode{
                width:160px;
            }
            .mobilecode-btn{
                width:110px;
                margin-left:10px;
                display: inline-block;
                background-color: #FF4D05;
                color:#fff;
                border:none;
            }
            .btn,.btn-nobg{
                width:100%;
                border:none;
            }
            .btn{
                color:#fff;
                background: linear-gradient(to right, #FF8800 0%,#FF4C05 100%);

            }
            .btn-nobg{
                
                color:rgba(102,102,102,1);
                margin-top:10px;
            }
    }
</style>