<template>
    <el-container>
        <el-main>
            <div class="wrapper">
                <div class="page-header">
                    <img src="@/assets/images/logo.png" alt="logo">
                    濮阳县企业投诉平台
                </div>
                <div class="page-info">
                    <div class="page-info-title">
                        投诉须知
                    </div>
                    <div class="page-info-body">
                        <p>为进一步优化提升营商环境，根据上级有关政策要求和县委营商环境建设委员会部署，县委县政府督查局（县委营商环境办)设立投诉举报平台，
                        受理企业针对全县营商环境的问题线索或意见建议。我们将对收到的问题线索和意见建议进行汇总整理，督促有关乡镇、部门处理，重大、典型问题线索直接派员督查，
                        并向企业反馈处理结果。 </p>
                        <p>
                        本平台暂不受理公民个人诉求事项。公民个人诉求类事项、意见建议等，请通过人民网地方领导留言板等其他渠道反映。
                        </p>
                    </div>
                    <el-button @click="confirm">我已知晓，开始投诉</el-button>
                </div>
                
            </div>
           
        </el-main>
    </el-container>
    
</template>
<script>
export default {
    data(){
        return{
           
        }

    
    },
    methods:{
        confirm(){
            this.$router.replace('/complain/');
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
    .wrapper{
        position: absolute;
        width:800px;
        top:150px;
        left:560px;
        .page-header{
            height:81px;
            line-height: 81px;
            
            // width:271px;
            // height:31px;
            margin:0 auto;
            
            font-size:30px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(26,26,26,1);
        }
        .page-info{
            position: relative;
            margin-top:114px;
            padding-top:50px;
            width:795px;
            height:460px;
            color:rgba(51,51,51,1);
            background:rgba(255,255,255,1);
            box-shadow:6px 6px 12px 0px rgba(0, 0, 0, 0.1);
            border-radius:6px;
            .page-info-title{
                font-size:30px;
                font-weight:400;
                line-height:30px;
                
            }
            .page-info-body{
                margin-top:31px;
                font-size:16px;
                line-height:30px;
                padding:0 68px;
                p{
                    text-indent: 2em;
                    text-align: left;
                    color:rgba(51,51,51,1);
                }
            }
            button{
                width:360px;
                height:52px;
                margin:0 auto;
                margin-top:58px;
                color:#fff;
                background: linear-gradient(to right, #FF8800 0%,#FF4C05 100%);
            }
            
        }
    }
    
}
</style>
