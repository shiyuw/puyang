<template>
  <div>
                <div class="aside-title">
                    用户注册
                </div>
                
                <div class="form-item form-item-input">
                    <div class="label-name">单位名称</div>
                    <input type="text" placeholder="请输入单位名称" v-model="companyName" />
                </div>
                <div class="form-item form-item-input">
                    
                    <div class="label-name">手机号码</div>
                    <input type="text"  @focus="mobileActive = false"  placeholder="请输入手机号" v-model="mobile" />
                    <div class="tips" v-if="mobileActive">
                        手机号码格式不正确
                    </div>
                </div>
                <div class="form-item form-item-input">
                    <div class="label-name">验证码</div>
                    <input type="text" class="mobilecode" placeholder="请输入验证码" v-model="mobileCode" />
                    <el-button @click="getMobileCode" :disabled="codeActive"  class="mobilecode-btn"  :class="codeActive?'codeActive':''">获取验证码<span v-if="seconds"><br>（{{seconds}}s）</span></el-button>
                </div>
               <div class="form-item form-item-input">
                    <div class="label-name">密码</div>
                    <input type="password" @focus="pwdActive = false" placeholder="8-16位数字和字母区分大小写" v-model="password" />
                    <div class="tips" v-if="pwdActive">
                        密码格式不正确
                    </div>
                </div>
                <div class="form-item" style="line-height:14px;">
                    <input type="checkbox" name="agree" v-model="contract">我已阅读并同意<a href='/'>用户使用协议</a>
                </div>
                <div class="form-item" style="margin-top:38px;">
                    <el-button class='btn' :disabled="!contract" @click="register">提交注册</el-button>
                </div>
                <div class="form-item">
                    <el-button class="btn-nobg" @click="goBack">登录</el-button>
                </div>
    </div>
    
</template>
<script>
import {register,getSms} from "@/api/api"
export default {
    data(){
        return{
            companyName:'',
            mobile:'',
            mobileCode:'',
            password:'',
            contract:false,
            // mobileFormatActive:false,
            // disableActive:false
            codeActive:false,
            seconds:0,
            pwdActive: false,
            mobileActive:false
        }
    },
    methods:{
        register(){
            let companyName = this.companyName;
            let mobile = this.mobile;
            let mobilecode = this.mobileCode;
            let password = this.password;
            let appInfoId = 10;
            let result = this.testFormat('password',password);
            if(!companyName||!mobile||!mobilecode){
                return
            }
            if(!result){
                this.pwdActive = true;
                return 
            }
            result = this.testFormat('mobileNum',mobile);
            if(!result){
                this.mobileActive = true;
                return 
            }

            let data = {
                // 'name':companyName
                'mobile':mobile,
                'captcha':mobilecode,
                'appInfoId':appInfoId,
                'password':password
            }
            register(data).then(res=>{
                if(res.success){
                    // this.$message("注册成功")
                    this.$message({
                        type:'success',
                        message:'注册成功',
                        showClose:true
                    })
                    this.$router.replace('/login/success')
                }else{
                    let message = res.message;
                    this.$message({
                        type:'warning',
                        message:message,
                        showClose:true
                    });
                }
                
            }).catch(()=>{
                this.$message("注册失败")
            })
        },
        testFormat(type,str){
            let pattern = /[0-9|a-z|A-Z]{6,12}/;
            let patternMap = {
                'password':/^[0-9|a-z|A-Z]{6,12}$/,
                'mobileNum':/^1[0-9]{10}$/,
            }
            return patternMap[type].test(str);
        },
        goBack(){
            this.$router.replace('/')
        },
        getMobileCode(){
            let mobilePhone = this.mobile;
            let auto_id = 10;
            let status = 1;
            
            let result = this.testFormat('mobileNum',mobilePhone);
            if(result&&mobilePhone){
                let data ={
                    "mobilePhone":mobilePhone,
                    "auto_id":auto_id,
                    "status":status
                }
                getSms(data).then(res=>{
                    if(res.success){
                        this.seconds = 30;
                        this.codeActive = true
                        let timer = setInterval(()=>{
                            if(this.seconds>0){

                                this.seconds -=1;
                            }else{
                                if(timer){
                                    clearInterval(timer)
                                }
                                this.seconds = 0;
                                this.codeActive = false;
                            }
                        },1000)
                        this.$message({
                            type:'success',
                            message:'已发送验证码',
                            showClose:true
                        })
                    }else{
                        let message = res.message
                        this.$message({
                            type:'warning',
                            message:message,
                            showClose:true
                        })
                    }
                    
                }).catch(()=>{
                    this.$message("获取验证码失败")
                })
            }//if结束
            if(!result){
                this.mobileActive = true
            }
            
        }
    },
    
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
            margin-bottom:38px;
        }
    .form-item{
            position:relative;
            overflow: hidden;
            width:100%;
            text-align: left;
            
            input{
                margin-left:10px;
                margin-top:28px;
                // border:none;
                border:1px solid #ccc;
                border-radius: 0;
                box-shadow: 0;
                font-size:16px;
                height:38px;
                width:280px;
                line-height:30px;
                color:rgba(179,179,179,1)

                
            }
            input[type='checkbox']{
                height:14px;
                width:14px;
            }
            a{
                text-decoration: none;
            }
            .tips{
                position: absolute;
                color:red;
                left:75px;
                top:0;
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
            .codeActive{
                background-color: #666;
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