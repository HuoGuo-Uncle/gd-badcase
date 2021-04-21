<template>
    <div v-if="hileFile">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="网站名称" prop="order_fapiao_title">
                <el-input v-model="ruleForm.order_fapiao_title "></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="采集深度" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择采集深度">
                <el-option label="1" value="shanghai"></el-option>
                <el-option label="2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="采集频率" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择采集频率">
                <el-option label="低" value="shanghai"></el-option>
                <el-option label="高" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="正文" prop="order_fapiao_title">
                <el-input v-model="ruleForm.order_fapiao_title"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-input v-model="ruleForm.order_number"></el-input>
            </el-form-item>
            <el-form-item label="发布机构">
                <el-input v-model="ruleForm.order_number"></el-input>
            </el-form-item>
            <el-form-item label="时间">
                <el-input v-model="ruleForm.update_time"></el-input>
            </el-form-item>
            <el-form-item label="结果页">
                <el-input v-model="ruleForm.order_number"></el-input>
            </el-form-item>
            <el-form-item label="抓取页">
                <el-input v-model="ruleForm.order_number"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="trade_no">
                <el-select v-model="ruleForm.trade_no" placeholder="请选择状态">
                <el-option label="正常" value="shanghai"></el-option>
                <el-option label="不正常" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="resetForm()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hileFile:true,
            addFlag :true,
            ruleForm:{
                order_fapiao_title:'',
                order_number:'',
                update_time:'',
                trade_no:'',
                name:'',
                region:''
            },
             rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
             }
        }
    },
    mounted (){
        //this.$route.query.order_id存在 为修改
        if (this.$route.query.id){
          this.addFlag = false;
          this.getDetail(this.$route.query.id);
        }else{
          this.addFlag = true;
        }
    },
    methods:{
        async getDetail(order_id){
          let params = {
                query :'',
                pagesize:10,
                pagenum :1,
          };
          try{
            let res = await this.$http.get('orders',{
              params : params
            });
            if(res.meta.status == 200){
                res.data.data.goods.forEach(item=>{
                  if(item.order_id===order_id){
                    this.ruleForm= item;
                  }
                })
            }else{
                 return this.$message.error('获取信息失败！')
            }
          } catch (error) {
            //this.$log('error', error);
          } 
          finally {
            // loading.close();
            //this.tableLoading = false;
          }
        },
        //  点击提交
        onSubmit() {
            console.log(this.ruleForm);
           this.$router.push({
            name: 'website',
            query:''
          })
        },
        //   取消
        resetForm() {
           this.$router.push({
            name: 'website',
            query:''
          })
            // this.$refs[ruleForm].validate((valid) => {
            // if (valid) {
            //     alert('submit!');
            // } else {
            //     console.log('error submit!!');
            //     return false;
            // }
            // });
        },
        // resetForm(ruleForm) {
        //     this.$refs[ruleForm].resetFields();
        // }
    }
}
</script>
<style scoped>

</style>