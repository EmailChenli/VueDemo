< <template>
    <el-table
      :data="packData"
      style="width: 100%">
      <el-table-column
        name="id"
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        name="date"
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        name="name"
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        name="address"
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
             <el-button size="mini" type="danger"  @click="employeedelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
import { employee } from '../api/login'
import { employeedelete } from '../api/login'
export default {
        name: 'pack',
        data() {
            return {
                  packData:[
                      {id:'',
                      data:'',
                      name:'',
                      address:''}
                  ]//主题数据
            }
        },
        created() {
            this.employee()
        },
       methods: {
        employee() {
            employee().then((res) => {
              //console.log(res);
              this.packData = res.data;
              //console.log(res.data);
            });
        },
        employeedelete(){
            employeedelete(this.packData.id).then((res)=>{
               console.log(this.packData.id)
               //console.log(res.data)
               this.packData = res.data;
            })
        }
    }
}
</script>
