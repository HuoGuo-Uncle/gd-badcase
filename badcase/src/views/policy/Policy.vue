<template>
  <div>
      <el-form :inline="true" status-icon :model="params" ref="formInline" class="demo-form-inline">
          <el-row>
            <el-col :span="14">
              <h3>底库数据审核</h3>
            </el-col>
            <el-col :span="10">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">底库数据查询</el-button>
                    <el-button type="primary" @click="onUplode">上传底库数据</el-button>
                </el-form-item>
            </el-col>
            
         </el-row>  
         
      </el-form>
      <!-- 表格 -->
      <el-table
        v-loading="tableLoading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        v-if="tableData.length > 0"
        :data="tableData"
        style="width: 100%"
        stripe
        border
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
            <el-table-column prop="order_number" label="任务ID" >
            </el-table-column>
            <el-table-column prop="update_time" label="类型" sortable>
            </el-table-column>
            <el-table-column prop="create_time" label="描述" >
            </el-table-column>
            <el-table-column prop="order_fapiao_title" label="状态" sortable>
            </el-table-column>
            <el-table-column prop="order_price" label="提交人" >
            </el-table-column>
            <el-table-column prop="trade_no" label="审核人" sortable>
            </el-table-column>
            <el-table-column prop="is_send" label="上传时间" >
            </el-table-column>
            <el-table-column prop="consignee_addr" label="审核时间" >
            </el-table-column>
            <el-table-column  prop="trade_no" label="描述结果" >
            </el-table-column>
            <el-table-column  prop="trade_no" label="备注" >
            </el-table-column>
            
      </el-table>
     
       <!-- 分页区域 -->
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.pagenum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="params.pagesize"
        layout=" prev, pager, next, sizes,jumper"
        :total="total">
      </el-pagination>
    <!-- 对话框查看 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>文本对比</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
</div>
    
</template>
<script>
export default {
    data(){
        return {
          // form
            // formInline: {
            //   user: '',
            //   region: ''
            // },
            // 对话框
            dialogVisibles:false,
            dialogVisible:false,
            tableLoading:false,
            params:{
              query :'',
              pagesize:10,
              pagenum :1,
              order_price:'',
              trade_no:'',
              is_send:'',
              order_fapiao_title:'',

            },
            // 表格
            tableData: [],
            // 分页
            total:0,
            
        }
    }, 
    created(){
        this.getOrderList()
    },
    methods:{
        // 查询
        onSubmit() {
          this.getOrderList();
        },
       
        // 查询接口
        async getOrderList () {
            // const loading = this.$loading({
            //   lock: true,
            // });
            this.tableLoading = true;
          try {
              const {data: res} = await this.$http.get('orders', {
                  params: this.params
              });
              if(res.meta.status == 200){
                console.log(res.meta.status)
                this.tableLoading = false;
                this.tableData = res.data.goods;
                this.total=res.data.total;
              }else{
                return this.$message.error('获取信息失败！')
              }
          } catch (error) {
            this.$log('error', error);
          } 
          finally {
            //  loading.close();
            this.tableLoading = false;
          }
            
        },
        // 分页
         handleSizeChange (newSize) {
            this.params.pagesize = newSize;
            this.getOrderList();
        },
        handleCurrentChange (newSize) {
            this.params.pagenum = newSize;
            this.getOrderList();
        },
        // 上传
        onUplode(){
            this.$router.push({name:'baseUplode'})
        },
        // 表格
        formatter(row, column) {
          return row.address;
        },
        handleClick(row){
          // console.log(row);
          this.dialogVisible=true;
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        
    }
}
</script>
<style>
.el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner{
  width: 350px;
}
.pagination{
  text-align: right;
}
</style>