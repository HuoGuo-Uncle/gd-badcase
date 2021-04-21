<template>
    <div>
      <div class="addTitle">
        <el-row>
          <el-button type="primary" @click.prevent="handleLogin('add')">添加</el-button>
        </el-row>
      </div>
      <template>
        <el-table
        v-loading="tableLoading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
        height="250"
        border
        stripe
        style="width: 100%">
         <el-table-column
          type="index"
          label="id"
          width="50">
        </el-table-column>
          <el-table-column
            prop="order_fapiao_title"
            label="网站名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="order_number"
            label="栏目">
          </el-table-column>
          <el-table-column
            prop="update_time"
            label="添加时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="trade_no"
            label="状态">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleLogin('edit',scope.row.order_id)">编辑</el-button>
            </template>
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
      </template>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
          tableLoading:false,
          tableData: [],
          params:{
                query :'',
                pagesize:10,
                pagenum :1,
                order_price:''
          },
          // 表格
          tableData: [],
          // 分页
          total:0,
        }
    },
    created(){
        this.getUserList()
    },
    methods:{
      handleLogin(type, order_id) {
        let query = {};
        if (type === 'edit') {
          query = { id:order_id };
        }
        this.$router.push({
          name: 'addWebsite',
          query: query
        })
      },
    // 请求接口
      async getUserList () {
            // const loading = this.$loading({
            //   lock: true,
            // });
            this.tableLoading = true;
            try {
              const {data: res} = await this.$http.get('orders', {
                  params: this.params
              });
              if(res.meta.status == 200){
                this.tableLoading = false;
                this.tableData = res.data.goods;
                this.total=res.data.total;
              }else{
                return this.$message.error('获取信息失败！')
              };
          } catch (error) {
            this.$log('error', error);
          } 
          finally {
            // loading.close();
            this.tableLoading = false;
          }
            
        },
        // 分页
         handleSizeChange (newSize) {
            this.params.pagesize = newSize;
            this.getUserList();
        },
        handleCurrentChange (newSize) {
            this.params.pagenum = newSize;
            this.getUserList();
        },
      
    }
}
</script>
<style scoped>
.addTitle{
  margin-bottom: 20px;
}
.pagination{
  text-align: right;
}
</style>