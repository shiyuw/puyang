<template>
    <div class="info">
        <div class="success-icon">
            <!-- el-icon-success -->
            <i class="el-icon-circle-check"></i>
            <!-- <i class="el-icon-success"></i> -->
        </div>
        <div class="info-message info-item">
            修改成功
        </div>
        <div class="info-item">
            即将<a href="/">跳转</a>返回登录页({{seconds}}s)
        </div>
    </div>
</template>
<script>
export default {
   data(){
       return{
           seconds:3
       }
   },
    methods:{
        timer(){
            let that = this;
            let timerCount = setInterval(function(){
                that.seconds -=1;
                if(that.seconds<=0){
                    that.$router.replace('/');
                    timerCount?clearInterval(timerCount):'';
                }
            },1000);
        }
    },
    mounted(){
        this.timer();
    }
}
</script>
<style lang="less" scoped>

    .info{
        margin-top:180px;
        .success-icon{
            background-color: rgba(25,202,127,0.8);
            color:#fff;
            width: 64px;
            height: 64px;
            line-height: 64px;
            border-radius: 50%;
            font-size:64px;
            font-weight: 400;
            text-align: center;
            margin:0 auto;
        }
        .info-item{
            width:160px;
            margin:0 auto;
            margin-top:58px;
            font-family:Microsoft YaHei;
        }
        .info-message{
            height:24px;
            font-size:24px;
            
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:40px;
            
        }
        .info-jump{
            font-size:16px;
            a{
                text-decoration: none;
            }
        }
    }
</style>
