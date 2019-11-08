<template>
    <div>
        <div class="com-body-header">
            <el-button style="background:rgba(63,162,255,1);">我要投诉</el-button>
            <el-button style="background:rgba(255,77,5,1); margin-left:80px;">我的投诉</el-button>

        </div>
        
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
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
        }
    &::after{
        content:'';
        height:0;
        width: 0;
        top:134px;
        right:458px;
        border-bottom:10px solid #ccc;
        border-top:10px solid transparent;
        border-left:10px solid transparent;
        border-right:10px solid transparent;
        position: absolute;

    }
    .com-content{
        width:550px;
        height:auto;
        margin:0 auto;
        margin-top:40px;
        .label-name{
            width:70px;
            text-align: right;
        }
        input{

        }
    }
}

</style>