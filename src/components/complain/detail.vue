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
            detailTitle:'宁夏银川：优化营商环境投诉举报机制为企业投诉打开方便之门',
            detailDate:'2019-11-08 16:24:49',
            detailContent:'为深化“放管服”改革，切实解决企业、群众最关心、最现实、最紧迫的突出营商环境问题，宁夏银川市建立起优化营商环境投诉举报机制，今后办事群众面对企业开办和注销、施工许可证办理、水电气暖接入、不动产登记办理、纳税、跨境贸易和投资便利化等涉及优化营商环境等方面的问题，可以通过热线电话、微信公众号、电子邮件等多种方式进行投诉举记者从银川市审批服务管理局获悉，近年来，银川市围绕深化“放管服”改革、优化营商环境，做出了一系列重大决策部署和创新实践，改革成效明显。但一些长期困扰市场主体的痛点、难点、堵点问题依然存在，企业反映较为集中的一点就是相关政策很好，但大多针对的是普遍性问题，而企业在实际运营中面临的问题千差万别，很多时候需要灵活变通、更切合实际的处理方式。“如果办事人员怕担责任，往往会不敢办、拖着办，这就会造成企业经常抱怨的‘门好进了，脸好看了，但事情还是不好办’。”银川市审批服务管理局局长井胜说，为此，银川市建立了优化营商环境投诉举报机制。针对企业、群众有关优化营商环境工作的咨询、投诉、意见与建议，银川市将通过政务服务热线、微信公众号、电子邮件等多种方式统一受理，并第一时间分发至各承办单位，承办单位在1个工作日内受理并回访、5个工作日内办结，办理结果同步向诉求人、政务服务热线平台、银川市营商环境建设服务中心反馈。同时，政务服务热线平台将进行电话回访及满意度评价，并将结果抄送优化营商环境指挥部办公室，总办理时限不超过6个工作日。',
            replyContent:'XXXXXXXX企业您好： 您的问题解决方法是这是一段正文这是一段正文这是一段正文这是一段正文这是一段正文这是一正文这是一段正文这是一段正文这是一段正文这是一段正文这是一正文这是一段正文这是一段正文这是一段正文这是一段正文这是一正文这是一段正文这是一段正文这是一段正文这是一段正文这是一正文这是一段正文这是一段正文这是一段正文这是一段正文这是一正文这是一段正文这是一段正文这是一段正文这是一段正文这是一正文这是一段正文这是一段正文这是一段正文这是一段正文这是一正文这是一段正文这是一段正文这是一段正文这是一段正文这是一',
            department:'濮阳县企业投诉政府办公室',
            replyDate:'2019-11-08 16:24:49',
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