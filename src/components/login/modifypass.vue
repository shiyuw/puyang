<template>
  <div>
                <div class="aside-title">
                    找回密码
                </div>
                <div class="form-item">
                    <div class="step">身份验证</div>
                    <div class="step step-active">修改密码</div>
                </div>
                <div class="form-item form-item-input">
                    <div class="label-name">新密码</div>
                    <input type="password" placeholder="8-16位数字和字母,区分大小写" @focus="pwdActive = false" v-model="password" />
                    <div class="tips" v-if="pwdActive">
                        密码格式不正确
                    </div>
                </div>
                <div class="form-item form-item-input">
                    <div class="label-name">确认密码</div>
                    <input type="password" placeholder="请确认密码" v-model="password2" @focus="warnActive=false"/>
                    <div class="warning" v-if="warnActive">两次密码不相同</div>
                </div>
                <div class="form-item" style="margin-top:38px;">
                    <el-button class='btn' @click="confirm">确定</el-button>
                </div>
                <div class="form-item">
                    <el-button class="btn-nobg" @click="goBack">返回登录</el-button>
                </div>
    </div>
    
</template>

<script>
import {updatePassword} from "@/api/api"
import {testFormat} from '@/mixin/testFormat'
export default {
    data(){
        return{
            password:'',
            password2:'',

            
        }
    },
    methods:{
        
        confirm(){
            let result = this.testFormat("password",this.password);
            if(!result){
                this.pwdActive = true;
                return;
            }
            if(this.password!=this.password2){
                this.warnActive = true;
                return
            }
            let password = this.password;
            let mobilecode = localStorage.getItem('mobileCode');
            let mobile = localStorage.getItem('mobile');
            let appInfoId = 10;
            if(password&&mobilecode&&mobile){
                let data = {
                    "mobilePhone":mobile,
                    "captcha":mobilecode,
                    "password":password,
                    "appInfoId":appInfoId

                }
                updatePassword(data).then(res=>{
                    this.$message("修改密码成功")
                    this.$router.replace('/login/success')
                }).catch(()=>{
                    this.$message("修改密码失败")
                })
            }
            
            
        },
        
        goBack(){
            this.$router.replace('/')
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
            .tips{
                position:absolute;
                color:red;
                left:76px;
                top:0;
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
            .warning{
                position: absolute;
                bottom:43px;
                left: 77px;
                color:red;
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