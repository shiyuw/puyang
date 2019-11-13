<template>
    <div>
        <div class="com-body-header">
            <el-button style="background:rgba(63,162,255,1);">我要投诉</el-button>
            <el-button style="background:rgba(255,77,5,1); margin-left:80px;" @click="mycomplains">我的投诉</el-button>
        </div>
        <div class="com-content">
            <div class="form-item">
                <div class="label-name">企业名称：</div>
                <input type="text" v-model="companyName">
            </div>
            <div class="form-item">
                <div class="label-name">姓名：</div>
                <input type="text" v-model="userName">
            </div>
            <div class="form-item">
                <div class="label-name">手机号码：</div>
                <input type="text" v-model="mobile">
            </div>
            <div class="form-item">
                <div class="label-name">标题：</div>
                <input type="text" v-model="title">
            </div>
            <div class="form-item">
                <div class="label-name valign">内容:</div>
                <textarea style="width:500px;margin-left:10px;"  v-model="content" ></textarea>
            </div>
            <div class="form-item">
                <div class="label-name valign">附件:</div>
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    
                    :show-file-list="false"
                    :multiple="true"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div class="form-item">
                <el-button>提交</el-button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            companyName:'',
            userName:'',
            mobile:'',
            title:'',
            content:'',
            imageUrl:'',
            files:[]

        }

    },
    methods:{
        handleAvatarSuccess(){

        },
        beforeAvatarUpload(file){
            let isPic = file.type =="image/jpeg"||file.type=="image/png"
            // console.log(file.type)
            if(file&&isPic){
                this.files.push(file)
            }
            return false;
        },
        upload(){
            
            let companyName = this.companyName;
            let userName = this.userName;
            if(!companyName||!userName){return}
            let mobile = this.mobile;
            let title = this.title;
            let content = this.content;
            let files = this.files;
            let data = new FormData();
            data.append('company',companyName);
            data.append('user',userName);
            data.append('mobilePhone',mobile);
            data.append('title',title);
            data.append('content',content);
            if(files&&files.length>0){

                for(let i=0;i<files.length;i++){
                    data.append('files',files[i]);
    
                }
            }else{
                data.append('files',null)
            }
            //upload(data).then(res=>{}).catch(()=>{})
            // reset every variables
             
        },
        mycomplains(){
            this.$router.replace('/complain/mycomplains')
        }
    },
    
    
}
</script>

<style lang="less">
    .com-body-header{
        position: relative;
        width: 100%;
        height: 114px;
        border-bottom:1px solid #ccc;
        padding-top:40px;
        button{
            border-radius:4px;
            height:50px;
            width:180px;
            color:#fff;
            span{
                color:#fff;
            }
        }
    &::after{
        content:'';
        height:0;
        width: 0;
        top:134px;
        left:458px;
        border-bottom:10px solid #ccc;
        border-top:10px solid transparent;
        border-left:10px solid transparent;
        border-right:10px solid transparent;
        position: absolute;

    }
    
    
}
.com-content{
        width:600px;
        height:auto;
        margin:0 auto;
        margin-top:40px;
        
        .form-item{
            margin-bottom:20px;
            line-height: 27px;
            .label-name{
                width:70px;
                text-align: right;
                display: inline-block;
                overflow: hidden;
            }
            
            input{
                margin-left:10px;
                border:1px solid #DEDEDE;;
                border-radius: 0;
                box-shadow: 0;
                font-size:16px;
                height:38px;
                width:280px;
                line-height:30px;
                width:500px;
                // color:#DEDEDE;
            }
            textarea{
                width: 500px;
                height: 200px;
                resize: none;
                border:1px solid #DEDEDE;
                
                
            }
            button{
                width: 360px;
                height: 52px;
                border:none;
                background:linear-gradient(-90deg,rgba(255,76,5,1) 0%,rgba(255,136,0,1) 100%);
                // padding:17px;
                text-align: center;
                color:#fff;
                line-height: 31px;
            }

        }
        .valign{
                // line-height: 0;
                // position: absolute;
                vertical-align: top;
                // top:0;
                // left:0;
                
        }
        
}

.avatar-uploader{
    width:500px;
    display: inline-block;
    margin-left:10px;
    .el-upload {
        float:left;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        height:100px;
        width:100px;
  }
  .el-upload:hover {
    border-color: #409EFF;
  }
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
.avatar {
    width: 100px;
    height: 100px;
    display: block;
    border:1px solid #dedede;
  }

</style>