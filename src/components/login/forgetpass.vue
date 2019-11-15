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
                    <input type="text" @focus="mobileActive = false"   placeholder="请输入账号" v-model="mobile" />
                    <div class="tips" v-if="mobileActive">
                        手机号码格式不正确
                    </div>
                </div>
                <div class="form-item form-item-input">
                    <div class="label-name">验证码</div>
                    <input type="text" class="mobilecode" placeholder="请输入验证码" v-model="mobileCode" />
                    <el-button @click="getMobileCode" :disabled="codeActive"  class="mobilecode-btn"  :class="codeActive?'codeActive':''">获取验证码<span v-if="seconds"><br>（{{seconds}}s）</span></el-button>
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
import {getSms} from '@/api/api'
import {testFormat} from "@/mixin/testFormat"
export default {
    mixins:[testFormat],
    data(){
        return{
            mobile:'',
            mobileCode:'',
            
        }
    },
    methods:{
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
                        this.$message("已发送验证码")

                    }else{
                        let message = res.message
                        this.$message({
                            type:"warning",
                            showClose:true,
                            message:message
                        });
                    }
                    
                }).catch(()=>{
                    this.$message("获取验证码失败")
                })
            }
            if(!result){
                this.mobileActive = true;
                return
            }

            
        },
        goBack(){

            this.$router.replace('/')
        },
        goNext(){
            if(this.mobile&&this.mobileCode){
                this.$router.replace('/login/modifypass');
                localStorage.setItem('mobile',this.mobile)
                localStorage.setItem('mobileCode',this.mobileCode)
            }
            
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
            .tips{
                position:absolute;
                color:red;
                left:76px;
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