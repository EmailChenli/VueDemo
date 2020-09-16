<template>
 
<!-- 表格内容 -->
 
<el-table :data="packData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
 
     <el-table-column type="selection" width="55"></el-table-column>
 
     <el-table-column prop="PackingId" label="包装编号" width="120">
 
     </el-table-column>
 
    <el-table-column prop="PackingName" label="包装名称" width="120">
 
    </el-table-column>
 
    <el-table-column prop="PackingPrice" label="包装价格" width="120">
 
    </el-table-column>
 
    <el-table-column prop="PackingImage" label="包装图片">
 
    </el-table-column>
 
    <el-table-column label="操作" width="180">
 
    <template slot-scope="scope">
 
       <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
 
       <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
 
    </template>
 
   </el-table-column>
</el-table>
</template>
 
 
 
<script>
export default {
     name: 'pack',
     data() {
        return { 
            packData:[],
           // delVisible：false,//删除提示弹框的状态
            msg:"",//记录每一条的信息，便于取id
            delarr:[],//存放删除的数据
           // multipleSelection：[],//多选的数
        }
    }
}
// 确定删除
</script>