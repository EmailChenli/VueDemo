<template>
      <el-main>
        <div>
             <el-table :data="job" style="width: 100%">
                <el-table-column prop="job_id" label="职位ID" width="180"></el-table-column>
                <el-table-column prop="job_name" label="职位名" width="180"></el-table-column>
                <el-table-column prop="job_msg" label="职位简介" width="180"></el-table-column>
                <el-table-column prop="department_id" label="部门ID" width="180"></el-table-column>
                <el-table-column prop="createTime" label="创建日期" width="180"></el-table-column>
                <el-table-column prop="modifyTime" label="修改日期" width="180"></el-table-column>
                <el-table-column label="操作" width="180">
                  <!-- @click="departmentbyid" -->
                  <el-button size="mini" type="primary"  >修改</el-button>
                  <el-button size="mini" type="danger"  >删除</el-button>
                </el-table-column>
            </el-table>
        </div>
      </el-main>
</template>

<style>
.el-header {
  background-color: #c1cbd8;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name: 'Job'
}
</script>
