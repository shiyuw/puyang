<template>
    <div>
        <div class="top-icon clearfix" @click="goBack">
            <img src="@/assets/images/back.png" alt="返回">返回
        </div>
        <div class="detail-body">
            <div class="detail-title">{{detailTitle}}</div>
            <div class="detail-date">{{detailDate}}</div>
            <div class="detail-content">{{detailContent}}</div>
            <div class="detail-add"><img v-for="(url,index) in imgUrl" :key="url" :src="url" :alt="'图'+index"></div>
        </div>
        <div class="detail-reply">
            <div class="reply-title">回复</div>
            <div class="reply-content">
                {{replyContent}}
                </div>
            <div class="signature">
                <div class="reply-department">
                    {{department}}
                </div>
                <div class="reply-date">
                    {{replyDate}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            detailTitle:'',
            detailDate:'',
            detailContent:'',
            replyContent:'',
            department:'',
            replyDate:'',
            imgUrl:[]
        }
    },
    methods:{
        goBack(){
            this.$router.replace('/complain/mycomplains')
        }
    },
    mounted(){
        let datastr = sessionStorage.getItem('content');
        if(datastr){
            let data = JSON.parse(datastr);
            this.detailTitle = data.title;
            this.detailContent = data.content;
            this.detailDate =  data.complainsTime;
            if(data.pictureUrl){
                this.imgUrl = data.pictureUrl.split(',')
            }
            if(data.reply){
                this.replyContent = data.reply.replayContent;
                this.replyDate = data.reply.replayTime;
                this.department = '濮阳县企业投诉政府办公室';

            }
            
        }
    }
}
</script>
<style lang="less" scoped>
    .top-icon{
        font-size:14px;
        font-family:'Microsoft YaHei';
        font-weight:400;
        color:rgba(26,26,26,1);
        line-height:16px;
        padding-top:30px;
        padding-left:33px;
        // float:left;
        text-align: left;
        cursor: pointer;
    }
    .detail-body{
        // overflow: hidden;
        font-family:'Microsoft YaHei';
        font-weight:400;
        width: 1000px;
        border-bottom:1px solid #D9D9D9;
        margin:0 auto;
        height:100%;
        
        .detail-title{
            text-align: center;
            font-size:24px;
            color:rgba(26,26,26,1);
            
            margin-top:100px;
        }
        .detail-date{
            font-size:14px;
            color:#666;
            text-align: center;
            margin:0 auto;
            margin-top: 26px;
            margin-bottom:49px;
        }
        .detail-content{
            font-size:16px;
            color:#1a1a1a;
            text-indent: 2em;
        }
        .detail-add{
            margin:0 auto;
            margin-top:38px;
            margin-bottom:60px;
        }
    }
    .detail-reply{
        font-family:'Microsoft YaHei';
        width:1000px;
        margin:0 auto;
        .reply-title{
            text-align: left;
            padding-top:26px;
            padding-left:21px;
            padding-bottom:44px;
            font-size:24px;
            
            font-weight:bold;
            color:rgba(255,77,5,1);
            line-height:46px;
        }
        .reply-content{
            font-size:16px;
            color:#144B8F;
        }
        .signature{
            font-size:14px;
            color:#666;
            text-align: right;
            .reply-department{
                
                margin-top:45px;
            }
            .reply-date{
                
                margin-top:14px;
                margin-bottom: 173px;
                
            }
        }
    }
</style>