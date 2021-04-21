<template>
    <div>
        <h2>人脸排重</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="选择类型">
                <el-select v-model="form.region" placeholder="人脸数据">
                <el-option label="人脸数据" value="shanghai"></el-option>
                <el-option label="声纹数据" value="beijing"></el-option>
                <el-option label="TV logo数据" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-col :span="7">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="一级分类">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="政治有害" value="shanghai"></el-option>
                            <el-option label="其他" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    
                </el-col>
                <el-col :span="7">
                    <el-form-item label="二级分类">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="政治有害" value="shanghai"></el-option>
                            <el-option label="其他" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="分类"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="一级分类"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="二级分类">
            </el-table-column>
            <el-table-column
            prop="address"
            label="详情">
            </el-table-column>
             <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
          form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
        }
    },
    created(){
        
    },
    methods:{
     
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