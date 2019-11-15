<template>
    <div>
        <div class="com-body-header1">
            <el-button style="background:rgba(63,162,255,1);" @click="tocomplain">我要投诉</el-button>
            <el-button style="background:rgba(255,77,5,1); margin-left:80px;">我的投诉</el-button>

        </div>
        <el-table
            :data="tableData"
            border
            style="width:95%;margin:0 auto;margin-top:3.7%;border-color:#D9D9D9;text-align:center;">
            <el-table-column
            type="index"
            label="序号"
            width="86"
            align="center"
            :index="indexMethod">
            </el-table-column>
            <el-table-column
            prop="complaintsTime"
            align="center"
            label="日期"
            width="267">
            </el-table-column>
            <el-table-column
            prop="title"
            align="center"
            label="标题">
            </el-table-column>
            <el-table-column
            prop="replyStatus"
            width="190"
            align="center"
            label="状态">
                <template slot-scope="scope">
                    <span :class="scope.row.replyStatus==0?'notActive':'active'" @click="checkResult(scope.row)">{{scope.row.replyStatus?'已回复':'未回复'}}</span>
                </template>
            </el-table-column>
        </el-table>
        <div class="page-footer">
            <div class="page-footer-content">

                记录总数：<span>{{totalItems}}</span>总页数：<span>{{totalPages}}</span>当前页：<span>{{curPageNum}}</span>
                <el-button style="margin-left:30px;" @click="goPage(curPageNum,-(curPageNum)+1)">首页</el-button>
                <el-button @click="goPage(curPageNum,-1)">上页</el-button>
                <el-button class="highlight-btn" @click="goPage(curPageNum,1)">下页</el-button>
                <input type="text" value="1" v-model="goPageNum">
                <el-button class="highlight-btn" @click="goPage">GO</el-button>
            </div>

        </div>
    </div>
    
</template>

<script>
import {selectInfo} from '@/api/api'
export default {
    data(){
        return{
            tableData:[
                {
                complaintsTime: '2016-05-02',
                title: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                tag: '家',
                state:'未回复'
                }, {
                complaintsTime: '2016-05-04',
                title: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333,
                tag: '公司',
                state:'未回复'
                }, {
                complaintsTime: '2016-05-01',
                title: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333,
                tag: '家',
                state:'未回复'
                }, {
                complaintsTime: '2016-05-03',
                title: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333,
                tag: '公司',
                state:'已回复'
            }
            ],
            goPageNum:1,
            totalItems:24,
            totalPages:2,
            curPageNum:1,
            userId:null,
        }

    },
    methods:{
         indexMethod(index) {
            return (index +1);
        },
        tocomplain(){
            this.$router.replace('/complain/')
        },
        checkResult(row){
            // console.log(row)
            let dataStr = JSON.stringify(row);
            sessionStorage.setItem('currentPage',this.curPageNum);
            sessionStorage.setItem('content',dataStr);
            this.$router.replace('/complain/detail');
        },
        goPage(current,num){

            if(arguments.length>1){
                let max = this.totalPages
                let tempnum = Math.min(parseInt(current)+parseInt(num),max);
                this.curPageNum = Math.max(1,tempnum);
            }else{
                
                
                this.curPageNum = this.goPageNum;
                
            }

            
        },
        loadContent(pagenum){
            let pageNo = pagenum;
            let pageSize = 10;
            let userId = this.userId;
            let data ={
                "pageNo":pageNo,
                "pageSize":pageSize,
                "userId":userId
                
            }
            selectInfo(data).then(res=>{
                if(res.success){
                    this.tableData = res.data
                }else{
                    let message = res.message;
                    this.$message({
                        type:'warning',
                        message:message,
                        showClose:true
                    });
                }
            }).catch(()=>{
                this.$message({
                    type:'warning',
                    message:"获取数据失败",
                    showClose:true
                });
            })
        }
        
        
    },//methods结束
    mounted(){
            // 再详情页退回时保证退回到之前访问的页面
            let curPageNum = sessionStorage.getItem('currentPage');
            if(curPageNum){
                this.curPageNum = parseInt(curPageNum);
            }else{
                let userId = sessionStorage.getItem('userId');
                if(userId){
                    this.userId = userId;
                }
                this.loadContent(this.curPageNum);
            }
            
        },
        watch:{
            curPageNum(val){
                this.loadContent(val);
            }
        }
}
</script>

<style lang="less">
    .com-body-header1{
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
        left:720px;
        border-bottom:10px solid #ccc;
        border-top:10px solid transparent;
        border-left:10px solid transparent;
        border-right:10px solid transparent;
        position: absolute;

    }
    
}
.page-footer{
    margin-top:41px;
    .page-footer-content{
        float:right;
        margin-right:48px;
        &>span{
            color:#FF4D05;
            display: inline-block;
            margin-right:10px;
        }
        button{
            height:30px;
            width: 54px;
            display: inline-block;
            margin-left:10px;
            font-size:12px;
            padding:9px 14px 9px 12px;
            span{
                color:#4D4D4D;
            }
            
        }

        .highlight-btn{
            // style="background-color:#FF4D05;border:none;color:#fff;"
            background-color: #FF4D05;
            border:none;
            &>span{
                border:none;color:#fff;
            }
        }
        input{
            margin-left:10px;
            
            border:1px solid #FF4D05;
            border-radius: 0;
            // box-shadow: 0;
            font-size:16px;
            height:30px;
            width:66px;
            text-align: center;
            line-height:30px;
            color:#1A1A1A;
        }
    }
}
.el-table {
    th{
        background-color: #F6F6F6;
        &>.cell{
            text-align: center;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(26,26,26,1);
        }
    
    }
    .notActive{
        color:#0AAF0A;
    }
    .active{
        color:#C93931;
    }
}

</style>